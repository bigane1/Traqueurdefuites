type FaqItem = { q: string; a: string };

export default function FaqUltra({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" className="py-24 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Questions <span className="text-cyan-400">fréquentes</span>
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-white/5 border border-white/10 open:bg-white/10 open:border-cyan-500/30 transition-colors"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-white flex justify-between gap-4 items-center">
                {item.q}
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-lg group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
