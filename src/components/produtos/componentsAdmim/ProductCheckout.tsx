import { memo, useCallback, useMemo, useState, type ChangeEvent } from "react";
import {
  Minus,
  Plus,
  MessageSquarePlus,
  MessageCircle,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  X,
  Coins,
  Sparkles,
  Layers
} from "lucide-react";
import { AddToCartButton, type CartItemPayload } from "./AddToCartButton";
import { 
  translateTagItem, 
  getSpecGroupInfo, 
  getSmartTagEmoji 
} from "./productSpecUtils";

const STORAGE_CART_KEY = "storely_cart_items";
const STORAGE_SENT_KEY = "storely_sent_orders";

interface ProductCheckoutProps {
  quantity: number;
  setQuantity: (q: number | ((prev: number) => number)) => void;
  customNote: string;
  setCustomNote: (note: string) => void;
  localizedTotalPrice: string;
  translatedUnit: string;
  handleWhatsAppOrder?: () => void;
  forceLightUI: boolean;
  productId?: string;
  productName?: string;
  productImage?: string;
  storeSlug?: string;
  storeName?: string;
  storeWhatsApp?: string;
  whatsapp?: string;
  phone?: string;
  contactPhone?: string;
  unitPriceFinal?: number;
  selectedOptions?: Record<string, string>;
  onClearOption?: (groupLabel: string) => void;
  onAddToCart?: (item: CartItemPayload) => void;
  onOpenCart?: () => void;
  panelClass?: string;
  softMutedTextClass?: string;
  strongTextClass?: string;
  isEditorRoute?: boolean;
  maxQuantity?: number;
  t: (key: string, options?: { defaultValue?: string }) => string;
}

function formatCleanCurrency(val: number): string {
  const rounded = Math.round((val + Number.EPSILON) * 100) / 100;
  return Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(2).replace(/\.?0+$/, "");
}

