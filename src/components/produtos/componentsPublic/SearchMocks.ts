export interface MockCategory {
  nameKey: string;
  searchQuery: string;
  emoji: string;
  color: string;
  slug: string;
  keywords: string[];
}

export const MOCK_GLOBAL_CATEGORIES: MockCategory[] = [
  { nameKey: "cat_tech", searchQuery: "electronics", emoji: "💻", color: "from-blue-600 to-indigo-950 bg-gradient-to-br", slug: "electronics", keywords: ["celular", "computador", "fone", "carregador", "smartwatch", "iphone", "gadgets", "tech", "laptop", "phone", "computer", "headphones", "charger", "screen", "teclado", "keyboard", "mouse", "headset", "earphones", "display", "tablet", "pc"] },
  { nameKey: "cat_fashion", searchQuery: "clothing", emoji: "👕", color: "from-pink-600 to-purple-950 bg-gradient-to-br", slug: "clothing", keywords: ["camisa", "calça", "vestido", "sapatilha", "casaco", "roupa", "tshirt", "jeans", "moda", "shirt", "pants", "dress", "shoes", "jacket", "coat", "hoodie", "skirt", "saia", "blusa", "clothing", "trousers", "sweatshirt", "top", "apparel"] },
  { nameKey: "cat_grocery", searchQuery: "groceries", emoji: "🍔", color: "from-amber-500 to-red-900 bg-gradient-to-br", slug: "groceries", keywords: ["bebida", "snack", "chocolate", "sumo", "suco", "bolacha", "comida", "batata", "refrigerante", "lanche", "drink", "juice", "cookies", "food", "soda", "water", "água", "beer", "cerveja", "snacks", "beverages", "groceries", "biscuits"] },
  { nameKey: "cat_home", searchQuery: "home", emoji: "🏠", color: "from-emerald-600 to-teal-950 bg-gradient-to-br", slug: "home", keywords: ["planta", "sofa", "almofada", "cama", "luminaria", "decoracao", "moveis", "tapete", "espelho", "plant", "couch", "pillow", "bed", "lamp", "decor", "furniture", "rug", "mirror", "mesa", "table", "curtains", "cortina", "chair", "cadeira"] },
  { nameKey: "cat_beauty", searchQuery: "beauty", emoji: "💄", color: "from-purple-500 to-rose-950 bg-gradient-to-br", slug: "beauty", keywords: ["perfume", "creme", "batom", "skincare", "champô", "shampoo", "maquilhagem", "maquiagem", "sabonete", "cosmeticos", "makeup", "lipstick", "soap", "skin", "oil", "óleo", "fragrance", "gel", "lotion", "loção", "cosmetics"] },
  { nameKey: "cat_fitness", searchQuery: "sports", emoji: "👟", color: "from-orange-500 to-red-800 bg-gradient-to-br", slug: "sports", keywords: ["ténis", "mochila", "garrafa", "suplemento", "calções", "academia", "treino", "haltere", "sport", "sneakers", "backpack", "bottle", "shorts", "gym", "workout", "fitness", "whey", "protein", "dumbbell", "sports"] },
  { nameKey: "cat_books", searchQuery: "books", emoji: "📚", color: "from-cyan-600 to-blue-950 bg-gradient-to-br", slug: "books", keywords: ["livro", "agenda", "caneta", "caderno", "romance", "papelaria", "leitura", "hq", "manga", "book", "notebook", "pen", "pencil", "lápis", "lapis", "novel", "comic", "read", "stationery", "marker", "marcador", "eraser", "borracha"] },
  { nameKey: "cat_accessories", searchQuery: "accessories", emoji: "🕶️", color: "from-zinc-700 to-slate-950 bg-gradient-to-br", slug: "accessories", keywords: ["oculos", "óculos", "relogio", "relógio", "anel", "carteira", "colar", "brinco", "boné", "cinto", "pulseira", "glasses", "sunglasses", "watch", "ring", "wallet", "necklace", "earrings", "cap", "belt", "hat", "bag", "mala", "bolsa"] },
  { nameKey: "cat_baby", searchQuery: "baby", emoji: "👶", color: "from-sky-400 to-indigo-900 bg-gradient-to-br", slug: "baby", keywords: ["fralda", "biberao", "chupeta", "berço", "body", "roupa bebe", "leite", "diaper", "bottle", "pacifier", "crib", "baby clothing", "milk", "carrinho bebe", "stroller", "baby", "newborn", "recem nascido", "chupeta"] },
  { nameKey: "cat_kids", searchQuery: "kids", emoji: "🧒", color: "from-sky-400 to-indigo-900 bg-gradient-to-br", slug: "kids", keywords: ["brinquedo", "mochila", "escola", "material escolar", "roupa infantil", "calcado infantil", "tenis", "jogos", "livro infantil", "lego", "boneca", "carrinho", "bicicleta", "skate", "lapis de cor", "kids clothing", "toys", "school backpack", "school supplies", "kids shoes", "sneakers", "board games", "puzzles", "children books", "bike", "kids", "colored pencil", "children", "infantil"] },
  { nameKey: "cat_pets", searchQuery: "pets", emoji: "🐾", color: "from-amber-600 to-stone-900 bg-gradient-to-br", slug: "pets", keywords: ["ração", "coleira", "brinquedo gato", "brinquedo cao", "petisco", "gato", "cão", "passaro", "food", "collar", "dog", "cat", "bird", "leash", "trela", "aquario", "aquarium", "shampoo pet", "caminha", "petshop", "veterinaria", "pet food", "puppy"] },
  { nameKey: "cat_tools", searchQuery: "tools", emoji: "🛠️", color: "from-yellow-600 to-zinc-900 bg-gradient-to-br", slug: "tools", keywords: ["martelo", "chave fenda", "parafuso", "prego", "furadeira", "alicate", "tinta", "construcao", "hammer", "screwdriver", "screw", "drill", "pliers", "paint", "construction", "diy", "bateria", "tools", "wrench", "ferramentas"] },
  { nameKey: "cat_toys", searchQuery: "toys", emoji: "🧩", color: "from-red-500 to-purple-950 bg-gradient-to-br", slug: "toys", keywords: ["boneca", "carro", "puzzle", "lego", "tabuleiro", "ursinho", "jogos", "doll", "car", "boardgame", "game", "plush", "peluche", "toys", "brinquedos", "figures"] },
  { nameKey: "cat_auto", searchQuery: "automotive", emoji: "🚘", color: "from-slate-600 to-zinc-950 bg-gradient-to-br", slug: "automotive", keywords: ["óleo motor", "pneu", "bateria carro", "filtro", "lampada", "limpeza", "acessorio carro", "car", "oil", "tire", "battery", "filter", "bulb", "cleaning", "moto", "motorcycle", "capacete", "helmet", "motor oil", "automotive"] },
  { nameKey: "cat_design_editor", searchQuery: "design", emoji: "✨", color: "from-violet-600 to-fuchsia-950 bg-gradient-to-br", slug: "design", keywords: ["template", "ui", "ux", "componente", "mockup", "vetor", "vector", "canva", "pinterest", "font", "fonte", "icon", "icone", "textura", "texture", "layout", "preset", "graphics", "assets", "design", "wireframe"] },
  { nameKey: "cat_arts_crafts", searchQuery: "art", emoji: "🎨", color: "from-rose-500 to-amber-950 bg-gradient-to-br", slug: "art", keywords: ["quadro", "pintura", "tela", "arte", "desenho", "pincel", "acrilico", "art", "painting", "canvas", "frame", "drawing", "poster", "ilustracao", "illustration", "aguarela", "watercolor", "ink", "tinta", "galeria", "gallery", "brush"] },
  { nameKey: "cat_digital_3d", searchQuery: "3d", emoji: "🔮", color: "from-indigo-500 to-cyan-950 bg-gradient-to-br", slug: "3d", keywords: ["3d", "modelo 3d", "stl", "obj", "impressao 3d", "filamento", "resina", "render", "blender", "miniatura", "sculpture", "esculpido", "3d model", "3d print", "filament", "resin", "cad", "mesh", "malha"] },
  { nameKey: "cat_bakery", searchQuery: "bakery", emoji: "🍰", color: "from-pink-500 to-rose-900 bg-gradient-to-br", slug: "bakery", keywords: ["bolo", "doce", "sobremesa", "festa", "salgado", "torta", "cake", "sweet", "dessert", "party", "cupcake", "brigadeiro", "casamento", "bakery", "pastry", "pie"] }
];

