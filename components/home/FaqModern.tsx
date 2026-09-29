import type { SiteContent } from "@/lib/site-content";

export default function FaqModern({ items }: { items: SiteContent["faq"] }) {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">FAQ</h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-2xl border border-slate-200 px-6 open:ring-2 open:ring-blue-100 open:border-blue-200 transition"
            >
              <summary className="py-5 font-bold text-slate-900 cursor-pointer list-none flex justify-between gap-4">
                {item.q}
                <span className="text-blue-500 group-open:rotate-180 transition-transform shrink-0">▾</span>
              </summary>
              <p className="text-sm text-slate-600 pb-5 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
