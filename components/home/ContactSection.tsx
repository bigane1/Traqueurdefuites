import Link from "next/link";
import InterventionForm from "@/components/InterventionForm";
import { ADDRESS, EMAIL, TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-cta-soft text-rose-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-3">Besoin d&apos;une intervention ?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Urgence : appelez. Devis : formulaire ou WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <a
              href={telHref}
              className="block bg-gradient-to-br from-rose-600 to-fuchsia-700 text-white rounded-3xl p-6 shadow-xl shadow-rose-500/20 hover:-translate-y-0.5 transition-transform"
            >
              <div className="text-sm opacity-90 mb-1">Ligne urgence 24h/24</div>
              <div className="text-3xl font-black">{TEL_DISPLAY}</div>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 hover:bg-emerald-100 transition"
            >
              <span className="text-2xl">💬</span>
              <span className="font-bold text-emerald-900">WhatsApp</span>
            </a>
            <div className="text-sm text-slate-600 space-y-2 pl-1">
              <p>
                <strong className="text-slate-900">E-mail : </strong>
                <a href={`mailto:${EMAIL}`} className="text-violet-700 hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Adresse : </strong>
                {ADDRESS}
              </p>
            </div>
            <Link href="/blog" className="text-sm font-bold text-violet-700 hover:underline">
              Conseils sur le blog →
            </Link>
          </div>
          <div className="lg:col-span-3 card-modern p-6 sm:p-8 border-violet-100">
            <InterventionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