// Conector de ligação flexível em PT e EN (com ou sem 'de', 'do', 'da', 'para', 'of', 'for', 'and', 'e')
const OF = `(?:\\s+(?:de|da|do|para|pra|of|for|and|e))?\\s+`;

/**
 * HIERARQUIA DE REGRAS (Short-Circuit) TOTALMENTE BILINGUE (PT + EN)
 * Tolerante a digitações parciais, termos quebrados e erros comuns.
 */
const REGEX_RULES = [
  // --- 1. VESTUÁRIO ESPECÍFICO ---
  { 
    label: { pt: "Vestidos & Macacões", en: "Dresses & Jumpsuits" }, 
    regex: /\b(vestid[oa]s?|dres+es?|macac[ao]+es?|jumpsuits?|rompers?)\b/i 
  },
  { 
    label: { pt: "Casacos & Frio", en: "Jackets & Outerwear" }, 
    regex: /\b(casac[oa]s?|jaquet[as]?|jakets?|jackets?|hoodi?es?|molet[ao]+es?|sweat(?:ers?|shirts?)|sweter|pullovers?|coats?|camisolas?|cardigans?|blazers?|windbreakers?)\b/i 
  },
  { 
    label: { pt: "Bodies & Íntima", en: "Bodysuits & Intimates" }, 
    regex: /\b(bod(?:y|ies|ysuit)|collant|lingerie|cuecas?|suti[ae]s?|bras?|underwears?|panties?|boxers?|calcinhas?)\b/i 
  },
  { 
    label: { pt: "Saias", en: "Skirts" }, 
    regex: /\b(saias?|skirts?)\b/i 
  },
  { 
    label: { pt: "Calções", en: "Shorts" }, 
    regex: /\b(bermudas?|calco[ae]s?|calcaos?|shorts?|trunks?)\b/i 
  },
  { 
    label: { pt: "Calças", en: "Pants & Trousers" }, 
    regex: /\b(calc?as?|pants?|trousers?|leg+ings?|joggers?|pantaloons?)\b/i 
  },
  { 
    label: { pt: "Camisas & Tops", en: "Shirts & Tops" }, 
    regex: /\b(camis[as]?|t-?shirts?|shirts?|blus[as]?|tops?|crope?d|crop-?tops?|tunicas?|tunics?|polos?)\b/i 
  },

  // --- 2. CALÇADO ---
  { 
    label: { pt: "Calçado", en: "Footwear" }, 
    regex: /\b(calc?ad[oa]s?|sapat[oa]s?|sapatilh[as]?|ten+is|sne+ke?rs?|sho+es?|sandali[as]?|sandals?|bot[as]?|boots?|chinel[oa]s?|flip-?flops?|slippers?|heels?|loafers?)\b/i 
  },

  // --- 3. ALIMENTAÇÃO ---
  { 
    label: { pt: "Bolos & Tortas", en: "Cakes & Pies" }, 
    regex: /\b(bol[oa]s?|cakes?|tort[as]?|pies?|che+secake|tarts?)\b/i 
  },
  { 
    label: { pt: "Salgados & Snacks", en: "Snacks & Savory" }, 
    regex: /\b(salgad[oa]s?|coxinh[as]?|ris+o[ie]s|paste[ie]ls?|chamuc[as]?|empad[as]?|snaks?|snacks?|chips?|piz+as?|burgu?e?rs?|hamburgu?e?rs?|sanduich[es]?|sandwiches?|savoury|savory)\b/i 
  },
  { 
    label: { pt: "Bebidas", en: "Beverages" }, 
    regex: /\b(bebid[as]?|drinks?|beverages?|sum[oa]s?|suc[oa]s?|juices?|refrigerant[es]?|sodas?|aguas?|water|cervej[as]?|be+rs?|vinh[oa]s?|wines?|cocktails?)\b/i 
  },
  { 
    label: { pt: "Doces & Sobremesas", en: "Sweets & Desserts" }, 
    regex: /\b(doc[es]?|sobremes[as]?|swe+ts?|des+erts?|brigadeir[oa]s?|cupcakes?|bolach[as]?|co+kies?|biscoit[oa]s?|biscuits?|browni?es?|chocolat[es]?|cand(?:y|ies)|muf+ins?|puddings?|pudim)\b/i 
  },
  { 
    label: { pt: "Frescos & Mercearia", en: "Fresh & Groceries" }, 
    regex: /\b(comid[as]?|foods?|grocer(?:y|ies)|carn[es]?|meats?|frut[as]?|fruits?|legum[es]?|vegetables?|ar+oz|rice|mas+as?|pasta|gra[ao]s?|cereals?)\b/i 
  },

  // --- 4. BEBÉ VS PAPELARIA VS BRINQUEDOS ---
  { 
    label: { pt: "Bebé & Cuidados", en: "Baby Care" }, 
    regex: new RegExp(`\\b(frald[as]?|diapers?|bibera[ou]s?|mamadeir[as]?|baby${OF}bottles?|chupet[as]?|pacifiers?|berc?os?|cribs?|cots?|carrinho${OF}bebe|baby${OF}strollers?|recem-?nascid[oa]s?|newborns?)\\b`, "i") 
  },
  // Livros, Papelaria e Lápis (pega 'lapis', 'lapis de cor', 'cor', 'color pencil', 'crayons', etc.)
  { 
    label: { pt: "Livros & Papelaria", en: "Books & Stationery" }, 
    regex: new RegExp(`\\b(lapis(?:${OF}co(?:r|res))?|(?:colored|colour|coloring)${OF}pencils?|giz(?:${OF}cera)?|crayons?|canet[as]?|pens?|pencils?|apontad(?:or|ores)?|sharpeners?|borrach[as]?|erasers?|cadern[oa]s?|notebo+ks?|estoj[oa]s?|pencil${OF}cases?|mochil[as]?${OF}escolar|school${OF}(?:backpacks?|bags?)|material${OF}escolar|school${OF}supplies|livr[oa]s?|bo+ks?|romanc[es]?|novels?|mangas?|comics?|hqs?|agendas?|planners?|papelari[as]?|stationery|marcadores?|highlighters?)\\b`, "i") 
  },
  // Brinquedos / Jogos
  { 
    label: { pt: "Jogos & Brinquedos", en: "Toys & Games" }, 
    regex: new RegExp(`\\b(brinqued[oa]s?|toys?|bonec[as]?|dolls?|legos?|puz+les?|jogos?${OF}tabuleiro|board${OF}?games?|peluches?|plush(?:ies)?|ursinh[oa]s?|teddy${OF}?bears?|action${OF}figures?|quebra-?cabec?as?|carrinho(?:s)?(?!${OF}bebe)|toy${OF}cars?)\\b`, "i") 
  },

  // --- 5. TECNOLOGIA & BELEZA ---
  { 
    label: { pt: "Smartphones & PCs", en: "Smartphones & PCs" }, 
    regex: /\b(celula(?:r|res)|smartphones?|iphones?|telemo(?:vel|veis)|computad(?:or|ores)|computers?|laptops?|notebo+ks?|macbooks?|desktops?|tablets?|ipads?)\b/i 
  },
  { 
    label: { pt: "Acessórios Tech", en: "Tech Accessories" }, 
    regex: /\b(fon(?:e|es)|headphon(?:e|es)|earphones?|earbuds?|carregad(?:or|ores)|chargers?|smartwatch(?:es)?|teclados?|keyboards?|mous(?:e|es)|ratos?|cables?|cabos?|adapters?|adaptadores?)\b/i 
  },
  { 
    label: { pt: "Maquilhagem", en: "Makeup" }, 
    regex: /\b(maqui?alh?ag(?:em|ens)|make-?up|bat(?:om|ons)|lipsticks?|rim(?:el|eis)|mascaras?|bases?|foundations?|eyeliners?|blushes?|corretivos?|concealers?)\b/i 
  },
  { 
    label: { pt: "Perfumes & Cuidados", en: "Perfumes & Skincare" }, 
    regex: /\b(perfum[es]?|fragranci?[as]?|fragrances?|colognes?|skincare|crem[es]?|creams?|lotions?|loco[ae]s?|shampo+s?|champ[ou]s?|conditioners?|condicionad(?:or|ores)|sabonet[es]?|soaps?|ole[oa]s?|oils?|moisturizers?|hidratantes?)\b/i 
  },

  // --- 6. CATEGORIAS GERAIS & PROFISSIONAIS ---
  { 
    label: { pt: "Casamento & Festas", en: "Weddings & Parties" }, 
    regex: /\b(fest[as]?|part(?:y|ies)|aniversari[oa]s?|birthdays?|casament[oa]s?|wed+ings?|batizad[oa]s?|baptisms?|event[oa]s?|events?|bridals?|noiv[as]?|groom)\b/i 
  },
  { 
    label: { pt: "Desporto & Ginásio", en: "Gym & Sports" }, 
    regex: /\b(trein[oa]s?|workouts?|academi[as]?|gyms?|fitness|esport[es]?|desport[oa]s?|sports?|halter(?:e|es)?|dumbbel+s?|suplement[oa]s?|supplements?|whey|protein[as]?)\b/i 
  },
  { 
    label: { pt: "Acessórios", en: "Accessories" }, 
    regex: /\b(ocul[oa]s?|sunglas+es?|glas+es?|relogi[oa]s?|watch(?:es)?|ane(?:l|is)|rings?|colar(?:es)?|necklaces?|brinc[oa]s?|earrings?|pulseir[as]?|bracelets?|carteir[as]?|wallets?|bols[as]?|bags?|handbags?|malas?|cint[oa]s?|belts?|bon[es]?|caps?|hats?|chapeus?)\b/i 
  },
  { 
    label: { pt: "Animais de Estimação", en: "Pets" }, 
    regex: new RegExp(`\\b(rac?a[ou]s?|pet${OF}foods?|coleir[as]?|collars?|trel[as]?|leash(?:es)?|gat[oa]s?|cats?|kittens?|ca[ou]s?|caes|cachorr[oa]s?|dogs?|puppies?|pas+ar[oa]s?|birds?|aquari[oa]s?|aquariums?)\\b`, "i") 
  },
  { 
    label: { pt: "Ferramentas", en: "Tools" }, 
    regex: /\b(ferrament[as]?|to+ls?|martel[oa]s?|ham+ers?|chav[es]?|wrench(?:es)?|parafus[oa]s?|screws?|furadeir[as]?|berbequins?|dril+s?|alicat[es]?|pliers?|tint[as]?|paints?|construc?a[ou]s?|construction)\b/i 
  },
  { 
    label: { pt: "Automóvel & Moto", en: "Auto & Moto" }, 
    regex: new RegExp(`\\b(carr[oa]s?|cars?|mot(?:o|os|ociclos?)|motorcycles?|motorbikes?|pneus?|tires?|tyres?|oleo${OF}motor|motor${OF}oil|bateri[as]?|capacete[s]?|helmets?)\\b`, "i") 
  },
  { 
    label: { pt: "Design & Artes", en: "Design & Arts" }, 
    regex: /\b(templates?|ui|ux|mockups?|vetor(?:es)?|vectors?|font[es]?|icon[es]?|textur[as]?|textures?|layouts?|wireframes?|pintur[as]?|paintings?|tel[as]?|canvas|art[es]?|arts?|desenh[oa]s?|drawings?|pincel|pinceis|brushes?)\b/i 
  },
  { 
    label: { pt: "Modelos & Impressão 3D", en: "3D Models & Printing" }, 
    regex: new RegExp(`\\b(3d|stl|obj|impressa[ou]${OF}3d|3d${OF}prints?|3d${OF}printing|filament[oa]s?|resin[as]?|renders?|blender|miniatur[as]?|mesh(?:es)?|malhas?|cad)\\b`, "i") 
  },

  // --- 7. AUDIÊNCIA (Captura 'Kids', 'Infantil', 'Menino' se não pegou vestuário/brinquedo específico) ---
  { 
    label: { pt: "Crianças & Juvenil", en: "Kids & Youth" }, 
    regex: /\b(crianc?as?|infantis?|infantil|kids?|menin[oa]s?|garot[oa]s?|children|child|escolar|school|juvenil|youth|toddlers?)\b/i 
  },
  { 
    label: { pt: "Bebé", en: "Baby" }, 
    regex: /\b(bebe[s]?|bab(?:y|ies))\b/i 
  },
  { 
    label: { pt: "Homem", en: "Men" }, 
    regex: /\b(hom(?:em|ens)|masculin[oa]s?|mens?|male|rapaz(?:es)?|boys?|gentlemen)\b/i 
  },
  { 
    label: { pt: "Mulher", en: "Women" }, 
    regex: /\b(mulh(?:er|eres)|feminin[oa]s?|wom(?:an|en)|female|senhor[as]?|raparig[as]?|girls?|ladies)\b/i 
  },
  { 
    label: { pt: "Jeans & Denim", en: "Jeans & Denim" }, 
    regex: /\b(jeans|denim|gangas?)\b/i 
  },
  { 
    label: { pt: "Vintage & Retro", en: "Vintage & Retro" }, 
    regex: /\b(vintage|retro|classicos?|classics?|antigos?|anos 80|anos 90|80s|90s)\b/i 
  }
];

