import { useState, useEffect, useDeferredValue, useMemo, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Search, Globe2, Loader2, ArrowRight } from "lucide-react";

import { useTranslate } from "../../../context/LanguageContext";
import { supabase } from "../../../lib/supabase";
import { getCategoryStyle, getSmartSynonyms } from "../../../utils/categories";
import { readCache, writeCache, cacheKey, CACHE_VERSION } from "../../../utils/text";
import { STORE_CACHE_TTL } from "../../../utils/storeCache";
import { useProductIntelligence } from "../../../utils/ProductIntelligence";

import { SearchSuggestionsView, type CategoryDisplayItem } from "./SearchSuggestionsView";
import { SearchResultsView, type SuggestedCategoryFallback } from "./SearchResultsView";
import { SearchInputField } from "./SearchInputField";
import { MOCK_GLOBAL_CATEGORIES, type MockCategory } from "./SearchMocks";
import type { SearchProductResult } from "./SearchResultCard";

export interface FloatingSearchProps {
  currentStoreId: string;
  storeCurrency: string;
  activeStoreSlug?: string;
  theme?: "light" | "dark";
  embeddedMode?: boolean;
  autoFocusInput?: boolean;
  onSearchActive?: () => void;
  onCloseEmbedded?: () => void;
  onScrollContainer?: (e: React.UIEvent<HTMLDivElement>) => void;
}

