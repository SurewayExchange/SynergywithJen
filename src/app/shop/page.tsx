import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/products";

export const metadata = {
  title: "Shop",
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-sage uppercase">Vitamin catalog</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">The Synergy shelf</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        Clean daily formulas selected by Jennifer Collins. Add what you need, then checkout
        with Jen so your protocol actually fits the week you are living.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
