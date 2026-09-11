import { useState, memo, useRef, useCallback, useEffect } from 'react';
import { MessageCircle, Check, Copy, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface TemplateItem {
  titleKey: string;
  badge: string;
  targetRoute?: string;
  badgeStyle?: string;
  text: string;
}

interface Props {
  templates: TemplateItem[];
  copiedIdx: number | null;
  onCopy: (text: string, idx: number) => void;
  onShareWhatsApp: (text: string) => void;
  t: (k: string, params?: Record<string, any>) => string;
}

export const GrowthTemplates = memo(function GrowthTemplates({
  templates,
  copiedIdx,
  onCopy,
  onShareWhatsApp,
  t
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const lastActionTimeRef = useRef<number>(0);
  const isScrollingToRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToRef.current) return;

        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            const targetIndex = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(targetIndex)) {
              setActiveIdx(targetIndex);
            }
            break;
          }
        }
      },
      {
        root: container,
        threshold: 0.5
      }
    );

    const cards = cardRefs.current;
    cards.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [templates.length]);

  const scrollToIndex = useCallback((idx: number) => {
    const targetIdx = Math.max(0, Math.min(idx, templates.length - 1));
    const targetEl = cardRefs.current[targetIdx];
    if (!targetEl) return;

    isScrollingToRef.current = true;
    setActiveIdx(targetIdx);

    targetEl.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingToRef.current = false;
    }, 400);
  }, [templates.length]);

  const handleSafeAction = useCallback((callback: () => void) => {
    const now = Date.now();
    if (now - lastActionTimeRef.current < 400) return;
    lastActionTimeRef.current = now;
    callback();
  }, []);

  return (
    <section className="space-y-3">
      {/* Topo Desktop */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-amber-500 shrink-0" />
          <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">
            {t('guide_templates_title') || 'Mensagens Prontas'}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIdx - 1)}
            disabled={activeIdx === 0}
            aria-label={t('common_previous') || 'Anterior'}
            className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 active:scale-95 transition-transform disabled:opacity-25 disabled:pointer-events-none cursor-pointer shadow-xs"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIdx + 1)}
            disabled={activeIdx === templates.length - 1}
            aria-label={t('common_next') || 'Seguinte'}
            className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 active:scale-95 transition-transform disabled:opacity-25 disabled:pointer-events-none cursor-pointer shadow-xs"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Carrossel Móvel Otimizado para Não Travar o Eixo Vertical */}
      <div
        ref={containerRef}
        className="flex gap-3.5 overflow-x-auto snap-x snap-proximity sm:snap-mandatory px-1 py-1 no-scrollbar overscroll-x-contain touch-pan-y"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {templates.map((item, idx) => {
          const isCopied = copiedIdx === idx;

          return (
            <div
              key={item.titleKey || idx}
              data-index={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="snap-center shrink-0 w-[84vw] sm:w-[320px] max-w-[340px] flex flex-col justify-between p-4 sm:p-5 rounded-3xl bg-white border border-zinc-100 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.02)]"
            >
              <div className="space-y-3 pointer-events-none sm:pointer-events-auto">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    {t(item.badge) || item.badge}
                  </span>
                  {idx === 0 && (
                    <span className="text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {t('common_recommended') || 'Recomendado'}
                    </span>
                  )}
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-50/80 border border-zinc-100 text-zinc-700">
                  <p className="text-xs sm:text-[13px] leading-relaxed whitespace-pre-line font-normal break-words">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Botões de Ação com eventos reativados */}
              <div className="flex items-center gap-2 pt-3 mt-1 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => handleSafeAction(() => onShareWhatsApp(item.text))}
                  className="flex-1 h-9 sm:h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-transform text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle size={14} className="shrink-0" />
                  <span>{t('guide_template_send_wa') || 'Enviar'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSafeAction(() => onCopy(item.text, idx))}
                  className={`h-9 sm:h-10 px-3.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform shrink-0 ${
                    isCopied
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                      : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check size={13} className="text-emerald-600" strokeWidth={2.5} />
                      <span>{t('copied_label') || 'Copiado'}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-zinc-500" />
                      <span>{t('guide_copy_msg') || 'Copiar'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicadores de Posição */}
      <div className="flex items-center justify-center gap-1 pt-1">
        {templates.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={item.titleKey || idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={
                t('guide_templates_go_to_index', { index: idx + 1 }) ||
                `Ir para mensagem ${idx + 1}`
              }
              className="p-2 cursor-pointer group touch-manipulation"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'w-6 bg-zinc-900'
                    : 'w-2 bg-zinc-300 group-hover:bg-zinc-400'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
});

GrowthTemplates.displayName = 'GrowthTemplates';