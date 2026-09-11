import { memo, useState, useCallback, useEffect, useRef, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { 
  ShoppingCart, 
  Check, 
  CheckCheck, 
  Plus, 
  RefreshCw, 
  X, 
  AlertCircle,
  ExternalLink,
  Layers
} from "lucide-react";

export interface CartItemPayload {
  lineItemId?: string;
  productId: string;
  name: string;
  price: number;
  unitPriceFinal: number;
  quantity: number;
  unit: string;
  mainImage: string;
  selectedOptions: Record<string, string>;
  customNote: string;
  storeSlug?: string;
  storeName?: string;
  storeWhatsApp?: string;
  addedAt: string;
}

interface AddToCartButtonProps {
  payload: CartItemPayload;
  storeName?: string;
  storeWhatsApp?: string;
  disabled?: boolean;
  onAddToCart?: (item: CartItemPayload) => void;
  onOpenCart?: () => void;
  className?: string;
  t: (key: string, options?: { defaultValue?: string }) => string;
}

const STORAGE_CART_KEY = "storely_cart_items";
const MAX_VARIATIONS_PER_PRODUCT = 3;

function cleanWhatsAppNumber(num?: string | null): string {
  if (!num) return "";
  return String(num).replace(/\D/g, "");
}

function generateLineItemId(item: Partial<CartItemPayload>): string {
  const store = String(item.storeSlug || "store").trim().toLowerCase();
  const prod = String(item.productId || "prod").trim();
  const sortedOpts = Object.entries(item.selectedOptions || {})
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${v}`)
    .join("|");
  const note = String(item.customNote || "").trim().toLowerCase();
  return `${store}__${prod}__${sortedOpts}__${note}`;
}

function areOptionsAndNotesEqual(a?: CartItemPayload | null, b?: CartItemPayload | null): boolean {
  if (!a || !b) return false;
  return generateLineItemId(a) === generateLineItemId(b);
}

interface CartAnalysis {
  exactMatchItem: CartItemPayload | null;
  siblingMatches: CartItemPayload[];
}

function analyzeCartState(payload: CartItemPayload, activeStoreSlug?: string): CartAnalysis {
  if (typeof window === "undefined" || !payload || !payload.productId) {
    return { exactMatchItem: null, siblingMatches: [] };
  }

  try {
    const raw = localStorage.getItem(STORAGE_CART_KEY);
    if (!raw) return { exactMatchItem: null, siblingMatches: [] };
    const items: CartItemPayload[] = JSON.parse(raw);
    if (!Array.isArray(items)) return { exactMatchItem: null, siblingMatches: [] };

    let exactItem: CartItemPayload | null = null;
    const siblings: CartItemPayload[] = [];
    const targetSlug = String(activeStoreSlug || payload.storeSlug || "").trim().toLowerCase();
    const targetProdId = String(payload.productId).trim();

    items.forEach((item) => {
      const itemSlug = String(item.storeSlug || "").trim().toLowerCase();
      const itemProdId = String(item.productId || "").trim();

      if (itemSlug !== targetSlug || itemProdId !== targetProdId) {
        return;
      }

      if (areOptionsAndNotesEqual(item, payload)) {
        exactItem = item;
      } else {
        siblings.push(item);
      }
    });

    return { exactMatchItem: exactItem, siblingMatches: siblings };
  } catch {
    return { exactMatchItem: null, siblingMatches: [] };
  }
}

function applyExhaustiveFifoPurge(
  items: CartItemPayload[],
  targetSlug: string,
  targetProdId: string,
  allowedSpotsForExisting: number
): CartItemPayload[] {
  const matchingIndices: number[] = [];
  items.forEach((item, idx) => {
    if (
      String(item.storeSlug || "").trim().toLowerCase() === targetSlug &&
      String(item.productId).trim() === targetProdId
    ) {
      matchingIndices.push(idx);
    }
  });

  const excessCount = matchingIndices.length - allowedSpotsForExisting;
  if (excessCount <= 0) return items;

  const indicesToRemove = new Set(matchingIndices.slice(0, excessCount));
  return items.filter((_, idx) => !indicesToRemove.has(idx));
}

export const AddToCartButton = memo(function AddToCartButton({
  payload,
  storeName = "",
  storeWhatsApp = "",
  disabled = false,
  onAddToCart,
  onOpenCart,
  className = "",
  t,
}: AddToCartButtonProps) {
  const [isJustAdded, setIsJustAdded] = useState(false);
  const currentSlug = String(payload.storeSlug || "").trim();
  const [analysis, setAnalysis] = useState<CartAnalysis>(() => analyzeCartState(payload, currentSlug));
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const shopLabel = String(storeName || payload?.storeName || payload?.storeSlug || "").trim();
  const cleanPhone = cleanWhatsAppNumber(storeWhatsApp) || cleanWhatsAppNumber(payload?.storeWhatsApp);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sync = useCallback(() => {
    setAnalysis(analyzeCartState(payload, currentSlug));
  }, [payload, currentSlug]);

  useEffect(() => {
    sync();
    setShowModal(false);
  }, [payload.productId, payload.selectedOptions, payload.customNote, sync]);

  useEffect(() => {
    window.addEventListener("storely:cart:sync", sync);
    return () => window.removeEventListener("storely:cart:sync", sync);
  }, [sync]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const saveCartAndNotify = useCallback((
    newList: CartItemPayload[], 
    dispatchedItem: CartItemPayload
  ) => {
    try {
      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(newList));
    } catch {}

    window.dispatchEvent(new CustomEvent("storely:cart:add", { detail: dispatchedItem }));
    window.dispatchEvent(new Event("storely:cart:sync"));

    setIsJustAdded(true);
    setShowModal(false);
    sync();
    setTimeout(() => setIsJustAdded(false), 1400);
  }, [sync]);

  const buildCompletePayload = useCallback((base: CartItemPayload): CartItemPayload => {
    const resolvedPhone = cleanWhatsAppNumber(storeWhatsApp) || cleanWhatsAppNumber(payload?.storeWhatsApp) || cleanWhatsAppNumber(base?.storeWhatsApp);
    const resolvedName = (storeName || payload?.storeName || base?.storeName || payload?.storeSlug || "").trim();
    const resolvedSlug = base.storeSlug || payload.storeSlug || "";

    const finalItem: CartItemPayload = {
      ...base,
      storeName: resolvedName,
      storeWhatsApp: resolvedPhone,
      storeSlug: resolvedSlug,
      addedAt: new Date().toISOString(),
    };

    finalItem.lineItemId = generateLineItemId(finalItem);
    return finalItem;
  }, [storeName, storeWhatsApp, payload.storeName, payload.storeWhatsApp, payload.storeSlug]);

  const handleMainButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (disabled || isJustAdded) return;

    if (analysis.exactMatchItem) {
      if (onOpenCart) {
        onOpenCart();
      } else {
        window.dispatchEvent(new CustomEvent("storely:cart:open"));
      }
      return;
    }

    if (analysis.siblingMatches.length > 0) {
      setShowModal(true);
      return;
    }

    const itemToSave = buildCompletePayload(payload);
    if (onAddToCart) {
      onAddToCart(itemToSave);
    } else if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(STORAGE_CART_KEY);
        const list: CartItemPayload[] = raw ? JSON.parse(raw) : [];
        list.push(itemToSave);
        saveCartAndNotify(list, itemToSave);
      } catch {}
    }

    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 1400);
  }, [disabled, isJustAdded, analysis, onOpenCart, buildCompletePayload, payload, onAddToCart, saveCartAndNotify]);

  // Ação quando há espaço: Substitui a última variação adicionada
  const handleReplaceTarget = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      let list: CartItemPayload[] = raw ? JSON.parse(raw) : [];
      const targetSlug = String(currentSlug || payload.storeSlug || "").trim().toLowerCase();
      const targetProdId = String(payload.productId).trim();

      list = applyExhaustiveFifoPurge(list, targetSlug, targetProdId, MAX_VARIATIONS_PER_PRODUCT);

      let replaceIndex = -1;
      for (let i = list.length - 1; i >= 0; i--) {
        const item = list[i];
        if (
          String(item.storeSlug || "").trim().toLowerCase() === targetSlug &&
          String(item.productId).trim() === targetProdId
        ) {
          replaceIndex = i;
          break;
        }
      }

      const newItem = buildCompletePayload(payload);

      if (replaceIndex !== -1) {
        list[replaceIndex] = newItem;
      } else {
        list.push(newItem);
      }

      if (onAddToCart) onAddToCart(newItem);
      saveCartAndNotify(list, newItem);
    } catch {}
  }, [currentSlug, payload, buildCompletePayload, onAddToCart, saveCartAndNotify]);

  // Ação quando há espaço: Adiciona mais uma opção (até 3)
  const handleAddNewVariation = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      let list: CartItemPayload[] = raw ? JSON.parse(raw) : [];
      const targetSlug = String(currentSlug || payload.storeSlug || "").trim().toLowerCase();
      const targetProdId = String(payload.productId).trim();

      const allowedExisting = MAX_VARIATIONS_PER_PRODUCT - 1;
      list = applyExhaustiveFifoPurge(list, targetSlug, targetProdId, allowedExisting);

      const newItem = buildCompletePayload(payload);
      list.push(newItem);

      if (onAddToCart) onAddToCart(newItem);
      saveCartAndNotify(list, newItem);
    } catch {}
  }, [currentSlug, payload, buildCompletePayload, onAddToCart, saveCartAndNotify]);

  // Ação quando cheio: Substitui apenas a mais antiga (FIFO)
  const handleReplaceOldestWhenFull = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      let list: CartItemPayload[] = raw ? JSON.parse(raw) : [];
      const targetSlug = String(currentSlug || payload.storeSlug || "").trim().toLowerCase();
      const targetProdId = String(payload.productId).trim();

      list = applyExhaustiveFifoPurge(list, targetSlug, targetProdId, MAX_VARIATIONS_PER_PRODUCT - 1);

      const newItem = buildCompletePayload(payload);
      list.push(newItem);

      if (onAddToCart) onAddToCart(newItem);
      saveCartAndNotify(list, newItem);
    } catch {}
  }, [currentSlug, payload, buildCompletePayload, onAddToCart, saveCartAndNotify]);

  // Ação quando cheio: Substitui TODAS as anteriores deste produto por esta nova
  const handleReplaceAllPrevious = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      const list: CartItemPayload[] = raw ? JSON.parse(raw) : [];
      const targetSlug = String(currentSlug || payload.storeSlug || "").trim().toLowerCase();
      const targetProdId = String(payload.productId).trim();

      // Remove todas as ocorrências deste produto nesta loja
      const filteredList = list.filter((item) => {
        const itemSlug = String(item.storeSlug || "").trim().toLowerCase();
        const itemProdId = String(item.productId || "").trim();
        return !(itemSlug === targetSlug && itemProdId === targetProdId);
      });

      const newItem = buildCompletePayload(payload);
      filteredList.push(newItem);

      if (onAddToCart) onAddToCart(newItem);
      saveCartAndNotify(filteredList, newItem);
    } catch {}
  }, [currentSlug, payload, buildCompletePayload, onAddToCart, saveCartAndNotify]);

  const handleOpenCartDrawer = useCallback(() => {
    setShowModal(false);
    if (onOpenCart) {
      onOpenCart();
    } else {
      window.dispatchEvent(new CustomEvent("storely:cart:open"));
    }
  }, [onOpenCart]);

  const isExactMatch = Boolean(analysis.exactMatchItem);
  const existingVariantsCount = analysis.siblingMatches.length;
  const isFull = existingVariantsCount >= MAX_VARIATIONS_PER_PRODUCT;

  return (
    <div className="w-full min-w-0" style={{ contain: "layout style" }}>
      {/* Botão Principal */}
      <button
  type="button"
  onClick={handleMainButtonClick}
  disabled={disabled || isJustAdded}
  aria-label={
    isExactMatch
      ? t("cart_already_exists", { defaultValue: "Já no Carrinho" })
      : t("btn_add_to_cart", { defaultValue: "Ao Carrinho" })
  }
  className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-[14px] sm:rounded-full px-3.5 text-xs font-black tracking-wide uppercase select-none active:scale-[0.97] border transition-[color,background-color,border-color] duration-150 ${
    disabled
      ? "cursor-not-allowed bg-zinc-900/40 text-zinc-500 border-zinc-800/60 opacity-50 pointer-events-none"
      : isJustAdded
      ? "bg-emerald-500 text-black border-emerald-400 font-extrabold"
      : isExactMatch
      ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-500/40"
      : existingVariantsCount > 0
      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:text-emerald-200"
      : "bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-100 border-zinc-700/50 hover:border-zinc-600/60 active:bg-zinc-700/80"
  } ${className}`}
>
  {isJustAdded ? (
    <>
      <Check size={15} strokeWidth={3} className="shrink-0 text-black" />
      <span className="truncate">{t("cart_added", { defaultValue: "Adicionado!" })}</span>
    </>
  ) : isExactMatch ? (
    <>
      <CheckCheck size={15} strokeWidth={2.5} className="shrink-0 text-emerald-400" />
      <span className="truncate">
        {t("cart_item_exists_badge", { defaultValue: "No Carrinho ({qty})" }).replace(
          "{qty}",
          String(analysis.exactMatchItem?.quantity || 1)
        )}
      </span>
    </>
  ) : (
    <>
      <ShoppingCart size={15} strokeWidth={2.2} className="shrink-0 text-emerald-400" />
      <span className="truncate">{t("btn_add_to_cart", { defaultValue: "Ao Carrinho" })}</span>
    </>
  )}
</button>

      {/* Modal Inteligente */}
      {mounted && showModal && existingVariantsCount > 0 && createPortal(
        <div 
          className="fixed inset-0 z-[9999999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 box-border"
          style={{ contain: "strict" }}
          onClick={() => setShowModal(false)}
        >
          <div 
            ref={modalContentRef}
            className="w-full sm:max-w-md flex flex-col rounded-t-3xl sm:rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-950 box-border overflow-hidden pb-[max(1.25rem,env(safe-area-inset-bottom))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:hidden w-10 h-1 bg-slate-300 dark:bg-zinc-700 rounded-full mx-auto mb-3 shrink-0" />

            {/* Cabeçalho */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80 shrink-0">
              <div className="flex items-center gap-2">
                <ShoppingCart size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                  {isFull 
                    ? t("cart_limit_title", { defaultValue: "Limite de 3 Variações Atingido" })
                    : t("already_in_cart_title", { defaultValue: "Produto já no Carrinho" })
                  }
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 shrink-0 cursor-pointer active:scale-95"
                aria-label={t("close", { defaultValue: "Fechar" })}
              >
                <X size={17} />
              </button>
            </div>

            {/* Mensagem Contextual */}
            <div className="py-4">
              {isFull ? (
                <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 p-3 border border-amber-200/80 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
                  <AlertCircle size={16} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <span>
                    {t("cart_full_warning_detailed", {
                      defaultValue: "Já tens o limite máximo de 3 opções deste produto no carrinho. Escolhe como queres atualizar:"
                    })}
                  </span>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {t("cart_prompt_question", { 
                    defaultValue: "Já tens outra opção deste item no carrinho. Queres adicionar mais uma opção ou apenas trocar a escolha?" 
                  })}
                </p>
              )}
            </div>

            {/* Ações */}
            <div className="flex flex-col gap-2.5 pt-1">
              {isFull ? (
                /* ESTADO CHEIO: 2 OPÇÕES DE ATUALIZAÇÃO BEM DISTINTAS */
                <>
                  {/* Opção 1: Troca individual da mais antiga (Mantém 3) */}
                  <button
                    type="button"
                    onClick={handleReplaceOldestWhenFull}
                    className="flex items-center justify-between w-full min-h-[48px] rounded-xl px-4 text-xs sm:text-sm font-bold bg-amber-600 hover:bg-amber-700 text-white transition-all cursor-pointer active:scale-[0.98] shadow-xs"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <RefreshCw size={15} strokeWidth={2.5} />
                      <span>{t("action_replace_oldest_only", { defaultValue: "Trocar apenas a mais antiga" })}</span>
                    </span>
                    <span className="text-[11px] bg-amber-700/80 px-2 py-0.5 rounded font-black shrink-0 ml-2">
                      3/3
                    </span>
                  </button>

                  {/* Opção 2: Substituição total por esta nova */}
                  <button
                    type="button"
                    onClick={handleReplaceAllPrevious}
                    className="flex items-center justify-between w-full min-h-[48px] rounded-xl px-4 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/90 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Layers size={15} strokeWidth={2.2} className="text-slate-500 dark:text-zinc-400" />
                      <span>{t("action_replace_all_previous", { defaultValue: "Substituir todas as outras por esta" })}</span>
                    </span>
                    <span className="text-[11px] bg-slate-200 dark:bg-zinc-700 px-2 py-0.5 rounded font-black shrink-0 ml-2">
                      1/3
                    </span>
                  </button>
                </>
              ) : (
                /* ESTADO NORMAL (< 3): ADICIONAR NOVA OU TROCAR ANTERIOR */
                <>
                  <button
                    type="button"
                    onClick={handleAddNewVariation}
                    className="flex items-center justify-between w-full h-12 rounded-xl px-4 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer active:scale-[0.98] shadow-xs"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Plus size={16} strokeWidth={2.5} />
                      <span>{t("action_add_new_variant", { defaultValue: "Adicionar como mais uma opção" })}</span>
                    </span>
                    <span className="text-[11px] bg-emerald-700/80 px-2 py-0.5 rounded font-black shrink-0">
                      {existingVariantsCount + 1}/{MAX_VARIATIONS_PER_PRODUCT}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReplaceTarget}
                    className="flex items-center justify-center gap-2 w-full h-11 rounded-xl px-4 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <RefreshCw size={14} className="shrink-0 text-slate-500 dark:text-zinc-400" />
                    <span>{t("action_replace_previous", { defaultValue: "Apenas trocar pela escolha atual" })}</span>
                  </button>
                </>
              )}
            </div>

            {/* Rodapé */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-slate-400 dark:text-zinc-500">
                {shopLabel ? `${t("store_label_cart", { defaultValue: "Loja" })}: ${shopLabel}` : cleanPhone}
              </span>
              <button
                type="button"
                onClick={handleOpenCartDrawer}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>{t("view_cart_btn", { defaultValue: "Ver no Carrinho" })}</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
});

AddToCartButton.displayName = "AddToCartButton";