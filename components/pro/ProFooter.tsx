import Link from "next/link";
import { SERVICE_NAV, serviceHref } from "@/lib/navigation";
import { ADDRESS, EMAIL, TEL_DISPLAY, telHref } from "@/lib/contact";

export default function ProFooter() {
  return (
    <footer className="border-t border-[var(--pro-line)] bg-[var(--pro-surface)]">
      <div className="max-w-6xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="pro-display font-bold text-[var(--pro-ink)] text-lg mb-3">
            Traqueur de Fuites
          </p>
          <p className="leading-relaxed mb-4">
            Spécialiste recherche de fuite et plomberie d&apos;urgence — Centre-Val de Loire.
          </p>
          <a href={telHref} className="font-bold text-[var(--pro-accent-dark)]">
            {TEL_DISPLAY}
          </a>
        </div>
        <div>
          <p className="font-bold text-[var(--pro-ink)] mb-3">Services</p>
          <ul className="space-y-2">
            {SERVICE_NAV.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s.slug)} className="hover:text-[var(--pro-ink)]">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-[var(--pro-ink)] mb-3">Site</p>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[var(--pro-ink)]">Version classique</Link></li>
            <li><Link href="/moderne" className="hover:text-[var(--pro-ink)]">Version moderne</Link></li>
            <li><Link href="/tarifs" className="hover:text-[var(--pro-ink)]">Tarifs</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--pro-ink)]">Blog</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-[var(--pro-ink)]">Mentions légales</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-[var(--pro-ink)] mb-3">Contact</p>
          <p>{ADDRESS}</p>
          <a href={`mailto:${EMAIL}`} className="block mt-2 hover:text-[var(--pro-ink)]">
            {EMAIL}
          </a>
        </div>
      </div>
      <p className="text-center text-xs py-6 text-[var(--pro-muted)] border-t border-[var(--pro-line)]">
        © {new Date().getFullYear()} Traqueur de Fuites — Tous droits réservés
      </p>
    </footer>
  );
}
