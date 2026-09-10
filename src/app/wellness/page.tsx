export const metadata = {
  title: "Wellness",
};

const articles = [
  {
    title: "Start with the foundation, not the trend",
    copy: "Jennifer usually begins with a daily multi, D3 + K2, and omega-3 before stacking specialty formulas. Consistency beats a crowded cabinet.",
  },
  {
    title: "Energy that does not borrow from tonight",
    copy: "If afternoons fall apart, look at minerals, protein, and B vitamins before another stimulant. Women’s Energy Complex is built for that conversation.",
  },
  {
    title: "Sleep is a supplement strategy",
    copy: "Magnesium glycinate and a darker evening do more for recovery than a random sleep gummy. Ask Jen before mixing sedating blends.",
  },
  {
    title: "Gut first when immunity keeps looping",
    copy: "A probiotic with meals and a simple C + zinc protocol is Jennifer’s seasonal starting point — then she adjusts to your travel and stress load.",
  },
];

export default function WellnessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-sage uppercase">Education</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">How Jennifer shops a cabinet</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        Short notes from the sales floor — not medical advice. Use them to arrive at a consult
        with better questions.
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
