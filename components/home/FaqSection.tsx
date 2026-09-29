import type { SiteContent } from "@/lib/site-content";

export default function FaqSection({ items }: { items: SiteContent["faq"] }) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-brand-soft text-violet-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Questions fréquentes</h2>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group card-modern px-6 open:shadow-md open:border-violet-200 transition border-slate-200/90"
            >
              <summary className="cursor-pointer py-5 font-bold text-slate-900 list-none flex justify-between items-center gap-4">
                {item.q}
                <span className="text-violet-600 group-open:rotate-180 transition-transform shrink-0">
                  ▾
                </span>
              </summary>
              <p className="text-sm text-slate-600 pb-5 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
