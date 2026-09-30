import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import { getSiteContent } from "@/lib/site-content";
import { telHref, TEL_DISPLAY } from "@/lib/contact";
import TarifsGrid from "@/components/TarifsGrid";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tarifs",
  description: "Prix indicatifs — recherche de fuite, débouchage, inspection vidéo. Devis gratuit.",
};

export default async function TarifsPage() {
  const { tarifs, tarifsSection } = await getSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <section className="bg-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full">
              {tarifsSection.badge}
            </span>
            <h1 className="text-4xl font-extrabold mt-4">{tarifsSection.title}</h1>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">{tarifsSection.subtitle}</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <TarifsGrid items={tarifs} />

          <div className="mt-14 text-center rounded-2xl bg-blue-50 border border-blue-100 p-8">
            <p className="text-slate-700 mb-4">
              Chaque situation est unique. Appelez-nous pour un devis précis et gratuit.
            </p>
            <a
              href={telHref}
              className="inline-flex font-bold text-lg text-amber-600 hover:text-orange-600"
            >
              {TEL_DISPLAY}
            </a>
            <p className="mt-4">
              <Link href="/demande-intervention" className="text-blue-700 font-semibold hover:underline">
                Ou remplir le formulaire de devis →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
