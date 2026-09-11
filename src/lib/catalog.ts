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
    handle: "daily-synergy-multi",
    title: "Daily Synergy Multi",
    description:
      "Jennifer’s foundational multivitamin for busy days — methylated B vitamins, chelated minerals, and a gentle food-based blend that supports energy without the crash.",
    amount: "42.00",
    image:
      "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=1200&q=80",
    category: "Daily essentials",
    benefit: "All-day vitality",
    servings: "30 capsules",
  }),
  product({
    handle: "d3-k2-sunshine",
    title: "D3 + K2 Sunshine",
    description:
      "High-absorption vitamin D3 paired with K2 (MK-7) to support bone, mood, and immune rhythm — the pair Jennifer recommends when indoor schedules take over.",
    amount: "28.00",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    category: "Immunity",
    benefit: "Mood & bone support",
    servings: "60 softgels",
  }),
  product({
    handle: "magnesium-calm",
    title: "Magnesium Calm",
    description:
      "Magnesium glycinate for evening wind-down, muscle recovery, and a quieter mind. A nightly staple in Jennifer’s personal routine.",
    amount: "32.00",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    category: "Restore",
    benefit: "Sleep & recovery",
    servings: "90 capsules",
  }),
  product({
    handle: "omega-3-marine",
    title: "Omega-3 Marine",
    description:
      "Triglyceride-form EPA and DHA from wild-caught fish oil. Third-party tested for purity so you can take it with confidence.",
    amount: "36.00",
    image:
      "https://images.unsplash.com/photo-1550572017-4a6e81e66c82?auto=format&fit=crop&w=1200&q=80",
    category: "Heart & mind",
    benefit: "Focus & circulation",
    servings: "60 softgels",
  }),
  product({
    handle: "womens-energy-complex",
    title: "Women’s Energy Complex",
    description:
      "Iron-conscious B-complex, adaptogens, and trace minerals designed for women who need steady energy — not stimulants.",
    amount: "38.00",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1200&q=80",
    category: "Energy",
    benefit: "Steady stamina",
    servings: "60 capsules",
  }),
  product({
    handle: "gut-harmony-probiotic",
    title: "Gut Harmony Probiotic",
    description:
      "A 20-billion CFU blend with prebiotic fiber for digestion, immunity, and clearer energy after meals.",
    amount: "44.00",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    category: "Gut",
    benefit: "Digestive balance",
    servings: "30 capsules",
  }),
  product({
    handle: "immune-c-zinc",
    title: "Immune C + Zinc",
    description:
      "Buffered vitamin C with zinc bisglycinate and citrus bioflavonoids. Jennifer’s go-to travel and seasonal protocol.",
    amount: "24.00",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80",
    category: "Immunity",
    benefit: "Seasonal defense",
    servings: "90 capsules",
  }),
  product({
    handle: "beauty-collagen",
    title: "Beauty Collagen",
    description:
      "Hydrolyzed collagen peptides with vitamin C and silica for hair, skin, nails, and joint comfort. Mixes clean in coffee or a smoothie.",
    amount: "48.00",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    category: "Beauty",
    benefit: "Skin & joints",
    servings: "20 servings",
  }),
];

export function getCatalogProduct(handle: string) {
  return catalog.find((item) => item.handle === handle) ?? null;
}

export function getCatalogByVariantId(variantId: string) {
  return catalog.find((item) => item.variants.nodes[0]?.id === variantId) ?? null;
}

export const categories = [
  "Daily essentials",
  "Energy",
  "Immunity",
  "Restore",
  "Gut",
  "Beauty",
  "Heart & mind",
] as const;
