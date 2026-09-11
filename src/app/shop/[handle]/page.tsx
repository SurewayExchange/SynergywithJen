import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { catalog, getCatalogProduct } from "@/lib/catalog";
import { formatMoney, getProduct } from "@/lib/products";

export async function generateStaticParams() {
  return catalog.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);
  return {
    title: product?.title ?? "Formula",
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  const variant = product.variants.nodes[0];
  const price = product.priceRange.minVariantPrice;
  const line = getCatalogProduct(product.handle);
  const more = catalog
    .filter((item) => item.handle !== product.handle)
    .sort((a, b) => {
      const same = Number(b.category === line?.category) - Number(a.category === line?.category);
      return same;
    })
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link href="/shop" className="text-sm text-sage hover:text-forest">
        ← Back to shop
      </Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-white">
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText ?? product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-10"
            />
          ) : null}
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-sage uppercase">
            {line?.category ?? "Synergy WorldWide"} · Reseller: Jennifer Collins
          </p>
          <h1 className="mt-3 font-serif text-5xl text-forest">{product.title}</h1>
          <p className="mt-4 text-xl text-forest">
            {formatMoney(price.amount, price.currencyCode)}{" "}
            <span className="text-sm font-normal text-muted">official retail</span>
          </p>
          {line ? (
            <p className="mt-2 text-sm text-sage">
              {line.benefit} · {line.servings}
            </p>
          ) : null}
          <p className="mt-6 text-base leading-8 text-muted">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {variant ? (
              <AddToCartButton
                variantId={variant.id}
                availableForSale={product.availableForSale && variant.availableForSale}
                label="Order with Jen"
              />
            ) : null}
            <Link
              href="/contact"
              className="rounded-full border border-sage/30 px-5 py-2.5 text-sm font-medium text-forest"
            >
              Ask Jen about this
            </Link>
            {line ? (
              <a
                href={line.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sage/30 px-5 py-2.5 text-sm font-medium text-forest"
              >
                Official product page
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {more.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-serif text-3xl text-forest">Also on Jennifer’s shelf</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
