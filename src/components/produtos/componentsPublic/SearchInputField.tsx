import React, { useCallback } from "react";
import { Search, X, Zap } from "lucide-react";

export type TranslationFunction = (key: string, variables?: Record<string, unknown>) => string;

export interface SearchInputFieldProps {
  searchTerm: string;
  isDark: boolean;
  placeholder: string;
  suggestions: string[];
  onChangeTerm: (value: string) => void;
  onSelectSuggestion: (value: string) => void;
  onClear: () => void;
  t: TranslationFunction;
}

export const SearchInputField = React.memo(function SearchInputField({
  searchTerm,
  isDark,
  placeholder,
  suggestions,
  onChangeTerm,
  onSelectSuggestion,
  onClear,
  t,
}: SearchInputFieldProps) {
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeTerm(e.target.value);
    },
    [onChangeTerm]
  );

  return (
    <div
      className="shrink-0 flex flex-col justify-center select-none pt-2 pb-1.5 bg-transparent"
      style={{ contain: "layout style" }}
    >
      {/* Sugestões horizontais */}
      {suggestions.length > 0 && (
        <div
          className={`flex w-full gap-1.5 overflow-x-auto px-3 sm:px-6 md:px-8 py-1.5 no-scrollbar overscroll-contain touch-pan-x ${
            isDark ? "bg-white/[0.04]" : "bg-black/[0.03]"
          }`}
        >
          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black text-amber-500 pr-1 uppercase tracking-widest shrink-0 pointer-events-none">
            <Zap size={11} className="fill-amber-500/20" />
            <span>{t("search_suggestions", { defaultValue: "Sugestões" })}</span>
          </div>

          {suggestions.map((sug, idx) => (
            <button
              key={`${sug}-${idx}`}
              type="button"
              onClick={() => onSelectSuggestion(sug)}
              className={`shrink-0 rounded-full px-2.5 sm:px-3 py-1 text-xs font-semibold transition-transform duration-100 active:scale-95 cursor-pointer whitespace-nowrap border touch-manipulation ${
                isDark
                  ? "bg-white/10 text-zinc-100 hover:bg-white/15 border-white/10"
                  : "bg-black/5 text-slate-800 hover:bg-black/10 border-black/5"
              }`}
            >
              {sug}
            </button>
          ))}
        </div>
      )}

      {/* Barra de Pesquisa */}
      <div className={`px-3 sm:px-6 md:px-8 ${suggestions.length > 0 ? "pt-2" : "pt-1"}`}>
        <div
          className={`mx-auto flex w-full max-w-4xl items-center gap-2 rounded-xl sm:rounded-2xl p-1 pr-2 sm:pr-3 border transition-colors duration-150 ${
            isDark
              ? "bg-white/[0.07] focus-within:bg-white/10 border-white/10 text-white"
              : "bg-black/[0.04] focus-within:bg-black/[0.07] border-black/10 text-slate-900"
          }`}
        >
          <div
            className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg select-none pointer-events-none ${
              isDark ? "text-white/60" : "text-black/50"
            }`}
          >
            <Search size={18} strokeWidth={2.5} />
          </div>

          <input
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={searchTerm}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`w-full bg-transparent text-base font-semibold outline-hidden py-1 sm:py-2 ${
              isDark
                ? "text-white placeholder:text-white/40"
                : "text-slate-900 placeholder:text-black/40"
            }`}
          />

          {searchTerm ? (
            <button
              type="button"
              onClick={onClear}
              className={`shrink-0 flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg transition-colors cursor-pointer touch-manipulation active:scale-95 ${
                isDark
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : "text-black/70 hover:text-black hover:bg-black/10"
              }`}
              title={t("clear", { defaultValue: "Limpar" })}
              aria-label={t("clear", { defaultValue: "Limpar" })}
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          ) : (
            <div className="hidden sm:flex items-center text-[10px] font-bold text-white/40 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 select-none pointer-events-none">
              ESC
            </div>
          )}
        </div>
      </div>
    </div>
  );
});