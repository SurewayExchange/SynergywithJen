import type { Product } from "./shopify-types";

export type CatalogProduct = Product & {
  category: string;
  benefit: string;
  servings: string;
};

function money(amount: string): Product["priceRange"]["minVariantPrice"] {
  return { amount, currencyCode: "USD" };
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
    priceRange: { minVariantPrice: money(amount) },
    featuredImage: {
      url: image,
      altText: title,
      width: 1200,
      height: 1500,
    },
    variants: {
      nodes: [
        {
          id: `gid://local/ProductVariant/${handle}`,
          title: "30-day supply",
          availableForSale: true,
          price: money(amount),
          selectedOptions: [{ name: "Size", value: "30-day supply" }],
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
      "Synergy’s cornerstone L-arginine formula for heart and circulation. Jennifer starts most cabinets here — the daily mix she trusts for elite cardiovascular support.",
    amount: "90.00",
    image: "/products/proargi-9.jpg",
    category: "Heart health",
    benefit: "Circulation & vitality",
    servings: "30 servings",
  }),
  product({
    handle: "trugreen",
    title: "TruGreen+",
    description:
      "A concentrated greens blend inspired by the garden — chlorophyll-rich plants for daily alkalinity and clean energy. A nature-first staple on Jennifer’s shelf.",
    amount: "33.60",
    image: "/products/trugreen.jpg",
    category: "Fitness",
    benefit: "Daily greens",
    servings: "30 servings",
  }),
  product({
    handle: "synerbeet",
    title: "SynerBeet",
    description:
      "Performance beets for nitric oxide and stamina. Jennifer recommends it beside ProArgi-9+ when clients want more from training days and long walks.",
    amount: "72.00",
    image: "/products/synerbeet.jpg",
    category: "Fitness",
    benefit: "Stamina & flow",
    servings: "30 servings",
  }),
  product({
    handle: "vitalift",
    title: "VitaLift",
    description:
      "Core daily nutrition from Synergy’s vitamin line — a lift for energy, immunity, and the gaps a busy week leaves behind.",
    amount: "50.40",
    image: "/products/vitalift.jpg",
    category: "Core nutrition",
    benefit: "Daily multivitamin",
    servings: "30 servings",
  }),
  product({
    handle: "e9",
    title: "E9",
    description:
      "Energy with L-arginine for focus that does not crash. Jennifer’s pick when afternoons need a clean lift instead of another coffee.",
    amount: "54.00",
    image: "/products/e9-energy.jpg",
    category: "Energy",
    benefit: "Clean focus",
    servings: "30 servings",
  }),
  product({
    handle: "biome-shake",
    title: "Biome Shake",
    description:
      "A purifying plant-protein shake with antioxidants and minerals. The microbiome line Jennifer uses when clients want a meal that still feels like food from the garden.",
    amount: "57.60",
    image: "/products/biome-shake.jpg",
    category: "Microbiome",
    benefit: "Purifying protein",
    servings: "14 servings",
  }),
  product({
    handle: "omega-3",
    title: "Omega-3",
    description:
      "Marine omega-3 from Synergy’s heart-and-mind line. EPA and DHA for focus, circulation, and the long game.",
    amount: "31.20",
    image: "/products/omega-3.jpg",
    category: "Core nutrition",
    benefit: "Heart & mind",
    servings: "60 softgels",
  }),
  product({
    handle: "vitamin-d3",
    title: "Vitamin D3",
    description:
      "Sunshine in a bottle from the core nutrition line. Jennifer adds it when indoor schedules take over mood, bone, and immune rhythm.",
    amount: "28.80",
    image: "/products/vitamin-d3.jpg",
    category: "Core nutrition",
    benefit: "Mood & bone",
    servings: "60 servings",
  }),
  product({
    handle: "melatonin-plus",
    title: "Melatonin Plus",
    description:
      "An evening restore formula for quieter nights. Pair with a darker room — Jennifer would rather you sleep than stack another stimulant.",
    amount: "33.60",
    image: "/products/melatonin-plus.jpg",
    category: "Restore",
    benefit: "Sleep support",
    servings: "60 servings",
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

export const categories = [
  "Heart health",
  "Fitness",
  "Core nutrition",
  "Energy",
  "Microbiome",
  "Restore",
] as const;
