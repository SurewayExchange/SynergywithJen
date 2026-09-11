import type { Product } from "./shopify-types";

export type CatalogProduct = Product & {
  category: string;
  benefit: string;
  servings: string;
  officialUrl: string;
};

function money(amount: string): Product["priceRange"]["minVariantPrice"] {
  return { amount, currencyCode: "USD" };
}

function officialImage(path: string) {
  return `https://usprod.synergyworldwide.com${path}`;
}

function product({
  handle,
  title,
  description,
  amount,
  image,
  category,
  benefit,
  servings,
}: {
  handle: string;
  title: string;
  description: string;
  amount: string;
  image: string;
  category: string;
  benefit: string;
  servings: string;
}): CatalogProduct {
  return {
    id: `gid://local/Product/${handle}`,
    title,
    handle,
    description,
    availableForSale: true,
    category,
    benefit,
    servings,
    officialUrl: `https://www.synergyworldwide.com/US/en-US/Shop/Product/${handle}`,
    priceRange: { minVariantPrice: money(amount) },
    featuredImage: {
      url: officialImage(image),
      altText: `${title} from Synergy WorldWide`,
      width: 1200,
      height: 1200,
    },
    variants: {
      nodes: [
        {
          id: `gid://local/ProductVariant/${handle}`,
          title: "Retail",
          availableForSale: true,
          price: money(amount),
          selectedOptions: [{ name: "Size", value: "Retail" }],
        },
      ],
    },
  };
}

