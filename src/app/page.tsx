import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/products";
import { site } from "@/lib/site";

const heroImage =
  "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=1600&q=80";
const ritualImage =
  "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1400&q=80";

export default async function HomePage() {
  const products = (await getProducts()).slice(0, 4);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-xs tracking-[0.28em] text-sage uppercase">
            Vitamin boutique · {site.representative.name}
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-forest sm:text-6xl">
            Daily vitality, with a sales rep who stays on the line.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            {site.tagline} Shop clean formulas, then check out with Jennifer so
            your cabinet matches the week you are actually living.
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
            alt="Glass jars of daily vitamins and botanicals on linen"
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
              title: "Clean daily formulas",
              copy: "A vitamin boutique edit: essentials, minerals, omegas, and recovery support chosen for everyday use.",
            },
            {
              title: "A rep who stays",
              copy: "Questions after delivery go to Jen, not a ticket queue. That is the difference of a sales-rep shop.",
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
              This week&apos;s cabinet
            </p>
            <h2 className="mt-2 font-serif text-4xl text-forest">
              Featured supplements
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
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem]">
            <Image
              src={ritualImage}
              alt="Fresh herbs and citrus for a morning wellness ritual"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
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
