import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Home, ShoppingBag, Store, ChevronRight } from "lucide-react";
import { FALLBACK_STORE } from "../../../utils/constants";

interface StoreTrustCardProps {
  storeName: string;
  storeLogo: string;
  siteUrl: string;
  softPanelClass?: string;
  strongTextClass?: string;
  mutedTextClass?: string;
  t: (key: string, options?: { defaultValue?: string }) => string;
}

export const StoreTrustCard = memo(function StoreTrustCard({
  storeName,
  storeLogo,
  siteUrl,
  t,
}: StoreTrustCardProps) {
  const productsUrl = useMemo(() => {
    const cleanUrl = (siteUrl || "").replace(/\/+$/, "");
    return `${cleanUrl}/products`;
  }, [siteUrl]);

  const bgImage = storeLogo || FALLBACK_STORE;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-950"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 135px",
        contain: "paint layout",
      }}
    >
      {/* 
        CAMADA DE FUNDO ISOLADA (Hardware-accelerated, decodificação assíncrona)
        Zero bloqueio de CPU na thread principal ao renderizar a imagem
      */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        style={{ transform: "translateZ(0)" }}
        aria-hidden="true"
      >
        {/* Imagem posicionada à direita com opacidade calibrada */}
        <img
          src={bgImage}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-30 dark:opacity-20"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_STORE;
          }}
        />

        {/* Degradê único direcional (substitui múltiplos gradients por uma camada só) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent dark:from-zinc-950 dark:via-zinc-950/85 dark:to-transparent" />
      </div>

      {/* CONTEÚDO PRINCIPAL (Z-index superior garante cliques sem conflito de camadas) */}
      <div className="relative z-10">
        {/* Identidade Visual */}
        <div className="flex items-center gap-3.5">
          <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-xl bg-white shadow-2xs ring-1 ring-slate-200/90 dark:bg-zinc-900 dark:ring-zinc-700/80">
            <img
              src={bgImage}
              alt={storeName}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = FALLBACK_STORE;
              }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h2 className="truncate text-base font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                {storeName}
              </h2>
              <BadgeCheck size={16} className="shrink-0 text-blue-500" />
            </div>

            <div className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <Store size={12} className="shrink-0" />
              <span className="truncate">
                {t("official_store", { defaultValue: "Loja Oficial Verificada" })}
              </span>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="mt-3.5 grid grid-cols-2 gap-2">
          <Link
            to={siteUrl}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white/90 px-3 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <Home size={13.5} className="shrink-0 text-slate-400 dark:text-zinc-400" />
            <span className="truncate">
              {t("store_page_links_home_badge", { defaultValue: "Início" })}
            </span>
          </Link>

          <Link
            to={productsUrl}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 active:scale-[0.98] dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
          >
            <ShoppingBag size={13.5} className="shrink-0" />
            <span className="truncate">
              {t("nav_products", { defaultValue: "Ver Produtos" })}
            </span>
            <ChevronRight size={13} className="shrink-0 opacity-80 -ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
});