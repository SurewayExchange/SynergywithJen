import type { Metadata } from "next";
import { ConsultForm } from "@/components/consult-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consult with Jennifer",
  description: `Book a supplement consult with ${site.representative.name}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs tracking-[0.28em] text-sage uppercase">Consult</p>
        <h1 className="mt-3 font-serif text-5xl text-forest">
          Talk with Jennifer Collins
        </h1>
        <p className="mt-5 text-base leading-8 text-muted">
          Share your goals, current bottles, and anything your clinician has
          already flagged. {site.representative.name} will help you choose from
          the cabinet and check out when you are ready.
        </p>
      </div>
      <ConsultForm />
    </main>
  );
}
