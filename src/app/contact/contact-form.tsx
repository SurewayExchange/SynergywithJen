"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm({
  intent,
  cartSummary,
}: {
  intent: "checkout" | "consult";
  cartSummary: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-10 rounded-[1.75rem] bg-card p-8">
        <h2 className="font-serif text-3xl text-forest">Jennifer has your note.</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Synergy with Jen will follow up. If your mail app opened, send the
          message to finish.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-10 space-y-5 rounded-[1.75rem] bg-card p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = String(form.get("name") ?? "");
        const email = String(form.get("email") ?? "");
        const goal = String(form.get("goal") ?? "");
        const message = String(form.get("message") ?? "");
        const subject =
          intent === "checkout"
            ? `Synergy order request from ${name}`
            : `Synergy consult from ${name}`;
        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Goal: ${goal}`,
          cartSummary ? `Cart: ${cartSummary}` : "",
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <label className="block">
        <span className="text-sm text-forest">Name</span>
        <input
          required
          name="name"
          className="mt-2 w-full rounded-2xl border border-linen bg-background px-4 py-3 outline-none ring-sage focus:ring-2"
        />
      </label>
      <label className="block">
        <span className="text-sm text-forest">Email</span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-2xl border border-linen bg-background px-4 py-3 outline-none ring-sage focus:ring-2"
        />
      </label>
      <label className="block">
        <span className="text-sm text-forest">What should Jennifer focus on?</span>
        <input
          name="goal"
          placeholder="Energy, sleep, immunity, beauty…"
          className="mt-2 w-full rounded-2xl border border-linen bg-background px-4 py-3 outline-none ring-sage focus:ring-2"
        />
      </label>
      <label className="block">
        <span className="text-sm text-forest">Note</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-linen bg-background px-4 py-3 outline-none ring-sage focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
      >
        {intent === "checkout" ? "Send order to Jennifer" : "Send consult request"}
      </button>
    </form>
  );
}
