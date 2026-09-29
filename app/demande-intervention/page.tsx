import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import InterventionForm from "@/components/InterventionForm";
import { TEL_DISPLAY, telHref } from "@/lib/contact";

export const metadata = { title: "Demande d'intervention" };

export default function DemandePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 min-h-[60vh] bg-surface">
        <div className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Devis & intervention</h1>
            <p className="text-slate-600 mb-6">Urgence : appelez directement.</p>
            <a
              href={telHref}
              className="inline-block text-2xl font-extrabold text-amber-600 hover:text-orange-600"
            >
              {TEL_DISPLAY}
            </a>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <InterventionForm />
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
