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
    badge: "Toiture, EU & étanchéité",
    title: "Détection d'infiltration et test d'étanchéité par fumigène",
    subtitle: "Toit-terrasse, membranes — branchements eaux usées (EU) et eaux vannes (EV)",
    description:
      "Le fumigène permet de visualiser les défauts d'étanchéité sans démolition : infiltration sur toiture ou contrôle des raccordements EU/EV. Fumée non toxique injectée dans le réseau ou sous membrane — là où elle ressort, nous identifions la fuite ou le mauvais raccord.",
    heroImage: serviceImages.fumigeneEu.src,
    heroImageAlt: serviceImages.fumigeneEu.alt,
    highlights: ["Visuel", "Non destructif", "Toiture & EU", "Rapport"],
    spotlights: [
      {
        title: "Toit-terrasse & membranes",
        subtitle: "Infiltration visible sans casser",
        body:
          "En cas de doute sur l'étanchéité d'un toit-terrasse, d'une terrasse ou d'une membrane, nous générons de la fumée sous la couverture ou dans le volume concerné. Les sorties de fumée révulent joints défectueux, points singuliers ou reprises mal étanches — repérage précis pour votre couvreur ou votre assurance.",
        image: serviceImages.fumigene.src,
        imageAlt: serviceImages.fumigene.alt,
        imageLeft: true,
      },
      {
        title: "Test d'étanchéité des branchements eaux usées (EU)",
        subtitle: "Contrôle fumigène des raccordements et réseaux privés",
        body:
          "Nous injectons une fumée non toxique dans vos canalisations (EU, et EV si besoin). Là où la fumée ressort — regard de rue, bouche d'égout, vide sanitaire, mauvais raccord — nous localisons le défaut d'étanchéité sans ouvrir les sols inutilement. Méthode reconnue pour la réception de travaux ou les doutes sur un branchement.",
        image: serviceImages.fumigeneEu.src,
        imageAlt: serviceImages.fumigeneEu.alt,
      },
    ],
    faqs: [
      {
        q: "Intervenez-vous pour les professionnels ?",
        a: "Oui : particuliers, syndics, agences immobilières et collectivités.",
      },
      {
        q: "Fumigène sur toiture ou sur branchement EU : c'est la même prestation ?",
        a: "Le principe est le même (fumée non toxique pour visualiser les défauts), mais le matériel et le protocole diffèrent. Nous adaptons l'intervention : membrane / toit-terrasse d'un côté, réseau EU–EV et raccordements de l'autre.",
      },
      {
        q: "La fumée est-elle dangereuse ?",
        a: "Non : nous utilisons une fumée de test non toxique, adaptée au contrôle d'étanchéité en milieu habité ou sur réseau.",
      },
    ],
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
