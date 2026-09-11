import React, { useEffect, useState, useCallback, useMemo, useRef, memo } from "react";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  ArrowRight, 
  Store, 
  Tag, 
  Layers, 
  CheckCircle2, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  AlertTriangle, 
  Share2 
} from "lucide-react";
import { useTranslate } from "../../../context/LanguageContext";
import type { CartItemPayload } from "../componentsAdmim/AddToCartButton";
import { FALLBACK_PRODUCT } from "../../../utils/constants";

export const FALLBACK_PRODUCT_IMAGE = FALLBACK_PRODUCT;

const STORAGE_CART_KEY = "storely_cart_items";
const STORAGE_SENT_KEY = "storely_sent_orders";
const SENT_ORDER_TTL_MS = 30 * 24 * 60 * 60 * 1000;

// Formatador numérico único estável
const NUMBER_FORMATTER = new Intl.NumberFormat();

type TranslationKey = Parameters<ReturnType<typeof useTranslate>["t"]>[0];

const UNIT_TRANSLATION_KEY_MAP = {
  un: "product_form_unit_un",
  peca: "product_form_unit_peca",
  pacote: "product_form_unit_pacote",
  caixa: "product_form_unit_caixa",
  kit: "product_form_unit_kit",
  conjunto: "product_form_unit_conjunto",
  par: "product_form_unit_par",
  kg: "product_form_unit_kg",
  g: "product_form_unit_g",
  l: "product_form_unit_l",
  ml: "product_form_unit_ml",
  fardo: "product_form_unit_fardo",
  cento: "product_form_unit_cento",
  servico: "product_form_unit_servico",
  hora: "product_form_unit_hora",
  dia: "product_form_unit_dia",
  semana: "product_form_unit_semana",
  mes: "product_form_unit_mes",
  ano: "product_form_unit_ano",
  m: "product_form_unit_m",
  cm: "product_form_unit_cm",
  mm: "product_form_unit_mm",
  rolo: "product_form_unit_rolo",
  m2: "product_form_unit_m2",
  m3: "product_form_unit_m3",
  t: "product_form_unit_t",
} as const;

// Cache em memória para evitar normalização contínua na CPU
const unitCache = new Map<string, string>();

function normalizeUnitKey(raw: string): keyof typeof UNIT_TRANSLATION_KEY_MAP | null {
  const clean = raw
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/²/g, "2")
    .replace(/³/g, "3");

  if (clean in UNIT_TRANSLATION_KEY_MAP) {
    return clean as keyof typeof UNIT_TRANSLATION_KEY_MAP;
  }

  if (clean === "unidade" || clean === "unit") return "un";
  if (clean === "pecas" || clean === "piece" || clean === "pieces") return "peca";
  if (clean === "pacotes" || clean === "pack" || clean === "packs") return "pacote";
  if (clean === "caixas" || clean === "box" || clean === "boxes") return "caixa";
  if (clean === "conjuntos" || clean === "set" || clean === "sets") return "conjunto";
  if (clean === "pares" || clean === "pair" || clean === "pairs") return "par";
  if (clean === "quilo" || clean === "quilos" || clean === "kilo" || clean === "kilos") return "kg";
  if (clean === "grama" || clean === "gramas" || clean === "gram" || clean === "grams") return "g";
  if (clean === "litro" || clean === "litros" || clean === "liter" || clean === "liters") return "l";
  if (clean === "servicos" || clean === "service" || clean === "services") return "servico";
  if (clean === "horas" || clean === "hour" || clean === "hours") return "hora";
  if (clean === "dias" || clean === "day" || clean === "days") return "dia";
  if (clean === "semanas" || clean === "week" || clean === "weeks") return "semana";
  if (clean === "meses" || clean === "month" || clean === "months") return "mes";
  if (clean === "anos" || clean === "year" || clean === "years") return "ano";
  if (clean === "metros" || clean === "meter" || clean === "meters") return "m";
  if (clean === "rolos" || clean === "roll" || clean === "rolls") return "rolo";
  if (clean === "tonelada" || clean === "toneladas" || clean === "ton" || clean === "tons") return "t";

  return null;
}

function getTranslatedUnit(unit: string | null | undefined, t: (key: any, ...args: any[]) => string): string {
  if (!unit || !unit.trim()) {
    return t(UNIT_TRANSLATION_KEY_MAP.un as any) || "un";
  }

  if (unitCache.has(unit)) {
    const cachedKey = unitCache.get(unit)!;
    return t(cachedKey as any) || unit;
  }

  if (unit.startsWith("product_form_unit_")) {
    const translated = t(unit as any);
    if (translated && translated !== unit) return translated;
  }

  const matchedKey = normalizeUnitKey(unit);
  if (matchedKey && UNIT_TRANSLATION_KEY_MAP[matchedKey]) {
    const translationKey = UNIT_TRANSLATION_KEY_MAP[matchedKey];
    unitCache.set(unit, translationKey);
    const translated = t(translationKey as any);
    if (translated && translated !== translationKey) {
      return translated;
    }
  }

  return unit;
}

export interface StoreBottomCartSheetProps {
  storeCurrency?: string;
  storeSlug?: string;
  onScrollContainer?: (e: React.UIEvent<HTMLDivElement>) => void;
  onCloseCart?: () => void;
}

