"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="btn-ghost px-3"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background px-4 py-4 shadow-sm">
          <nav className="flex flex-col gap-3 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)} className="py-1">
              Cart
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