export const catalog: CatalogProduct[] = [
  product({
    handle: "proargi-9",
    title: "ProArgi-9+",
    description:
      "Synergy WorldWide’s flagship L-arginine formula. Jennifer starts most cabinets here for circulation and daily vitality.",
    amount: "90.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-fe1a46e26ce1dc5c33b265b2485c6e.png?v=300724204316",
    category: "Heart Health",
    benefit: "Circulation support",
    servings: "Retail canister",
  }),
  product({
    handle: "proargi-9-proguard",
    title: "ProArgi-9+ ProGuard",
    description:
      "An immune-support companion to ProArgi-9+, built to circulate beta-glucans, vitamins, and fruit polyphenols.",
    amount: "60.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-63aeabb99033a4c8698cbcf21c5026.png?v=300724212450",
    category: "Heart Health",
    benefit: "Immune defense",
    servings: "Stick packs",
  }),
  product({
    handle: "proargi-9-active",
    title: "ProArgi-9+ Active",
    description:
      "L-arginine with quercetin, B vitamins, and D-ribose for training days and faster recovery.",
    amount: "90.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-685ef06fb8be1f88ed437527f83475.png?v=140824184501",
    category: "Heart Health",
    benefit: "Performance & recovery",
    servings: "Stick packs",
  }),
  product({
    handle: "metabolic-ldl",
    title: "Metabolic LDL",
    description:
      "A heart-health formula Jennifer recommends when clients want extra support beside ProArgi-9+.",
    amount: "46.80",
    image: "/siteassets/product-images/metabolic-ldl.png?v=180724214449",
    category: "Heart Health",
    benefit: "Cholesterol support",
    servings: "Retail bottle",
  }),
  product({
    handle: "coq10",
    title: "CoQ10",
    description:
      "Coenzyme Q10 from the official core heart line — a daily add-on for energy at the cellular level.",
    amount: "30.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-b7845696af33f00ad936c7334e0d7c.png?v=140824183847",
    category: "Heart Health",
    benefit: "Cellular energy",
    servings: "Retail bottle",
  }),
  product({
    handle: "omega-3",
    title: "Omega-3",
    description:
      "Marine omega-3 from Synergy WorldWide for heart and mind support.",
    amount: "31.20",
    image:
      "/globalassets/synergy-products-catalog/products/us-e6d0560dfefa4bf2822a3fb583e89bd6.png?v=030424230533",
    category: "Heart Health",
    benefit: "Heart & mind",
    servings: "Softgels",
  }),
  product({
    handle: "synerbeet",
    title: "SynerBeet",
    description:
      "Beet-root performance drink for nitric oxide, stamina, and focus — Jennifer pairs it with ProArgi-9+.",
    amount: "72.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-d8910f1dbe284016b56af99542ad5059.png?v=151123231841",
    category: "Fitness",
    benefit: "Stamina & flow",
    servings: "Stick packs",
  }),
  product({
    handle: "e9",
    title: "E9",
    description:
      "Synergy’s energy drink with L-arginine — a clean lift when afternoons need focus instead of another coffee.",
    amount: "54.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-eb454adab0e7220fd175eeeb5b6942.png?v=010224144351",
    category: "Fitness",
    benefit: "Clean energy",
    servings: "Stick packs",
  }),
  product({
    handle: "essential-greens",
    title: "Essential Greens",
    description:
      "A chlorophyll-rich greens drink for days when vegetable servings do not make the plate.",
    amount: "48.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-7724dd6c83a578fde52cdc7c09c581.png?v=260724164434",
    category: "Fitness",
    benefit: "Daily greens",
    servings: "Stick packs",
  }),
  product({
    handle: "trugreen",
    title: "TruGreen+",
    description:
      "Extra-strength lime greens stick packs for microbiome balance and a fresh, daily clean.",
    amount: "33.60",
    image:
      "/globalassets/synergy-products-catalog/products/us-7c7fcd3d80304d48a232d434e55d1a86.png?v=161024183024",
    category: "Microbiome",
    benefit: "Daily refresh",
    servings: "Stick packs",
  }),
  product({
    handle: "biome-shake",
    title: "Biome Shake",
    description:
      "Plant-protein purifying shake from the official microbiome line — Jennifer’s meal when clients want food that still feels clean.",
    amount: "57.60",
    image:
      "/globalassets/synergy-products-catalog/products/us-070d2654bd59484b90df44c8ca9480b4.png?v=070825211839",
    category: "Microbiome",
    benefit: "Purifying protein",
    servings: "Shake canister",
  }),
  product({
    handle: "biome-dtx",
    title: "Biome DTX",
    description:
      "Synergy’s purification drink for detox, fiber cleanse, and microbiome balance during a reset week.",
    amount: "72.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-ea5725496f20d130772eb84524b9e0.png?v=300724214918",
    category: "Microbiome",
    benefit: "Purify & cleanse",
    servings: "Stick packs",
  }),
  product({
    handle: "body-prime",
    title: "Body Prime",
    description:
      "Magnesium, prune, and pectin support for motility — a Purify-kit staple Jennifer keeps on the shelf.",
    amount: "46.80",
    image:
      "/globalassets/synergy-products-catalog/products/us-246e900de51329032304532cb4fdce.png?v=300724215338",
    category: "Microbiome",
    benefit: "Gentle cleanse",
    servings: "Retail bottle",
  }),
  product({
    handle: "biome-actives",
    title: "Biome Actives",
    description:
      "Prebiotic and probiotic capsules with Bacillus coagulans for everyday gut balance.",
    amount: "46.80",
    image:
      "/globalassets/synergy-products-catalog/products/us-02160f26ec4843bfb740577ef645ad.png?v=300724215608",
    category: "Microbiome",
    benefit: "Pre + probiotic",
    servings: "90 capsules",
  }),
  product({
    handle: "liquid-chlorophyll",
    title: "Liquid Chlorophyll",
    description:
      "A liquid chlorophyll concentrate from the official catalog for daily internal freshness.",
    amount: "32.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-01793d1e99e78e63fc2175fe9aac0e.png?v=300724213120",
    category: "Microbiome",
    benefit: "Internal freshness",
    servings: "Liquid",
  }),
  product({
    handle: "vitalift",
    title: "VitaLift",
    description:
      "Core daily nutrition from Synergy WorldWide — Jennifer’s multivitamin when a busy week leaves gaps.",
    amount: "50.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-c753bc8215ff49e09b727cee71d64aeb.png?v=230524165237",
    category: "Core Nutrition",
    benefit: "Daily multivitamin",
    servings: "Retail bottle",
  }),
  product({
    handle: "vitapak",
    title: "VitaPak",
    description:
      "Travel-ready packets with essential vitamins, minerals, and phytonutrients for life on the go.",
    amount: "90.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-05aeb184fe224e019ed1c81e6242955a.png?v=170326143812",
    category: "Core Nutrition",
    benefit: "Daily packets",
    servings: "Daily packets",
  }),
  product({
    handle: "vitamin-d3",
    title: "Vitamin D3",
    description:
      "Sunshine-in-a-bottle from the official core line when indoor schedules take over.",
    amount: "24.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-4e9f034409bcf3e80c07f7bbb96cb7.png?v=300724215818",
    category: "Core Nutrition",
    benefit: "Mood & bone",
    servings: "Retail bottle",
  }),
  product({
    handle: "melatonin-plus",
    title: "Melatonin Plus",
    description:
      "Evening restore from Synergy WorldWide for quieter nights — pair with a darker room.",
    amount: "33.60",
    image:
      "/globalassets/synergy-products-catalog/products/us-f0733e19b6c647cdb5d58fcb86fa1ef0.png?v=170124035121",
    category: "Core Nutrition",
    benefit: "Sleep support",
    servings: "Retail bottle",
  }),
  product({
    handle: "mistica",
    title: "Mistica",
    description:
      "An antioxidant fruit blend with açai and green tea — Jennifer’s liquid daily for oxidative stress support.",
    amount: "50.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-5cee7fe4cad6b80c9a940be21f0517.png?v=300724213317",
    category: "Core Nutrition",
    benefit: "Antioxidant blend",
    servings: "Liquid",
  }),
  product({
    handle: "easy-o",
    title: "Easy-O",
    description:
      "A core-nutrition essential from the official US shop. Ask Jennifer how it fits your cabinet.",
    amount: "34.80",
    image:
      "/globalassets/synergy-products-catalog/products/us-ac4e094667654f1a82cc70746ace7d64.png?v=170124035123",
    category: "Core Nutrition",
    benefit: "Daily essential",
    servings: "Retail bottle",
  }),
  product({
    handle: "beauty-essentials",
    title: "Beauty Essentials",
    description:
      "Inside-out beauty support from Synergy’s official catalog.",
    amount: "32.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-644124192cd14e8eb847fcaad4235aeb.png?v=170124035119",
    category: "Core Nutrition",
    benefit: "Beauty support",
    servings: "Retail bottle",
  }),
  product({
    handle: "peppermint-oil",
    title: "Peppermint Oil",
    description:
      "Peppermint oil drops for a cooling after-meal drink — a small official staple Jennifer keeps on hand.",
    amount: "18.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-d720ccdb04e64627b69fe59a1705792f.png?v=061223173429",
    category: "Core Nutrition",
    benefit: "After-meal comfort",
    servings: "Liquid drops",
  }),
  product({
    handle: "detox-plus",
    title: "Detox Plus",
    description:
      "A weight-management companion from the official purify-adjacent line.",
    amount: "36.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-cd8637a7bef9ef9c37676e9ae3dda6.png?v=140824190144",
    category: "Weight Management",
    benefit: "Reset support",
    servings: "Retail bottle",
  }),
  product({
    handle: "body-cleanse",
    title: "Body Cleanse",
    description:
      "A 35-herb cleanse Jennifer uses when clients want a gentle, scheduled reset.",
    amount: "45.60",
    image:
      "/globalassets/synergy-products-catalog/products/us-394b2005b056e273d0d6cdc53893a8.png?v=140824190843",
    category: "Weight Management",
    benefit: "Herbal cleanse",
    servings: "Daily packets",
  }),
  product({
    handle: "crave-control",
    title: "Crave Control",
    description:
      "Appetite-support capsules from Synergy’s official weight-management line.",
    amount: "57.60",
    image:
      "/globalassets/synergy-products-catalog/products/us-7864aae0944bf913177e04914b14ad.png?v=140824191212",
    category: "Weight Management",
    benefit: "Craving support",
    servings: "Retail bottle",
  }),
  product({
    handle: "truglo",
    title: "TruGlo",
    description:
      "Synergy’s beauty-from-within formula from the official skincare and beauty shelf.",
    amount: "50.40",
    image: "/siteassets/product-images/truglo-thumbnail.png?v=150126165712",
    category: "Skincare & Beauty",
    benefit: "Glow support",
    servings: "Retail bottle",
  }),
  product({
    handle: "lamara-daily-nourishing-cleanser",
    title: "L'amara Daily Nourishing Cleanser",
    description:
      "Daily cleanser from Synergy’s L'amara skincare line. Jennifer resells the full collection.",
    amount: "38.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-4932103205c64d55b0009d65900f33c5.png?v=210126182853",
    category: "L'amara",
    benefit: "Daily cleanse",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-skin-activating-toner",
    title: "L'amara Skin Activating Toner",
    description:
      "Activating toner from the official L'amara collection.",
    amount: "38.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-860c7c317d1944efb57a8b9e34aabadd.png?v=270126211853",
    category: "L'amara",
    benefit: "Tone & prep",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-radiance-oil",
    title: "L'amara Radiance Oil",
    description:
      "Face oil from L'amara for glow and comfort after cleansing.",
    amount: "48.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-140ba5383c69412497d497fe864f42a1.png?v=280126163847",
    category: "L'amara",
    benefit: "Radiance",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-moisture-boost-emulsion",
    title: "L'amara Moisture Boost Emulsion",
    description:
      "Daily moisture from the official L'amara line.",
    amount: "48.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-fa3708788645483f9b02d55df68133e2.png?v=280126171408",
    category: "L'amara",
    benefit: "Hydration",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-revealing-eye-cream",
    title: "L'amara Revealing Eye Cream",
    description:
      "Eye cream from Synergy’s L'amara collection.",
    amount: "48.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-img-2338.png?v=301021173342",
    category: "L'amara",
    benefit: "Eye care",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-anti-pollution-revitalizing-concentrate",
    title: "L'amara Anti-Pollution Revitalizing Concentrate",
    description:
      "A concentrated L'amara treatment Jennifer offers beside the daily cleanser and toner.",
    amount: "48.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-3fed5ce7102b4163a74e0231d89d1822.png?v=280126174901",
    category: "L'amara",
    benefit: "Revitalize",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-anti-pollution-exfoliating-cleanser",
    title: "L'amara Anti-Pollution Exfoliating Cleanser",
    description:
      "Exfoliating cleanser from the official L'amara anti-pollution ritual.",
    amount: "38.40",
    image:
      "/globalassets/synergy-products-catalog/products/us-1e4ef7ebb7784fff9189392a0833d546.png?v=180326180800",
    category: "L'amara",
    benefit: "Exfoliate",
    servings: "Skincare",
  }),
  product({
    handle: "lamara-ampule",
    title: "L'amara Deep Core PDRN Ampule",
    description:
      "The intensive L'amara ampule from Synergy WorldWide’s official skincare collection.",
    amount: "66.00",
    image:
      "/globalassets/synergy-products-catalog/products/us-143fea03bf5a4484bd968807f15039cb.png?v=210826170732",
    category: "L'amara",
    benefit: "Intensive care",
    servings: "Skincare",
  }),
];

export function getCatalogProduct(handle: string) {
  return catalog.find((item) => item.handle === handle) ?? null;
}

export function getCatalogByVariantId(variantId: string) {
  return (
    catalog.find((item) => item.variants.nodes[0]?.id === variantId) ?? null
  );
}

export const featuredHandles = [
  "proargi-9",
  "trugreen",
  "synerbeet",
  "vitalift",
] as const;

export const categories = [
  "Heart Health",
  "Fitness",
  "Microbiome",
  "Core Nutrition",
  "Weight Management",
  "Skincare & Beauty",
  "L'amara",
] as const;
