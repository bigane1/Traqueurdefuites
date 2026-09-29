import type { SiteContent } from "@/lib/site-content";

export default function ReviewsRow({
  items,
}: {
  items: SiteContent["testimonials"];
}) {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-ink mb-8">Ils ont respiré</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="min-w-[280px] md:min-w-[320px] snap-start bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-slate-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm font-bold text-ink">
                {t.name}
                <span className="font-normal text-slate-500"> — {t.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
