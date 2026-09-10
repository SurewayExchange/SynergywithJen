import Link from "next/link";
import { CartLineItem } from "@/components/cart-line-item";
import { getCart } from "@/lib/cart-actions";
import { formatMoney } from "@/lib/products";

export const metadata = {
  title: "Cart",
};

export default async function CartPage() {
  let cart = null;
  try {
    cart = await getCart();
  } catch {
    cart = null;
  }

  if (!cart || cart.lines.nodes.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-serif text-5xl text-forest">Your cart is empty</h1>
        <p className="mt-4 text-muted">Jennifer’s shelf is ready whenever you are.</p>
        <Link
          href="/shop"
          className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  const checkoutIsExternal = cart.checkoutUrl.startsWith("http");

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-5xl text-forest">Your cart</h1>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-linen text-xs tracking-[0.18em] text-muted uppercase">
              <th className="pb-3 font-medium">Formula</th>
              <th className="pb-3 font-medium">Price</th>
              <th className="pb-3 font-medium">Qty</th>
              <th className="pb-3 font-medium">Total</th>
              <th className="pb-3" />
            </tr>
          </thead>
          <tbody>
            {cart.lines.nodes.map((line) => (
              <CartLineItem key={line.id} line={line} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex flex-col items-end gap-4">
        <p className="text-lg text-forest">
          Subtotal{" "}
          <strong>
            {formatMoney(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode)}
          </strong>
        </p>
        {checkoutIsExternal ? (
          <a
            href={cart.checkoutUrl}
            className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
          >
            Proceed to checkout
          </a>
        ) : (
          <Link
            href={cart.checkoutUrl}
            className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
          >
            Checkout with Jennifer
          </Link>
        )}
        <Link href="/shop" className="text-sm text-sage hover:text-forest">
          Continue shopping
        </Link>
      </div>
    </main>
  );
}
