import { ADDRESS, EMAIL, SITE_NAME, TEL_DISPLAY, TEL_E164 } from "@/lib/contact";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://traqueurdefuites.fr";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: TEL_E164,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "34 rue de la Morinerie",
    addressLocality: "Saint-Pierre-des-Corps",
    postalCode: "37700",
    addressCountry: "FR",
  },
  areaServed: [
    "Indre-et-Loire",
    "Loir-et-Cher",
    "Vienne",
    "Maine-et-Loire",
    "Indre",
    "Cher",
    "Sarthe",
    "Deux-Sèvres",
    "Loiret",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  description:
    "Recherche de fuite non destructive, débouchage, inspection vidéo et entretien de canalisations — Tours et Centre-Val de Loire, 24h/24.",
  priceRange: "€€",
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceCatalogSchema(
  services: { name: string; path: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Traqueur de Fuites",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: `${SITE_URL}${s.path}`,
        provider: { "@type": "Plumber", name: SITE_NAME },
        areaServed: "Centre-Val de Loire",
      },
    })),
  };
}

export { SITE_URL };
