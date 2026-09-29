"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "L'entreprise" },
  { href: "/blog", label: "Blog" },
  { href: "/demande-intervention", label: "Intervention" },
];

const expertiseLinks = [
  { href: "/expertises/recherche-fuite", label: "Recherche de fuite" },
  { href: "/expertises/debouchage-curage", label: "Débouchage & curage" },
  { href: "/expertises/inspection-video", label: "Inspection vidéo" },
  { href: "/expertises/canalisations", label: "Canalisations" },
];

export default function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expertOpen, setExpertOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-ink font-black text-sm">
            TF
          </span>
          <span className="text-white font-bold text-sm sm:text-base leading-tight">
            Traqueur
            <span className="block text-cyan-300 text-xs font-semibold tracking-wide">
              de Fuites
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === l.href
                  ? "text-cyan-300 bg-white/5"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setExpertOpen(true)}
            onMouseLeave={() => setExpertOpen(false)}
          >
            <button
              type="button"
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 flex items-center gap-1"
            >
              Expertises
              <span className="text-xs opacity-70">▾</span>
            </button>
            {expertOpen && (
              <div className="absolute top-full left-0 pt-1 w-56">
                <div className="bg-ink border border-white/10 rounded-xl shadow-xl py-2">
                  {expertiseLinks.map((e) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      className="block px-4 py-2.5 text-slate-200 hover:bg-white/5 hover:text-cyan-300 text-sm"
                    >
                      {e.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.slice(2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === l.href
                  ? "text-cyan-300 bg-white/5"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 px-3 py-2"
          >
            WhatsApp
          </a>
          <a
            href={telHref}
            className="text-sm font-bold bg-gold-bright text-ink px-4 py-2.5 rounded-full hover:brightness-110 transition"
          >
            {TEL_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink px-4 py-4 space-y-1">
          {[...links, ...expertiseLinks.map((e) => ({ ...e, label: e.label }))].map(
            (l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-200"
              >
                {l.label}
              </Link>
            )
          )}
          <a href={telHref} className="block py-3 font-bold text-gold-bright">
            Appeler {TEL_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
