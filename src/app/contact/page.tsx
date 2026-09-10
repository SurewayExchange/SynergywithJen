import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/contact-form";
import { getCart } from "@/lib/cart-actions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consult with Jennifer",
  description: `Book a supplement consult with ${site.representative.name}.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;
  const isCheckout = intent === "checkout";
  let cartSummary = "";

  try {
    const cart = await getCart();
    cartSummary =
      cart?.lines.nodes
        .map(
          (line) =>
            `${line.merchandise.product.title} × ${line.quantity}`,
        )
        .join(", ") ?? "";
  } catch {
    cartSummary = "";
  }

  return (
    <main className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs tracking-[0.28em] text-sage uppercase">
          {isCheckout ? "Checkout" : "Consult"}
        </p>
        <h1 className="mt-3 font-serif text-5xl text-forest">
          {isCheckout
            ? "Send this order to Jennifer Collins"
            : "Talk with Jennifer Collins"}
        </h1>
        <p className="mt-5 text-base leading-8 text-muted">
          {isCheckout
            ? "Jennifer will confirm your Senergy cabinet and follow up on fulfillment."
            : `Share your goals, current bottles, and anything your clinician has already flagged. ${site.representative.name} will help you choose from the cabinet.`}
        </p>
        {cartSummary ? (
          <p className="mt-4 rounded-2xl bg-card px-4 py-3 text-sm text-forest">
            In your cart: {cartSummary}
          </p>
        ) : null}
      </div>
      <ContactForm
        intent={isCheckout ? "checkout" : "consult"}
        cartSummary={cartSummary}
      />
    </main>
  );
}
