import Link from "next/link";
import InterventionForm from "@/components/InterventionForm";
import { ADDRESS, EMAIL, TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function ContactUltra() {
  return (
    <section id="contact" className="py-24 px-4 bg-aurora relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative z-10">
        <div className="text-white">
          <h2 className="font-display text-4xl font-extrabold mb-4">
            Une urgence ? <span className="text-orange-400">On décroche.</span>
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Fuite, bouchon, doute sur une infiltration : décrivez la situation par téléphone ou
            formulaire — réponse rapide garantie.
          </p>
          <a
            href={telHref}
            className="block rounded-2xl card-glow bg-gradient-to-br from-orange-500 to-orange-600 p-8 mb-4 hover:-translate-y-0.5 transition-transform"
          >
            <p className="text-orange-100 text-sm mb-1">Ligne directe</p>
            <p className="font-display text-4xl sm:text-5xl font-extrabold">{TEL_DISPLAY}</p>
          </a>
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition"
            >
              WhatsApp
            </a>
            <Link
              href="/blog"
              className="font-bold px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Lire le blog
            </Link>
          </div>
          <p className="text-sm text-slate-400">{ADDRESS}</p>
          <a href={`mailto:${EMAIL}`} className="text-sm text-cyan-300 hover:underline">
            {EMAIL}
          </a>
        </div>
        <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-2xl">
          <h3 className="font-display font-bold text-xl text-slate-900 mb-1">Demande d&apos;intervention</h3>
          <p className="text-sm text-slate-500 mb-6">Réponse sous 24h — urgences par téléphone.</p>
          <InterventionForm />
        </div>
      </div>
    </section>
  );
}
