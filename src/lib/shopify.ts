const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

type ShopifyResponse<T> = {
  data: T;
  errors?: { message: string }[];
};

export function isShopifyConfigured() {
  return Boolean(domain && storefrontAccessToken);
}

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!domain || !storefrontAccessToken) {
    throw new Error("Shopify is not configured");
  }

  const endpoint = `https://${domain}/api/2025-01/graphql.json`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json: ShopifyResponse<T> = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((error) => error.message).join("\n"));
  }

  return json.data;
}
