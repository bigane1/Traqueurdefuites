import fs from "fs";
import path from "path";
import { defaultExpertises } from "@/lib/expertise-defaults";
import { serviceImages, tarifImage } from "@/lib/service-images";

export type ExpertisePage = {
  slug: string;
  shortTitle: string;
  pillar: boolean;
  accent: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  highlights: string[];
  benefits: { icon: string; title: string; text: string }[];
  phases: { label: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "conseils" | "interventions" | "regional";
  date: string;
  image: string;
  content: string[];
};

export type TarifItem = {
  title: string;
  price: string;
  desc: string;
  image?: string;
};

export type SiteContent = {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
  stats: { value: string; label: string }[];
  expertises: ExpertisePage[];
  blog: BlogPost[];
  aboutTitle: string;
  aboutParagraphs: string[];
  zoneGroups: { title: string; depts: string; text: string }[];
  testimonials: { quote: string; name: string; place: string }[];
  faq: { q: string; a: string }[];
  tarifs: TarifItem[];
  tarifsSection: { badge: string; title: string; subtitle: string };
};

const CONTENT_FILE = path.join(process.cwd(), "data", "site-content.json");

const seedBlog: BlogPost[] = [
  {
    slug: "fuite-plancher-chauffant-tours",
    title: "Fuite sur plancher chauffant : les signes avant de casser",
    excerpt:
      "Taches, surconsommation, pression qui chute : comment repérer une fuite invisible et pourquoi la détection non destructive change la donne.",
    category: "conseils",
    date: "2026-03-01",
    image:
      serviceImages.fuite.src.replace("w=1400", "w=1200"),
    content: [
      "Une fuite sur plancher chauffant peut rester silencieuse des semaines. Les premiers indices sont souvent une facture d’eau ou de chauffage qui grimpe, une zone tiède anormale ou une tache d’humidité loin des points d’eau visibles.",
      "Avant d’ouvrir le carrelage, une recherche par gaz traceur ou thermique permet de cartographier la zone concernée. Vous limitez ainsi la casse et le coût de remise en état.",
      "À Tours et en Centre-Val de Loire, nous intervenons en urgence 7j/7 pour localiser ce type de fuite et fournir un compte-rendu utilisable par votre assurance.",
    ],
  },
  {
    slug: "inspection-camera-avant-achat",
    title: "Inspection caméra avant achat immobilier : ce qu’elle révèle",
    excerpt:
      "Canalisations bouchées ou affaissées peuvent coûter cher après la signature. La vidéo endoscopique sécurise votre décision.",
    category: "conseils",
    date: "2026-02-15",
    image:
      serviceImages.inspectionCamera.src.replace("w=1400", "w=1200"),
    content: [
      "L’état des canalisations n’apparaît pas toujours dans un diagnostic classique. Racines, joints défaillants ou pentes incorrectes se voient surtout à la caméra.",
      "Un enregistrement HD et un rapport synthétique vous aident à négocier ou à planifier des travaux ciblés plutôt qu’une réfection complète.",
      "Nous proposons ce service aux particuliers, agences et notaires sur l’ensemble de nos départements d’intervention.",
    ],
  },
  {
    slug: "debouchage-recurrent-curage",
    title: "WC bouché souvent ? Pensez curage, pas seulement débouchage",
    excerpt:
      "Quand le problème revient, la cause est souvent un réseau encrassé. Voici la différence entre dépannage et entretien en profondeur.",
    category: "interventions",
    date: "2026-02-01",
    image:
      serviceImages.curage.src.replace("w=1400", "w=1200"),
    content: [
      "Un débouchage lève l’urgence. Si les bouchons se répètent sur la même colonne, les parois sont probablement recouvertes de graisses ou de calcaire.",
      "Le curage haute pression nettoie le diamètre utile du tuyau et stabilise l’écoulement sur la durée. Une inspection vidéo avant/après objectivie le résultat.",
      "Syndics et copropriétés : planifier un curage préventif coûte souvent moins qu’une série d’urgences.",
    ],
  },
];

export const defaultSiteContent: SiteContent = {
  phone: "0625903250",
  phoneDisplay: "06 25 90 32 50",
  email: "contact@traqueurdefuites.fr",
  address: "34 rue de la Morinerie, 37700 Saint-Pierre-des-Corps",
  heroEyebrow: "10 ans d'expérience · Devis en urgence · 24h/24",
  heroTitle: "Fuite ou canalisation bouchée ? Intervention rapide 7j/7",
  heroLead:
    "Intervention rapide sans casse. Nous localisons les fuites d'eau et débouchons vos canalisations, sans destruction inutile ni mauvaise surprise.",
  heroImage:
    "https://images.pexels.com/photos/35290678/pexels-photo-35290678.jpeg?auto=compress&cs=tinysrgb&w=1920&fit=crop",
  heroImageAlt:
    "Équipe de techniciens lors d'une inspection caméra — analyse du diagnostic sur écran et matériel de détection",
  stats: [
    { value: "10+", label: "ans d’expérience terrain" },
    { value: "8", label: "départements couverts" },
    { value: "0", label: "casse inutile visée" },
    { value: "24/7", label: "urgences prises en charge" },
  ],
  expertises: defaultExpertises,
  blog: seedBlog,
  aboutTitle: "Préserver l'eau, réparer sans casser",
  aboutParagraphs: [
    "Chez Traqueur de Fuites, nous sommes bien plus que des plombiers : des artisans engagés pour la protection de votre habitat et de notre environnement. Notre mission est de détecter les fuites d'eau de manière précise, rapide et sans destruction grâce à l'ultrason, la caméra thermique ou le gaz traceur.",
    "Nous aidons particuliers et professionnels à localiser fuites et dysfonctionnements sans casse inutile. Chaque intervention vise à limiter les dégâts et préserver l'environnement.",
    "Traqueur de Fuites est né de la volonté de deux plombiers expérimentés de moderniser leur métier. Aujourd'hui, nous intervenons dans 8 départements avec un seul objectif : réparer sans casser.",
  ],
  zoneGroups: [
    {
      title: "Centre-Val de Loire proche",
      depts: "37 · 41 · 86",
      text: "Tours, Blois, Poitiers et alentours — fuites, débouchages et urgences sanitaires.",
    },
    {
      title: "Bourges & sud Loire",
      depts: "18 · 36 · 49",
      text: "Bourges, Châteauroux, Angers : réseaux collectifs et particuliers.",
    },
    {
      title: "Ouest & Orléanais",
      depts: "72 · 79 · 45",
      text: "Le Mans, Niort, Orléans — détection non destructive et curage.",
    },
  ],
  testimonials: [
    {
      quote:
        "J'ai eu une fuite dans le plancher chauffant, ils ont trouvé le problème sans casser. Travail propre, rapide et efficace. Je recommande à 100 % !",
      name: "Julien D.",
      place: "Tours",
    },
    {
      quote:
        "Un service au top ! On sent que ce sont des pros. Ils ont trouvé la fuite en moins d'une heure. Très bonne communication et réactivité.",
      name: "Sophie L.",
      place: "Poitiers (86)",
    },
    {
      quote:
        "J'étais sceptique au départ, mais la technologie utilisée est impressionnante. Pas de dégâts, et tout a été réparé dans la journée.",
      name: "Karim B.",
      place: "Le Mans (72)",
    },
    {
      quote:
        "Enfin un plombier qui prend le temps d'expliquer. L'intervention a été propre, rapide, et j'ai même pu faire marcher mon assurance.",
      name: "Nathalie G.",
      place: "Blois (41)",
    },
  ],
  faq: [
    {
      q: "L'intervention est-elle destructrice ?",
      a: "Non. Nos recherches de fuite utilisent gaz traceur, écoute acoustique, ultrasons ou caméra thermique — sans casser murs ou sols pour localiser l'origine du problème.",
    },
    {
      q: "Travaillez-vous avec les particuliers ou les professionnels ?",
      a: "Oui : particuliers, agences immobilières, syndics, notaires et collectivités. Même niveau d'exigence, transparence et réactivité pour tous.",
    },
    {
      q: "Intervenez-vous la nuit et le week-end ?",
      a: "Oui, 24h/24 et 7j/7 pour les urgences (fuite active, WC bouché, reflux).",
    },
    {
      q: "Et si mon WC se rebouche souvent ?",
      a: "Un curage complet supprime les dépôts. Nous pouvons aussi proposer une inspection caméra pour comprendre la cause.",
    },
  ],
  tarifsSection: {
    badge: "Tarifs indicatifs",
    title: "Prestations & prix de base",
    subtitle:
      "Les tarifs ci-dessous sont indicatifs. Le prix exact est confirmé après diagnostic sur place — devis gratuit.",
  },
  tarifs: [
    {
      title: "Recherche de fuite non destructive",
      price: "Sur devis",
      desc: "Tarif selon complexité (gaz traceur, thermique, acoustique). Rapport pour assurance.",
      image: serviceImages.fuite.src,
    },
    {
      title: "Débouchage WC / évier",
      price: "À partir de 120 €",
      desc: "Intervention standard avec test d'écoulement. Majoration possible en urgence nocturne.",
      image: serviceImages.debouchage.src,
    },
    {
      title: "Curage haute pression",
      price: "À partir de 290 €",
      desc: "Nettoyage complet des canalisations — préventif ou curatif.",
      image: serviceImages.camion.src,
    },
    {
      title: "Inspection vidéo",
      price: "À partir de 180 €",
      desc: "Passage caméra avec compte-rendu et recommandations.",
      image: serviceImages.inspectionCamera.src,
    },
    {
      title: "Détection infiltration fumigène",
      price: "Sur devis",
      desc: "Test d'étanchéité toiture ou membrane — méthode visuelle.",
      image: serviceImages.fumigene.src,
    },
    {
      title: "Désembouage chauffage",
      price: "Sur devis",
      desc: "Selon volume du circuit, type de chaudière et accessibilité.",
      image: serviceImages.desembouage.src,
    },
  ],
};

export function mergeSiteContent(raw: Partial<SiteContent>): SiteContent {
  return {
    ...defaultSiteContent,
    ...raw,
    expertises: raw.expertises?.length ? raw.expertises : defaultSiteContent.expertises,
    blog: raw.blog ?? defaultSiteContent.blog,
    stats: raw.stats?.length ? raw.stats : defaultSiteContent.stats,
    zoneGroups: raw.zoneGroups?.length ? raw.zoneGroups : defaultSiteContent.zoneGroups,
    testimonials: raw.testimonials?.length
      ? raw.testimonials
      : defaultSiteContent.testimonials,
    faq: raw.faq?.length ? raw.faq : defaultSiteContent.faq,
    aboutParagraphs: raw.aboutParagraphs?.length
      ? raw.aboutParagraphs
      : defaultSiteContent.aboutParagraphs,
    tarifs: raw.tarifs?.length
      ? raw.tarifs.map((t) => ({
          ...t,
          image: t.image || tarifImage(t.title),
        }))
      : defaultSiteContent.tarifs,
    tarifsSection: { ...defaultSiteContent.tarifsSection, ...raw.tarifsSection },
  };
}

export function getSiteContent(): SiteContent {
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      const raw = JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8")) as Partial<SiteContent>;
      return mergeSiteContent(raw);
    }
  } catch {
    /* defaults */
  }
  return defaultSiteContent;
}

export function saveSiteContent(content: SiteContent) {
  fs.mkdirSync(path.dirname(CONTENT_FILE), { recursive: true });
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf8");
}

export function getExpertiseBySlug(slug: string): ExpertisePage | undefined {
  return getSiteContent().expertises.find((e) => e.slug === slug);
}
