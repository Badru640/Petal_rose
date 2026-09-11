import { memo, useCallback, useState, useEffect, useRef } from "react";
import { ChevronLeft, Share2, Edit3, X, Home, Check, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface ProductDetailsNavProps {
  isCreating: boolean;
  onClose?: () => void;
  isEditorRoute: boolean;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  handleShare: () => void;
  copied: boolean;
  storeSlug: string;
  navClass?: string;
  hoverSoftClass?: string;
  t: (key: string | any, ...args: any[]) => string;
  localizedTotalPrice?: string;
  handleWhatsAppOrder?: () => void;
  productName?: string;
}

// Botões com animação fluida de transição e sombras leves
const BTN_ICON =
  "pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl " +
  "bg-white text-zinc-700 shadow-sm ring-1 ring-black/10 " +
  "transition-colors duration-150 ease-out " +
  "hover:bg-zinc-100 active:bg-zinc-200 " +
  "dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/15 " +
  "dark:hover:bg-zinc-800 dark:active:bg-zinc-700";

const BTN_EDIT =
  "pointer-events-auto flex h-10 items-center gap-1.5 rounded-2xl " +
  "bg-zinc-950 px-3.5 text-white shadow-sm ring-1 ring-white/20 " +
  "transition-colors duration-150 ease-out " +
  "hover:bg-black active:bg-zinc-800 " +
  "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100";

const BTN_CANCEL =
  `${BTN_ICON} !w-auto gap-1.5 px-3.5 text-rose-600 hover:text-rose-700 dark:text-rose-400`;

export const ProductDetailsNav = memo(function ProductDetailsNav({
  isCreating,
  onClose,
  isEditorRoute,
  isEditing,
  setIsEditing,
  handleShare,
  copied,
  storeSlug,
  navClass = "",
  hoverSoftClass = "",
  t,
  localizedTotalPrice,
  handleWhatsAppOrder,
}: ProductDetailsNavProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Monitora o scroll de forma leve via IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const handleHomeClick = useCallback(() => {
    if (pathname.includes("blog")) {
      navigate("/", { replace: true });
    } else {
      navigate(`/${storeSlug}`, { replace: true });
    }
  }, [pathname, storeSlug, navigate]);

  const handleBack = useCallback(() => {
    if (isCreating) {
      onClose?.();
    } else {
      navigate(-1);
    }
  }, [isCreating, onClose, navigate]);

  const handleStartEdit = useCallback(() => setIsEditing(true), [setIsEditing]);
  const handleCancelEdit = useCallback(() => setIsEditing(false), [setIsEditing]);

  const showQuickOrder = isScrolled && !isEditorRoute && !isEditing && Boolean(handleWhatsAppOrder);

  return (
    <>
      {/* Sentinela de scroll */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="absolute top-0 left-0 h-10 w-full pointer-events-none opacity-0"
      />

      <header
        className={`sticky top-0 z-[10010] box-border flex h-16 w-full max-w-full items-center justify-between px-3 md:px-6 pointer-events-none transition-all duration-200 ease-out overflow-hidden ${
          isScrolled
            ? "!bg-transparent !border-transparent !shadow-none"
            : "border-b border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-950"
        } ${navClass}`}
      >
        {/* Voltar Fixo à Esquerda */}
        <button
          type="button"
          onClick={handleBack}
          className={`${BTN_ICON} ${hoverSoftClass}`}
          aria-label={t("common_back", { defaultValue: "Voltar" })}
        >
          <ChevronLeft size={20} className="stroke-[2.25]" />
        </button>

        {/* Grupo de Ações à Direita */}
        <div className="flex items-center gap-2 shrink-0">
          {/* 1. Botão Home: transição suave para sumir apenas no scroll */}
          {!isScrolled && (
            <button
              type="button"
              onClick={handleHomeClick}
              className={`${BTN_ICON} ${hoverSoftClass} transition-opacity duration-150`}
              aria-label={t("common_home", { defaultValue: "Início" })}
              title={pathname.includes("blog") ? "Ir para o Início Geral" : "Ir para o Início da Loja"}
            >
              <Home size={17} className="stroke-[2.25]" />
            </button>
          )}

          {/* 2. Botão Compartilhar: sempre presente */}
          {!isEditorRoute && (
            <button
              type="button"
              onClick={handleShare}
              className={`${BTN_ICON} ${hoverSoftClass}`}
              aria-label={copied ? "Link copiado" : "Compartilhar"}
              title={copied ? "Link copiado!" : "Compartilhar"}
            >
              {copied ? (
                <Check size={18} className="stroke-[2.5] text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Share2 size={17} className="stroke-[2.25]" />
              )}
            </button>
          )}

          {/* 3. Botão WhatsApp: transição animada e suave, sem perder a nitidez */}
          {showQuickOrder && (
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              aria-label={`${t("common_order", { defaultValue: "Pedir" })} - ${localizedTotalPrice || ""}`}
              className="pointer-events-auto flex h-10 shrink-0 items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 px-2.5 sm:px-3 text-white shadow-sm ring-1 ring-emerald-400/40 transition-all duration-200 ease-out"
            >
              <MessageCircle size={17} className="shrink-0 fill-current stroke-none" />

              {/* Texto de Alta Conversão: Ação direta + Preço calculado */}
              <div className="flex flex-col items-start justify-center leading-tight">
                <span className="text-[9.5px] font-black uppercase tracking-wider text-emerald-100">
                  {t("common_order", { defaultValue: "Pedir" })}
                </span>
                {localizedTotalPrice && (
                  <span className="text-[11px] font-black tabular-nums tracking-tight whitespace-nowrap text-white">
                    {localizedTotalPrice}
                  </span>
                )}
              </div>
            </button>
          )}

          {/* Modo Admin: Editar */}
          {isEditorRoute && !isEditing && (
            <button type="button" onClick={handleStartEdit} className={BTN_EDIT}>
              <Edit3 size={14} className="stroke-[2.5]" />
              <span className="text-xs font-semibold tracking-wide">
                {t("product_details_edit", { defaultValue: "Editar" })}
              </span>
            </button>
          )}

          {/* Modo Admin: Cancelar */}
          {isEditorRoute && isEditing && !isCreating && (
            <button type="button" onClick={handleCancelEdit} className={BTN_CANCEL}>
              <X size={15} className="stroke-[2.5]" />
              <span className="text-xs font-semibold tracking-wide">
                {t("product_details_cancel", { defaultValue: "Cancelar" })}
              </span>
            </button>
          )}
        </div>
      </header>
    </>
  );
});