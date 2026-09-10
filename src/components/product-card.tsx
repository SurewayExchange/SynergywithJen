import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/shopify-types";

export function ProductCard({ product }: { product: Product }) {
  const variant = product.variants.nodes[0];
  const price = product.priceRange.minVariantPrice;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_12px_40px_rgba(44,70,48,0.06)]">
      <Link href={`/shop/${product.handle}`} className="relative aspect-[4/5] overflow-hidden bg-linen">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            Senergy formula
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-serif text-2xl leading-tight">
            <Link href={`/shop/${product.handle}`}>{product.title}</Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <p className="text-sm font-medium text-forest">
            {formatMoney(price.amount, price.currencyCode)}
          </p>
          {variant ? (
            <AddToCartButton
              variantId={variant.id}
              availableForSale={product.availableForSale && variant.availableForSale}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
