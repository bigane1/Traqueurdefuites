"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MAIN_NAV, SERVICE_NAV, serviceHref } from "@/lib/navigation";
import { TEL_DISPLAY, telHref } from "@/lib/contact";

export default function ProHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--pro-line)] bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-[4.25rem] flex items-center justify-between gap-4">
        <Link href="/moderne" className="flex items-center gap-2 shrink-0 group">
          <span className="h-9 w-9 rounded-lg bg-[var(--pro-ink)] text-white flex items-center justify-center text-xs font-black tracking-tighter group-hover:bg-[var(--pro-accent-dark)] transition-colors">
            TF
          </span>
          <span className="pro-display font-bold text-[var(--pro-ink)] text-lg hidden sm:block">
            Traqueur de Fuites
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {MAIN_NAV.map((item) =>
            item.label === "Contact" ? null : (
              <Link
                key={item.href}
                href={item.href === "/" ? "/moderne" : item.href}
                className="px-3 py-2 rounded-lg text-[var(--pro-muted)] hover:text-[var(--pro-ink)] hover:bg-[var(--pro-surface)] transition"
              >
                {item.label}
              </Link>
            )
          )}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="px-3 py-2 rounded-lg text-[var(--pro-muted)] hover:text-[var(--pro-ink)] hover:bg-[var(--pro-surface)] flex items-center gap-1"
            >
              Nos services
              <span className="text-[10px] opacity-60">▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-80">
                <div className="bg-white rounded-2xl border border-[var(--pro-line)] shadow-xl py-2 max-h-[70vh] overflow-y-auto">
                  {SERVICE_NAV.map((s) => (
                    <Link
                      key={s.slug}
                      href={serviceHref(s.slug)}
                      className="block px-4 py-2.5 text-sm hover:bg-[var(--pro-highlight)] hover:text-[var(--pro-accent-dark)]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/moderne#contact"
            className="px-3 py-2 rounded-lg text-[var(--pro-muted)] hover:text-[var(--pro-ink)]"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden md:inline-flex items-center gap-2 bg-[var(--pro-ink)] hover:bg-[var(--pro-accent-dark)] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition"
          >
            {TEL_DISPLAY}
          </a>
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg border border-[var(--pro-line)]"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 h-0.5 bg-[var(--pro-ink)] mb-1" />
            <span className="block w-5 h-0.5 bg-[var(--pro-ink)] mb-1" />
            <span className="block w-5 h-0.5 bg-[var(--pro-ink)]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--pro-line)] bg-white px-4 py-4 space-y-1">
          <Link href="/moderne" className="block py-2 font-medium text-[var(--pro-ink)]">
            Accueil
          </Link>
          {MAIN_NAV.filter((n) => n.label !== "Accueil" && n.label !== "Contact").map(
            (item) => (
              <Link key={item.href} href={item.href} className="block py-2">
                {item.label}
              </Link>
            )
          )}
          <p className="pt-2 text-xs font-bold uppercase tracking-wider text-[var(--pro-muted)]">
            Services
          </p>
          {SERVICE_NAV.map((s) => (
            <Link key={s.slug} href={serviceHref(s.slug)} className="block py-2 text-sm pl-2">
              {s.label}
            </Link>
          ))}
          <Link href="/moderne#contact" className="block py-2 font-medium">
            Contact
          </Link>
          <a href={telHref} className="block mt-3 text-center bg-[var(--pro-accent)] text-white font-bold py-3 rounded-xl">
            Appeler {TEL_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
