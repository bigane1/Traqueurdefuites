import type { SiteContent } from "@/lib/site-content";

export default function FaqSplit({ items }: { items: SiteContent["faq"] }) {
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];

  return (
    <section className="py-20 px-4 bg-stone-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-stone-900 mb-10">Questions fréquentes</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {cols.map((col, ci) => (
            <div key={ci} className="space-y-4">
              {col.map((item) => (
                <details key={item.q} className="bg-white border border-stone-200 px-5 open:border-accent/40">
                  <summary className="py-4 font-semibold text-stone-900 cursor-pointer list-none">
                    {item.q}
                  </summary>
                  <p className="text-sm pb-4 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