interface GroupedCartProduct {
  baseKey: string;
  productId?: string;
  name: string;
  unit: string;
  mainImage?: string | null;
  totalGroupQty: number;
  totalGroupPrice: number;
  variations: CartItemPayload[];
}

interface SentOrderBatch {
  id: string;
  sentAt: string;
  sentTimestamp: number;
  storeSlug: string;
  storeWhatsApp: string;
  totalPrice: number;
  totalQty: number;
  items: CartItemPayload[];
}

interface ConfirmDialogState {
  isOpen: boolean;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  confirmBtnKey: TranslationKey;
  isDestructive?: boolean;
  onConfirm: () => void;
}

function getLineItemKey(item: Partial<CartItemPayload>): string {
  if (item.lineItemId && String(item.lineItemId).trim()) {
    return String(item.lineItemId).trim();
  }
  const pid = item.productId || item.name || "item";
  const opts = item.selectedOptions ? JSON.stringify(item.selectedOptions) : "";
  return `${pid}_${opts}_${item.customNote || ""}`;
}

// Subcomponente memoizado para item de variação (evita re-render de toda a lista)
const VariationRow = memo(function VariationRow({
  item,
  storeCurrency,
  groupUnit,
  hasMultipleVariations,
  onUpdateQty,
  onRemoveItem,
  t,
}: {
  item: CartItemPayload;
  storeCurrency: string;
  groupUnit: string;
  hasMultipleVariations: boolean;
  onUpdateQty: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  t: (key: any, ...args: any[]) => string;
}) {
  const itemKey = useMemo(() => getLineItemKey(item), [item]);
  const unitPrice = Number(item.unitPriceFinal || item.price || 0);
  const qty = Number(item.quantity || 1);
  const itemSubtotal = unitPrice * qty;
  const currentItemUnit = useMemo(() => getTranslatedUnit(item.unit || groupUnit, t), [item.unit, groupUnit, t]);
  const optionsEntries = useMemo(() => item.selectedOptions ? Object.entries(item.selectedOptions) : [], [item.selectedOptions]);

  return (
    <div className="p-2.5 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transform-gpu">
      <div className="min-w-0 flex-1">
        {optionsEntries.length > 0 ? (
          <div className="flex flex-wrap items-center gap-1">
            {optionsEntries.map(([k, v]) => (
              <span
                key={k}
                className="inline-flex items-center gap-1 text-[10px] font-semibold bg-white/10 text-zinc-200 px-2 py-0.5 rounded-md border border-white/5"
              >
                <Tag size={8} className="opacity-60 shrink-0" />
                <span>{k}: <strong className="text-white">{v}</strong></span>
              </span>
            ))}
          </div>
        ) : (
          <span className="text-[11px] font-medium text-zinc-400">
            {t("cart_default_variation" as any, { defaultValue: "Padrão" })}
          </span>
        )}

        {item.customNote && (
          <p className="text-[10px] text-zinc-400 italic mt-0.5 break-words">
            {t("cart_observation_prefix" as any, { defaultValue: "Obs:" })} {item.customNote}
          </p>
        )}

        <p className="text-[10.5px] text-zinc-400 mt-0.5 tabular-nums font-medium">
          {NUMBER_FORMATTER.format(unitPrice)} {storeCurrency} / {currentItemUnit}
        </p>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-2.5 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-white/[0.04] shrink-0">
        <div className="flex items-center bg-black/60 border border-white/15 rounded-lg p-0.5 shrink-0">
          <button
            type="button"
            onClick={() => onUpdateQty(itemKey, -1)}
            disabled={qty <= 1}
            className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-20 active:bg-white/10 rounded"
          >
            <Minus size={11} strokeWidth={2.5} />
          </button>
          <span className="text-xs font-black text-white px-2 min-w-[20px] text-center tabular-nums">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQty(itemKey, 1)}
            className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-emerald-400 active:bg-white/10 rounded"
          >
            <Plus size={11} strokeWidth={2.5} />
          </button>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs font-black text-emerald-400 tabular-nums">
            {NUMBER_FORMATTER.format(itemSubtotal)} {storeCurrency}
          </span>
        </div>

        {hasMultipleVariations && (
          <button
            type="button"
            onClick={() => onRemoveItem(itemKey)}
            className="p-1.5 text-zinc-400 hover:text-rose-400 active:bg-rose-500/10 rounded"
            title={t("cart_remove_item" as any, { defaultValue: "Remover variação" })}
          >
            <Trash2 size={13} />
          </button>
        )}
      </div>
    </div>
  );
});

