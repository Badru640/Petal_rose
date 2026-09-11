import React, { useState, useMemo, useCallback } from "react";
import { Globe, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { SearchResultCard, type SearchProductResult } from "./SearchResultCard";

export interface SuggestedCategoryFallback {
  searchQuery: string;
  displayName: string;
  emoji: string;
}

export interface SearchResultsViewProps {
  localResults: SearchProductResult[];
  globalProducts: SearchProductResult[];
  isLoadingGlobal: boolean;
  triggerGlobal: boolean;
  storeCurrency: string;
  t: (key: string, variables?: Record<string, unknown>) => string;
  suggestedFallbackCategory?: SuggestedCategoryFallback | null;
  onSelectCategory?: (searchQuery: string) => void;
  onTriggerGlobal: () => void;
  onNavigateProduct: (slug: string, id: string) => void;
  activeStoreSlug?: string;
  canShowGlobalButton?: boolean;
}

type FilterType = "all" | "local" | "global";

interface CombinedProductItem {
  product: SearchProductResult;
  isExt: boolean;
}

export const SearchResultsView = React.memo(function SearchResultsView({
  localResults,
  globalProducts,
  isLoadingGlobal,
  triggerGlobal,
  storeCurrency,
  t,
  suggestedFallbackCategory,
  onSelectCategory,
  onTriggerGlobal,
  onNavigateProduct,
  activeStoreSlug,
  canShowGlobalButton = false,
}: SearchResultsViewProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  const localLen = localResults.length;
  const globalLen = globalProducts.length;

  // Montagem sem alocações dinâmicas repetitivas
  const combinedList = useMemo((): CombinedProductItem[] => {
    if (filter === "local") {
      const out = new Array<CombinedProductItem>(localLen);
      for (let i = 0; i < localLen; i++) {
        out[i] = { product: localResults[i], isExt: false };
      }
      return out;
    }

    if (filter === "global") {
      const out = new Array<CombinedProductItem>(globalLen);
      for (let i = 0; i < globalLen; i++) {
        out[i] = { product: globalProducts[i], isExt: true };
      }
      return out;
    }

    const total = localLen + globalLen;
    const result = new Array<CombinedProductItem>(total);

    let idx = 0;
    for (let i = 0; i < localLen; i++) {
      result[idx++] = { product: localResults[i], isExt: false };
    }
    for (let i = 0; i < globalLen; i++) {
      result[idx++] = { product: globalProducts[i], isExt: true };
    }

    return result;
  }, [localResults, globalProducts, filter, localLen, globalLen]);

  const hasAnyResults = combinedList.length > 0;
  const showSegmentedFilter = localLen > 0 && globalLen > 0;
  const isCatalogAbundant = localLen > 3;

  // Handlers memoizados estáveis (Zero recriação de closures inline)
  const handleSelectAll = useCallback(() => setFilter("all"), []);
  const handleSelectLocal = useCallback(() => setFilter("local"), []);
  const handleSelectGlobal = useCallback(() => setFilter("global"), []);

  const handleFallbackClick = useCallback(() => {
    if (suggestedFallbackCategory && onSelectCategory) {
      onSelectCategory(suggestedFallbackCategory.searchQuery);
    }
  }, [suggestedFallbackCategory, onSelectCategory]);

  return (
    <div className="space-y-4 transform-gpu" style={{ contain: "layout style" }}>
      {/* Abas de segmentação */}
      {showSegmentedFilter ? (
        <div 
          className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 w-full sm:w-fit overflow-x-auto no-scrollbar touch-pan-x"
          style={{ willChange: "scroll-position" }}
        >
          <button
            type="button"
            onClick={handleSelectAll}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation active:opacity-75 ${
              filter === "all" ? "bg-white/15 text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {t("search_filter_all", { defaultValue: "Todos ({count})" }).replace(
              "{count}",
              String(localLen + globalLen)
            )}
          </button>
          <button
            type="button"
            onClick={handleSelectLocal}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation active:opacity-75 ${
              filter === "local" ? "bg-white/15 text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {t("search_filter_this_store", { defaultValue: "Nesta Loja ({count})" }).replace(
              "{count}",
              String(localLen)
            )}
          </button>
          <button
            type="button"
            onClick={handleSelectGlobal}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation active:opacity-75 ${
              filter === "global" ? "bg-amber-500/20 text-amber-300" : "text-white/50 hover:text-white"
            }`}
          >
            {t("search_filter_network", { defaultValue: "Lojas Parceiras ({count})" }).replace(
              "{count}",
              String(globalLen)
            )}
          </button>
        </div>
      ) : null}

      {/* Grid de produtos */}
      {hasAnyResults ? (
        <div className="space-y-4">
          <div 
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5"
            style={{ 
              contentVisibility: "auto", 
              containIntrinsicSize: "auto 240px" 
            }}
          >
            {combinedList.map(({ product: p, isExt }) => {
              const storeData = Array.isArray(p.stores) ? p.stores[0] : p.stores;
              const targetSlug = isExt ? storeData?.slug : activeStoreSlug;

              return (
                <SearchResultCard
                  key={`${isExt ? "e" : "l"}-${p.id}`}
                  product={p}
                  currency={storeCurrency}
                  isGlobal={isExt}
                  onClick={() => targetSlug && onNavigateProduct(targetSlug, p.id)}
                />
              );
            })}
          </div>

          {/* Rodapé opcional para catálogos ricos */}
          {canShowGlobalButton && isCatalogAbundant ? (
            <div className="pt-3 pb-4 flex justify-center px-2">
              <button
                type="button"
                onClick={onTriggerGlobal}
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-zinc-300 hover:text-amber-300 transition-colors cursor-pointer border border-white/5 active:opacity-75 touch-manipulation"
              >
                <Globe size={14} className="text-amber-400 shrink-0 pointer-events-none" />
                <span className="truncate pointer-events-none">
                  {t("search_network_footer_hint", { defaultValue: "Procurar mais opções em outras lojas da rede" })}
                </span>
                <ArrowRight size={13} className="text-zinc-500 transition-transform [@media(hover:hover)]:group-hover:translate-x-0.5 shrink-0 pointer-events-none" />
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        /* Estado Vazio */
        <div className="rounded-xl py-6 px-4 text-center bg-white/5 text-white/80 space-y-4 max-w-xl mx-auto border border-white/5">
          <p className="text-xs sm:text-sm font-semibold">
            {t("search_no_local_results", { defaultValue: "Nenhum artigo encontrado nesta loja." })}
          </p>

          {suggestedFallbackCategory && onSelectCategory ? (
            <div className="flex flex-col items-center">
              <p className="text-[11px] sm:text-xs mb-2 font-medium text-white/60">
                {t("search_category_suggestion_prompt", {
                  defaultValue: "Procurava por artigos desta categoria?",
                })}
              </p>
              <button
                type="button"
                onClick={handleFallbackClick}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold bg-amber-500/15 text-amber-300 transition-colors active:opacity-75 cursor-pointer touch-manipulation"
              >
                <Sparkles size={13} className="text-amber-500 shrink-0 pointer-events-none" />
                <span className="pointer-events-none">
                  {suggestedFallbackCategory.emoji}{" "}
                  {t("search_explore_category_button", { defaultValue: "Ver {category}" }).replace(
                    "{category}",
                    suggestedFallbackCategory.displayName
                  )}
                </span>
              </button>
            </div>
          ) : null}

          {canShowGlobalButton ? (
            <div className="pt-2 border-t border-white/10 flex flex-col items-center">
              <p className="text-[11px] sm:text-xs text-white/60 mb-2.5">
                {t("search_network_empty_prompt", {
                  defaultValue:
                    "Não encontramos este artigo nesta loja. Gostaria de procurar na nossa rede parceira?",
                })}
              </p>
              <button
                type="button"
                onClick={onTriggerGlobal}
                className="inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white/15 text-amber-300 transition-colors active:opacity-75 cursor-pointer w-full sm:w-auto touch-manipulation"
              >
                <Globe size={14} className="shrink-0 pointer-events-none" />
                <span className="pointer-events-none">{t("search_global_button", { defaultValue: "Pesquisar fora desta loja" })}</span>
              </button>
            </div>
          ) : null}

          {isLoadingGlobal ? (
            <div className="flex items-center justify-center gap-2 py-3 text-amber-400 text-xs font-bold">
              <Loader2 size={14} className="animate-spin shrink-0 pointer-events-none" />
              <span>{t("searching_network_loading", { defaultValue: "Buscando em lojas parceiras..." })}</span>
            </div>
          ) : null}

          {triggerGlobal && !isLoadingGlobal && globalLen === 0 ? (
            <p className="text-[11px] text-zinc-500">
              {t("search_no_global_results", { defaultValue: "Nenhum resultado externo encontrado." })}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
});