import React from "react";
import { ListFilter, Sparkles } from "lucide-react";
import { SearchCategoryCard } from "./SearchCategoryCard";
import { MOCK_GLOBAL_CATEGORIES, type MockCategory } from "./SearchMocks";
import type { TranslationFunction } from "./SearchInputField";

export interface CategoryDisplayItem {
  name: string;
  searchKey: string;
  emoji?: string;
  color?: string;
  image?: string | null;
  count?: number;
}

export interface SearchSuggestionsViewProps {
  showGlobalCats: boolean;
  categories: CategoryDisplayItem[];
  t: TranslationFunction;
  isDark: boolean;
  onToggleGlobal: () => void;
  onSelectCategory: (searchKey: string) => void;
}

export const SearchSuggestionsView = React.memo(function SearchSuggestionsView({
  showGlobalCats,
  categories,
  t,
  isDark,
  onToggleGlobal,
  onSelectCategory,
}: SearchSuggestionsViewProps) {
  const hasLocalCategories = categories.length > 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h3
          className={`text-[10px] sm:text-xs font-black uppercase tracking-widest ${
            isDark ? "text-white/50" : "text-black/50"
          }`}
        >
          {showGlobalCats
            ? t("search_global_categories", { defaultValue: "Categorias Globais" })
            : t("search_in_store", { defaultValue: "Categorias da Loja" })}
        </h3>

        {hasLocalCategories ? (
          <button
            type="button"
            onClick={onToggleGlobal}
            className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full transition-transform cursor-pointer active:scale-95 ${
              isDark
                ? "text-blue-400 bg-blue-500/15 hover:bg-blue-500/25"
                : "text-blue-700 bg-blue-500/10 hover:bg-blue-500/20"
            }`}
          >
            <ListFilter size={11} />
            <span>
              {showGlobalCats
                ? t("search_see_local", { defaultValue: "Ver da Loja" })
                : t("search_see_global", { defaultValue: "Outras Lojas" })}
            </span>
          </button>
        ) : null}
      </div>

      {/* Grid responsivo ajustado para visualização confortável em qualquer proporção */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {showGlobalCats || !hasLocalCategories ? (
          MOCK_GLOBAL_CATEGORIES.map((cat: MockCategory, idx: number) => (
            <SearchCategoryCard
              key={`global-${cat.slug}-${idx}`}
              name={t(cat.nameKey, { defaultValue: cat.slug })}
              emoji={cat.emoji}
              color={cat.color}
              index={idx}
              onClick={() => onSelectCategory(cat.searchQuery)}
            />
          ))
        ) : (
          categories.map((cat: CategoryDisplayItem, idx: number) => (
            <SearchCategoryCard
              key={`local-${cat.searchKey}-${idx}`}
              name={cat.name}
              emoji={cat.emoji || "📦"}
              color={cat.color}
              image={cat.image}
              index={idx}
              onClick={() => onSelectCategory(cat.searchKey)}
            />
          ))
        )}
      </div>

      {!hasLocalCategories && !showGlobalCats ? (
        <div
          className={`text-center py-4 px-4 rounded-xl max-w-xl mx-auto ${
            isDark ? "bg-white/5 text-white/70" : "bg-black/5 text-black/70"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 mb-1 text-amber-500 font-bold text-xs">
            <Sparkles size={14} />
            <span>
              {t("search_empty_store_state", {
                defaultValue: "Esta loja ainda não possui artigos carregados.",
              })}
            </span>
          </div>
          <p className="text-[11px] sm:text-xs opacity-80">
            {t("search_empty_store_hint", {
              defaultValue: "Explore todas as categorias globais para encontrar o que procura:",
            })}
          </p>
        </div>
      ) : null}
    </div>
  );
});