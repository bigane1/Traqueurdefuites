import type { SiteContent } from "@/lib/site-content";

export default function ProofSection({ items }: { items: SiteContent["testimonials"] }) {
  const [lead, ...others] = items;

  return (
    <section className="py-20 px-4 border-y border-stone-200 bg-stone-bg">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {lead && (
          <blockquote className="lg:pr-8">
            <p className="text-2xl sm:text-3xl font-medium text-stone-900 leading-snug tracking-tight">
              &ldquo;{lead.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm">
              <span className="font-bold text-stone-900">{lead.name}</span>
              <span className="text-stone-500"> — {lead.place}</span>
            </footer>
          </blockquote>
        )}
        <ul className="space-y-6">
          {others.map((t) => (
            <li key={t.name} className="border-l-2 border-stone-300 pl-5">
              <p className="text-sm text-stone-600 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-xs font-semibold text-stone-800 mt-2">
                {t.name}, {t.place}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
