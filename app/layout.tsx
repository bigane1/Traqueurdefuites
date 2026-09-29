import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { localBusinessSchema } from "@/lib/schema";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://traqueurdefuites.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Traqueur de Fuites — Recherche de fuite, débouchage & caméra | Tours 37",
    template: "%s | Traqueur de Fuites",
  },
  description:
    "Recherche de fuite non destructive, débouchage, inspection vidéo. Saint-Pierre-des-Corps, 8 départements, 24h/24.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Traqueur de Fuites",
  },
  icons: {
    icon: "/brand/logo-site.png",
    apple: "/brand/logo-site.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className="font-sans bg-white text-slate-600 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