export const ProductCheckout = memo(function ProductCheckout({
  quantity,
  setQuantity,
  customNote,
  setCustomNote,
  localizedTotalPrice,
  translatedUnit,
  handleWhatsAppOrder,
  forceLightUI,
  productId = "",
  productName = "",
  productImage = "",
  storeSlug = "",
  storeName = "",
  storeWhatsApp = "",
  whatsapp = "",
  phone = "",
  contactPhone = "",
  unitPriceFinal = 0,
  selectedOptions = {},
  onClearOption,
  onAddToCart,
  onOpenCart,
  panelClass = "",
  softMutedTextClass,
  strongTextClass,
  isEditorRoute = false,
  maxQuantity = 999,
  t,
}: ProductCheckoutProps) {
  const isLightOnly = forceLightUI || isEditorRoute;
  const safeLimit = Math.max(1, maxQuantity);
  const currentQuantity = Math.min(Math.max(1, Number(quantity) || 1), safeLimit);

  const [purchaseMode, setPurchaseMode] = useState<"qty" | "budget">("qty");
  const [rawBudgetValue, setRawBudgetValue] = useState<string>("");

  const activeWhatsApp = useMemo(() => {
    const raw = storeWhatsApp || whatsapp || phone || contactPhone || "";
    return String(raw).replace(/\D/g, "");
  }, [storeWhatsApp, whatsapp, phone, contactPhone]);

  const activeStoreName = useMemo(() => {
    return String(storeName || storeSlug || "").trim();
  }, [storeName, storeSlug]);

  const isMin = currentQuantity <= 1;
  const isMax = currentQuantity >= safeLimit;

  const handleDecrement = useCallback(() => {
    setRawBudgetValue("");
    setQuantity((prev) => Math.max(1, (Number(prev) || 1) - 1));
  }, [setQuantity]);

  const handleIncrement = useCallback(() => {
    setRawBudgetValue("");
    setQuantity((prev) => Math.min(safeLimit, (Number(prev) || 1) + 1));
  }, [setQuantity, safeLimit]);

  const handleQuantityInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRawBudgetValue("");
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) {
      setQuantity(1);
      return;
    }
    const val = parseInt(raw, 10);
    setQuantity(Math.min(Math.max(1, val), safeLimit));
  }, [safeLimit, setQuantity]);

  const applyBudget = useCallback((numericString: string) => {
    const sanitized = numericString.replace(/^0+/, "");
    setRawBudgetValue(sanitized);

    if (!sanitized || unitPriceFinal <= 0) {
      setQuantity(1);
      return;
    }

    const availableMoney = parseInt(sanitized, 10);
    if (isNaN(availableMoney) || availableMoney <= 0) {
      setQuantity(1);
      return;
    }

    const calculatedUnits = Math.floor(availableMoney / unitPriceFinal);
    setQuantity(Math.min(Math.max(1, calculatedUnits), safeLimit));
  }, [unitPriceFinal, safeLimit, setQuantity]);

  const handleBudgetInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    applyBudget(e.target.value.replace(/\D/g, ""));
  }, [applyBudget]);

  const handleClearBudget = useCallback(() => {
    setRawBudgetValue("");
    setQuantity(1);
  }, [setQuantity]);

  const quickChips = useMemo(() => {
    if (unitPriceFinal > 0) {
      const base = Math.ceil(unitPriceFinal);
      return [base * 2, base * 5, base * 10];
    }
    return [100, 200, 500];
  }, [unitPriceFinal]);

  const budgetFeedback = useMemo(() => {
    if (!rawBudgetValue || unitPriceFinal <= 0) return null;
    const money = parseInt(rawBudgetValue, 10);
    if (isNaN(money) || money <= 0) return null;

    const spent = currentQuantity * unitPriceFinal;
    const change = Math.max(0, Math.round((money - spent + Number.EPSILON) * 100) / 100);
    const unitLabel = translatedUnit || t("unit_abbr", { defaultValue: "un." });

    if (change > 0) {
      const template = t("budget_yield_remainder", {
        defaultValue: "Leva {qty} {unit} (sobram {change})",
      });
      return template
        .replace("{qty}", String(currentQuantity))
        .replace("{unit}", unitLabel)
        .replace("{change}", formatCleanCurrency(change));
    }

    const exactTemplate = t("budget_yield_exact", {
      defaultValue: "Valor exato para {qty} {unit}",
    });
    return exactTemplate
      .replace("{qty}", String(currentQuantity))
      .replace("{unit}", unitLabel);
  }, [rawBudgetValue, unitPriceFinal, currentQuantity, translatedUnit, t]);

  const confirmedQuantityLabel = useMemo(() => {
    const unitLabel = translatedUnit || t("unit_abbr", { defaultValue: "un." });
    const isPlural = currentQuantity > 1;

    const defaultTemplate = isPlural
      ? "{qty} {unit} selecionadas"
      : "{qty} {unit} selecionada";

    const rawString = t("confirmed_quantity_summary", {
      defaultValue: defaultTemplate,
    });

    return rawString
      .replace("{qty}", String(currentQuantity))
      .replace("{unit}", unitLabel);
  }, [currentQuantity, translatedUnit, t]);

  const cartPayload = useMemo<CartItemPayload>(() => ({
    productId: productId || "product_default",
    name: productName || "Produto",
    price: unitPriceFinal,
    unitPriceFinal,
    quantity: currentQuantity,
    unit: translatedUnit || "un",
    mainImage: productImage || "",
    selectedOptions: selectedOptions || {},
    customNote: (customNote || "").trim(),
    storeSlug: storeSlug || "",
    storeName: activeStoreName,
    storeWhatsApp: activeWhatsApp,
    addedAt: new Date().toISOString(),
  }), [
    productId, 
    productName, 
    unitPriceFinal, 
    currentQuantity, 
    translatedUnit, 
    productImage, 
    selectedOptions, 
    customNote, 
    storeSlug, 
    activeStoreName, 
    activeWhatsApp
  ]);

  const activeOptionEntries = useMemo(() => {
    const entries = Object.entries(selectedOptions || {});
    if (entries.length === 0) return [];

    return entries.map(([rawLabel, rawValue]) => {
      const info = getSpecGroupInfo(rawLabel, t);
      const translatedValue = translateTagItem(rawValue, t);
      const emoji = getSmartTagEmoji(rawValue);

      return {
        rawLabel,
        translatedLabel: info.translatedLabel,
        translatedValue,
        emoji,
      };
    });
  }, [selectedOptions, t]);

  // Ação de Confirmação: executa a função pai que grava no localStorage
  const onWhatsAppCheckoutClick = useCallback(() => {
    if (isEditorRoute) return;

    if (handleWhatsAppOrder) {
      handleWhatsAppOrder();
      return;
    }

    // Fallback de segurança se handleWhatsAppOrder não for provido
    const pid = productId || productName || "item";
    const optsStr = Object.keys(selectedOptions || {}).length > 0 ? JSON.stringify(selectedOptions) : "";
    const currentLineItemId = `${pid}_${optsStr}_${customNote.trim()}`;

    const currentItemPayload = {
      lineItemId: currentLineItemId,
      productId: productId || undefined,
      name: productName,
      price: unitPriceFinal,
      unitPriceFinal,
      quantity: currentQuantity,
      unit: translatedUnit || "un",
      mainImage: productImage,
      storeSlug,
      storeWhatsApp: activeWhatsApp,
      selectedOptions: Object.keys(selectedOptions || {}).length > 0 ? selectedOptions : undefined,
      customNote: customNote.trim() || undefined,
    };

    try {
      const calculatedTotalPrice = unitPriceFinal * currentQuantity;
      const newSentOrder = {
        id: `order_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        sentAt: new Date().toLocaleDateString(undefined, { hour: "2-digit", minute: "2-digit" }),
        sentTimestamp: Date.now(),
        storeSlug,
        storeWhatsApp: activeWhatsApp,
        totalPrice: calculatedTotalPrice,
        totalQty: currentQuantity,
        items: [currentItemPayload],
      };

      const rawSent = localStorage.getItem(STORAGE_SENT_KEY);
      const currentSent = rawSent ? JSON.parse(rawSent) : [];
      localStorage.setItem(STORAGE_SENT_KEY, JSON.stringify([newSentOrder, ...currentSent]));

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
    } catch (err) {
      console.error("Falha ao salvar no storage de enviados:", err);
    }

    if (!activeWhatsApp) return;

    const unitLabel = translatedUnit || "un";
    const shopDisplayName = activeStoreName;

    const lines: string[] = [
      `🛒 *${t("order_request_title", { defaultValue: "Novo Pedido" })}*${shopDisplayName ? ` - ${shopDisplayName}` : ""}`,
      `📦 *${t("product", { defaultValue: "Produto" })}:* ${productName || t("product_item", { defaultValue: "Item" })}`,
      `🔢 *${t("product_details_quantity", { defaultValue: "Quantidade" })}:* ${currentQuantity} ${unitLabel}`,
    ];

    if (activeOptionEntries.length > 0) {
      lines.push(`⚙️ *${t("selected_specs", { defaultValue: "Opções Escolhidas" })}:*`);
      activeOptionEntries.forEach(({ translatedLabel, translatedValue, emoji }) => {
        lines.push(`  • ${translatedLabel}: ${emoji ? `${emoji} ` : ""}${translatedValue}`);
      });
    }

    if (customNote.trim()) {
      lines.push(`📝 *${t("preference_note", { defaultValue: "Preferência / Nota" })}:* ${customNote.trim()}`);
    }

    lines.push(`💰 *${t("product_details_final_value", { defaultValue: "Total do Pedido" })}:* ${localizedTotalPrice}`);

    const encodedMsg = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/${activeWhatsApp}?text=${encodedMsg}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  }, [
    isEditorRoute,
    handleWhatsAppOrder,
    productId,
    productName,
    unitPriceFinal,
    currentQuantity,
    translatedUnit,
    productImage,
    storeSlug,
    activeWhatsApp,
    selectedOptions,
    customNote,
    activeStoreName,
    activeOptionEntries,
    localizedTotalPrice,
    t
  ]);

  const styles = useMemo(() => ({
    wrapper: isLightOnly
      ? "border-slate-200 bg-slate-50/90 text-slate-900"
      : "border-slate-200/90 bg-slate-50/90 text-slate-900 dark:border-zinc-800/90 dark:bg-zinc-900/90 dark:text-zinc-100",
    surface: isLightOnly
      ? "border-slate-200 bg-white"
      : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
    btnCounter: isLightOnly
      ? "text-slate-700 active:bg-slate-100"
      : "text-slate-700 active:bg-slate-100 dark:text-zinc-300 dark:active:bg-zinc-800",
    totalPrice: isLightOnly
      ? "text-emerald-700"
      : "text-emerald-700 dark:text-emerald-400",
    optionChip: isLightOnly
      ? "bg-emerald-50 text-emerald-900 border-emerald-200/80"
      : "bg-emerald-50 text-emerald-900 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60",
    subtleText: softMutedTextClass || (isLightOnly ? "text-slate-500" : "text-slate-500 dark:text-zinc-400"),
    headingText: strongTextClass || (isLightOnly ? "text-slate-900" : "text-slate-900 dark:text-zinc-100"),
  }), [isLightOnly, softMutedTextClass, strongTextClass]);

  return (
    <div
      style={{ contain: "layout paint" }}
      className={`w-full max-w-full overflow-hidden box-border rounded-2xl border p-3.5 sm:p-4 shadow-xs ${styles.wrapper} ${panelClass}`}
    >
      {/* 1. Opções Escolhidas */}
      {activeOptionEntries.length > 0 && (
        <div className="mb-3 w-full min-w-0">
          <div className="flex items-center gap-1.5 mb-1.5">
            <SlidersHorizontal size={11} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${styles.subtleText}`}>
              {t("selected_specs", { defaultValue: "Opções Escolhidas" })}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 w-full">
            {activeOptionEntries.map(({ rawLabel, translatedLabel, translatedValue, emoji }) => (
              <span
                key={rawLabel}
                className={`inline-flex items-center gap-1.5 max-w-full rounded-md border px-2 py-0.5 text-[11px] font-semibold truncate ${styles.optionChip}`}
              >
                <span className="opacity-60 shrink-0">{translatedLabel}:</span>
                <span className="truncate max-w-[130px] sm:max-w-[200px] inline-flex items-center gap-1">
                  {emoji && <span className="text-xs leading-none">{emoji}</span>}
                  <span>{translatedValue}</span>
                </span>
                {onClearOption && !isEditorRoute && (
                  <button
                    type="button"
                    onClick={() => onClearOption(rawLabel)}
                    aria-label={`${t("remove", { defaultValue: "Remover" })} ${translatedLabel}`}
                    className="p-0.5 rounded opacity-60 hover:opacity-100 shrink-0 cursor-pointer"
                  >
                    <X size={10} strokeWidth={2.5} />
                  </button>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 2. Seletor de Modo de Compra (Quantidade vs Orçamento) */}
      <div className="mb-3 w-full min-w-0">
        <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-200/60 dark:bg-zinc-800/60 text-xs font-bold mb-2.5">
          <button
            type="button"
            onClick={() => setPurchaseMode("qty")}
            className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              purchaseMode === "qty"
                ? "bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 shadow-2xs"
                : "text-slate-500 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            <Layers size={13} />
            <span>{t("mode_by_qty", { defaultValue: "Por Quantidade" })}</span>
          </button>

          <button
            type="button"
            onClick={() => setPurchaseMode("budget")}
            className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              purchaseMode === "budget"
                ? "bg-white dark:bg-zinc-950 text-emerald-700 dark:text-emerald-400 shadow-2xs"
                : "text-slate-500 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            <Coins size={13} />
            <span>{t("mode_by_budget", { defaultValue: "Pelo meu Dinheiro" })}</span>
          </button>
        </div>

        {/* Visão 1: Por Quantidade */}
        {purchaseMode === "qty" && (
          <div className="flex flex-col gap-1 w-full min-w-0">
            <div className={`flex h-11 w-full min-w-0 items-center justify-between rounded-xl border ${styles.surface}`}>
              <button
                type="button"
                disabled={isMin}
                onClick={handleDecrement}
                aria-label={t("decrease_quantity", { defaultValue: "Diminuir quantidade" })}
                className={`flex h-full w-12 shrink-0 items-center justify-center transition-colors disabled:opacity-20 cursor-pointer ${styles.btnCounter}`}
              >
                <Minus size={16} strokeWidth={2.4} />
              </button>

              <div className="flex items-center justify-center flex-1 min-w-0 px-1">
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={currentQuantity}
                  onChange={handleQuantityInputChange}
                  aria-label={t("product_details_quantity", { defaultValue: "Quantidade" })}
                  className={`w-14 text-center text-lg sm:text-base font-black tabular-nums bg-transparent focus:outline-none ${styles.headingText}`}
                />
                <span className={`text-xs font-bold uppercase shrink-0 select-none ${styles.subtleText}`}>
                  {translatedUnit || t("unit_abbr", { defaultValue: "un" })}
                </span>
              </div>

              <button
                type="button"
                disabled={isMax}
                onClick={handleIncrement}
                aria-label={t("increase_quantity", { defaultValue: "Aumentar quantidade" })}
                className={`flex h-full w-12 shrink-0 items-center justify-center transition-colors disabled:opacity-20 cursor-pointer ${styles.btnCounter}`}
              >
                <Plus size={16} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        )}

        {/* Visão 2: Pelo Orçamento */}
        {purchaseMode === "budget" && (
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <div className={`flex h-11 w-full min-w-0 items-center rounded-xl border px-3 relative ${styles.surface}`}>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={rawBudgetValue}
                onChange={handleBudgetInputChange}
                placeholder={t("placeholder_budget_simple", { defaultValue: "Quer comprar de quanto? (ex: 500)" })}
                className="w-full min-w-0 bg-transparent text-base sm:text-sm font-bold text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none tabular-nums"
              />
              {rawBudgetValue && (
                <button
                  type="button"
                  onClick={handleClearBudget}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 cursor-pointer"
                  aria-label={t("clear", { defaultValue: "Limpar" })}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 shrink-0">
                {t("quick_values", { defaultValue: "Sugestões:" })}
              </span>
              {quickChips.map((chipVal) => (
                <button
                  key={chipVal}
                  type="button"
                  onClick={() => applyBudget(String(chipVal))}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors shrink-0 ${
                    rawBudgetValue === String(chipVal)
                      ? "bg-emerald-600 text-white shadow-2xs"
                      : "bg-slate-200/80 hover:bg-slate-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300"
                  }`}
                >
                  {chipVal}
                </button>
              ))}
            </div>

            {budgetFeedback && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-xl border border-emerald-200/70 dark:border-emerald-800/40 mt-1">
                <Sparkles size={13} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="truncate">{budgetFeedback}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. Totalizador do Pedido */}
      <div className="flex items-center justify-between border-t border-slate-200/70 dark:border-zinc-800/80 pt-2.5 mb-3 w-full min-w-0">
        <div className="flex flex-col min-w-0">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${styles.subtleText}`}>
            {t("product_details_final_value", { defaultValue: "Total do Pedido" })}
          </span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">
            {confirmedQuantityLabel}
          </span>
        </div>

        <span className={`text-lg sm:text-xl font-black tabular-nums tracking-tight truncate pl-2 ${styles.totalPrice}`}>
          {localizedTotalPrice}
        </span>
      </div>

      {/* 4. Nota Adicional / Preferência */}
      {!isEditorRoute && (
        <div className="relative mb-3 w-full min-w-0">
          <div className="pointer-events-none absolute left-3 top-2.5 text-slate-400 dark:text-zinc-500">
            <MessageSquarePlus size={14} />
          </div>

          <input
            type="text"
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            maxLength={180}
            placeholder={t("add_note_placeholder", { defaultValue: "Alguma preferência? (ex: ponto de entrega, cor)..." })}
            className={`h-9 w-full min-w-0 rounded-xl border pl-8 pr-3 text-base sm:text-xs font-medium placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 transition-colors ${
              isLightOnly
                ? "border-slate-200 bg-white text-slate-800"
                : "border-slate-200 bg-white text-slate-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            }`}
          />
        </div>
      )}

      {/* 5. Ações (Ao Carrinho + WhatsApp) */}
      <div className="w-full min-w-0 flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-2 w-full min-w-0">
          <AddToCartButton
            payload={cartPayload}
            storeName={activeStoreName}
            storeWhatsApp={activeWhatsApp}
            disabled={isEditorRoute}
            onAddToCart={onAddToCart}
            onOpenCart={onOpenCart}
            t={t}
            className="w-full"
          />

          <button
            type="button"
            onClick={onWhatsAppCheckoutClick}
            disabled={isEditorRoute}
            aria-disabled={isEditorRoute}
            className={`flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl px-4 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors select-none ${
              isEditorRoute
                ? "cursor-not-allowed bg-slate-300 text-slate-500 opacity-80 select-none shadow-none"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-[0.99] cursor-pointer"
            }`}
          >
            <MessageCircle size={16} className="fill-current shrink-0" />
            <span className="truncate">
              {t("product_details_confirm_whatsapp", { defaultValue: "Pedir pelo WhatsApp" })}
            </span>
          </button>
        </div>

        <div className={`mt-1 flex items-center justify-center gap-4 text-[10px] font-medium ${styles.subtleText}`}>
          <span className="flex items-center gap-1 shrink-0">
            <ShieldCheck size={12} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            {t("safe_contact", { defaultValue: "Atendimento Seguro" })}
          </span>
          <span className="flex items-center gap-1 shrink-0">
            <Zap size={12} className="text-amber-500 shrink-0" />
            {t("fast_response", { defaultValue: "Resposta Rápida" })}
          </span>
        </div>
      </div>
    </div>
  );
});

ProductCheckout.displayName = "ProductCheckout";