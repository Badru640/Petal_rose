import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createPortal } from "react-dom";

import { useAdminStore } from "../hooks/useAdminStore";
import { useStorePublic } from "../hooks/useStorePublic";
import { supabase } from "../lib/supabase";
import { ProductForm } from "../components/produtos/ProductForm";
import { useTranslate } from "../context/LanguageContext";
import { FALLBACK_CURRENCY, FALLBACK_PRODUCT } from "../utils/constants";
import { ProductGallery } from "../components/produtos/componentsAdmim/ProductGallery";
import { ProductCheckout } from "../components/produtos/componentsAdmim/ProductCheckout";
import { ProductDescription } from "../components/produtos/componentsAdmim/ProductDescription";
import { StoreTrustCard } from "../components/produtos/componentsAdmim/StoreTrustCard";
import { RelatedProductsCache } from "../components/produtos/componentsAdmim/RelatedProductsCache";
import { MobileStickyBar } from "../components/produtos/componentsAdmim/MobileStickyBar";
import { useWhatsAppOrder } from "../hooks/useWhatsAppOrder";
import { ProductDetailsNav } from "../components/ProductDetails/ProductDetailsNav";
import type { CartItemPayload } from "../components/produtos/componentsAdmim/AddToCartButton";

export interface ProductFormData {
  name: string; category: string; price: string; unit: string; full_description: string; main_image: string; gallery: string[]; stock?: number;
  discount_percent?: string;
}
interface ProductDetailsProps { isCreating?: boolean; onClose?: () => void; }
type PublicStoreData = { id?: string; slug: string; name?: string; whatsapp_number?: string | null; currency?: string | null; settings?: any; logo_url?: string | null; description?: string | null; };
type ProductRow = { 
  id: string; store_id?: string | null; name?: string | null; slug?: string | null;
  price?: number | string | null; description?: string | null; image_url?: string | null;
  is_active?: boolean | null; created_at?: string | null; category?: string | null; 
  gallery?: string[] | null; main_image?: string | null; full_description?: string | null; 
  unit?: string | null; stock?: number | null;
  discount_percent?: number | null;
};
type ProductLocationState = { product?: ProductRow; store?: PublicStoreData; source?: string; searchMode?: string; fromStore?: boolean; };

const UNIT_TRANSLATION_KEY_MAP = {
  un: "product_form_unit_un", peca: "product_form_unit_peca", pacote: "product_form_unit_pacote", caixa: "product_form_unit_caixa", kit: "product_form_unit_kit", conjunto: "product_form_unit_conjunto", par: "product_form_unit_par",
  kg: "product_form_unit_kg", g: "product_form_unit_g", l: "product_form_unit_l", ml: "product_form_unit_ml",
  fardo: "product_form_unit_fardo", cento: "product_form_unit_cento",
  servico: "product_form_unit_servico",
  hora: "product_form_unit_hora", dia: "product_form_unit_dia", semana: "product_form_unit_semana", mes: "product_form_unit_mes", ano: "product_form_unit_ano",
  m: "product_form_unit_m", cm: "product_form_unit_cm", mm: "product_form_unit_mm", rolo: "product_form_unit_rolo",
  m2: "product_form_unit_m2", m3: "product_form_unit_m3", t: "product_form_unit_t",
} as const;

const STORAGE_CART_KEY = "storely_cart_items";
const STORAGE_SENT_KEY = "storely_sent_orders";

