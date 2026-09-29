type FaqItem = { q: string; a: string };

export default function ProFaq({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" className="py-20 px-4 bg-[var(--pro-surface)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="pro-display text-3xl font-extrabold text-[var(--pro-ink)] text-center mb-10">
          Questions fréquentes
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--pro-line)] bg-white open:ring-2 open:ring-teal-500/20"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-[var(--pro-ink)] flex justify-between gap-4">
                {item.q}
                <span className="text-[var(--pro-accent)] shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed border-t border-[var(--pro-line)] pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
