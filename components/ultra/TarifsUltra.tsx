import Link from "next/link";
import { getSiteContent } from "@/lib/site-content";
import TarifsGrid from "@/components/TarifsGrid";

export default async function TarifsUltra() {
  const { tarifs, tarifsSection } = await getSiteContent();

  return (
    <section id="tarifs" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 mb-3">
            {tarifsSection.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
            {tarifsSection.title}
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">{tarifsSection.subtitle}</p>
        </div>
        <TarifsGrid items={tarifs} />
        <p className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/demande-intervention"
            className="inline-flex btn-shimmer font-bold px-8 py-3.5 rounded-xl text-white"
          >
            Obtenir mon devis →
          </Link>
          <Link href="/tarifs" className="font-bold text-cyan-700 hover:text-cyan-900">
            Détail des prestations →
          </Link>
        </p>
      </div>
    </section>
  );
}
