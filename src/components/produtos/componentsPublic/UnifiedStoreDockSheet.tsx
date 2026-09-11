import { 
  useState, 
  useEffect, 
  useRef, 
  useCallback, 
  useMemo, 
  type TouchEvent, 
  type UIEvent, 
  type WheelEvent 
} from "react";
import { useLocation, Link } from "react-router-dom";
import { Search, ChevronDown, Maximize2, Minimize2, ArrowUpRight, ShoppingCart, ShoppingBag } from "lucide-react";

import { useTranslate } from "../../../context/LanguageContext";
import { FloatingSearch } from "./FloatingSearch";
import { StoreBottomCartSheet } from "./StoreBottomCartSheet";
import { AddToCartButton, type CartItemPayload } from "../componentsAdmim/AddToCartButton";

interface UnifiedStoreDockSheetProps {
  currentStoreId: string;
  storeCurrency: string;
  activeStoreSlug?: string;
  cartPayload?: CartItemPayload | null;
  storeName?: string;
  storeWhatsApp?: string;
  disabledAddToCart?: boolean;
  onAddToCart?: (item: CartItemPayload) => void;
}

type TabType = "cart" | "search";
type SnapState = "collapsed" | "half" | "full";
type TranslationKey = Parameters<ReturnType<typeof useTranslate>["t"]>[0];

const STORAGE_CART_KEY = "storely_cart_items";

