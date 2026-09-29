import Link from "next/link";
import InterventionForm from "@/components/InterventionForm";
import { ADDRESS, EMAIL, TEL_DISPLAY, mailtoHref, telHref } from "@/lib/contact";

export default function ProContactBand() {
  return (
    <section id="contact" className="py-20 px-4 border-t border-[var(--pro-line)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="pro-display text-3xl font-extrabold text-[var(--pro-ink)] mb-4">
            Besoin d&apos;une intervention ?
          </h2>
          <p className="mb-8 leading-relaxed">
            Urgence fuite d&apos;eau, canalisation bouchée ou demande de devis : réponse rapide par
            téléphone ou via le formulaire.
          </p>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="font-bold text-[var(--pro-ink)]">Téléphone </span>
              <a href={telHref} className="text-[var(--pro-accent-dark)] font-bold hover:underline">
                {TEL_DISPLAY}
              </a>
            </li>
            <li>
              <span className="font-bold text-[var(--pro-ink)]">Email </span>
              <a href={mailtoHref} className="hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="font-bold text-[var(--pro-ink)]">Adresse </span>
              {ADDRESS}
            </li>
          </ul>
          <p className="mt-8">
            <Link href="/qui-sommes-nous" className="text-sm font-semibold underline underline-offset-4">
              Découvrir notre équipe
            </Link>
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--pro-line)] bg-[var(--pro-surface)] p-6 sm:p-8">
          <h3 className="font-bold text-[var(--pro-ink)] mb-4">Demande rapide</h3>
          <InterventionForm />
        </div>
      </div>
    </section>
  );
}
