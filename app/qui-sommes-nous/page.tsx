import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import { getSiteContent } from "@/lib/site-content";
import { SERVICE_NAV, serviceHref } from "@/lib/navigation";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Qui sommes-nous",
  description:
    "Traqueur de Fuites — artisans engagés, détection de fuites sans destruction, 8 départements.",
};

export default function QuiSommesNousPage() {
  const { aboutTitle, aboutParagraphs } = getSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-4">À propos</p>
            <h1 className="text-4xl font-extrabold mb-6 tracking-tight">{aboutTitle}</h1>
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 28)} className="text-slate-300 leading-relaxed mb-4 text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">Nos services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_NAV.map((s) => (
              <Link
                key={s.slug}
                href={serviceHref(s.slug)}
                className="p-5 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition bg-white flex gap-3"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-semibold text-slate-900 text-sm leading-snug">{s.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
