"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ConsultForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-card p-8">
        <p className="font-serif text-3xl text-forest">Jen will follow up.</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Your mail app should be open with the consult details. If it did not,
          write {site.representative.name} at {site.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-3xl bg-card p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const goal = String(data.get("goal") ?? "");
        const subject = encodeURIComponent(`Consult request from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nGoal: ${goal}\n\nPlease have ${site.representative.name} follow up.`,
        );
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <label className="block text-sm text-forest">
        Name
        <input name="name" required className="field mt-2" />
      </label>
      <label className="block text-sm text-forest">
        Email
        <input name="email" type="email" required className="field mt-2" />
      </label>
      <label className="block text-sm text-forest">
        What should Jen help with?
        <textarea name="goal" required rows={5} className="field mt-2" />
      </label>
      <button
        type="submit"
        className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
      >
        Email Jennifer
      </button>
    </form>
  );
}