/**
 * Normaliza acentos, cedilhas, múltiplos espaços e repetições propositais de letras.
 */
function cleanAndNormalize(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/gi, "c")
    .toLowerCase()
    .replace(/([a-z])\1{2,}/g, "$1")
    .replace(/[-_]/g, " ")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Motor de Categorização Short-Circuit Bilíngue
 */
export function enrichProductsWithSubcategories(products: any[], lang: "pt" | "en" = "pt") {
  if (!products || !Array.isArray(products)) return [];

  return products.map(product => {
    const titleText = cleanAndNormalize(`${product.name || ''} ${product.category || ''}`);
    const descText = cleanAndNormalize(product.description || '');

    const tags = new Set<string>();

    if (product.category) {
      tags.add(product.category);
    }

    let foundMainCategory = false;

    const extractSingleCategory = (text: string) => {
      if (!text || foundMainCategory) return;
      for (const rule of REGEX_RULES) {
        if (rule.regex.test(text)) {
          tags.add(lang === "en" ? rule.label.en : rule.label.pt);
          foundMainCategory = true;
          break;
        }
      }
    };

    // 1. Tenta identificar no Título
    extractSingleCategory(titleText);

    // 2. Se não encontrou no Título, busca na Descrição
    extractSingleCategory(descText);

    // 3. Extração de Tamanhos (em Português e Inglês)
    const fullText = `${titleText} ${descText}`;
    const sizeRegex = /\b(?:tamanho|tam|size)\s*[:=]?\s*(pp|p|m|g|gg|xg|xs|s|l|xl|xxl|xxxl|[3-5][0-9])\b/gi;
    let match;
    while ((match = sizeRegex.exec(fullText)) !== null) {
      const extractedSize = match[1].toUpperCase();
      tags.add(lang === "en" ? `Size: ${extractedSize}` : `Tam: ${extractedSize}`);
    }

    if (/\b(plus size|tamanhos? grandes?)\b/i.test(fullText)) {
      tags.add(lang === "en" ? "Plus Size" : "Tamanhos Grandes");
    }
    if (/\b(tamanho unico|one size)\b/i.test(fullText)) {
      tags.add(lang === "en" ? "One Size" : "Tamanho Único");
    }

    return {
      ...product,
      displayTags: Array.from(tags)
    };
  });
}