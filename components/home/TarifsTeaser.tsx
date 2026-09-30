import Link from "next/link";
import { getSiteContent } from "@/lib/site-content";
import TarifsGrid from "@/components/TarifsGrid";

export default async function TarifsTeaser() {
  const { tarifs, tarifsSection } = await getSiteContent();
  const preview = tarifs.slice(0, 3);

  return (
    <section id="tarifs" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full">
            {tarifsSection.badge}
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">{tarifsSection.title}</h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto">{tarifsSection.subtitle}</p>
        </div>
        <TarifsGrid items={preview} />
        <p className="text-center mt-10">
          <Link
            href="/tarifs"
            className="inline-flex font-bold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
          >
            Voir tous les tarifs →
          </Link>
        </p>
      </div>
    </section>
  );
}