function fastSanitize(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u2018\u2019`']/g, "")
    .replace(/ç/gi, "c")
    .toLowerCase()
    .replace(/[-_]/g, " ")
    .replace(/[^\w\s]/g, " ")
    .trim();
}

// Mapas estáticos pré-computados fora do ciclo do componente
const KEYWORD_TO_SEARCH_QUERY = new Map<string, string>();
const MOCK_BY_SEARCH_QUERY = new Map<string, MockCategory>();
const INDEXED_PREFIX_KEYWORDS: Array<{ keyword: string; searchQuery: string }> = [];

for (let i = 0; i < MOCK_GLOBAL_CATEGORIES.length; i++) {
  const cat = MOCK_GLOBAL_CATEGORIES[i];
  const sq = cat.searchQuery.toLowerCase();
  const slug = cat.slug.toLowerCase();

  MOCK_BY_SEARCH_QUERY.set(sq, cat);
  MOCK_BY_SEARCH_QUERY.set(slug, cat);
  KEYWORD_TO_SEARCH_QUERY.set(sq, sq);
  KEYWORD_TO_SEARCH_QUERY.set(slug, sq);
  INDEXED_PREFIX_KEYWORDS.push({ keyword: sq, searchQuery: sq });

  for (let j = 0; j < cat.keywords.length; j++) {
    const cleanKw = fastSanitize(cat.keywords[j]);
    if (cleanKw && !KEYWORD_TO_SEARCH_QUERY.has(cleanKw)) {
      KEYWORD_TO_SEARCH_QUERY.set(cleanKw, sq);
      INDEXED_PREFIX_KEYWORDS.push({ keyword: cleanKw, searchQuery: sq });
    }
  }
}

const RELATED_CATEGORIES_GRAPH: Record<string, string[]> = {
  baby: ["kids", "clothing", "toys"],
  kids: ["baby", "toys", "books", "clothing"],
  toys: ["kids", "baby"],
  clothing: ["accessories", "sports"],
  sports: ["clothing", "accessories"],
  electronics: ["accessories", "design"],
  design: ["electronics", "art", "3d"],
  art: ["design", "3d", "books"],
  "3d": ["design", "art", "tools"],
  bakery: ["groceries"],
  groceries: ["bakery"],
  beauty: ["accessories"],
  accessories: ["clothing", "beauty"],
  automotive: ["tools"],
  tools: ["automotive", "home"],
  home: ["tools", "art"],
  books: ["kids", "design"],
  pets: ["groceries", "home"],
};

interface ProductMetaCacheItem {
  searchQuery: string | null;
  searchIndex: string;
  nameSanitized: string;
  catSanitized: string;
}
const PRODUCT_META_CACHE = new WeakMap<object, ProductMetaCacheItem>();

export function FloatingSearch({
  currentStoreId,
  storeCurrency,
  activeStoreSlug,
  theme = "dark",
  embeddedMode = false,
  autoFocusInput = false,
  onSearchActive,
  onCloseEmbedded,
  onScrollContainer,
}: FloatingSearchProps) {
  const { t: baseT } = useTranslate();
  const t = useMemo(
    () => baseT as unknown as (key: string, opts?: Record<string, unknown>) => string,
    [baseT]
  );

  const { enrichProductsIntelligently } = useProductIntelligence();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const isDark = theme === "dark";

  const isProductsRoute =
    location.pathname.includes("/products") || location.pathname.includes("/produtos");

  const [isOpen, setIsOpen] = useState<boolean>(embeddedMode);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const deferredTerm = useDeferredValue(searchTerm);

  const [showGlobalCats, setShowGlobalCats] = useState<boolean>(false);
  const [executedGlobalKeys, setExecutedGlobalKeys] = useState<Record<string, boolean>>({});

  const containerRef = useRef<HTMLDivElement | null>(null);

  // 1. Auto-Focus exclusivo Desktop (Não dispara teclado virtual no celular)
  useEffect(() => {
    if (!autoFocusInput) return;

    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop) return;

    let timerId: NodeJS.Timeout | null = null;

    const focusInput = () => {
      const inputEl = containerRef.current?.querySelector<HTMLInputElement>(
        "input[type='text'], input[type='search'], input:not([type])"
      );

      if (inputEl && document.activeElement !== inputEl) {
        inputEl.focus({ preventScroll: true });
        const len = inputEl.value.length;
        if (len > 0) {
          inputEl.setSelectionRange(len, len);
        }
        return true;
      }
      return false;
    };

    const frameId = requestAnimationFrame(() => {
      if (!focusInput()) {
        timerId = setTimeout(focusInput, 100);
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (timerId) clearTimeout(timerId);
    };
  }, [autoFocusInput]);

  useEffect(() => {
    if (embeddedMode) setIsOpen(true);
  }, [embeddedMode]);

  useEffect(() => {
    if (searchTerm && onSearchActive) {
      onSearchActive();
    }
  }, [searchTerm, onSearchActive]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (searchTerm) {
          setSearchTerm("");
        } else if (embeddedMode && onCloseEmbedded) {
          onCloseEmbedded();
        } else {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchTerm, embeddedMode, onCloseEmbedded]);

  // 2. Escuta passiva do catálogo local (Sem chamadas adicionais de rede)
  const [cacheVersion, setCacheVersion] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (
        event?.query?.queryKey?.[0] === "catalog-products-full" &&
        event.type === "updated"
      ) {
        setCacheVersion((v) => v + 1);
      }
    });
    return () => unsubscribe();
  }, [queryClient]);

  // 3. Catálogo local sem consultar API externa
  const rawProducts = useMemo(() => {
    if (!isOpen || !isProductsRoute) return [];

    const stateProducts = (location.state as { initialProducts?: SearchProductResult[] })?.initialProducts;
    if (Array.isArray(stateProducts) && stateProducts.length > 0) return stateProducts;

    const liveCatalog = queryClient.getQueryData<SearchProductResult[]>([
      "catalog-products-full",
      currentStoreId,
      storeCurrency,
    ]);
    if (Array.isArray(liveCatalog) && liveCatalog.length > 0) return liveCatalog;

    const targetKey = cacheKey("store_catalog", CACHE_VERSION, currentStoreId);
    const cached = readCache<SearchProductResult[]>(targetKey, activeStoreSlug);
    if (Array.isArray(cached) && cached.length > 0) return cached;

    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isProductsRoute, location.state, queryClient, currentStoreId, storeCurrency, activeStoreSlug, cacheVersion]);

  // 4. Indexação com WeakMap leve em memória
  const localProducts = useMemo(() => {
    if (!rawProducts || rawProducts.length === 0) return [];
    const enriched = enrichProductsIntelligently(rawProducts) as SearchProductResult[];

    for (let i = 0; i < enriched.length; i++) {
      const p = enriched[i];
      if (!PRODUCT_META_CACHE.has(p)) {
        const nameClean = fastSanitize(p.name || "");
        const rawAny = p as unknown as Record<string, unknown>;
        const meta = rawAny.metadata as Record<string, string> | undefined;
        const catClean = fastSanitize((rawAny.category as string) || "");
        const subCatClean = fastSanitize(meta?.subCategory || "");
        const parentCatClean = fastSanitize(meta?.parentCategory || "");

        let matchedQuery: string | null = null;
        if (subCatClean && KEYWORD_TO_SEARCH_QUERY.has(subCatClean)) {
          matchedQuery = KEYWORD_TO_SEARCH_QUERY.get(subCatClean)!;
        } else if (parentCatClean && KEYWORD_TO_SEARCH_QUERY.has(parentCatClean)) {
          matchedQuery = KEYWORD_TO_SEARCH_QUERY.get(parentCatClean)!;
        } else if (catClean && KEYWORD_TO_SEARCH_QUERY.has(catClean)) {
          matchedQuery = KEYWORD_TO_SEARCH_QUERY.get(catClean)!;
        } else {
          const tokens = nameClean.split(" ");
          for (let j = 0; j < tokens.length; j++) {
            const token = tokens[j];
            if (token && KEYWORD_TO_SEARCH_QUERY.has(token)) {
              matchedQuery = KEYWORD_TO_SEARCH_QUERY.get(token)!;
              break;
            }
          }
        }

        PRODUCT_META_CACHE.set(p, {
          searchQuery: matchedQuery,
          searchIndex: `${nameClean} ${catClean} ${subCatClean} ${parentCatClean}`,
          nameSanitized: nameClean,
          catSanitized: catClean,
        });
      }
    }

    return enriched;
  }, [rawProducts, enrichProductsIntelligently]);

  // 5. Resolução Antecipada por Prefixo Inteligente ("clothi" -> "clothing")
  const resolvedQueryFromInput = useMemo(() => {
    const clean = fastSanitize(deferredTerm);
    if (!clean || clean.length < 3) return null;

    if (KEYWORD_TO_SEARCH_QUERY.has(clean)) {
      return KEYWORD_TO_SEARCH_QUERY.get(clean)!;
    }

    const tokens = clean.split(" ");
    for (let i = 0; i < tokens.length; i++) {
      const tkn = tokens[i];
      if (tkn.length >= 3 && KEYWORD_TO_SEARCH_QUERY.has(tkn)) {
        return KEYWORD_TO_SEARCH_QUERY.get(tkn)!;
      }
    }

    const primaryToken = tokens[0];
    if (primaryToken.length >= 3) {
      for (let i = 0; i < INDEXED_PREFIX_KEYWORDS.length; i++) {
        const item = INDEXED_PREFIX_KEYWORDS[i];
        if (item.keyword.startsWith(primaryToken) || primaryToken.startsWith(item.keyword)) {
          return item.searchQuery;
        }
      }
    }

    for (let i = 0; i < MOCK_GLOBAL_CATEGORIES.length; i++) {
      const mock = MOCK_GLOBAL_CATEGORIES[i];
      const translated = fastSanitize(t(mock.nameKey, { defaultValue: "" }));
      if (translated && (translated.startsWith(primaryToken) || primaryToken.startsWith(translated))) {
        return mock.searchQuery;
      }
    }

    return null;
  }, [deferredTerm, t]);

  const activeCanonicalKey = useMemo(() => {
    return resolvedQueryFromInput || fastSanitize(deferredTerm);
  }, [resolvedQueryFromInput, deferredTerm]);

  // 6. Categoria de Fallback
  const suggestedFallbackCategory = useMemo((): SuggestedCategoryFallback | null => {
    if (!deferredTerm) return null;
    const directQuery = resolvedQueryFromInput;

    if (directQuery) {
      const relatedList = RELATED_CATEGORIES_GRAPH[directQuery] || [];
      if (relatedList.length > 0 && MOCK_BY_SEARCH_QUERY.has(relatedList[0])) {
        const mock = MOCK_BY_SEARCH_QUERY.get(relatedList[0])!;
        return {
          searchQuery: relatedList[0],
          displayName: t(mock.nameKey, { defaultValue: mock.searchQuery }),
          emoji: mock.emoji,
        };
      }
    }

    const clean = fastSanitize(deferredTerm);
    for (let i = 0; i < MOCK_GLOBAL_CATEGORIES.length; i++) {
      const mock = MOCK_GLOBAL_CATEGORIES[i];
      const sq = mock.searchQuery.toLowerCase();
      const hasMatch = mock.keywords.some((kw) => {
        const cKw = fastSanitize(kw);
        return cKw.length >= 3 && (cKw.startsWith(clean) || clean.startsWith(cKw));
      });

      if (hasMatch) {
        return {
          searchQuery: sq,
          displayName: t(mock.nameKey, { defaultValue: mock.searchQuery }),
          emoji: mock.emoji,
        };
      }
    }

    return null;
  }, [deferredTerm, resolvedQueryFromInput, t]);

  // 7. Categorias Locais
  const storeCategories = useMemo((): CategoryDisplayItem[] => {
    if (!localProducts || localProducts.length === 0) return [];

    const queryMap = new Map<string, {
      mock: MockCategory;
      displayName: string;
      image: string | null;
      count: number;
    }>();

    const fallbackMap = new Map<string, {
      displayName: string;
      image: string | null;
      count: number;
    }>();

    for (let i = 0; i < localProducts.length; i++) {
      const p = localProducts[i];
      const meta = PRODUCT_META_CACHE.get(p);
      const img = p.main_image || null;
      const sq = meta?.searchQuery;

      if (sq && MOCK_BY_SEARCH_QUERY.has(sq)) {
        const mock = MOCK_BY_SEARCH_QUERY.get(sq)!;
        const existing = queryMap.get(sq);

        if (!existing) {
          queryMap.set(sq, {
            mock,
            displayName: t(mock.nameKey, { defaultValue: mock.searchQuery }),
            image: img,
            count: 1,
          });
        } else {
          existing.count += 1;
          if (!existing.image && img) existing.image = img;
        }
      } else {
        const rawAny = p as unknown as Record<string, unknown>;
        const raw = ((rawAny.category as string) || "").trim();
        if (raw) {
          const cleanKey = fastSanitize(raw);
          const existing = fallbackMap.get(cleanKey);
          if (!existing) {
            fallbackMap.set(cleanKey, {
              displayName: raw.charAt(0).toUpperCase() + raw.slice(1),
              image: img,
              count: 1,
            });
          } else {
            existing.count += 1;
            if (!existing.image && img) existing.image = img;
          }
        }
      }
    }

    const mockList = Array.from(queryMap.values()).map((item) => ({
      name: item.displayName,
      searchKey: item.mock.searchQuery,
      emoji: item.mock.emoji,
      color: item.mock.color,
      image: item.image,
      count: item.count,
    }));

    const fallbackList = Array.from(fallbackMap.entries()).map(([key, item]) => {
      const style = getCategoryStyle(item.displayName);
      return {
        name: item.displayName,
        searchKey: key,
        emoji: style.emoji,
        color: style.color,
        image: item.image,
        count: item.count,
      };
    });

    return [...mockList, ...fallbackList].sort((a, b) => (b.count || 0) - (a.count || 0));
  }, [localProducts, t]);

  // 8. Categorias Globais
  const allGlobalCategories = useMemo((): CategoryDisplayItem[] => {
    return MOCK_GLOBAL_CATEGORIES.map((cat) => {
      const catSq = cat.searchQuery.toLowerCase();
      let matchImg: string | null = null;

      for (let i = 0; i < localProducts.length; i++) {
        const p = localProducts[i];
        if (PRODUCT_META_CACHE.get(p)?.searchQuery === catSq && p.main_image) {
          matchImg = p.main_image;
          break;
        }
      }

      return {
        name: t(cat.nameKey, { defaultValue: cat.searchQuery }),
        searchKey: cat.searchQuery,
        emoji: cat.emoji,
        color: cat.color,
        image: matchImg,
        count: 0,
      };
    });
  }, [localProducts, t]);

  const activeCategoriesList = showGlobalCats ? allGlobalCategories : storeCategories;

  // 9. Query de busca externa
  const smartQueryString = useMemo(() => {
    const target = activeCanonicalKey || deferredTerm.trim();
    if (target.length < 2) return "";
    const synonyms = getSmartSynonyms(target);
    return synonyms.map((w) => `name.ilike.%${w}%,category.ilike.%${w}%,description.ilike.%${w}%`).join(",");
  }, [activeCanonicalKey, deferredTerm]);

  const isGlobalExecutedForThis = Boolean(activeCanonicalKey && executedGlobalKeys[activeCanonicalKey]);

  const { data: globalProducts = [], isLoading: isLoadingGlobal } = useQuery({
    queryKey: ["search-global-products-list", activeCanonicalKey || smartQueryString],
    queryFn: async () => {
      if (!smartQueryString) return [];
      const key = cacheKey("search_global_products", CACHE_VERSION, activeCanonicalKey || smartQueryString);
      const cached = readCache<SearchProductResult[]>(key, activeStoreSlug);
      if (cached) return cached;

      const { data, error } = await supabase
        .from("products")
        .select(`id, name, price, discount_percent, main_image, store_id, stores ( slug, name )`)
        .neq("store_id", currentStoreId)
        .eq("is_active", true)
        .or(smartQueryString)
        .limit(10);

      if (error) return [];

      const finalData: SearchProductResult[] = (data || []).map((row: Record<string, unknown>) => {
        const base = Number(row.price || 0);
        const disc = Number(row.discount_percent || 0);
        return {
          id: String(row.id),
          name: String(row.name || ""),
          price: base,
          hasDiscount: disc > 0,
          originalPrice: disc > 0 ? base : null,
          finalPrice: disc > 0 ? base - base * (disc / 100) : base,
          discountPercent: disc > 0 ? disc : null,
          discount_percent: disc > 0 ? disc : null,
          main_image: row.main_image as string | null,
          stores: row.stores as SearchProductResult["stores"],
        };
      });

      writeCache(key, finalData, activeStoreSlug);
      return finalData;
    },
    enabled: isGlobalExecutedForThis && deferredTerm.trim().length >= 2 && isProductsRoute,
    staleTime: STORE_CACHE_TTL,
    gcTime: STORE_CACHE_TTL,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  // 10. Sugestões de texto otimizadas
  const activeSuggestions = useMemo(() => {
    const term = fastSanitize(deferredTerm);
    if (term.length < 2 || localProducts.length === 0) return [];

    const matches: string[] = [];
    const seen = new Set<string>();

    for (let i = 0; i < localProducts.length; i++) {
      const p = localProducts[i];
      const meta = PRODUCT_META_CACHE.get(p);
      const rawAny = p as unknown as Record<string, unknown>;
      const name = p.name ? String(p.name).trim() : "";
      const cat = rawAny.category ? String(rawAny.category).trim() : "";

      if (meta?.nameSanitized.includes(term) && !seen.has(meta.nameSanitized)) {
        seen.add(meta.nameSanitized);
        matches.push(name);
      } else if (meta?.catSanitized.includes(term) && !seen.has(meta.catSanitized)) {
        seen.add(meta.catSanitized);
        matches.push(cat);
      }

      if (matches.length >= 5) break;
    }
    return matches;
  }, [localProducts, deferredTerm]);

  // 11. Filtragem local com chave canônica
  const localResults = useMemo(() => {
    const cleanTerm = fastSanitize(deferredTerm);
    if (!cleanTerm || localProducts.length === 0) return [];

    const synonyms = getSmartSynonyms(cleanTerm).map((syn) => fastSanitize(syn));
    const targetSq = resolvedQueryFromInput;

    return localProducts.filter((p) => {
      const meta = PRODUCT_META_CACHE.get(p);
      if (!meta) return false;

      if (targetSq && meta.searchQuery === targetSq) {
        return true;
      }

      if (meta.searchIndex.includes(cleanTerm)) {
        return true;
      }

      for (let i = 0; i < synonyms.length; i++) {
        if (meta.searchIndex.includes(synonyms[i])) return true;
      }

      return false;
    });
  }, [localProducts, deferredTerm, resolvedQueryFromInput]);

  const handleNavigate = useCallback(
    (slug: string, id: string) => {
      if (embeddedMode && onCloseEmbedded) onCloseEmbedded();
      else setIsOpen(false);

      if (slug) {
        const clicked = localProducts.find((p) => p.id === id) || globalProducts.find((p) => p.id === id);
        navigate(`/${slug}/products/${id}`, {
          state: {
            fromStore: true,
            product: clicked,
            initialProducts: localProducts,
            storeCurrency,
            effectiveStoreId: currentStoreId,
          },
        });
      }
    },
    [embeddedMode, onCloseEmbedded, localProducts, globalProducts, navigate, storeCurrency, currentStoreId]
  );

  const handleTriggerApiSearch = useCallback(() => {
    if (activeCanonicalKey) {
      setExecutedGlobalKeys((prev) => ({ ...prev, [activeCanonicalKey]: true }));
    }
    if (onSearchActive) onSearchActive();
  }, [activeCanonicalKey, onSearchActive]);

  const handleSelectCategory = useCallback(
    (searchKey: string) => {
      setSearchTerm(searchKey);
      if (onSearchActive) onSearchActive();
    },
    [onSearchActive]
  );

  const handleToggleGlobal = useCallback(() => {
    setShowGlobalCats((prev) => !prev);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  const handleChangeTerm = useCallback(
    (val: string) => {
      setSearchTerm(val);
      if (val && onSearchActive) onSearchActive();
    },
    [onSearchActive]
  );

  if (!isProductsRoute) return null;

  if (!isOpen && !embeddedMode) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t("search_title", { defaultValue: "Pesquisar" })}
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-transform active:scale-90 cursor-pointer touch-manipulation border ${
          isDark
            ? "bg-[#0f0f12]/90 border-white/10 text-amber-400 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-white/95 border-black/10 text-amber-600 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        }`}
        style={{ contain: "layout paint" }}
      >
        <Search size={22} className="stroke-[2.5]" />
      </button>
    );
  }

  const shouldHideButton = isGlobalExecutedForThis || globalProducts.length > 0;
  const canShowGlobalButton = !shouldHideButton && deferredTerm.trim().length >= 2;
  const shouldShowTopLimitedBanner = canShowGlobalButton && localResults.length > 0 && localResults.length <= 3;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col h-full w-full select-none min-h-0 ${
        isDark ? "bg-transparent text-zinc-100" : "bg-white/40 text-zinc-900"
      }`}
      style={{ contain: "strict" }}
    >
      {/* Header com isolamento estático */}
      <div className={`shrink-0 border-b ${
        isDark ? "bg-black/10 border-white/[0.08]" : "bg-white/50 border-black/[0.06]"
      }`}>
        <SearchInputField
          searchTerm={searchTerm}
          isDark={isDark}
          placeholder={t("search_placeholder", { defaultValue: "O que procuras hoje?..." })}
          suggestions={activeSuggestions}
          onChangeTerm={handleChangeTerm}
          t={t}
          onSelectSuggestion={handleSelectCategory}
          onClear={handleClearSearch}
        />
      </div>

      {/* Lista com rolagem isolada */}
      <div
        onScroll={onScrollContainer}
        className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-8 py-2.5 no-scrollbar overscroll-contain touch-pan-y"
        style={{
          willChange: "scroll-position",
          contain: "layout style",
        }}
      >
        <div className="mx-auto w-full max-w-5xl">
          {!deferredTerm ? (
            <SearchSuggestionsView
              showGlobalCats={showGlobalCats}
              categories={activeCategoriesList}
              t={t}
              isDark={isDark}
              onToggleGlobal={handleToggleGlobal}
              onSelectCategory={handleSelectCategory}
            />
          ) : (
            <div className="flex flex-col gap-3.5 pb-8 sm:pb-6" style={{ contentVisibility: "auto" }}>
              {shouldShowTopLimitedBanner ? (
                <div className="w-full pt-0.5">
                  <button
                    type="button"
                    onClick={handleTriggerApiSearch}
                    className={`group relative w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-colors cursor-pointer active:scale-[0.99] touch-manipulation ${
                      isDark
                        ? "bg-white/[0.05] hover:bg-white/[0.08] border-white/10"
                        : "bg-black/[0.03] hover:bg-black/[0.06] border-black/10"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                        isDark 
                          ? "bg-amber-500/20 border-amber-500/30 text-amber-400" 
                          : "bg-amber-500/15 border-amber-500/30 text-amber-700"
                      }`}>
                        <Globe2 size={17} />
                      </div>
                      <div className="text-left truncate">
                        <p className={`text-xs sm:text-sm font-black uppercase flex items-center gap-1.5 ${
                          isDark ? "text-amber-300" : "text-amber-800"
                        }`}>
                          <span>{t("search_network_title", { defaultValue: "Buscar em outras lojas" })}</span>
                          <span className="text-[9px] sm:text-[10px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-black uppercase">
                            {t("badge_network", { defaultValue: "Rede" })}
                          </span>
                        </p>
                        <p className={`text-[10.5px] sm:text-xs truncate ${
                          isDark ? "text-zinc-300" : "text-zinc-600"
                        }`}>
                          {t("search_network_limited_desc", { defaultValue: "Poucas opções locais. Explorar mais artigos na rede parceira?" })}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-1 text-xs font-bold pl-2 shrink-0 group-hover:translate-x-0.5 transition-transform ${
                      isDark ? "text-amber-400" : "text-amber-700"
                    }`}>
                      <span className="hidden sm:inline">{t("btn_explore", { defaultValue: "Explorar" })}</span>
                      <ArrowRight size={15} />
                    </div>
                  </button>
                </div>
              ) : null}

              {isLoadingGlobal ? (
                <div className={`flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold ${
                  isDark ? "text-amber-400" : "text-amber-700"
                }`}>
                  <Loader2 size={16} className="animate-spin" />
                  <span>
                    {t("searching_network_loading", {
                      defaultValue: "Buscando em lojas parceiras...",
                    })}
                  </span>
                </div>
              ) : null}

              <SearchResultsView
                localResults={localResults}
                globalProducts={globalProducts}
                isLoadingGlobal={isLoadingGlobal}
                triggerGlobal={isGlobalExecutedForThis || globalProducts.length > 0}
                storeCurrency={storeCurrency}
                t={t}
                suggestedFallbackCategory={suggestedFallbackCategory}
                onSelectCategory={handleSelectCategory}
                onTriggerGlobal={handleTriggerApiSearch}
                onNavigateProduct={handleNavigate}
                activeStoreSlug={activeStoreSlug}
                canShowGlobalButton={canShowGlobalButton}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}