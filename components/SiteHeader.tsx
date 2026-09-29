"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MAIN_NAV, SERVICE_NAV, serviceHref } from "@/lib/navigation";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";
import BrandLogo from "@/components/BrandLogo";

export default function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const linkClass = "text-slate-600 hover:text-cyan-700";

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileServices(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <BrandLogo priority={onHome} />

        <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold">
          {MAIN_NAV.map((item) =>
            item.label === "Contact" ? null : (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            )
          )}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button type="button" className={`flex items-center gap-1 ${linkClass}`}>
              Nos services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[22rem]">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 max-h-[70vh] overflow-y-auto">
                  {SERVICE_NAV.map((s) => (
                    <Link
                      key={s.slug}
                      href={serviceHref(s.slug)}
                      className="flex gap-3 px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-sm"
                    >
                      <span>{s.icon}</span>
                      <span className="leading-snug">{s.label}</span>
                    </Link>
                  ))}
                  <div className="border-t mt-1 pt-1">
                    <Link
                      href="/#services"
                      className="block px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-50"
                    >
                      Voir toutes les prestations →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-3 py-2 rounded-xl border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            WhatsApp
          </a>
          <a
            href={telHref}
            className="text-sm font-bold btn-shimmer text-white px-4 py-2.5 rounded-xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            📞 {TEL_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          className="xl:hidden p-2 text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden bg-white border-t max-h-[85vh] overflow-y-auto px-4 py-4 shadow-lg">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="block py-3 font-medium text-slate-800 border-b border-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setMobileServices(!mobileServices)}
            className="w-full text-left py-3 font-medium text-slate-800"
          >
            Nos services {mobileServices ? "▴" : "▾"}
          </button>
          {mobileServices &&
            SERVICE_NAV.map((s) => (
              <Link
                key={s.slug}
                href={serviceHref(s.slug)}
                onClick={closeMobile}
                className="block py-2 pl-4 text-sm text-slate-600"
              >
                {s.icon} {s.label}
              </Link>
            ))}
          <a
            href={telHref}
            className="block mt-4 py-3 text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl"
          >
            {TEL_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
