import React, { useState, useCallback } from "react";
import { FALLBACK_PRODUCT } from "../../../utils/constants";

const FALLBACK_IMAGE = FALLBACK_PRODUCT;

export interface SearchCategoryCardProps {
  name: string;
  emoji?: string;
  color?: string;
  image?: string | null;
  index: number;
  onClick: () => void;
}

export const SearchCategoryCard = React.memo(function SearchCategoryCard({
  name,
  emoji = "📦",
  color,
  image,
  onClick,
}: SearchCategoryCardProps) {
  const [imgSrc, setImgSrc] = useState<string>(image || FALLBACK_IMAGE);

  const handleImageError = useCallback(() => {
    setImgSrc(FALLBACK_IMAGE);
  }, []);

  const hasRealImage = Boolean(image && imgSrc !== FALLBACK_IMAGE);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl p-3 sm:p-4 text-left transition-transform duration-150 active:scale-[0.98] cursor-pointer bg-gradient-to-br select-none touch-manipulation ${
        color || "from-zinc-800 to-zinc-950"
      }`}
      style={{
        contentVisibility: "auto",
        contain: "layout paint style",
      }}
    >
      {hasRealImage ? (
        <div
          className="absolute inset-y-0 right-0 w-[65%] overflow-hidden pointer-events-none opacity-80"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 65%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 65%)",
          }}
        >
          <img
            src={imgSrc}
            alt={name}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-end p-2 select-none pointer-events-none opacity-25">
          <span className="text-3xl sm:text-4xl md:text-5xl translate-x-1 translate-y-1">{emoji}</span>
        </div>
      )}

      {/* Gradiente direto sem blur para contraste térmico imediato */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 z-10 pointer-events-none">
        <span className="text-[11.5px] sm:text-xs md:text-sm font-bold text-white tracking-tight leading-snug line-clamp-2">
          {name}
        </span>
      </div>
    </button>
  );
});