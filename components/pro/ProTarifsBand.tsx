import Link from "next/link";
import { getSiteContent } from "@/lib/site-content";

export default async function ProTarifsBand() {
  const { tarifs, tarifsSection } = await getSiteContent();

  return (
    <section id="tarifs" className="py-20 px-4 border-t border-[var(--pro-line)]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 className="pro-display text-3xl font-extrabold text-[var(--pro-ink)]">
            {tarifsSection.title}
          </h2>
          <p className="mt-2 max-w-xl">{tarifsSection.subtitle}</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tarifs.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-[var(--pro-line)] p-6 hover:border-[var(--pro-accent)] transition"
            >
              <h3 className="font-bold text-[var(--pro-ink)] text-sm">{t.title}</h3>
              <p className="pro-display text-2xl font-extrabold text-[var(--pro-accent-dark)] mt-2">
                {t.price}
              </p>
              <p className="text-xs mt-2 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8">
          <Link
            href="/demande-intervention"
            className="inline-flex font-bold bg-[var(--pro-accent)] hover:bg-[var(--pro-accent-dark)] text-white px-8 py-3.5 rounded-full transition"
          >
            Demander un devis personnalisé
          </Link>
        </p>
      </div>
    </section>
  );
}
