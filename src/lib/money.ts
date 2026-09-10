import type { Money } from "./shopify-types";

export function formatMoney(money?: Money | null) {
  if (!money) return "";

  const amount = Number.parseFloat(money.amount);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode,
  }).format(Number.isFinite(amount) ? amount : 0);
}
