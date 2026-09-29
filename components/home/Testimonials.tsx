import type { SiteContent } from "@/lib/site-content";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < n ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ items }: { items: SiteContent["testimonials"] }) {
  return (
    <section id="avis" className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Des clients soulagés</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Stars n={5} />
            <span className="text-2xl font-black text-slate-900">5/5</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a) => (
            <div
              key={a.name}
              className="card-modern p-6 hover:-translate-y-1 transition-all border-violet-100/80"
            >
              <div className="font-bold text-slate-900">{a.name}</div>
              <div className="text-xs text-slate-400 mb-3">{a.place}</div>
              <Stars n={5} />
              <p className="mt-3 text-sm text-slate-600 leading-relaxed italic">
                &ldquo;{a.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
