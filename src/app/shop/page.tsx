import { ProductCard } from "@/components/product-card";
import { catalog, categories } from "@/lib/catalog";

export const metadata = {
  title: "Shop Synergy lines",
};

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-sage uppercase">
        Synergy WorldWide
      </p>
      <h1 className="mt-3 font-serif text-5xl text-forest">
        Product lines Jennifer sells
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        Nature-inspired photography of the Synergy cabinet — ProArgi-9+, greens,
        beets, vitamins, energy, and restore. Shop the lines on this website
        with Jennifer.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((line) => (
          <a
            key={line}
            href={`#${line.toLowerCase().replace(/\s+/g, "-")}`}
            className="rounded-full border border-sage/30 px-4 py-2 text-sm text-forest hover:bg-card"
          >
            {line}
          </a>
        ))}
      </div>
      {categories.map((line) => {
        const items = catalog.filter((product) => product.category === line);
        if (items.length === 0) return null;
        return (
          <section
            key={line}
            id={line.toLowerCase().replace(/\s+/g, "-")}
            className="mt-16 scroll-mt-28"
          >
            <h2 className="font-serif text-3xl text-forest">{line}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
