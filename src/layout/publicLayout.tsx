import { Outlet, useParams, useNavigate, useLocation, useNavigationType } from "react-router-dom";
import { useCallback, useEffect, useState, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { StoreHeader } from "../components/public/header/header";
import { StorePageLinksSection } from "../components/public/StorePageLinks";
import { PublicBackgroundAudio } from "../components/public/audio/PublicBackgroundAudio";
import { useStorePublic } from "../hooks/useStorePublic";
import { StoreFooter } from "../components/public/footer/StoreFooter";
import { useTranslate } from '../context/LanguageContext';
import { clearStoreCache } from "../utils/storeCache";

import { UnifiedStoreDockSheet } from "../components/produtos/componentsPublic/UnifiedStoreDockSheet";

// ==========================================
// 🛠️ MODO DE TESTE DO BOTÃO (Muda para false em produção)
// ==========================================
const DEBUG_SHOW_BACK = false;
const SCROLL_STORAGE_KEY = "storely_scroll_positions";

export function PublicLayout() {
  const { storeSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const navType = useNavigationType();
  const queryClient = useQueryClient();
  
  const { data: store, isLoading, isError, isFetching, source, forceRefresh } = useStorePublic(storeSlug);
  
  const { lang } = useTranslate();
  const isPt = lang.startsWith("pt");

  const [showExternalBackButton, setShowExternalBackButton] = useState(false);

  // ----------------------------------------------------
  // 🧭 RESTAURAÇÃO DE SCROLL DINÂMICA DO OUTLET
  // ----------------------------------------------------
  const outletContainerRef = useRef<HTMLDivElement>(null);
  const isRestoringRef = useRef(false);

  // 1. Salva a posição do scroll da rota atual antes de sair dela
  useEffect(() => {
    return () => {
      try {
        const positions = JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY) || "{}");
        positions[location.key] = window.scrollY;
        sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positions));
      } catch {
        // Ignora caso storage esteja indisponível
      }
    };
  }, [location.key]);

  // 2. Controla a restauração após a montagem do conteúdo no Outlet
  useEffect(() => {
    // CASO A: Navegação para uma nova página (PUSH / REPLACE) -> Scroll to top garantido
    if (navType !== "POP") {
      window.scrollTo({ top: 0, behavior: "instant" });
      const frameId = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
      return () => cancelAnimationFrame(frameId);
    }

    // CASO B: O usuário clicou em Voltar/Avançar (POP) -> Restaura onde estava
    let targetY = 0;
    try {
      const positions = JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY) || "{}");
      targetY = positions[location.key] ?? 0;
    } catch {
      targetY = 0;
    }

    if (targetY === 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    isRestoringRef.current = true;
    let timerId: NodeJS.Timeout | null = null;

    const attemptScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Se a página já cresceu o suficiente para atingir a posição salva
      if (maxScroll >= targetY - 10) {
        window.scrollTo({ top: targetY, behavior: "instant" });
        isRestoringRef.current = false;
        cleanupObservers();
        return true;
      }
      return false;
    };

    // Monitora mutações e redimensionamentos no container do Outlet
    let mutationObs: MutationObserver | null = null;
    let resizeObs: ResizeObserver | null = null;

    const cleanupObservers = () => {
      if (mutationObs) mutationObs.disconnect();
      if (resizeObs) resizeObs.disconnect();
      if (timerId) clearTimeout(timerId);
    };

    if (outletContainerRef.current) {
      mutationObs = new MutationObserver(() => {
        if (isRestoringRef.current) attemptScroll();
      });

      resizeObs = new ResizeObserver(() => {
        if (isRestoringRef.current) attemptScroll();
      });

      mutationObs.observe(outletContainerRef.current, {
        childList: true,
        subtree: true,
      });

      resizeObs.observe(outletContainerRef.current);
    }

    // Tenta de imediato (caso a rota já estivesse em cache/memória)
    if (!attemptScroll()) {
      // Fallback final com delay caso o conteúdo demore ou o observador não atinja 100%
      timerId = setTimeout(() => {
        if (isRestoringRef.current) {
          window.scrollTo({ top: targetY, behavior: "instant" });
          isRestoringRef.current = false;
          cleanupObservers();
        }
      }, 350);
    }

    return () => {
      cleanupObservers();
    };
  }, [location.key, navType]);

  // ----------------------------------------------------

  useEffect(() => {
    const currentHost = window.location.hostname;
    
    if (DEBUG_SHOW_BACK && !sessionStorage.getItem("storely_ext_origin")) {
      sessionStorage.setItem("storely_ext_origin", "http://debug-origin.com");
      sessionStorage.setItem("storely_landing_path", location.pathname);
    }

    let extOrigin = sessionStorage.getItem("storely_ext_origin");
    let landingPath = sessionStorage.getItem("storely_landing_path");
    
    if (!extOrigin) {
      const referrer = document.referrer;
      if (referrer && !referrer.includes(currentHost)) {
        extOrigin = referrer;
        sessionStorage.setItem("storely_ext_origin", extOrigin);
        sessionStorage.setItem("storely_landing_path", location.pathname);
        landingPath = location.pathname;
      } else {
        sessionStorage.setItem("storely_ext_origin", "none");
      }
    }

    if (extOrigin && extOrigin !== "none") {
      if (location.pathname === landingPath) {
        setShowExternalBackButton(true);
      } else {
        setShowExternalBackButton(false);
      }
    } else {
      setShowExternalBackButton(false);
    }

  }, [location.pathname]);

  const handleExternalGoBack = useCallback(() => {
    const extOrigin = sessionStorage.getItem("storely_ext_origin");
    
    window.close();

    setTimeout(() => {
      if (DEBUG_SHOW_BACK && window.history.length > 1) {
        navigate(-1);
      } else if (extOrigin && extOrigin !== "none") {
        window.location.href = extOrigin;
      } else if (window.history.length > 1) {
        navigate(-1);
      }
    }, 250);
  }, [navigate]);

  const handleGlobalRefresh = useCallback(async () => {
    if (storeSlug) clearStoreCache(storeSlug);
    
    try {
      const keys = Object.keys(localStorage);
      for (const key of keys) {
        if (
          key.includes("store_catalog") || 
          key.includes("storely_products") || 
          key.includes("storely_public_store") ||
          key.includes("search-local") ||
          key.includes("catalog-store")
        ) {
          localStorage.removeItem(key);
        }
      }
    } catch (e) {
      console.warn("Falha na limpeza dos sub-caches", e);
    }
    
    await queryClient.invalidateQueries({
      predicate: (query) => {
        const keyStr = query.queryKey.join("-").toLowerCase();
        return keyStr.includes("search") || keyStr.includes("catalog") || keyStr.includes("products") || keyStr.includes("showcase");
      }
    });

    await forceRefresh();
  }, [storeSlug, forceRefresh, queryClient]);

  if (isLoading && !store) {
    return (
      <div className="min-h-dvh w-full bg-white dark:bg-black flex flex-col items-center justify-center gap-3 antialiased">
        <div className="h-6 w-6 border-2 border-slate-200 dark:border-slate-800 border-t-slate-900 dark:border-t-white rounded-full animate-spin" />
        <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.3em] text-[9px]">
          {isPt ? "Carregando..." : "Loading..."}
        </span>
      </div>
    );
  }

  if (isError || !store) {
    return (
      <div className="min-h-dvh w-full bg-white dark:bg-black flex flex-col items-center justify-center px-6 text-center antialiased">
        <div className="space-y-2">
          <div className="text-4xl font-black tracking-widest text-slate-100 dark:text-slate-900 select-none">404</div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200">
            {isPt ? "Loja indisponível" : "Store unavailable"}
          </h2>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 max-w-xs tracking-wide leading-relaxed">
            {isPt 
              ? "O link pode ter expirado ou a loja mudou de endereço." 
              : "The link may have expired or the store changed its address."}
          </p>
        </div>

        <div className="mt-8 flex gap-3 min-w-[220px]">
          <button
            type="button"
            onClick={handleExternalGoBack}
            className="flex-1 px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer touch-manipulation"
          >
            {isPt ? "Voltar" : "Go Back"}
          </button>
          <button
            type="button"
            onClick={handleGlobalRefresh}
            className="flex-1 px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-bold text-white bg-black dark:bg-white dark:text-black rounded-md hover:opacity-80 transition-opacity cursor-pointer shadow-sm touch-manipulation"
          >
            {isPt ? "Repetir" : "Retry"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh w-full bg-white dark:bg-black flex flex-col antialiased select-none relative">
      
      {showExternalBackButton && (
        <button
          onClick={handleExternalGoBack}
          title={isPt ? "Voltar ao site anterior" : "Go back to previous site"}
          className="fixed top-16 left-3 md:top-20 md:left-5 z-[100] flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white/70 dark:bg-black/70 border border-slate-300/60 dark:border-slate-700/60 shadow-sm rounded-full text-slate-800 dark:text-white active:scale-95 transition-transform touch-manipulation"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}

      <StoreHeader storeId={store.id} />

      <main className="flex-1 w-full bg-white dark:bg-black flex flex-col select-text">
        
        {/* Container do Outlet com a ref anexada para monitorar a montagem */}
        <div ref={outletContainerRef} className="w-full flex flex-col">
          <Outlet context={{ storeId: store.id, store }} />
        </div>

        <div className="mt-auto w-full flex flex-col">
          <StorePageLinksSection storeId={store.id} />

          <StoreFooter
            store={store} 
            source={source} 
            isFetching={isFetching} 
            storeSlug={storeSlug} 
            forceRefresh={handleGlobalRefresh} 
          />
        </div>
      </main>

      <PublicBackgroundAudio
        settings={store?.settings?.background_audio}
        storeName={store?.name}
        storeId={store?.id}
        storeDescription={store?.description}
        storeCurrency={store?.currency}
      />

<UnifiedStoreDockSheet
  currentStoreId={store.id} 
  storeCurrency={store.currency || "MZN"} 
  activeStoreSlug={storeSlug} 
/>
    </div>
  );
}