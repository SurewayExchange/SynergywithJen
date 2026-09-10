import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl text-forest">
        That page is not on the shelf.
      </h1>
      <p className="mt-4 text-muted">
        Try the shop or book a consult with Jennifer.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
      >
        Back to the shop
      </Link>
    </main>
  );
}
