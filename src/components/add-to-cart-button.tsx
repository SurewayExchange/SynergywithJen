"use client";

import { useTransition } from "react";
import { addToCart } from "@/lib/cart-actions";

export function AddToCartButton({
  variantId,
  availableForSale,
  label = "Add to cart",
}: {
  variantId: string;
  availableForSale: boolean;
  label?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => {
        startTransition(async () => {
          await addToCart(variantId);
        });
      }}
      disabled={!availableForSale || isPending}
      className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-60"
    >
      {!availableForSale ? "Sold out" : isPending ? "Adding…" : label}
    </button>
  );
}
