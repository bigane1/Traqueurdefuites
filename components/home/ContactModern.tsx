import Link from "next/link";
import InterventionForm from "@/components/InterventionForm";
import { ADDRESS, EMAIL, TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function ContactModern() {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">Contact & devis</h2>
          <p className="text-slate-500 mt-2">Urgence par téléphone — planification par formulaire.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <a
              href={telHref}
              className="block rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 shadow-xl hover:-translate-y-0.5 transition-transform"
            >
              <p className="text-sm text-blue-300 mb-1">Ligne directe 24h/24</p>
              <p className="text-4xl font-extrabold text-amber-300">{TEL_DISPLAY}</p>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 font-bold text-emerald-800 hover:bg-emerald-100 transition"
            >
              💬 WhatsApp
            </a>
            <div className="text-sm space-y-1 pl-1">
              <p>{ADDRESS}</p>
              <a href={`mailto:${EMAIL}`} className="text-blue-600 font-semibold hover:underline">
                {EMAIL}
              </a>
            </div>
            <Link href="/blog" className="text-sm font-bold text-blue-600 hover:underline">
              Conseils & actualités →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-surface p-6 sm:p-8 shadow-sm">
            <InterventionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
