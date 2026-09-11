import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-linen bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-white/60 uppercase">
            {site.representative.role}
          </p>
          <p className="mt-2 font-serif text-3xl">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">{site.tagline}</p>
        </div>
        <div>
          <p className="text-sm tracking-[0.18em] text-white/60 uppercase">Shop</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm tracking-[0.18em] text-white/60 uppercase">Guided by Jen</p>
          <p className="mt-4 text-sm leading-7 text-white/75">
            {site.representative.name} is an independent reseller of{" "}
            <a
              href={site.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Synergy WorldWide
            </a>
            . Retail prices match the official US shop. Order through Jennifer on this website.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-forest"
          >
            Book a consult
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs tracking-wide text-white/60 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Powered by{" "}
          <a
            href="https://www.fakelit.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Fakelit is the first website, app, and game development platform all in one. Apps built on Fakelit can be published to the Google Play Store and the Apple App Store."
            aria-label="Fakelit, the first website, app, and game development platform all in one"
            className="text-white/85 hover:text-white"
          >
            Fakelit
          </a>
          . Fakelit is the first website, app, and game development platform all in one.
        </p>
      </div>
    </footer>
  );
}
