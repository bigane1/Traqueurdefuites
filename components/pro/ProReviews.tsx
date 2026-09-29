type Item = { quote: string; name: string; place: string };

export default function ProReviews({ items }: { items: Item[] }) {
  return (
    <section className="py-20 px-4" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto">
        <h2
          id="reviews-heading"
          className="pro-display text-3xl font-extrabold text-[var(--pro-ink)] text-center mb-4"
        >
          Ils nous ont fait confiance en urgence
        </h2>
        <p className="text-center max-w-xl mx-auto mb-12">
          Avis vérifiés de clients en Indre-et-Loire, Vienne, Sarthe et alentours.
        </p>
        <ul className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <li
              key={t.name}
              className="rounded-3xl border border-[var(--pro-line)] p-8 bg-white relative"
            >
              <span className="text-4xl text-teal-200 absolute top-6 right-8 font-serif" aria-hidden>
                “
              </span>
              <blockquote className="text-[var(--pro-ink)] font-medium leading-relaxed pr-8">
                {t.quote}
              </blockquote>
              <footer className="mt-6 pt-6 border-t border-[var(--pro-line)]">
                <cite className="not-italic font-bold text-sm text-[var(--pro-ink)]">
                  {t.name}
                </cite>
                <p className="text-xs mt-0.5">{t.place}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
