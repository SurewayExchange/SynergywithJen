import { catalog, getCatalogProduct } from "./catalog";
import { isShopifyConfigured, shopifyFetch } from "./shopify";
import { PRODUCT_BY_HANDLE_QUERY, PRODUCTS_QUERY } from "./shopify-queries";
import type { Product } from "./shopify-types";

export async function getProducts(): Promise<Product[]> {
  if (isShopifyConfigured()) {
    try {
      const data = await shopifyFetch<{ products: { nodes: Product[] } }>(
        PRODUCTS_QUERY,
        { first: 24 },
      );
      if (data.products.nodes.length > 0) {
        return data.products.nodes;
      }
    } catch {
      // Fall through to Jennifer's curated catalog.
    }
  }

  return catalog;
}

export async function getProduct(handle: string): Promise<Product | null> {
  if (isShopifyConfigured()) {
    try {
      const data = await shopifyFetch<{ product: Product | null }>(
        PRODUCT_BY_HANDLE_QUERY,
        { handle },
      );
      if (data.product) {
        return data.product;
      }
    } catch {
      // Fall through to Jennifer's curated catalog.
    }
  }

  return getCatalogProduct(handle);
}

export function formatMoney(amount: string, currencyCode = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(Number.parseFloat(amount));
}