export function StoreBottomCartSheet({
  storeCurrency = "MZN",
  storeSlug = "",
  onScrollContainer,
  onCloseCart,
}: StoreBottomCartSheetProps) {
  const { t } = useTranslate();
  const [items, setItems] = useState<CartItemPayload[]>([]);
  const [sentOrders, setSentOrders] = useState<SentOrderBatch[]>([]);
  const [activeTab, setActiveTab] = useState<"cart" | "sent">("cart");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);

  const isOperatingRef = useRef(false);

  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState>({
    isOpen: false,
    titleKey: "confirm_action_title" as TranslationKey,
    descKey: "confirm_delete_item_desc" as TranslationKey,
    confirmBtnKey: "confirm_delete_button" as TranslationKey,
    isDestructive: true,
    onConfirm: () => {},
  });

  const syncItems = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      if (raw) {
        const parsed: CartItemPayload[] = JSON.parse(raw);
        const normalizedCart: CartItemPayload[] = [];
        for (let i = 0; i < parsed.length; i++) {
          const it = parsed[i];
          const matches = !storeSlug || (it.storeSlug || "").toLowerCase() === storeSlug.toLowerCase();
          if (matches) {
            normalizedCart.push({
              ...it,
              lineItemId: getLineItemKey(it),
            });
          }
        }
        setItems(normalizedCart);
      } else {
        setItems([]);
      }

      const rawSent = localStorage.getItem(STORAGE_SENT_KEY);
      if (rawSent) {
        const parsedSent: SentOrderBatch[] = JSON.parse(rawSent);
        const now = Date.now();
        const validSent: SentOrderBatch[] = [];
        let hasExpired = false;

        for (let i = 0; i < parsedSent.length; i++) {
          const order = parsedSent[i];
          const orderTime = Number(order.sentTimestamp || 0);

          if (orderTime > 0 && now - orderTime > SENT_ORDER_TTL_MS) {
            hasExpired = true;
          } else {
            validSent.push(order);
          }
        }

        if (hasExpired) {
          localStorage.setItem(STORAGE_SENT_KEY, JSON.stringify(validSent));
        }

        if (storeSlug) {
          setSentOrders(validSent.filter((o) => (o.storeSlug || "").toLowerCase() === storeSlug.toLowerCase()));
        } else {
          setSentOrders(validSent);
        }
      } else {
        setSentOrders([]);
      }
    } catch {
      setItems([]);
      setSentOrders([]);
    }
  }, [storeSlug]);

  useEffect(() => {
    syncItems();
    const handleSync = () => syncItems();
    window.addEventListener("storely:cart:sync", handleSync, { passive: true });
    window.addEventListener("storely:cart:add", handleSync, { passive: true });

    return () => {
      window.removeEventListener("storely:cart:sync", handleSync);
      window.removeEventListener("storely:cart:add", handleSync);
    };
  }, [syncItems]);

  const updateQuantity = useCallback((targetKey: string, delta: number) => {
    if (!targetKey || isOperatingRef.current) return;
    isOperatingRef.current = true;

    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      let list: CartItemPayload[] = raw ? JSON.parse(raw) : [];

      list = list.map((it) => {
        const itemKey = getLineItemKey(it);
        if (itemKey === targetKey) {
          const newQty = Math.max(1, (it.quantity || 1) + delta);
          return { ...it, lineItemId: itemKey, quantity: newQty };
        }
        return it;
      });

      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(list));
      window.dispatchEvent(new Event("storely:cart:sync"));
    } finally {
      isOperatingRef.current = false;
    }
  }, []);

  const performRemoveItem = useCallback((targetKey: string) => {
    if (!targetKey || isOperatingRef.current) return;
    isOperatingRef.current = true;

    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      let list: CartItemPayload[] = raw ? JSON.parse(raw) : [];

      list = list.filter((it) => getLineItemKey(it) !== targetKey);

      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(list));
      window.dispatchEvent(new Event("storely:cart:sync"));
    } finally {
      isOperatingRef.current = false;
    }
  }, []);

  const performRemoveEntireGroup = useCallback((variations: CartItemPayload[]) => {
    if (isOperatingRef.current) return;
    isOperatingRef.current = true;

    try {
      const keysToRemove = new Set(variations.map((v) => getLineItemKey(v)));
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      let list: CartItemPayload[] = raw ? JSON.parse(raw) : [];

      list = list.filter((it) => !keysToRemove.has(getLineItemKey(it)));

      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(list));
      window.dispatchEvent(new Event("storely:cart:sync"));
    } finally {
      isOperatingRef.current = false;
    }
  }, []);

  const performClearCart = useCallback(() => {
    if (isOperatingRef.current) return;
    isOperatingRef.current = true;

    try {
      if (storeSlug) {
        const raw = localStorage.getItem(STORAGE_CART_KEY);
        const parsed: CartItemPayload[] = raw ? JSON.parse(raw) : [];
        const remaining = parsed.filter((i) => (i.storeSlug || "").toLowerCase() !== storeSlug.toLowerCase());
        localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(remaining));
      } else {
        localStorage.removeItem(STORAGE_CART_KEY);
      }
      window.dispatchEvent(new Event("storely:cart:sync"));
    } finally {
      isOperatingRef.current = false;
    }
  }, [storeSlug]);

  const performClearSentHistory = useCallback(() => {
    if (isOperatingRef.current) return;
    isOperatingRef.current = true;

    try {
      if (storeSlug) {
        const raw = localStorage.getItem(STORAGE_SENT_KEY);
        const parsed: SentOrderBatch[] = raw ? JSON.parse(raw) : [];
        const remaining = parsed.filter((o) => (o.storeSlug || "").toLowerCase() !== storeSlug.toLowerCase());
        localStorage.setItem(STORAGE_SENT_KEY, JSON.stringify(remaining));
      } else {
        localStorage.removeItem(STORAGE_SENT_KEY);
      }
      syncItems();
    } finally {
      isOperatingRef.current = false;
    }
  }, [storeSlug, syncItems]);

  const requestRemoveItem = useCallback((targetKey: string, isVariation = false) => {
    setConfirmDialog({
      isOpen: true,
      titleKey: "confirm_action_title" as TranslationKey,
      descKey: (isVariation ? "confirm_delete_variation_desc" : "confirm_delete_item_desc") as TranslationKey,
      confirmBtnKey: "confirm_delete_button" as TranslationKey,
      isDestructive: true,
      onConfirm: () => performRemoveItem(targetKey),
    });
  }, [performRemoveItem]);

  const requestRemoveEntireGroup = useCallback((variations: CartItemPayload[]) => {
    setConfirmDialog({
      isOpen: true,
      titleKey: "confirm_action_title" as TranslationKey,
      descKey: "confirm_delete_group_desc" as TranslationKey,
      confirmBtnKey: "confirm_delete_button" as TranslationKey,
      isDestructive: true,
      onConfirm: () => performRemoveEntireGroup(variations),
    });
  }, [performRemoveEntireGroup]);

  const requestClearCart = useCallback(() => {
    setConfirmDialog({
      isOpen: true,
      titleKey: "confirm_action_title" as TranslationKey,
      descKey: "confirm_clear_cart_desc" as TranslationKey,
      confirmBtnKey: "confirm_clear_button" as TranslationKey,
      isDestructive: true,
      onConfirm: () => performClearCart(),
    });
  }, [performClearCart]);

  const requestClearSentHistory = useCallback(() => {
    setConfirmDialog({
      isOpen: true,
      titleKey: "confirm_action_title" as TranslationKey,
      descKey: "confirm_clear_history_desc" as TranslationKey,
      confirmBtnKey: "confirm_clear_button" as TranslationKey,
      isDestructive: true,
      onConfirm: () => performClearSentHistory(),
    });
  }, [performClearSentHistory]);

  const closeConfirmDialog = useCallback(() => {
    setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const toggleGroupExpand = useCallback((baseKey: string) => {
    setExpandedGroups((prev) => ({ ...prev, [baseKey]: !prev[baseKey] }));
  }, []);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_PRODUCT_IMAGE) {
      target.src = FALLBACK_PRODUCT_IMAGE;
    }
  }, []);

  // Agrupamento determinístico leve
  const groupedProducts = useMemo((): GroupedCartProduct[] => {
    const map = new Map<string, GroupedCartProduct>();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const baseKey = String(item.productId || item.name || i).trim().toLowerCase();
      const unit = Number(item.unitPriceFinal || item.price || 0);
      const qty = Number(item.quantity || 1);
      const itemTotal = unit * qty;

      const existing = map.get(baseKey);
      if (!existing) {
        map.set(baseKey, {
          baseKey,
          productId: item.productId,
          name: item.name,
          unit: item.unit || "un",
          mainImage: item.mainImage || null,
          totalGroupQty: qty,
          totalGroupPrice: itemTotal,
          variations: [item],
        });
      } else {
        existing.totalGroupQty += qty;
        existing.totalGroupPrice += itemTotal;
        existing.variations.push(item);
        if (!existing.mainImage && item.mainImage) {
          existing.mainImage = item.mainImage;
        }
        if ((!existing.unit || existing.unit === "un") && item.unit) {
          existing.unit = item.unit;
        }
      }
    }

    return Array.from(map.values());
  }, [items]);

  const totalQuantity = useMemo(() => items.reduce((acc, it) => acc + (it.quantity || 1), 0), [items]);
  const totalPrice = useMemo(() => items.reduce((acc, it) => acc + (it.unitPriceFinal || it.price || 0) * (it.quantity || 1), 0), [items]);

  const formatOrderContent = useCallback((selectedItems: CartItemPayload[]) => {
    const storeLabel = storeSlug ? storeSlug.toUpperCase() : t("cart_default_store" as any, { defaultValue: "LOJA" });
    const subtotalBatch = selectedItems.reduce(
      (acc, it) => acc + Number(it.unitPriceFinal || it.price || 0) * Number(it.quantity || 1),
      0
    );
    const qtyBatch = selectedItems.reduce((acc, it) => acc + Number(it.quantity || 1), 0);

    const orderHeaderTitle = t("cart_whatsapp_order_header" as any, { defaultValue: "NOVO PEDIDO" });
    const variationLabel = t("cart_whatsapp_variation_label" as any, { defaultValue: "Variação" });
    const qtyLabel = t("cart_whatsapp_qty_label" as any, { defaultValue: "Qtd" });
    const obsLabel = t("cart_whatsapp_obs_label" as any, { defaultValue: "Obs" });
    const photoLabel = t("cart_whatsapp_photo_label" as any, { defaultValue: "Foto" });
    const totalItemsLabel = t("cart_whatsapp_total_items_label" as any, { defaultValue: "Total de Itens" });
    const totalPayableLabel = t("cart_whatsapp_total_payable_label" as any, { defaultValue: "TOTAL A PAGAR" });
    const closingGreeting = t("cart_whatsapp_closing_greeting" as any, {
      defaultValue: "Olá! Gostaria de confirmar a disponibilidade e o envio deste pedido.",
    });
    const defaultVariationName = t("cart_default_variation" as any, { defaultValue: "Padrão" });

    let textMsg = `🛍️ *${orderHeaderTitle}* - *${storeLabel}*\n`;
    textMsg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

    selectedItems.forEach((item, idx) => {
      const unitPrice = Number(item.unitPriceFinal || item.price || 0);
      const qty = Number(item.quantity || 1);
      const itemTotal = unitPrice * qty;
      const translatedItemUnit = getTranslatedUnit(item.unit, t);

      const opts = item.selectedOptions && Object.keys(item.selectedOptions).length > 0
        ? Object.entries(item.selectedOptions).map(([k, v]) => `${k}: ${v}`).join(", ")
        : defaultVariationName;

      textMsg += `*${idx + 1}. ${item.name}*\n`;
      textMsg += `   ▫️ ${variationLabel}: ${opts}\n`;
      textMsg += `   ▫️ ${qtyLabel}: *${qty} ${translatedItemUnit}* (${NUMBER_FORMATTER.format(unitPrice)} ${storeCurrency}) = *${NUMBER_FORMATTER.format(itemTotal)} ${storeCurrency}*\n`;

      if (item.customNote) {
        textMsg += `   ▫️ ${obsLabel}: _${item.customNote}_\n`;
      }
      if (item.mainImage && item.mainImage.startsWith("http")) {
        textMsg += `   ▫️ ${photoLabel}: ${item.mainImage}\n`;
      }
      textMsg += `\n`;
    });

    textMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    textMsg += `📦 *${totalItemsLabel}:* ${qtyBatch}\n`;
    textMsg += `💰 *${totalPayableLabel}: ${NUMBER_FORMATTER.format(subtotalBatch)} ${storeCurrency}*\n`;
    textMsg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    textMsg += `${closingGreeting}`;

    return { textMsg, subtotalBatch, qtyBatch };
  }, [storeSlug, storeCurrency, t]);

  const executeWhatsAppCheckout = async (selectedItems: CartItemPayload[]) => {
    if (selectedItems.length === 0 || isOperatingRef.current || isProcessingCheckout) return;
    isOperatingRef.current = true;
    setIsProcessingCheckout(true);

    try {
      const phone = selectedItems[0]?.storeWhatsApp || "";
      const cleanPhone = phone.replace(/[^0-9]/g, "");
      const { textMsg, subtotalBatch, qtyBatch } = formatOrderContent(selectedItems);

      const newSentOrder: SentOrderBatch = {
        id: `order_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        sentAt: new Date().toLocaleDateString(undefined, { hour: "2-digit", minute: "2-digit" }),
        sentTimestamp: Date.now(),
        storeSlug,
        storeWhatsApp: phone,
        totalPrice: subtotalBatch,
        totalQty: qtyBatch,
        items: selectedItems,
      };

      const rawSent = localStorage.getItem(STORAGE_SENT_KEY);
      const currentSent: SentOrderBatch[] = rawSent ? JSON.parse(rawSent) : [];
      localStorage.setItem(STORAGE_SENT_KEY, JSON.stringify([newSentOrder, ...currentSent]));

      const sentKeys = new Set(selectedItems.map((i) => getLineItemKey(i)));
      const rawCart = localStorage.getItem(STORAGE_CART_KEY);
      const currentCart: CartItemPayload[] = rawCart ? JSON.parse(rawCart) : [];
      const updatedCart = currentCart.filter((i) => !sentKeys.has(getLineItemKey(i)));
      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(updatedCart));

      window.dispatchEvent(new Event("storely:cart:sync"));

      let sharedSuccessfully = false;

      if (typeof navigator !== "undefined" && navigator.share) {
        try {
          const filesToShare: File[] = [];

          const firstImage = selectedItems.find((i) => i.mainImage && i.mainImage.startsWith("http"))?.mainImage;
          if (firstImage) {
            try {
              const imgRes = await fetch(firstImage, { mode: "cors", cache: "force-cache" });
              if (imgRes.ok) {
                const blob = await imgRes.blob();
                const ext = blob.type.split("/")[1] || "jpg";
                const imgFile = new File([blob], `produto-pedido.${ext}`, { type: blob.type });
                filesToShare.push(imgFile);
              }
            } catch {
              // Sem foto anexada
            }
          }

          const receiptFile = new File([textMsg], `recibo-${storeSlug || "pedido"}.txt`, {
            type: "text/plain",
          });
          filesToShare.push(receiptFile);

          if (navigator.canShare && navigator.canShare({ files: filesToShare })) {
            const shareTitle = t("cart_share_order_title" as any, {
              defaultValue: "Pedido - {store}",
              store: storeSlug || t("cart_default_store" as any, { defaultValue: "Loja" }),
            }).replace("{store}", storeSlug || t("cart_default_store" as any, { defaultValue: "Loja" }));

            await navigator.share({
              files: filesToShare,
              title: shareTitle,
              text: textMsg,
            });
            sharedSuccessfully = true;
          }
        } catch {
          // Cancelado
        }
      }

      if (!sharedSuccessfully) {
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textMsg)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }

      setActiveTab("sent");
    } finally {
      isOperatingRef.current = false;
      setIsProcessingCheckout(false);
    }
  };

  const handleRestoreToCart = (batch: SentOrderBatch) => {
    if (isOperatingRef.current) return;
    isOperatingRef.current = true;

    try {
      const rawCart = localStorage.getItem(STORAGE_CART_KEY);
      const currentCart: CartItemPayload[] = rawCart ? JSON.parse(rawCart) : [];

      const cartMap = new Map<string, CartItemPayload>();
      for (let i = 0; i < currentCart.length; i++) {
        const item = currentCart[i];
        cartMap.set(getLineItemKey(item), { ...item });
      }

      for (let i = 0; i < batch.items.length; i++) {
        const sentItem = batch.items[i];
        const itemKey = getLineItemKey(sentItem);
        if (cartMap.has(itemKey)) {
          const existing = cartMap.get(itemKey)!;
          existing.quantity = (existing.quantity || 1) + (sentItem.quantity || 1);
        } else {
          cartMap.set(itemKey, { ...sentItem, lineItemId: itemKey });
        }
      }

      const mergedCart = Array.from(cartMap.values());

      const rawSent = localStorage.getItem(STORAGE_SENT_KEY);
      const currentSent: SentOrderBatch[] = rawSent ? JSON.parse(rawSent) : [];
      const updatedSent = currentSent.filter((o) => o.id !== batch.id);

      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(mergedCart));
      localStorage.setItem(STORAGE_SENT_KEY, JSON.stringify(updatedSent));

      window.dispatchEvent(new Event("storely:cart:sync"));
      setActiveTab("cart");
    } finally {
      isOperatingRef.current = false;
    }
  };

  return (
    <div
      className="relative flex flex-col h-full min-h-0 text-zinc-100 select-none bg-[#0c0d12] border-t border-white/10"
      style={{ contain: "layout style" }}
    >
      {/* 1. Header Fixo e Rápido (Sem blur pesado) */}
      <div className="flex flex-col border-b border-white/[0.08] bg-[#111217] shrink-0 px-3.5 sm:px-8 pt-3 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShoppingBag size={17} strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-black tracking-wide uppercase text-zinc-100 truncate">
                {t("cart_title" as any, { defaultValue: "Seu Carrinho" })}
              </h2>
              {storeSlug && (
                <p className="text-[10px] text-zinc-400 flex items-center gap-1 truncate">
                  <Store size={10} className="opacity-60 shrink-0" />
                  <span className="capitalize truncate">{storeSlug}</span>
                </p>
              )}
            </div>
          </div>

          {activeTab === "cart" && items.length > 0 && (
            <button
              type="button"
              onClick={requestClearCart}
              className="text-[11px] font-semibold text-zinc-400 hover:text-rose-400 active:opacity-60 px-2 py-1 rounded-lg shrink-0"
            >
              {t("cart_clear_all" as any, { defaultValue: "Limpar tudo" })}
            </button>
          )}

          {activeTab === "sent" && sentOrders.length > 0 && (
            <button
              type="button"
              onClick={requestClearSentHistory}
              className="text-[11px] font-semibold text-zinc-400 hover:text-rose-400 active:opacity-60 px-2 py-1 rounded-lg shrink-0"
            >
              {t("cart_clear_sent_history" as any, { defaultValue: "Limpar histórico" })}
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 p-1 bg-black/40 border border-white/5 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("cart")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              activeTab === "cart" ? "bg-white/15 text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>{t("cart_tab_active" as any, { defaultValue: "No Carrinho" })}</span>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.2 rounded-full">
              {totalQuantity}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("sent")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              activeTab === "sent" ? "bg-emerald-500/20 text-emerald-300" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <CheckCircle2 size={12} className={activeTab === "sent" ? "text-emerald-400" : "opacity-40"} />
            <span>{t("cart_tab_sent" as any, { defaultValue: "Enviados" })}</span>
            {sentOrders.length > 0 && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded-full">
                {sentOrders.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 2. Área de Rolagem Otimizada */}
      <div
        onScroll={onScrollContainer}
        className="flex-1 overflow-y-auto px-3 sm:px-8 py-3.5 space-y-3 overscroll-contain no-scrollbar"
      >
        <div className="mx-auto w-full max-w-3xl space-y-3">
          {activeTab === "cart" && (
            items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center px-4 max-w-sm mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-500 mb-3">
                  <ShoppingCart size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-zinc-200 mb-1">
                  {t("cart_empty_title" as any, { defaultValue: "O seu carrinho está vazio" })}
                </h3>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  {t("cart_empty_desc" as any, { defaultValue: "Explore o catálogo e adicione produtos para finalizar pelo WhatsApp." })}
                </p>
                {onCloseCart && (
                  <button
                    type="button"
                    onClick={onCloseCart}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors active:opacity-75"
                  >
                    <span>{t("cart_explore_products" as any, { defaultValue: "Explorar Produtos" })}</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            ) : (
              groupedProducts.map((group) => {
                const hasMultipleVariations = group.variations.length > 1;
                const isExpanded = Boolean(expandedGroups[group.baseKey]);
                const cardImg = group.mainImage || FALLBACK_PRODUCT_IMAGE;
                const translatedGroupUnit = getTranslatedUnit(group.unit, t);

                return (
                  <div
                    key={group.baseKey}
                    className="rounded-2xl border border-white/10 overflow-hidden bg-[#0e0e12] shadow-sm transform-gpu"
                    style={{ contain: "layout paint style" }}
                  >
                    {/* Header do Card (Otimizado sem gradientes triplos pesados) */}
                    <div className="relative min-h-[104px] p-3 sm:p-3.5 flex flex-col justify-between gap-2.5 overflow-hidden">
                      <div className="absolute top-0 right-0 bottom-0 w-3/5 sm:w-1/2 pointer-events-none select-none overflow-hidden">
                        <img
                          src={cardImg}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          onError={handleImageError}
                          className="w-full h-full object-cover object-center opacity-30 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e12] to-transparent" />
                      </div>

                      {/* Topo: Miniatura + Título */}
                      <div className="relative z-10 flex items-start gap-3 min-w-0">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-black/60 border border-white/15 shrink-0">
                          <img
                            src={cardImg}
                            alt={group.name}
                            loading="lazy"
                            decoding="async"
                            onError={handleImageError}
                            className="w-full h-full object-cover object-center pointer-events-none"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-sm font-bold text-white leading-snug break-words line-clamp-2">
                            {group.name}
                          </h4>

                          <div className="flex items-baseline gap-1.5 mt-1 flex-wrap">
                            <span className="text-xs sm:text-sm font-black text-emerald-400 tabular-nums tracking-tight">
                              {NUMBER_FORMATTER.format(group.totalGroupPrice)} {storeCurrency}
                            </span>
                            <span className="text-[11px] text-zinc-300 font-medium">
                              ({group.totalGroupQty} {translatedGroupUnit})
                            </span>
                          </div>

                          {hasMultipleVariations && (
                            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                              <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-amber-300 bg-black/70 border border-amber-500/40 px-2 py-0.5 rounded-md">
                                <AlertCircle size={10} className="shrink-0 text-amber-400" />
                                <span>
                                  {t("cart_multiple_variations_badge" as any, {
                                    defaultValue: "{count} variações selecionadas",
                                    count: group.variations.length,
                                  }).replace("{count}", String(group.variations.length))}
                                </span>
                              </span>

                              <button
                                type="button"
                                onClick={() => toggleGroupExpand(group.baseKey)}
                                className="inline-flex items-center gap-1 text-[10px] font-bold text-zinc-200 hover:text-white px-2 py-0.5 rounded-md bg-black/60 border border-white/10 active:opacity-75"
                              >
                                <Layers size={10} />
                                <span>
                                  {isExpanded
                                    ? t("cart_variations_hide" as any, { defaultValue: "Ocultar" })
                                    : t("cart_variations_toggle" as any, { defaultValue: "Ver opções" })}
                                </span>
                                {isExpanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Ações Rápidas */}
                      <div className="relative z-10 flex items-center justify-between gap-2 pt-2 border-t border-white/[0.08]">
                        <span className="text-[10.5px] text-zinc-300 font-medium truncate">
                          {hasMultipleVariations
                            ? t("cart_check_variation_notice" as any, { defaultValue: "Confirme as variações:" })
                            : `${group.totalGroupQty} ${translatedGroupUnit}`}
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            disabled={isProcessingCheckout}
                            onClick={() => executeWhatsAppCheckout(group.variations)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs active:opacity-75 shadow-sm"
                            title={t("cart_order_single_product" as any, { defaultValue: "Comprar este" })}
                          >
                            <Share2 size={12} className="shrink-0" />
                            <span className="whitespace-nowrap">{t("cart_order_single_product" as any, { defaultValue: "Comprar este" })}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (hasMultipleVariations) {
                                requestRemoveEntireGroup(group.variations);
                              } else {
                                const targetKey = getLineItemKey(group.variations[0] || {});
                                requestRemoveItem(targetKey, false);
                              }
                            }}
                            className="p-1.5 text-zinc-400 hover:text-rose-400 active:bg-rose-500/15 rounded-lg transition-colors"
                            title={t("cart_remove_item" as any, { defaultValue: "Remover produto" })}
                          >
                            <Trash2 size={15} strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Variações Renderizadas com Componente Memoizado */}
                    {(!hasMultipleVariations || isExpanded) && (
                      <div className="divide-y divide-white/[0.06] bg-[#090a0d] border-t border-white/[0.08]">
                        {group.variations.map((item) => (
                          <VariationRow
                            key={getLineItemKey(item)}
                            item={item}
                            storeCurrency={storeCurrency}
                            groupUnit={group.unit}
                            hasMultipleVariations={hasMultipleVariations}
                            onUpdateQty={updateQuantity}
                            onRemoveItem={(key) => requestRemoveItem(key, true)}
                            t={t as any}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )
          )}

          {activeTab === "sent" && (
            sentOrders.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-60 text-center px-4">
                <CheckCircle2 size={32} className="text-zinc-600 mb-2" />
                <p className="text-xs text-zinc-400">
                  {t("cart_sent_orders_empty" as any, { defaultValue: "Nenhum pedido enviado ainda." })}
                </p>
                <p className="text-[10.5px] text-zinc-500 mt-1">
                  {t("cart_sent_history_retention_notice" as any, {
                    defaultValue: "Os pedidos confirmados são guardados durante 30 dias.",
                  })}
                </p>
              </div>
            ) : (
              sentOrders.map((batch) => {
                const batchCoverImg =
                  batch.items.find((it) => it.mainImage && it.mainImage.startsWith("http"))?.mainImage ||
                  FALLBACK_PRODUCT_IMAGE;

                return (
                  <div
                    key={batch.id}
                    className="relative rounded-2xl bg-[#0e0e12] border border-white/10 overflow-hidden shadow-sm transform-gpu"
                    style={{ contain: "layout paint style" }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-3/5 sm:w-1/2 pointer-events-none select-none overflow-hidden">
                      <img
                        src={batchCoverImg}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        onError={handleImageError}
                        className="w-full h-full object-cover object-center opacity-25 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e12] to-transparent" />
                    </div>

                    <div className="relative z-10 p-3.5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-zinc-300 border-b border-white/[0.08] pb-2">
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                          <span>{t("cart_sent_at" as any, { defaultValue: "Enviado em" })} {batch.sentAt}</span>
                        </span>
                        <span className="font-black text-emerald-400 text-xs tabular-nums">
                          {NUMBER_FORMATTER.format(batch.totalPrice)} {storeCurrency} ({batch.totalQty}x)
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {batch.items.map((it, i) => {
                          const itemUnitText = getTranslatedUnit(it.unit, t);
                          return (
                            <div key={i} className="text-xs text-zinc-100 flex justify-between gap-2 items-center">
                              <span className="truncate font-medium">• {it.name} ({it.quantity} {itemUnitText})</span>
                              <span className="text-zinc-300 shrink-0 tabular-nums text-[11.5px] font-semibold">
                                {NUMBER_FORMATTER.format(Number(it.unitPriceFinal || it.price || 0) * (it.quantity || 1))}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-1.5 border-t border-white/[0.06] flex-wrap">
                        <button
                          type="button"
                          onClick={() => handleRestoreToCart(batch)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/80 border border-white/10 text-zinc-200 text-[11px] font-semibold active:opacity-75"
                        >
                          <RotateCcw size={11} />
                          <span>{t("cart_move_back_to_cart" as any, { defaultValue: "Mover de volta ao carrinho" })}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => executeWhatsAppCheckout(batch.items)}
                          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold active:opacity-75 shadow-sm"
                        >
                          <MessageCircle size={11} />
                          <span>{t("cart_resend_whatsapp" as any, { defaultValue: "Reenviar Pedido" })}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )
          )}
        </div>
      </div>

      {/* 3. Rodapé Fixo */}
      {activeTab === "cart" && items.length > 0 && (
        <div className="p-3.5 sm:px-8 sm:py-4 bg-[#141418] border-t border-white/10 shrink-0 flex flex-col gap-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto w-full max-w-3xl flex items-center justify-between text-xs sm:text-sm px-1">
            <span className="text-zinc-400 font-medium">
              {t("cart_estimated_total" as any, { defaultValue: "Total Estimado" })}
            </span>
            <span className="text-sm sm:text-lg font-black text-emerald-400 tabular-nums tracking-tight">
              {NUMBER_FORMATTER.format(totalPrice)} {storeCurrency}
            </span>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <button
              type="button"
              disabled={isProcessingCheckout}
              onClick={() => executeWhatsAppCheckout(items)}
              className="w-full h-11 sm:h-12 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-black text-xs sm:text-sm rounded-xl flex items-center justify-between px-3.5 sm:px-6 active:opacity-85 gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Share2 size={16} className="shrink-0" />
                <span className="truncate">
                  {t("cart_order_all_products" as any, {
                    defaultValue: "Finalizar Pedido ({count})",
                    count: totalQuantity,
                  }).replace("{count}", String(totalQuantity))}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold bg-black/20 px-2 py-0.5 rounded-lg shrink-0 tabular-nums">
                <span className="truncate">{NUMBER_FORMATTER.format(totalPrice)} {storeCurrency}</span>
                <ArrowRight size={13} className="shrink-0" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* 4. Modal de Confirmação Rápido */}
      {confirmDialog.isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/75">
          <div className="w-full max-w-xs sm:max-w-sm rounded-2xl bg-[#1c1c1f] border border-white/10 p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-rose-400">
              <AlertTriangle size={18} className="shrink-0" />
              <h3 className="text-sm font-bold text-white truncate">
                {t(confirmDialog.titleKey, { defaultValue: "Tens a certeza?" })}
              </h3>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed break-words">
              {t(confirmDialog.descKey, { defaultValue: "Esta ação não pode ser desfeita." })}
            </p>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/5">
              <button
                type="button"
                onClick={closeConfirmDialog}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 active:opacity-75"
              >
                {t("cancel_button" as any, { defaultValue: "Cancelar" })}
              </button>

              <button
                type="button"
                onClick={() => {
                  confirmDialog.onConfirm();
                  closeConfirmDialog();
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold text-white active:opacity-75 ${
                  confirmDialog.isDestructive
                    ? "bg-rose-600 hover:bg-rose-500"
                    : "bg-emerald-600 hover:bg-emerald-500"
                }`}
              >
                {t(confirmDialog.confirmBtnKey, { defaultValue: "Confirmar" })}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}