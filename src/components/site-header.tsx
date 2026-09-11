import Link from "next/link";
import { getCart } from "@/lib/cart-actions";
import { site } from "@/lib/site";

export async function SiteHeader() {
  let cart = null;
  try {
    cart = await getCart();
  } catch {
    cart = null;
  }
  const count = cart?.totalQuantity ?? 0;

  return (
    <header className="sticky top-0 z-40 border-b border-linen/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <p className="text-[11px] tracking-[0.28em] text-sage uppercase">
            {site.officialName}
          </p>
          <p className="font-serif text-2xl leading-none">{site.name}</p>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-forest/80 hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-sage/30 px-4 py-2 text-sm text-forest sm:inline-flex"
          >
            Ask Jen
          </Link>
          <Link
            href="/cart"
            className="rounded-full bg-forest px-4 py-2 text-sm text-white"
          >
            Cart{count > 0 ? ` (${count})` : ""}
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-linen px-4 py-3 text-sm md:hidden">
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap text-forest">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