export function UnifiedStoreDockSheet({
  currentStoreId,
  storeCurrency = "MZN",
  activeStoreSlug = "",
  cartPayload: propCartPayload = null,
  storeName: initialStoreName = "",
  storeWhatsApp: initialStoreWhatsApp = "",
  disabledAddToCart = false,
  onAddToCart,
}: UnifiedStoreDockSheetProps) {
  const { t } = useTranslate();
  const location = useLocation();

  const pathname = location.pathname.toLowerCase();
  const isProductsRoute = useMemo(() => pathname.includes("products") || pathname.includes("produtos"), [pathname]);
  const isBlogRoute = useMemo(() => pathname.includes("blog"), [pathname]);

  const shouldRender = isProductsRoute || isBlogRoute;

  const [snapState, setSnapState] = useState<SnapState>("collapsed");
  const [activeTab, setActiveTab] = useState<TabType>("cart");
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItemPayload[]>([]);

  const [currentPayload, setCurrentPayload] = useState<CartItemPayload | null>(propCartPayload);
  const [activeStoreName, setActiveStoreName] = useState<string>(initialStoreName);
  const [activeStoreWhatsApp, setActiveStoreWhatsApp] = useState<string>(initialStoreWhatsApp);

  useEffect(() => {
    if (propCartPayload) setCurrentPayload(propCartPayload);
  }, [propCartPayload]);

  useEffect(() => {
    if (initialStoreName) setActiveStoreName(initialStoreName);
    if (initialStoreWhatsApp) setActiveStoreWhatsApp(initialStoreWhatsApp);
  }, [initialStoreName, initialStoreWhatsApp]);

  useEffect(() => {
    const handleProductSync = (e: Event) => {
      const customEvent = e as CustomEvent<any>;
      const data = customEvent.detail;

      if (!data) {
        setCurrentPayload(null);
        return;
      }

      if (data.payload) {
        setCurrentPayload(data.payload);
        if (data.storeName) setActiveStoreName(data.storeName);
        if (data.storeWhatsApp) setActiveStoreWhatsApp(data.storeWhatsApp);
      } else {
        setCurrentPayload(data);
      }
    };

    window.addEventListener("storely:active-product", handleProductSync);
    window.addEventListener("storely:product:focus" as any, handleProductSync);

    return () => {
      window.removeEventListener("storely:active-product", handleProductSync);
      window.removeEventListener("storely:product:focus" as any, handleProductSync);
    };
  }, []);

  const snapRef = useRef<SnapState>("collapsed");
  snapRef.current = snapState;

  // Extração O(1) de chave do produto atual
  const activeProductIdentifier = useMemo(() => {
    const p = currentPayload as any;
    if (p?.productId) return String(p.productId);
    if (p?.id) return String(p.id);
    if (p?._id) return String(p._id);
    if (p?.slug) return String(p.slug);
    if (p?.productSlug) return String(p.productSlug);
    if (p?.name) return String(p.name);

    const segments = pathname.split("/").filter(Boolean);
    const prodIndex = segments.findIndex((s) => s === "products" || s === "produtos");
    if (prodIndex !== -1 && segments[prodIndex + 1]) {
      return decodeURIComponent(segments[prodIndex + 1]);
    }

    return null;
  }, [currentPayload, pathname]);

  const productsUrl = useMemo(() => {
    if (!activeStoreSlug) return "/products";
    const cleanSlug = activeStoreSlug.replace(/^\/+|\/+$/g, "");
    return `/${cleanSlug}/products`;
  }, [activeStoreSlug]);

  useEffect(() => {
    if (isBlogRoute && activeTab === "search") {
      setActiveTab("cart");
    }
  }, [isBlogRoute, activeTab]);

  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isLockedRef = useRef<boolean>(false);
  const blockHoverUntilRef = useRef<number>(0);

  const lockCooldown = useCallback((ms = 250) => {
    isLockedRef.current = true;
    setTimeout(() => {
      isLockedRef.current = false;
    }, ms);
  }, []);

  const closeDock = useCallback(() => {
    if (snapRef.current === "collapsed") return;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setSnapState("collapsed");
    blockHoverUntilRef.current = Date.now() + 350;
    lockCooldown(200);
  }, [lockCooldown]);

  const stepUp = useCallback(() => {
    if (isLockedRef.current || snapRef.current === "full") return;
    if (snapRef.current === "collapsed") setSnapState("half");
    else if (snapRef.current === "half") setSnapState("full");
    lockCooldown(200);
  }, [lockCooldown]);

  const stepDown = useCallback(() => {
    if (isLockedRef.current || snapRef.current === "collapsed") return;
    if (snapRef.current === "full") {
      setSnapState("half");
    } else if (snapRef.current === "half") {
      setSnapState("collapsed");
      blockHoverUntilRef.current = Date.now() + 350;
    }
    lockCooldown(200); 
  }, [lockCooldown]);

  const openCart = useCallback(() => {
    setActiveTab("cart");
    if (snapRef.current === "collapsed") stepUp();
  }, [stepUp]);

  useEffect(() => {
    if (snapState !== "collapsed") {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [snapState]);

  const refreshCartCount = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      const items: CartItemPayload[] = raw ? JSON.parse(raw) : [];
      const filtered = activeStoreSlug
        ? items.filter((i) => (i.storeSlug || "").toLowerCase() === activeStoreSlug.toLowerCase())
        : items;
      setCartItems(filtered);
      setCartCount(filtered.reduce((acc, it) => acc + (it.quantity || 1), 0));
    } catch {
      setCartItems([]);
      setCartCount(0);
    }
  }, [activeStoreSlug]);

  useEffect(() => {
    refreshCartCount();

    const onSync = () => refreshCartCount();
    const onOpenCart = () => openCart();

    window.addEventListener("storely:cart:sync", onSync, { passive: true });
    window.addEventListener("storely:cart:add", onSync, { passive: true });
    window.addEventListener("storely:cart:open", onOpenCart, { passive: true });

    return () => {
      window.removeEventListener("storely:cart:sync", onSync);
      window.removeEventListener("storely:cart:add", onSync);
      window.removeEventListener("storely:cart:open", onOpenCart);
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, [refreshCartCount, openCart]);

  // Identifica se o item/produto em foco já se encontra no carrinho
  const isCurrentItemInCart = useMemo(() => {
    if (!currentPayload || cartItems.length === 0) return false;
    const p = currentPayload as any;
    const targetId = String(p.productId || p.id || p._id || p.slug || "");
    const targetVariantId = p.variantId ? String(p.variantId) : null;

    return cartItems.some((item: any) => {
      const itemId = String(item.productId || item.id || item._id || item.slug || "");
      if (targetVariantId && item.variantId) {
        return itemId === targetId && String(item.variantId) === targetVariantId;
      }
      return itemId === targetId || (activeProductIdentifier && itemId === activeProductIdentifier);
    });
  }, [currentPayload, cartItems, activeProductIdentifier]);

  const touchStartY = useRef<number>(0);
  const touchStartX = useRef<number>(0);
  const isAtTopRef = useRef<boolean>(true);
  const activeScrollTarget = useRef<HTMLElement | null>(null);

  const handleScrollContainer = useCallback((e: UIEvent<HTMLDivElement>) => {
    isAtTopRef.current = e.currentTarget.scrollTop <= 2;
  }, []);

  const findScrollableParent = (el: HTMLElement | null): HTMLElement | null => {
    while (el && el !== document.body) {
      const style = window.getComputedStyle(el);
      const isScrollable = (style.overflowY === "auto" || style.overflowY === "scroll") && el.scrollHeight > el.clientHeight;
      if (isScrollable) return el;
      el = el.parentElement;
    }
    return null;
  };

  const handleTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    const target = e.target as HTMLElement;
    activeScrollTarget.current = findScrollableParent(target);
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent<HTMLDivElement>) => {
    if (isLockedRef.current) return;
    
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diffX) > Math.abs(diffY)) return;

    const scrollEl = activeScrollTarget.current;
    const isAtTop = scrollEl ? scrollEl.scrollTop <= 2 : isAtTopRef.current;

    if (diffY > 40) {
      if (snapRef.current !== "full") stepUp();
    } else if (diffY < -40 && isAtTop) {
      stepDown();
    }
  }, [stepUp, stepDown]);

  const handlePillHover = useCallback((tab: TabType) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (currentPayload) return;
    if (Date.now() < blockHoverUntilRef.current) return;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    
    setActiveTab(tab);
    if (snapRef.current === "collapsed" && !isLockedRef.current) {
      stepUp();
    }
  }, [stepUp, currentPayload]);

  const handleMainLeave = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (snapRef.current === "half") {
      hoverTimerRef.current = setTimeout(() => {
        if (snapRef.current === "half") closeDock();
      }, 150);
    }
  }, [closeDock]);

  const handleMainEnter = useCallback(() => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  }, []);

  const handleWheel = useCallback((e: WheelEvent<HTMLDivElement>) => {
    if (isLockedRef.current) return;
    if (e.deltaY > 20) {
      stepUp();
    } else if (e.deltaY < -25 && isAtTopRef.current) {
      stepDown();
    }
  }, [stepUp, stepDown]);

  if (!shouldRender) return null;

  const isExpanded = snapState !== "collapsed";
  const isFullyOpen = snapState === "full";

  const asideTransform = {
    collapsed: "translate3d(0, 115%, 0)", 
    half: "translate3d(0, 46dvh, 0)", 
    full: "translate3d(0, 0, 0)", 
  }[snapState];

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div 
          onClick={closeDock}
          aria-hidden="true"
          className={`fixed inset-0 z-[10001] transition-opacity duration-200 cursor-pointer ${
            isFullyOpen ? "bg-black/75" : "bg-black/45"
          }`}
        />
      )}

      {/* Dock Inferior */}
      <div 
        className={`fixed z-[10002] flex flex-col sm:flex-row items-center justify-center
          bg-[#0d0e12]/95 border-t border-white/20 border-x border-white/10
          transition-all duration-200 ease-out touch-none
          bottom-0 inset-x-0 w-full h-[68px] pb-1 pt-1 px-3 rounded-t-[24px] rounded-b-none border-b-0
          sm:bottom-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-auto sm:h-[50px] sm:px-2 sm:py-0 sm:rounded-full sm:border-b
          ${snapState === "collapsed" 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-8 pointer-events-none scale-95"
          }
        `}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-12 h-1 bg-white/30 rounded-full mb-1.5 sm:hidden" />

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-[480px] sm:max-w-none sm:w-auto">
          {currentPayload ? (
            <>
              {/* Se o item já estiver no carrinho, no mobile ele diminui para dar espaço ao Ver Mais */}
              <div className={`min-w-0 transition-all duration-200 ${
                isCurrentItemInCart 
                  ? "w-auto shrink-0 sm:flex-none" 
                  : "flex-1 sm:flex-none"
              }`}>
                <AddToCartButton
                  payload={currentPayload}
                  storeName={activeStoreName || activeStoreSlug}
                  storeWhatsApp={activeStoreWhatsApp}
                  disabled={disabledAddToCart}
                  onAddToCart={onAddToCart}
                  onOpenCart={openCart}
                  t={t as any}
                  className={`h-[40px] text-xs font-bold px-3 justify-center transition-all ${
                    isCurrentItemInCart
                      ? "w-auto min-w-[44px] max-w-[140px] sm:min-w-[160px]"
                      : "w-full sm:w-auto min-w-0 sm:min-w-[160px]"
                  }`}
                />
              </div>

              {/* Botão de Ver Carrinho */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openCart();
                }}
                className="flex h-[40px] px-3 sm:px-3.5 shrink-0 items-center justify-center gap-1.5 rounded-[14px] sm:rounded-full bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-200 border border-zinc-700/50 transition-colors cursor-pointer"
                title={t("dock_cart_button" as TranslationKey, { defaultValue: "Ver Carrinho" })}
              >
                <div className="relative flex items-center justify-center">
                  <ShoppingCart size={15} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 min-w-[15px] h-[15px] rounded-full bg-emerald-500 text-black text-[9px] font-black flex items-center justify-center px-0.5">
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>

              {/* Botão de Pesquisa ou Botão de Ver Mais Produtos */}
              {isProductsRoute ? (
                <button
                  type="button"
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setActiveTab("search"); 
                    stepUp(); 
                  }}
                  className={`flex h-[40px] px-3.5 items-center justify-center gap-1.5 rounded-[14px] sm:rounded-full bg-zinc-800/60 text-zinc-100 font-bold text-[11px] sm:text-xs active:bg-zinc-700/80 hover:bg-zinc-700/60 transition-colors cursor-pointer border border-zinc-700/50 ${
                    isCurrentItemInCart ? "flex-1 sm:flex-none sm:shrink-0" : "shrink-0"
                  }`}
                >
                  <Search size={14} strokeWidth={2.5} />
                  <span className={isCurrentItemInCart ? "inline" : "hidden xs:inline sm:inline"}>
                    {t("dock_search_button" as TranslationKey, { defaultValue: "Pesquisar" })}
                  </span>
                </button>
              ) : (
                <Link
                  to={productsUrl}
                  onClick={(e) => e.stopPropagation()}
                  className={`flex h-[40px] px-3.5 items-center justify-center gap-1.5 rounded-[14px] sm:rounded-full font-bold text-[11px] sm:text-xs transition-colors cursor-pointer border ${
                    isCurrentItemInCart
                      ? "flex-1 sm:flex-none sm:shrink-0 bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25"
                      : "shrink-0 bg-zinc-800/60 text-zinc-100 border-zinc-700/50 active:bg-zinc-700/80 hover:bg-zinc-700/60"
                  }`}
                >
                  <ShoppingBag size={14} strokeWidth={2.5} className="text-emerald-400 shrink-0" />
                  <span className={`truncate ${isCurrentItemInCart ? "inline" : "hidden xs:inline sm:inline"}`}>
                    {t("dock_more_products" as TranslationKey, { defaultValue: "Ver Mais" })}
                  </span>
                  <ArrowUpRight size={13} className="opacity-60 shrink-0" />
                </Link>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); openCart(); }}
                onMouseEnter={() => handlePillHover("cart")}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-[40px] px-4 sm:px-5 rounded-[14px] sm:rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 font-bold text-[11px] sm:text-xs active:bg-emerald-500/25 transition-colors cursor-pointer"
              >
                <div className="relative flex items-center">
                  <ShoppingCart size={15} strokeWidth={2.5} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 min-w-[15px] h-[15px] rounded-full bg-emerald-500 text-black text-[9px] font-black flex items-center justify-center px-0.5">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>{t("dock_cart_button" as TranslationKey, { defaultValue: "Carrinho" })}</span>
              </button>
              
              {isProductsRoute ? (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveTab("search"); stepUp(); }}
                  onMouseEnter={() => handlePillHover("search")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 h-[40px] px-4 sm:px-5 rounded-[14px] sm:rounded-full bg-zinc-800/60 text-zinc-100 font-bold text-[11px] sm:text-xs active:bg-zinc-700/80 transition-colors cursor-pointer border border-zinc-700/50"
                >
                  <Search size={14} strokeWidth={2.5} />
                  <span>{t("dock_search_button" as TranslationKey, { defaultValue: "Pesquisar" })}</span>
                </button>
              ) : (
                <Link
                  to={productsUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 h-[40px] px-4 sm:px-5 rounded-[14px] sm:rounded-full bg-zinc-800/60 text-zinc-100 font-bold text-[11px] sm:text-xs active:bg-zinc-700/80 transition-colors cursor-pointer border border-zinc-700/50"
                >
                  <ShoppingCart size={14} strokeWidth={2.5} className="text-emerald-400" />
                  <span className="truncate">{t("dock_more_products" as TranslationKey, { defaultValue: "Ver Mais" })}</span>
                  <ArrowUpRight size={13} className="opacity-60" />
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      {/* Sheet Modal */}
      <aside
        onMouseEnter={handleMainEnter}
        onMouseLeave={handleMainLeave}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ 
          transform: asideTransform,
          contain: "layout paint style"
        }}
        className={`fixed z-[10003] flex flex-col text-white select-none 
          bg-[#0d0e12]/98 border-t border-white/20 border-x border-white/10
          transition-transform duration-200 ease-out
          bottom-0 left-0 w-full rounded-t-[32px] rounded-b-none
          h-[92dvh] sm:h-[88vh]
          sm:left-1/2 sm:-translate-x-1/2 sm:w-[800px] sm:max-w-[90vw]
          sm:data-[snap=half]:translate-y-[40vh]
        `}
      >
        {!isFullyOpen && (
          <div 
            onClick={(e) => { e.stopPropagation(); stepUp(); }}
            className="absolute top-[72px] inset-x-0 bottom-0 z-20 cursor-pointer"
            title={t("dock_expand_all" as TranslationKey, { defaultValue: "Expandir Tudo" })}
          />
        )}

        {/* Header Handle */}
        <div 
          onClick={stepUp}
          className="h-[72px] shrink-0 w-full flex flex-col justify-center px-4 sm:px-6 relative z-30 border-b border-white/10 bg-white/[0.02] rounded-t-[32px] cursor-pointer touch-none"
        >
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/30 rounded-full active:bg-white/50 transition-colors" />
          
          <div className="flex items-center justify-between w-full mt-2">
            <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 w-full max-w-[280px] gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openCart();
                  if (snapRef.current === "half") stepUp();
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === "cart" 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <div className="relative flex items-center">
                  <ShoppingCart size={14} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-[14px] h-[14px] rounded-full bg-emerald-500 text-black text-[8px] font-black flex items-center justify-center px-0.5">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>{t("dock_cart_tab" as TranslationKey, { defaultValue: "Carrinho" })}</span>
              </button>

              {isProductsRoute ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab("search");
                    if (snapRef.current === "half") stepUp();
                  }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === "search" 
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" 
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Search size={14} />
                  <span>{t("dock_search_tab" as TranslationKey, { defaultValue: "Buscar" })}</span>
                </button>
              ) : (
                <Link
                  to={productsUrl}
                  onClick={(e) => {
                    e.stopPropagation();
                    closeDock();
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  <ShoppingCart size={13} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{t("dock_more_products" as TranslationKey, { defaultValue: "Ver Mais" })}</span>
                  <ArrowUpRight size={11} className="opacity-50 shrink-0" />
                </Link>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (snapState === "full") stepDown();
                  else stepUp();
                }}
                aria-label={snapState === "full" 
                  ? t("dock_minimize" as TranslationKey, { defaultValue: "Minimizar" }) 
                  : t("dock_maximize" as TranslationKey, { defaultValue: "Maximizar" })
                }
                className="hidden sm:flex p-1.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-200 border border-zinc-700/50 cursor-pointer"
              >
                {snapState === "full" ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>

              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); closeDock(); }} 
                aria-label={t("dock_close" as TranslationKey, { defaultValue: "Fechar" })}
                className="p-1.5 rounded-lg bg-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-700/60 transition-colors cursor-pointer border border-zinc-700/50"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Conteúdo Isolado */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative z-10">
          <div className={`flex-1 flex flex-col min-h-0 ${activeTab === "cart" ? "flex" : "hidden"}`}>
            <StoreBottomCartSheet 
              storeCurrency={storeCurrency}
              storeSlug={activeStoreSlug}
              activeProductKey={activeProductIdentifier}
              onScrollContainer={handleScrollContainer}
              onCloseCart={closeDock}
            />
          </div>

          {isProductsRoute && (
            <div className={`flex-1 flex flex-col min-h-0 ${activeTab === "search" ? "flex" : "hidden"}`}>
              <FloatingSearch 
                currentStoreId={currentStoreId}
                storeCurrency={storeCurrency}
                activeStoreSlug={activeStoreSlug}
                embeddedMode={true}
                autoFocusInput={activeTab === "search" && snapState !== "collapsed"}
                onSearchActive={stepUp}
                onCloseEmbedded={closeDock}
                onScrollContainer={handleScrollContainer}
              />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}