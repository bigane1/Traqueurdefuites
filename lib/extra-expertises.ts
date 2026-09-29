import type { ExpertisePage } from "@/lib/site-content";
import { serviceImages } from "@/lib/service-images";

const base = (
  partial: Omit<ExpertisePage, "pillar" | "accent" | "highlights" | "benefits" | "phases" | "faqs"> &
    Partial<Pick<ExpertisePage, "highlights" | "benefits" | "phases" | "faqs">>
): ExpertisePage => ({
  pillar: false,
  accent: "from-slate-500/10 to-slate-600/10",
  highlights: ["Devis gratuit", "7j/7", "Centre-Val de Loire"],
  benefits: [
    { icon: "⚡", title: "Réactivité", text: "Intervention planifiée ou en urgence selon votre besoin." },
    { icon: "💬", title: "Transparence", text: "Explications claires et tarif annoncé avant travaux." },
  ],
  phases: [
    { label: "01", title: "Diagnostic", text: "Analyse de la situation et choix de la méthode adaptée." },
    { label: "02", title: "Intervention", text: "Travail soigné avec matériel professionnel." },
    { label: "03", title: "Restitution", text: "Compte-rendu et conseils d'entretien si nécessaire." },
  ],
  faqs: [
    {
      q: "Intervenez-vous pour les professionnels ?",
      a: "Oui : particuliers, syndics, agences immobilières et collectivités.",
    },
  ],
  ...partial,
});

export const extraExpertises: ExpertisePage[] = [
  base({
    slug: "infiltration-fumigene",
    shortTitle: "Infiltration par fumigène",
    badge: "Toiture & étanchéité",
    title: "Détection d'infiltration par fumigène",
    subtitle: "Toit-terrasse, membrane — test visuel non destructif",
    description:
      "En cas de doute sur l'étanchéité d'un toit-terrasse ou d'une membrane, nous injectons de la fumée pour repérer les points faibles. Méthode efficace, non destructive et visuelle.",
    heroImage: serviceImages.fumigene.src,
    heroImageAlt: serviceImages.fumigene.alt,
    highlights: ["Visuel", "Non destructif", "Toiture", "Rapport"],
  }),
  base({
    slug: "plomberie-urgence",
    shortTitle: "Plomberie & urgences",
    badge: "Dépannage 24h/24",
    title: "Plomberie générale & urgences",
    subtitle: "Fuite, robinet, ballon d'eau chaude — 7j/7",
    description:
      "Fuite visible, robinet à remplacer, ballon d'eau chaude en panne : nos plombiers interviennent rapidement pour vos dépannages et installations.",
    heroImage: serviceImages.debouchage.src,
    heroImageAlt: serviceImages.debouchage.alt,
    highlights: ["24h/24", "Particuliers & pros", "Devis gratuit"],
  }),
  base({
    slug: "desembouage-chauffage",
    shortTitle: "Désembouage chauffage",
    badge: "Performance chauffage",
    title: "Désembouage de réseau de chauffage",
    subtitle: "Radiateurs, plancher chauffant — moins de pannes, plus d'économies",
    description:
      "Nous nettoyons vos circuits de chauffage pour éliminer boue, dépôts et corrosion. Radiateurs froids, bruits ou surconsommation : signes qu'un désembouage est utile.",
    heroImage: serviceImages.desembouage.src,
    heroImageAlt: serviceImages.desembouage.alt,
    highlights: ["Radiateurs", "Plancher chauffant", "Tous types de chaudières"],
    faqs: [
      {
        q: "Quand désembouer ?",
        a: "Tous les 5 à 10 ans selon l'installation. Signes : radiateurs froids, bruit, surconsommation.",
      },
    ],
  }),
];
