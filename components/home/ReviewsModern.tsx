import type { SiteContent } from "@/lib/site-content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export default function ReviewsModern({ items }: { items: SiteContent["testimonials"] }) {
  return (
    <section id="avis" className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full">
            Avis clients
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">Ils nous font confiance</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((a) => (
            <div
              key={a.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all"
            >
              <Stars />
              <p className="mt-4 text-slate-600 text-sm leading-relaxed italic">&ldquo;{a.quote}&rdquo;</p>
              <p className="mt-4 font-bold text-slate-900 text-sm">
                {a.name}
                <span className="font-normal text-slate-400"> · {a.place}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