export function ProductDetails({ isCreating = false, onClose }: ProductDetailsProps) {
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const storeSlug = useMemo(() => params.storeSlug || pathname.split("/").filter(Boolean)[0] || "", [params.storeSlug, pathname]);
  const { productId } = params;
  
  const pageState = useMemo(() => (location.state || {}) as ProductLocationState, [location.state]);

  const { t, language } = useTranslate();
  const { data: adminStore } = useAdminStore();
  const queryClient = useQueryClient();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isExecutingOrderRef = useRef(false);

  const { sendWhatsAppOrder } = useWhatsAppOrder();
  const isEditorRoute = pathname.includes("admin");
  const forceLightUI = isEditorRoute;
  const showVisitStore = !pageState?.fromStore;

  const styles = useMemo(() => ({
    pageBg: forceLightUI 
      ? "bg-slate-50 text-slate-900" 
      : "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100",
    nav: forceLightUI 
      ? "border-slate-200/80 bg-white/95 text-slate-900" 
      : "border-zinc-200/80 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90",
    panel: forceLightUI 
      ? "border-slate-200/80 bg-white shadow-xs" 
      : "border-zinc-200/70 bg-white dark:border-zinc-800 dark:bg-zinc-900 shadow-xs",
    softPanel: forceLightUI 
      ? "border-slate-200 bg-slate-100/80" 
      : "border-zinc-200/60 bg-zinc-100/70 dark:border-zinc-800 dark:bg-zinc-900/60",
    imageWrap: forceLightUI 
      ? "bg-slate-100" 
      : "bg-zinc-100 dark:bg-zinc-900",
    mutedText: forceLightUI 
      ? "text-slate-500" 
      : "text-zinc-500 dark:text-zinc-400",
    strongText: forceLightUI 
      ? "text-slate-900" 
      : "text-zinc-950 dark:text-white",
    softMutedText: forceLightUI 
      ? "text-slate-400" 
      : "text-zinc-400 dark:text-zinc-500",
    hoverSoft: forceLightUI 
      ? "hover:bg-slate-100" 
      : "hover:bg-zinc-100/80 dark:hover:bg-zinc-900",
    cardPriceBox: forceLightUI
      ? "border-slate-200 bg-slate-100/70"
      : "border-slate-300/80 dark:border-zinc-800 bg-slate-100/70 dark:bg-zinc-900/40",
    originalPriceText: forceLightUI
      ? "text-slate-500"
      : "text-slate-500 dark:text-zinc-400",
    finalPriceText: forceLightUI
      ? "text-emerald-700"
      : "text-emerald-700 dark:text-emerald-400",
    badgeCategory: forceLightUI
      ? "bg-slate-200/80 text-slate-800"
      : "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300"
  }), [forceLightUI]);

  const [isEditing, setIsEditing] = useState(isCreating);
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const handleSelectOption = useCallback((groupLabel: string, value: string) => {
    setSelectedOptions((prev) => {
      if (prev[groupLabel] === value) {
        const next = { ...prev };
        delete next[groupLabel];
        return next;
      }
      return { ...prev, [groupLabel]: value };
    });
  }, []);

  const handleClearOption = useCallback((groupLabel: string) => {
    setSelectedOptions((prev) => {
      const next = { ...prev };
      delete next[groupLabel];
      return next;
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "auto" }); 
  }, [productId]);

  const { data: publicStore } = useStorePublic(storeSlug);

  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: async (): Promise<ProductRow | null> => {
      if (isCreating || !productId) return null;
      const queryCache = queryClient.getQueriesData<ProductRow[]>({ queryKey: ["products"] });
      for (const [ cachedProducts] of queryCache) {
        if (cachedProducts && Array.isArray(cachedProducts)) {
          const found = cachedProducts.find((p) => p.id === productId);
          if (found) return found;
        }
      }
      const { data, error } = await supabase.from("products").select("*").eq("id", productId).single();
      if (error) throw error;
      return data as ProductRow;
    },
    enabled: !!productId && !isCreating, 
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    initialData: () => {
      if (pageState?.product) return pageState.product;
      const queryCache = queryClient.getQueriesData<ProductRow[]>({ queryKey: ["products"] });
      for (const [ cachedProducts] of queryCache) {
        if (cachedProducts && Array.isArray(cachedProducts)) {
          const found = cachedProducts.find((p) => p.id === productId);
          if (found) return found;
        }
      }
      return undefined;
    },
  });

  const resolvedProduct = product || null; 
  const resolvedStore = (pageState?.store || publicStore || null) as PublicStoreData | null;
  const storeWhatsAppNumber = resolvedStore?.whatsapp_number || adminStore?.whatsapp_number || "";
  const storeDisplayName = resolvedStore?.name || adminStore?.name || storeSlug;

  const initialData = useMemo<ProductFormData>(() => {
    if (isCreating || !resolvedProduct) {
      return { name: "", category: "", price: "", unit: "un", full_description: "", main_image: "", gallery: [], discount_percent: "" };
    }
    const normalizedMainImage = resolvedProduct.main_image || resolvedProduct.image_url || (Array.isArray(resolvedProduct.gallery) ? resolvedProduct.gallery[0] : "") || "";
    return {
      name: resolvedProduct.name ?? "",
      category: resolvedProduct.category ?? "",
      price: resolvedProduct.price != null ? Number(resolvedProduct.price).toFixed(2) : "",
      unit: resolvedProduct.unit ?? "un",
      full_description: resolvedProduct.full_description ?? resolvedProduct.description ?? "",
      main_image: normalizedMainImage,
      gallery: Array.isArray(resolvedProduct.gallery) ? resolvedProduct.gallery.filter(Boolean) : normalizedMainImage ? [normalizedMainImage] : [],
      stock: resolvedProduct.stock ?? undefined,
      discount_percent: resolvedProduct.discount_percent != null ? String(resolvedProduct.discount_percent) : "",
    };
  }, [resolvedProduct, isCreating]);

  const handleProductUpdateSuccess = useCallback((updatedProductData?: any) => {
    if (updatedProductData && productId) {
      queryClient.setQueryData(["product", productId], (old: any) => ({ ...old, ...updatedProductData }));
      queryClient.setQueriesData({ queryKey: ["products"] }, (oldList: any) => {
        if (!Array.isArray(oldList)) return oldList;
        return oldList.map(p => p.id === productId ? { ...p, ...updatedProductData } : p);
      });
    }
  
    if (onClose) {
      onClose();
    } else {
      setIsEditing(false);
      navigate(`/admin/produtos`);
    }
  }, [queryClient, productId, onClose, navigate]);

  useEffect(() => {
    setQuantity(1);
    setCustomNote("");
    setSelectedOptions({});
  }, [productId]);

  const previews = useMemo(() => {
    const merged = [initialData.main_image, ...(initialData.gallery || [])].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
    return merged.length ? merged : [];
  }, [initialData.main_image, initialData.gallery]);

  const unitPriceOriginal = useMemo(() => Number(initialData.price || 0), [initialData.price]);
  const discountPercent = useMemo(() => {
    const val = parseInt(initialData.discount_percent || "0", 10);
    return isNaN(val) ? 0 : val;
  }, [initialData.discount_percent]);

  const unitPriceFinal = useMemo(() => {
    if (discountPercent > 0) return unitPriceOriginal - (unitPriceOriginal * (discountPercent / 100));
    return unitPriceOriginal;
  }, [unitPriceOriginal, discountPercent]);

  const totalPriceFinal = useMemo(() => unitPriceFinal * quantity, [unitPriceFinal, quantity]);

  const currency = useMemo(() => (resolvedStore?.currency || resolvedStore?.settings?.currency || adminStore?.currency || FALLBACK_CURRENCY).toUpperCase(), [resolvedStore, adminStore]);
  const locale = language === "pt" ? "pt-PT" : "en-US";

  const formatMoney = useCallback((val: number) => {
    try { return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: val % 1 === 0 ? 0 : 2 }).format(val); } 
    catch { return `${currency} ${val.toFixed(val % 1 === 0 ? 0 : 2)}`; }
  }, [locale, currency]);

  const translatedUnit = useMemo(() => {
    const key = UNIT_TRANSLATION_KEY_MAP[initialData.unit as keyof typeof UNIT_TRANSLATION_KEY_MAP];
    return key ? t(key as any) : initialData.unit;
  }, [initialData.unit, t]);

  // Payload memoizado para garantir estabilidade de referência e evitar re-render desnecessário
  const currentCartPayload = useMemo<CartItemPayload | null>(() => {
    if (!initialData.name) return null;
    return {
      productId: resolvedProduct?.id || productId || "item",
      name: initialData.name,
      price: unitPriceOriginal,
      unitPriceFinal,
      quantity,
      unit: translatedUnit || "un",
      mainImage: initialData.main_image || "",
      selectedOptions: Object.keys(selectedOptions).length > 0 ? selectedOptions : {},
      customNote: customNote.trim(),
      storeSlug,
      storeName: storeDisplayName,
      storeWhatsApp: storeWhatsAppNumber,
      addedAt: new Date().toISOString(),
    };
  }, [
    initialData.name,
    initialData.main_image,
    resolvedProduct?.id,
    productId,
    unitPriceOriginal,
    unitPriceFinal,
    quantity,
    translatedUnit,
    selectedOptions,
    customNote,
    storeSlug,
    storeDisplayName,
    storeWhatsAppNumber,
  ]);

  // Conexão com o UnifiedStoreDockSheet sincronizada com o ciclo de render do navegador (Zero CPU/GPU Lag)
  useEffect(() => {
    if (isEditorRoute || !currentCartPayload) return;

    let rafId: number;
    rafId = requestAnimationFrame(() => {
      window.dispatchEvent(
        new CustomEvent("storely:active-product", {
          detail: {
            payload: currentCartPayload,
            storeName: storeDisplayName,
            storeWhatsApp: storeWhatsAppNumber,
          },
        })
      );
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.dispatchEvent(new CustomEvent("storely:active-product", { detail: null }));
    };
  }, [isEditorRoute, currentCartPayload, storeDisplayName, storeWhatsAppNumber]);

  // Envio via WebShare com anexo de foto + registro no localStorage
  const handleWhatsAppOrder = useCallback(async () => {
    if (isEditorRoute || isExecutingOrderRef.current) return;
    isExecutingOrderRef.current = true;

    try {
      const totalOriginal = unitPriceOriginal * quantity;
      const totalSaved = totalOriginal - totalPriceFinal;

      // 1. Segmentos de texto da mensagem
      const noteSegments: string[] = [];

      const chosenEntries = Object.entries(selectedOptions);
      if (chosenEntries.length > 0) {
        const preferencesText = chosenEntries.map(([k, v]) => `• ${k}: ${v}`).join("\n");
        noteSegments.push(`*Opções Escolhidas:*\n${preferencesText}`);
      }

      if (discountPercent > 0) {
        const discountText = `${t("whatsapp_discount_title" as any)} ${discountPercent}${t("whatsapp_discount_suffix" as any)}\n\n${t("whatsapp_price_from" as any)}${formatMoney(totalOriginal)}~\n${t("whatsapp_price_to" as any)}${formatMoney(totalPriceFinal)}*\n${t("whatsapp_savings_prefix" as any)}${formatMoney(totalSaved)}${t("whatsapp_savings_suffix" as any)}`;
        noteSegments.push(discountText);
      }

      if (customNote.trim()) {
        noteSegments.push(`${t("whatsapp_customer_note" as any)} ${customNote.trim()}`);
      }

      // 2. Payload normalizado compatível com o carrinho
      const pid = resolvedProduct?.id || productId || initialData.name || "item";
      const optsStr = chosenEntries.length > 0 ? JSON.stringify(selectedOptions) : "";
      const currentLineItemId = `${pid}_${optsStr}_${customNote.trim()}`;

      const currentItemPayload = {
        lineItemId: currentLineItemId,
        productId: resolvedProduct?.id || productId,
        name: initialData.name,
        price: unitPriceOriginal,
        unitPriceFinal: unitPriceFinal,
        quantity,
        unit: translatedUnit,
        mainImage: initialData.main_image,
        storeSlug,
        storeWhatsApp: storeWhatsAppNumber,
        selectedOptions: chosenEntries.length > 0 ? selectedOptions : undefined,
        customNote: customNote.trim() || undefined,
      };

      // 3. Salva no histórico de pedidos enviados (storely_sent_orders)
      try {
        const newSentOrder = {
          id: `order_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          sentAt: new Date().toLocaleDateString(undefined, { hour: "2-digit", minute: "2-digit" }),
          sentTimestamp: Date.now(),
          storeSlug,
          storeWhatsApp: storeWhatsAppNumber,
          totalPrice: totalPriceFinal,
          totalQty: quantity,
          items: [currentItemPayload],
        };

        const rawSent = localStorage.getItem(STORAGE_SENT_KEY);
        const currentSent = rawSent ? JSON.parse(rawSent) : [];
        localStorage.setItem(STORAGE_SENT_KEY, JSON.stringify([newSentOrder, ...currentSent]));

        // 4. Remove o item correspondente do carrinho ativo se existir
        const rawCart = localStorage.getItem(STORAGE_CART_KEY);
        if (rawCart) {
          const currentCart = JSON.parse(rawCart);
          const updatedCart = currentCart.filter((it: any) => {
            const itPid = it.productId || it.name || "item";
            const itOpts = it.selectedOptions ? JSON.stringify(it.selectedOptions) : "";
            const itKey = it.lineItemId || `${itPid}_${itOpts}_${it.customNote || ""}`;
            return itKey !== currentLineItemId;
          });
          localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(updatedCart));
        }

        window.dispatchEvent(new Event("storely:cart:sync"));
      } catch (storageErr) {
        console.warn("Aviso ao sincronizar storage do pedido:", storageErr);
      }

      // 5. Montagem do texto final formatado
      const lines: string[] = [
        `🛍️ *NOVO PEDIDO - ${storeDisplayName.toUpperCase()}*`,
        `━━━━━━━━━━━━━━━━━━━━━`,
        `*1. ${initialData.name}*`,
        `   ▫️ Qtd: *${quantity} ${translatedUnit}* (${formatMoney(unitPriceFinal)}) = *${formatMoney(totalPriceFinal)}*`,
      ];

      if (chosenEntries.length > 0) {
        const optsText = chosenEntries.map(([k, v]) => `${k}: ${v}`).join(", ");
        lines.push(`   ▫️ Variação: ${optsText}`);
      }

      if (discountPercent > 0) {
        lines.push(`   ▫️ Desconto: -${discountPercent}% (Poupa: ${formatMoney(totalSaved)})`);
      }

      if (customNote.trim()) {
        lines.push(`   ▫️ Obs: _${customNote.trim()}_`);
      }

      lines.push(`━━━━━━━━━━━━━━━━━━━━━`);
      lines.push(`💰 *TOTAL A PAGAR: ${formatMoney(totalPriceFinal)}*`);
      lines.push(`━━━━━━━━━━━━━━━━━━━━━\n`);
      lines.push(`Olá! Gostaria de confirmar a disponibilidade e o envio deste pedido.`);

      const fullMessageText = lines.join("\n");

      // 6. WebShare com Arquivo de Imagem (Zero Lag de CPU/GPU com Timeout Controller)
      let sharedWithFiles = false;

      if (typeof navigator !== "undefined" && navigator.share && navigator.canShare) {
        try {
          const filesToShare: File[] = [];

          if (initialData.main_image && initialData.main_image.startsWith("http")) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2500);

            try {
              const res = await fetch(initialData.main_image, {
                mode: "cors",
                cache: "force-cache",
                signal: controller.signal,
              });
              clearTimeout(timeoutId);

              if (res.ok) {
                const blob = await res.blob();
                const ext = blob.type.split("/")[1] || "jpg";
                const imgFile = new File([blob], `produto.${ext}`, { type: blob.type });
                filesToShare.push(imgFile);
              }
            } catch {
              clearTimeout(timeoutId);
            }
          }

          const receiptFile = new File([fullMessageText], `pedido-${storeSlug || "storely"}.txt`, {
            type: "text/plain",
          });
          filesToShare.push(receiptFile);

          if (navigator.canShare({ files: filesToShare })) {
            await navigator.share({
              title: `Pedido - ${initialData.name}`,
              text: fullMessageText,
              files: filesToShare,
            });
            sharedWithFiles = true;
          }
        } catch {
          return;
        }
      }

      // 7. Fallback Nativo
      if (!sharedWithFiles) {
        sendWhatsAppOrder({
          storeName: storeDisplayName,
          whatsappNumber: storeWhatsAppNumber,
          productName: initialData.name,
          quantity,
          unit: translatedUnit,
          totalPrice: formatMoney(totalPriceFinal),
          customNote: noteSegments.join("\n\n").trim(),
          imageUrl: initialData.main_image,
        });
      }
    } finally {
      isExecutingOrderRef.current = false;
    }
  }, [
    isEditorRoute,
    unitPriceOriginal,
    quantity,
    totalPriceFinal,
    selectedOptions,
    discountPercent,
    customNote,
    resolvedProduct?.id,
    productId,
    initialData.name,
    initialData.main_image,
    unitPriceFinal,
    translatedUnit,
    storeSlug,
    storeWhatsAppNumber,
    formatMoney,
    t,
    sendWhatsAppOrder,
    storeDisplayName,
  ]);

  const handleShare = useCallback(async () => {
    const shareData: ShareData = { 
      title: initialData?.name || "Storely", 
      text: `Confira ${initialData?.name || "este produto"}!`, 
      url: window.location.href 
    };

    if (initialData.main_image) {
      try {
        const response = await fetch(initialData.main_image, { cache: "force-cache" });
        const blob = await response.blob();
        const ext = blob.type.split("/")[1] || "jpg";
        const file = new File([blob], `product.${ext}`, { type: blob.type });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          shareData.files = [file];
        }
      } catch (err) {
        console.warn("Não foi possível carregar o arquivo de imagem para compartilhar:", err);
      }
    }

    if (navigator.share && navigator.canShare?.(shareData)) {
      try { 
        await navigator.share(shareData); 
      } catch (err) { 
        console.log("Erro share nativo", err); 
      }
    } else {
      try { 
        await navigator.clipboard.writeText(window.location.href); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000); 
      } catch (err) { 
        console.log("Erro clipboard", err); 
      }
    }
  }, [initialData?.name, initialData?.main_image]);

  return createPortal(
    <div 
      ref={scrollRef} 
      style={{ colorScheme: forceLightUI ? "light" : undefined, willChange: "scroll-position" }}
      className={`fixed inset-0 z-[10000] h-[100dvh] w-full overflow-y-auto overflow-x-hidden ${forceLightUI ? "light" : ""} ${styles.pageBg}`}
    >
      <ProductDetailsNav
        isCreating={isCreating} 
        onClose={onClose} 
        isEditorRoute={isEditorRoute}
        isEditing={isEditing} 
        setIsEditing={setIsEditing} 
        handleShare={handleShare}
        copied={copied} 
        storeSlug={storeSlug} 
        navClass={styles.nav} 
        hoverSoftClass={styles.hoverSoft} 
        t={t as any}
        localizedTotalPrice={formatMoney(totalPriceFinal)}
        handleWhatsAppOrder={handleWhatsAppOrder}
        productName={initialData.name}
      />

      <main className="mx-auto w-full max-w-6xl px-0 pb-36 md:px-4 md:pt-10 lg:px-8">
        {isEditing && isEditorRoute ? (
          <div className="px-4 pt-6 md:px-0">
            <ProductForm 
              productId={isCreating ? undefined : productId} 
              isCreating={isCreating} 
              initialData={initialData} 
              onCancel={() => (isCreating ? onClose?.() : setIsEditing(false))} 
              onSuccess={handleProductUpdateSuccess} 
            />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:gap-10 lg:gap-14">
              <ProductGallery 
                images={previews} 
                productName={initialData.name} 
                fallbackImage={FALLBACK_PRODUCT} 
                imageWrapClass={styles.imageWrap} 
                t={t as any} 
              />

              <div className="w-full max-w-full px-4 pt-4 md:px-0 md:pt-0 flex flex-col">
                <span className={`self-start mb-2 rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${styles.badgeCategory}`}>
                  {initialData.category || t("common_category_general" as any) || "Geral"}
                </span>

                <h1 className={`text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-3 break-words ${styles.strongText}`}>
                  {initialData.name}
                </h1>

                <div className={`mb-5 p-4 rounded-xl border shadow-xs ${styles.cardPriceBox}`}>
                  {discountPercent > 0 && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-semibold line-through ${styles.originalPriceText}`}>
                        {formatMoney(unitPriceOriginal)}
                      </span>
                      <span className="rounded bg-rose-600 text-white px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline flex-wrap gap-1.5">
                    <span className={`text-3xl sm:text-4xl font-black tracking-tight ${styles.finalPriceText}`}>
                      {formatMoney(unitPriceFinal)}
                    </span>
                    <span className={`text-sm font-semibold ${styles.mutedText}`}>
                      / {translatedUnit}
                    </span>
                  </div>

                  {discountPercent > 0 && unitPriceOriginal > unitPriceFinal && (
                    <p className={`mt-2 text-xs font-bold ${styles.finalPriceText}`}>
                      {(t("product_save_amount" as any) || "Poupa {amount}").replace(
                        "{amount}",
                        formatMoney(unitPriceOriginal - unitPriceFinal)
                      )}
                    </p>
                  )}
                </div>

                <div className="mb-5 text-sm">
                  <ProductDescription
                    fullDescription={initialData.full_description}
                    selectedOptions={selectedOptions}
                    onSelectOption={handleSelectOption}
                    forceLightUI={forceLightUI}
                    styles={{ mutedText: styles.mutedText, strongText: styles.strongText }}
                    t={t as any}
                  />
                </div>

                <div className="w-full mb-6">
                  <ProductCheckout 
                    quantity={quantity} 
                    setQuantity={setQuantity} 
                    customNote={customNote} 
                    setCustomNote={setCustomNote} 
                    localizedTotalPrice={formatMoney(totalPriceFinal)} 
                    translatedUnit={translatedUnit} 
                    handleWhatsAppOrder={handleWhatsAppOrder} 
                    forceLightUI={forceLightUI} 
                    unitPriceFinal={unitPriceFinal}
                    productId={resolvedProduct?.id || productId}
                    productName={initialData.name}
                    productImage={initialData.main_image}
                    storeSlug={storeSlug}
                    storeName={storeDisplayName}
                    storeWhatsApp={storeWhatsAppNumber}
                    selectedOptions={selectedOptions}
                    onClearOption={handleClearOption}
                    panelClass={styles.panel} 
                    softMutedTextClass={styles.softMutedText} 
                    strongTextClass={styles.strongText} 
                    isEditorRoute={isEditorRoute} 
                    t={t as any} 
                  />
                </div>

                {!isEditorRoute && showVisitStore && (
                  <div className="w-full">
                    <StoreTrustCard 
                      storeName={storeDisplayName} 
                      storeLogo={resolvedStore?.logo_url || ""} 
                      siteUrl={window.location.origin + "/" + storeSlug} 
                      softPanelClass={styles.softPanel} 
                      strongTextClass={styles.strongText} 
                      mutedTextClass={styles.mutedText} 
                      t={t as any} 
                    />
                  </div>
                )}
              </div>
            </div>

            {!isEditorRoute && !isEditing && (
              <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 320px' }}>
                <RelatedProductsCache 
                  currentProductId={productId || ""} 
                  currentCategory={initialData.category} 
                  currentStoreId={resolvedStore?.id} 
                  storeSlugFallback={storeSlug} 
                  panelClass={styles.panel} 
                  strongTextClass={styles.strongText} 
                  mutedTextClass={styles.mutedText} 
                  formatMoney={formatMoney} 
                  t={t as any} 
                />
              </div>
            )}
          </>
        )}
      </main>

      {!isEditing && (
        <MobileStickyBar 
          localizedTotalPrice={formatMoney(totalPriceFinal)} 
          handleWhatsAppOrder={handleWhatsAppOrder} 
          mutedTextClass={styles.mutedText} 
          strongTextClass={styles.strongText} 
          t={t as any} 
        />
      )}

      <style>{`.pb-safe { padding-bottom: max(1rem, env(safe-area-inset-bottom)); } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>, 
    document.body
  );
}