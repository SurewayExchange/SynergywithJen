"use server";

import { cookies } from "next/headers";
import { getCatalogByVariantId } from "./catalog";
import { isShopifyConfigured, shopifyFetch } from "./shopify";
import {
  ADD_TO_CART_MUTATION,
  CREATE_CART_MUTATION,
  GET_CART_QUERY,
  REMOVE_FROM_CART_MUTATION,
  UPDATE_CART_MUTATION,
} from "./shopify-queries";
import type { Cart, CartLine } from "./shopify-types";

const LOCAL_CART_COOKIE = "localCart";
const SHOPIFY_CART_COOKIE = "cartId";

function emptyCart(): Cart {
  return {
    id: "local-cart",
    checkoutUrl: "/contact?intent=checkout",
    totalQuantity: 0,
    cost: {
      subtotalAmount: { amount: "0.00", currencyCode: "USD" },
      totalAmount: { amount: "0.00", currencyCode: "USD" },
    },
    lines: { nodes: [] },
  };
}

function recompute(lines: CartLine[]): Cart {
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);
  const total = lines.reduce(
    (sum, line) => sum + Number.parseFloat(line.cost.totalAmount.amount),
    0,
  );
  const amount = total.toFixed(2);

  return {
    id: "local-cart",
    checkoutUrl: "/contact?intent=checkout",
    totalQuantity,
    cost: {
      subtotalAmount: { amount, currencyCode: "USD" },
      totalAmount: { amount, currencyCode: "USD" },
    },
    lines: { nodes: lines },
  };
}

async function getLocalCart(): Promise<Cart> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(LOCAL_CART_COOKIE)?.value;
  if (!raw) return emptyCart();

  try {
    return JSON.parse(raw) as Cart;
  } catch {
    return emptyCart();
  }
}

async function saveLocalCart(cart: Cart) {
  const cookieStore = await cookies();
  cookieStore.set(LOCAL_CART_COOKIE, JSON.stringify(cart), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });
}

async function getShopifyCartId() {
  const cookieStore = await cookies();
  return cookieStore.get(SHOPIFY_CART_COOKIE)?.value;
}

async function setShopifyCartId(cartId: string) {
  const cookieStore = await cookies();
  cookieStore.set(SHOPIFY_CART_COOKIE, cartId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getCart(): Promise<Cart | null> {
  if (isShopifyConfigured()) {
    const cartId = await getShopifyCartId();
    if (cartId) {
      try {
        const data = await shopifyFetch<{ cart: Cart | null }>(GET_CART_QUERY, {
          cartId,
        });
        if (data.cart && data.cart.totalQuantity > 0) {
          return data.cart;
        }
      } catch {
        // Fall through to Jennifer's local cart.
      }
    }
  }

  const cart = await getLocalCart();
  return cart.totalQuantity > 0 ? cart : null;
}

export async function createCart(): Promise<Cart> {
  if (isShopifyConfigured()) {
    const data = await shopifyFetch<{ cartCreate: { cart: Cart } }>(
      CREATE_CART_MUTATION,
    );
    const cart = data.cartCreate.cart;
    await setShopifyCartId(cart.id);
    return cart;
  }

  const cart = emptyCart();
  await saveLocalCart(cart);
  return cart;
}

export async function addToCart(variantId: string): Promise<Cart> {
  if (isShopifyConfigured() && !variantId.startsWith("gid://local/")) {
    let cartId = await getShopifyCartId();
    if (!cartId) {
      const cart = await createCart();
      cartId = cart.id;
    }

    const data = await shopifyFetch<{ cartLinesAdd: { cart: Cart } }>(
      ADD_TO_CART_MUTATION,
      {
        cartId,
        lines: [{ merchandiseId: variantId, quantity: 1 }],
      },
    );
    return data.cartLinesAdd.cart;
  }

  const product = getCatalogByVariantId(variantId);
  if (!product) {
    throw new Error("Product not found");
  }

  const variant = product.variants.nodes[0];
  const cart = await getLocalCart();
  const existing = cart.lines.nodes.find(
    (line) => line.merchandise.id === variantId,
  );
  const unit = Number.parseFloat(variant.price.amount);

  let lines: CartLine[];
  if (existing) {
    const quantity = existing.quantity + 1;
    lines = cart.lines.nodes.map((line) =>
      line.id === existing.id
        ? {
            ...line,
            quantity,
            cost: {
              totalAmount: {
                amount: (unit * quantity).toFixed(2),
                currencyCode: "USD",
              },
            },
          }
        : line,
    );
  } else {
    lines = [
      ...cart.lines.nodes,
      {
        id: `line-${variantId}`,
        quantity: 1,
        merchandise: {
          id: variantId,
          title: variant.title,
          price: variant.price,
          product: { title: product.title, handle: product.handle },
          image: product.featuredImage
            ? {
                url: product.featuredImage.url,
                altText: product.featuredImage.altText,
              }
            : null,
        },
        cost: { totalAmount: { amount: variant.price.amount, currencyCode: "USD" } },
      },
    ];
  }

  const next = recompute(lines);
  await saveLocalCart(next);
  return next;
}

export async function updateCartLine(lineId: string, quantity: number): Promise<Cart> {
  if (isShopifyConfigured() && !lineId.startsWith("line-")) {
    const cartId = await getShopifyCartId();
    if (!cartId) throw new Error("No cart found");

    const data = await shopifyFetch<{ cartLinesUpdate: { cart: Cart } }>(
      UPDATE_CART_MUTATION,
      { cartId, lines: [{ id: lineId, quantity }] },
    );
    return data.cartLinesUpdate.cart;
  }

  const cart = await getLocalCart();
  const lines =
    quantity <= 0
      ? cart.lines.nodes.filter((line) => line.id !== lineId)
      : cart.lines.nodes.map((line) => {
          if (line.id !== lineId) return line;
          const unit = Number.parseFloat(line.merchandise.price.amount);
          return {
            ...line,
            quantity,
            cost: {
              totalAmount: {
                amount: (unit * quantity).toFixed(2),
                currencyCode: "USD",
              },
            },
          };
        });

  const next = recompute(lines);
  await saveLocalCart(next);
  return next;
}

export async function removeFromCart(lineId: string): Promise<Cart> {
  if (isShopifyConfigured() && !lineId.startsWith("line-")) {
    const cartId = await getShopifyCartId();
    if (!cartId) throw new Error("No cart found");

    const data = await shopifyFetch<{ cartLinesRemove: { cart: Cart } }>(
      REMOVE_FROM_CART_MUTATION,
      { cartId, lineIds: [lineId] },
    );
    return data.cartLinesRemove.cart;
  }

  const cart = await getLocalCart();
  const next = recompute(cart.lines.nodes.filter((line) => line.id !== lineId));
  await saveLocalCart(next);
  return next;
}
