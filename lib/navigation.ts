/** Menu aligné sur traqueurdefuites.fr + inspection vidéo */

export const MAIN_NAV = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/mutualisation", label: "Curage groupé" },
  { href: "/blog", label: "Blog" },
  { href: "/demande-intervention", label: "Devis" },
  { href: "/#contact", label: "Contact" },
] as const;

export const SERVICE_NAV = [
  {
    slug: "recherche-fuite",
    label: "Recherche de fuite non destructive",
    icon: "💧",
  },
  {
    slug: "debouchage-curage",
    label: "Débouchage & curage de canalisations",
    icon: "🚽",
  },
  {
    slug: "inspection-video",
    label: "Inspection vidéo des canalisations",
    icon: "📹",
  },
  {
    slug: "infiltration-fumigene",
    label: "Fumigène — toiture & branchements EU",
    icon: "💨",
  },
  {
    slug: "plomberie-urgence",
    label: "Plomberie générale & urgences",
    icon: "🔧",
  },
  {
    slug: "desembouage-chauffage",
    label: "Désembouage de réseau de chauffage",
    icon: "🔥",
  },
  {
    slug: "canalisations",
    label: "Nettoyage & désinfection réseaux sanitaires",
    icon: "♻️",
  },
] as const;

export function serviceHref(slug: string) {
  return `/expertises/${slug}`;
}
