type Item = { quote: string; name: string; place: string };

export default function ReviewsUltra({ items }: { items: Item[] }) {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 mb-6">
            <span className="text-amber-500 text-lg">★★★★★</span>
            <span className="text-sm font-bold text-slate-800">4,9/5 — clients en urgence</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold text-slate-900">
            Ils ont retrouvé la tranquillité
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <li
              key={t.name}
              className="relative rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all"
            >
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Avis vérifié
              </div>
              <blockquote className="text-slate-800 text-lg leading-relaxed font-medium mt-2">
                « {t.quote} »
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <cite className="not-italic font-bold text-slate-900 text-sm">{t.name}</cite>
                  <p className="text-xs text-slate-500">{t.place}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
