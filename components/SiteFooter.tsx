import Link from "next/link";
import { SERVICE_NAV, serviceHref } from "@/lib/navigation";
import { ADDRESS, EMAIL, TEL_DISPLAY, telHref } from "@/lib/contact";
import BrandLogo from "@/components/BrandLogo";
import { getSiteContent } from "@/lib/site-content";

export default async function SiteFooter() {
  const { logoSrc, logoAlt } = await getSiteContent();

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-cyan-950/50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <BrandLogo asLink src={logoSrc} alt={logoAlt} priority={false} className="mb-4" />
          <p className="text-sm leading-relaxed mb-4">
            Préserver l&apos;eau, réparer sans casser — 8 départements, 24h/24.
          </p>
          <a href={telHref} className="text-amber-400 font-bold hover:text-amber-300">
            📞 {TEL_DISPLAY}
          </a>
        </div>
        <div>
          <p className="font-bold text-white mb-3 text-sm">Nos services</p>
          <ul className="space-y-2 text-sm">
            {SERVICE_NAV.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s.slug)} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3 text-sm">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil (version actuelle)
              </Link>
            </li>
            <li>
              <Link href="/moderne" className="hover:text-white">
                Accueil style classique
              </Link>
            </li>
            <li>
              <Link href="/mutualisation" className="hover:text-white">
                Curage groupé voisins
              </Link>
            </li>
            <li>
              <Link href="/qui-sommes-nous" className="hover:text-white">
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-white">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/demande-intervention" className="hover:text-white">
                Devis
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3 text-sm">Coordonnées</p>
          <p className="text-sm">{ADDRESS}</p>
          <a href={`mailto:${EMAIL}`} className="text-sm hover:text-white mt-2 inline-block">
            {EMAIL}
          </a>
          <p className="font-bold text-white mb-2 mt-6 text-sm">Informations légales</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgu" className="hover:text-white">
                CGU
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-white">
                CGV
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-5 border-t border-slate-800 text-slate-600">
        © {new Date().getFullYear()} Traqueur de Fuites
      </div>
    </footer>
  );
}
