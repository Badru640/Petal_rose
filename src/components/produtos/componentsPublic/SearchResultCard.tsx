import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Store, Tag } from "lucide-react";
import { FALLBACK_PRODUCT } from "../../../utils/constants";

const DEFAULT_PRODUCT_FALLBACK_IMAGE = FALLBACK_PRODUCT;

// Instância única reaproveitável: evita instanciar formatadores em loop (economia pura de CPU)
const NUMBER_FORMATTER = new Intl.NumberFormat();

export interface SearchProductResult {
  id: string;
  name?: string | null;
  price?: number | string | null;
  category?: string | null;
  main_image?: string | null;
  stores?: { slug: string; name: string } | { slug: string; name: string }[] | null;
  hasDiscount?: boolean;
  originalPrice?: number | string | null;
  finalPrice?: number | string | null;
  discountPercent?: number | string | null;
  discount_percent?: number | string | null;
  metadata?: {
    subCategory?: string;
    parentCategory?: string;
    attributes?: string[];
  };
}

export interface SearchResultCardProps {
  product: SearchProductResult;
  currency: string;
  isGlobal?: boolean;
  onClick: () => void;
}

export const SearchResultCard = React.memo(function SearchResultCard({
  product,
  currency,
  isGlobal = false,
  onClick,
}: SearchResultCardProps) {
  const initialImage =
    product.main_image && product.main_image.trim().length > 0
      ? product.main_image
      : DEFAULT_PRODUCT_FALLBACK_IMAGE;

  const [imgSrc, setImgSrc] = useState<string>(initialImage);

  // Sincronização direta sem custo adicional de layout
  useEffect(() => {
    const nextImg =
      product.main_image && product.main_image.trim().length > 0
        ? product.main_image
        : DEFAULT_PRODUCT_FALLBACK_IMAGE;
    setImgSrc(nextImg);
  }, [product.main_image]);

  // Fallback seguro contra loops de erro 404/CORS
  const handleImageError = useCallback(() => {
    setImgSrc((prev) =>
      prev !== DEFAULT_PRODUCT_FALLBACK_IMAGE ? DEFAULT_PRODUCT_FALLBACK_IMAGE : prev
    );
  }, []);

  const storeName = useMemo(() => {
    if (!product.stores) return null;
    const storeObj = Array.isArray(product.stores) ? product.stores[0] : product.stores;
    return storeObj?.name ? String(storeObj.name).trim() : null;
  }, [product.stores]);

  const discPercent = Math.max(
    0,
    Math.round(Number(product.discountPercent ?? product.discount_percent ?? 0))
  );
  const hasValidDiscount = discPercent > 0;
  const basePrice = Math.max(0, Number(product.price) || 0);

  const finalNumericPrice = useMemo(() => {
    if (product.finalPrice != null && !isNaN(Number(product.finalPrice))) {
      return Math.max(0, Number(product.finalPrice));
    }
    return hasValidDiscount ? Math.max(0, basePrice - basePrice * (discPercent / 100)) : basePrice;
  }, [product.finalPrice, hasValidDiscount, basePrice, discPercent]);

  const originalNumericPrice = useMemo(() => {
    if (product.originalPrice != null && !isNaN(Number(product.originalPrice))) {
      return Math.max(0, Number(product.originalPrice));
    }
    return hasValidDiscount ? basePrice : null;
  }, [product.originalPrice, hasValidDiscount, basePrice]);

  const productName =
    product.name && product.name.trim().length > 0 ? product.name.trim() : "Artigo sem nome";

  const productCategory =
    product.category && product.category.trim().length > 0 ? product.category.trim() : null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full aspect-square overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer select-none border text-left touch-manipulation active:scale-[0.98] ${
        isGlobal
          ? "bg-[#140e06] border-amber-500/35 hover:border-amber-400/60"
          : "bg-[#0e0e11] border-white/10 hover:border-white/20"
      }`}
      style={{
        contain: "strict",
      }}
    >
      {/* 1. Imagem: Sem reescalonamento contínuo em mobile (preserva a taxa de preenchimento da GPU) */}
      <img
        src={imgSrc}
        alt={productName}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none [@media(hover:hover)]:transition-transform [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover:scale-105"
      />

      {/* 2. Micro-vinheta estática na base (sólida e barata para GPU) */}
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* 3. Badges Superiores */}
      <div className="absolute top-2 inset-x-2 z-10 flex items-center justify-between gap-1 pointer-events-none">
        <div className="flex items-center gap-1 min-w-0">
          {hasValidDiscount ? (
            <span className="inline-flex items-center gap-0.5 text-[8.5px] sm:text-[9.5px] font-black tracking-wider text-white bg-rose-600 px-1.5 py-0.5 rounded-md shrink-0">
              <Tag size={8.5} className="fill-white" />
              -{discPercent}%
            </span>
          ) : null}

          {productCategory ? (
            <span className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider text-zinc-200 bg-black/80 px-1.5 py-0.5 rounded-full truncate max-w-[65px] sm:max-w-[85px] border border-white/10">
              {productCategory}
            </span>
          ) : null}
        </div>

        {isGlobal ? (
          <span className="shrink-0 flex items-center gap-0.5 text-[7px] font-black uppercase tracking-wider text-amber-300 bg-black/85 px-1.5 py-0.5 rounded-full border border-amber-500/40">
            <Store size={9} />
            <span className=" inline truncate max-w-[50px] sm:max-w-[60px]">
              {storeName || "Rede"}
            </span>
          </span>
        ) : null}
      </div>

      {/* 4. Título e Preço sem filtros de sombra */}
      <div className="absolute bottom-2 inset-x-2 sm:bottom-2.5 sm:inset-x-2.5 z-10 flex flex-col items-start pointer-events-none">
        <h4
          title={productName}
          className="text-[11px] sm:text-xs font-bold text-white leading-snug truncate mb-1 w-full text-left"
        >
          {productName}
        </h4>

        <div className="flex items-center gap-1.5 w-full flex-wrap">
          {/* Preço com borda de 1px em vez de box-shadow */}
          <div
            className={`inline-flex items-center px-1.5 py-0.5 rounded-md border ${
              hasValidDiscount
                ? "bg-rose-950/90 border-rose-500/40 text-rose-200"
                : "bg-emerald-950/90 border-emerald-500/40 text-emerald-300"
            }`}
          >
            <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-tight whitespace-nowrap">
              {currency} {NUMBER_FORMATTER.format(finalNumericPrice)}
            </span>
          </div>

          {/* Preço original riscado */}
          {hasValidDiscount && originalNumericPrice ? (
            <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-zinc-400 line-through truncate opacity-85 whitespace-nowrap">
              {currency} {NUMBER_FORMATTER.format(originalNumericPrice)}
            </span>
          ) : null}
        </div>
      </div>
    </button>
  );
});