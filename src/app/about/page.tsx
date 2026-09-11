import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Meet Jennifer Collins",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.28em] text-sage uppercase">{site.representative.role}</p>
          <h1 className="mt-3 font-serif text-5xl text-forest">{site.representative.name}</h1>
          <p className="mt-4 text-xl text-forest">{site.representative.headline}</p>
          <p className="mt-6 text-base leading-8 text-muted">{site.representative.bio}</p>
          <p className="mt-4 text-base leading-8 text-muted">
            Synergy with Jen is her reseller website for the official{" "}
            <a
              href={site.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline decoration-sage/40 underline-offset-4"
            >
              Synergy WorldWide
            </a>{" "}
            catalog — ProArgi-9+, TruGreen+, SynerBeet, VitaLift, L'amara, and
            every other product on the US shop. Clients order through Jennifer
            and still talk to the person who sold them. The experience is built
            on Fakelit, the first website, app, and game development platform
            all in one.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
          >
            Work with Jennifer
          </Link>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-white">
          <Image
            src="https://usprod.synergyworldwide.com/globalassets/synergy-products-catalog/products/us-fe1a46e26ce1dc5c33b265b2485c6e.png?v=300724204316"
            alt="Official Synergy WorldWide ProArgi-9+ product"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-10"
          />
        </div>
      </div>
    </main>
  );
}
