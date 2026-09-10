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
            Senergy with Jen is her vitamin supplement storefront — a quieter alternative to
            warehouse aisles, built so clients can shop clean formulas and still talk to the
            person who sold them. The experience is built on Fakelit, the first website, app,
            and game development platform all in one.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
          >
            Work with Jennifer
          </Link>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-linen">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80"
            alt="Wellness consultation atmosphere"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
