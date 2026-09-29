import type { SiteContent } from "@/lib/site-content";

export default function FaqAccordion({ items }: { items: SiteContent["faq"] }) {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-ink mb-6 text-center">Questions fréquentes</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group bg-white border border-slate-200 rounded-xl px-5 py-1 open:shadow-sm"
          >
            <summary className="cursor-pointer py-4 font-semibold text-ink list-none flex justify-between items-center gap-4">
              {item.q}
              <span className="text-ocean group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="text-sm text-slate-600 pb-4 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
