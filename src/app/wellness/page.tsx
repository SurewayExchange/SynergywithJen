export const metadata = {
  title: "Wellness",
};

const articles = [
  {
    title: "Start with the official foundation",
    copy: "Jennifer usually begins with ProArgi-9+ for circulation, VitaLift or VitaPak for daily coverage, and Omega-3 before stacking specialty formulas from the Synergy WorldWide catalog.",
  },
  {
    title: "Energy that does not borrow from tonight",
    copy: "If afternoons fall apart, look at TruGreen+, SynerBeet, Essential Greens, and E9 before another stimulant. Those are the fitness and microbiome lines on the official shop.",
  },
  {
    title: "Sleep is a supplement strategy",
    copy: "Melatonin Plus and a darker evening do more for recovery than a random sleep gummy. Ask Jen before mixing restore blends.",
  },
  {
    title: "Gut first when immunity keeps looping",
    copy: "Biome Shake, Biome Actives, and Biome DTX are Jennifer’s microbiome starting point — then she adjusts VitaLift and Vitamin D3 to your travel and stress load.",
  },
];

export default function WellnessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-sage uppercase">Education</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">How Jennifer shops a cabinet</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        Short notes from an independent Synergy WorldWide reseller — not medical
        advice. Use them to arrive at a consult with better questions about the
        official catalog she sells.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="rounded-[1.75rem] bg-card p-8">
            <h2 className="font-serif text-3xl text-forest">{article.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{article.copy}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
