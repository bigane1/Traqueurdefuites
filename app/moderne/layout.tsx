import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/schema";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Recherche de fuite sans casse à Tours & Centre-Val de Loire | Traqueur de Fuites",
  description:
    "Plombier spécialiste fuites d'eau, débouchage et inspection caméra. Intervention 24h/24 à Tours (37), Blois, Poitiers et 8 départements. Devis gratuit.",
  alternates: { canonical: SITE_URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Traqueur de Fuites — Détection non destructive 24h/24",
    description:
      "Localisation précise des fuites, débouchage haute pression, technologies gaz traceur et thermique.",
  },
};

export default function ModerneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`theme-pro ${outfit.variable} text-[var(--pro-muted)] bg-white antialiased`}>
      {children}
    </div>
  );
}
