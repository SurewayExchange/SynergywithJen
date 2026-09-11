import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { featuredHandles, getCatalogProduct } from "@/lib/catalog";
import { site } from "@/lib/site";

const heroImage = "/products/hero-synergy-nature.jpg";
const ritualProduct = getCatalogProduct("proargi-9");

export default function HomePage() {
  const products = featuredHandles
    .map((handle) => getCatalogProduct(handle))
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-xs tracking-[0.28em] text-sage uppercase">
            {site.name} · {site.officialName}
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-forest sm:text-6xl">
            Daily vitality, with a company that stays on the line.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            {site.tagline} Every formula on this website is from the official{" "}
            <a
              href={site.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline decoration-sage/40 underline-offset-4"
            >
              Synergy WorldWide
            </a>{" "}
            catalog. Order through Synergy with Jen so the stack matches the
            week you are actually living.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
            >
              Shop the shelf
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-sage/30 px-6 py-3 text-sm font-medium text-forest"
            >
              Meet Jennifer
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-linen">
          <Image
            src={heroImage}
            alt="Synergy product lines styled with plants, citrus, and garden light"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-linen bg-card/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          {[
            {
              title: "Guided, not guessed",
              copy: "Jennifer reviews your goals before you commit to a stack — so you are not collecting bottles you will not finish.",
            },
            {
              title: "The official catalog",
              copy: "Heart health, fitness, microbiome, core nutrition, weight management, and L'amara — the same products listed on synergyworldwide.com.",
            },
            {
              title: "A company that stays",
              copy: "Questions after delivery go to Synergy with Jen, not a ticket queue.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-serif text-2xl text-forest">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.28em] text-sage uppercase">
              Synergy product lines
            </p>
            <h2 className="mt-2 font-serif text-4xl text-forest">
              Featured from Jennifer&apos;s cabinet
            </h2>
          </div>
          <Link href="/shop" className="text-sm text-sage hover:text-forest">
            View the shop
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-white">
            {ritualProduct?.featuredImage ? (
              <Image
                src={ritualProduct.featuredImage.url}
                alt={ritualProduct.featuredImage.altText ?? ritualProduct.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-10"
              />
            ) : null}
          </div>
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-white/70">
              {site.representative.role}
            </p>
            <h2 className="mt-3 font-serif text-4xl">
              {site.representative.headline}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/80">
              {site.representative.bio}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-forest"
            >
              Book a consult with Jen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
