"use client";

import Link from "next/link";
import { useTransition } from "react";
import { removeFromCart, updateCartLine } from "@/lib/cart-actions";
import { formatMoney } from "@/lib/products";
import type { CartLine } from "@/lib/shopify-types";

export function CartLineItem({ line }: { line: CartLine }) {
  const [isPending, startTransition] = useTransition();

  return (
    <tr className={`border-b border-linen ${isPending ? "opacity-50" : ""}`}>
      <td className="py-5 pr-4">
        <Link
          href={`/shop/${line.merchandise.product.handle}`}
          className="font-medium hover:text-sage"
        >
          {line.merchandise.product.title}
        </Link>
        {line.merchandise.title !== "Default Title" && (
          <p className="mt-1 text-sm text-muted">{line.merchandise.title}</p>
        )}
      </td>
      <td className="py-5 pr-4 text-sm">
        {formatMoney(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
      </td>
      <td className="py-5 pr-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-linen bg-card px-2 py-1">
          <button
            type="button"
            className="h-7 w-7 rounded-full hover:bg-linen"
            onClick={() =>
              startTransition(async () => {
                await updateCartLine(line.id, line.quantity - 1);
              })
            }
            disabled={isPending}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-5 text-center text-sm">{line.quantity}</span>
          <button
            type="button"
            className="h-7 w-7 rounded-full hover:bg-linen"
            onClick={() =>
              startTransition(async () => {
                await updateCartLine(line.id, line.quantity + 1);
              })
            }
            disabled={isPending}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-5 pr-4 font-medium">
        {formatMoney(line.cost.totalAmount.amount, line.cost.totalAmount.currencyCode)}
      </td>
      <td className="py-5 text-right">
        <button
          type="button"
          className="text-sm text-muted underline-offset-4 hover:text-terracotta hover:underline"
          onClick={() =>
            startTransition(async () => {
              await removeFromCart(line.id);
            })
          }
          disabled={isPending}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
