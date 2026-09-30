import type { ExpertisePage } from "@/lib/site-content";
import { extraExpertises } from "@/lib/extra-expertises";
import { serviceImages } from "@/lib/service-images";

const heroLeak = serviceImages.plombierIntervention.src;
const heroLeakAlt = serviceImages.plombierIntervention.alt;
const heroDebouch = serviceImages.camion.src;
const heroCamera = serviceImages.inspectionCamera.src;
const heroCanal = serviceImages.assainissement.src;

export const defaultExpertises: ExpertisePage[] = [
  {
    slug: "recherche-fuite",
    shortTitle: "Recherche de fuite",
    pillar: true,
    accent: "from-cyan-500/20 to-sky-600/10",
    badge: "Sans destruction",
    title: "Recherche de fuite non destructive",
    subtitle: "Localisation précise — murs, sols, planchers chauffants, réseaux encastrés",
    description:
      "Nous traçons l’origine exacte de votre fuite avec gaz traceur, écoute acoustique, ultrasons et caméra thermique. Pas de démolition à l’aveugle : vous savez où intervenir avant de casser.",
    heroImage: heroLeak,
    heroImageAlt: heroLeakAlt,
    highlights: [
      "Gaz traceur & ultrasons",
      "Caméra thermique",
      "Rapport pour assurance",
      "Intervention 7j/7",
    ],
    benefits: [
      {
        icon: "🎯",
        title: "Précision au centimètre",
        text: "Les méthodes combinées permettent de cibler la zone fautive sans ouvrir toute la pièce.",
      },
      {
        icon: "🏠",
        title: "Tous types de fuites",
        text: "Canalisations encastrées, plancher chauffant, infiltrations, compteurs qui tournent sans usage visible.",
      },
      {
        icon: "📋",
        title: "Diagnostic documenté",
        text: "Compte-rendu clair pour votre assurance, syndic ou artisan réparateur.",
      },
      {
        icon: "🌱",
        title: "Moins de dégâts",
        text: "Limiter casse et remise en état : notre priorité est de préserver votre logement.",
      },
    ],
    phases: [
      {
        label: "01",
        title: "Analyse du signalement",
        text: "Humidité, surconsommation, bruit, historique des travaux : nous croisons les indices.",
      },
      {
        label: "02",
        title: "Tests non destructifs",
        text: "Mise en pression, traceur, thermique ou acoustique selon le contexte.",
      },
      {
        label: "03",
        title: "Localisation & restitution",
        text: "Point de fuite identifié, photos, recommandations de réparation ciblée.",
      },
    ],
    faqs: [
      {
        q: "L’intervention est-elle destructrice ?",
        a: "Non. Toutes nos recherches sont réalisées sans casser murs ou sols. La réparation peut ensuite être localisée sur une surface réduite.",
      },
      {
        q: "Dans quels cas faire appel à vous ?",
        a: "Facture d’eau anormale, tache d’humidité, odeur, perte de pression, plancher chauffant qui fuit, doute après dégât des eaux.",
      },
      {
        q: "Travaillez-vous avec les assurances ?",
        a: "Oui. Nous fournissons un diagnostic structuré utilisable pour votre déclaration et le suivi du sinistre.",
      },
    ],
  },
  {
    slug: "debouchage-curage",
    shortTitle: "Débouchage & curage",
    pillar: true,
    accent: "from-amber-500/15 to-orange-600/10",
    badge: "Urgence canalisation",
    title: "Débouchage et curage de canalisations",
    subtitle: "WC, évier, colonne, réseau collectif — haute pression si nécessaire",
    description:
      "Bouchon ponctuel ou obstructions récurrentes : débouchage mécanique ou hydrocurage, avec diagnostic pour éviter que le problème ne revienne.",
    heroImage: heroDebouch,
    heroImageAlt: serviceImages.camion.alt,
    highlights: ["Furet électrique", "Haute pression", "1 à 2 h en moyenne", "Syndics & particuliers"],
    benefits: [
      {
        icon: "⚡",
        title: "Réponse rapide",
        text: "Disponibles 24h/24 pour les urgences sanitaires (WC, reflux, odeurs).",
      },
      {
        icon: "💦",
        title: "Curage préventif",
        text: "Nettoyage complet des parois pour éliminer graisses, calcaire et racines.",
      },
      {
        icon: "🔁",
        title: "Bouchons récurrents",
        text: "Si le problème revient, nous investiguons la cause (pente, affaissement, racines).",
      },
      {
        icon: "🏢",
        title: "Copropriétés",
        text: "Interventions discrètes pour syndics, agences et locataires.",
      },
    ],
    phases: [
      {
        label: "01",
        title: "Qualification",
        text: "Type de canalisation, symptômes, accès : nous choisissons l’outil adapté.",
      },
      {
        label: "02",
        title: "Débouchage / curage",
        text: "Mécanique ou jet haute pression jusqu’à rétablissement de l’écoulement.",
      },
      {
        label: "03",
        title: "Contrôle",
        text: "Test d’écoulement ; proposition d’inspection vidéo si le réseau est fragilisé.",
      },
    ],
    faqs: [
      {
        q: "Débouchage ou curage ?",
        a: "Le débouchage lève un bouchon immédiat. Le curage nettoie l’ensemble du réseau — recommandé si les blocages reviennent souvent.",
      },
      {
        q: "Combien de temps dure l’intervention ?",
        a: "En général 1 à 2 heures pour un débouchage standard. Le curage complet dépend de la longueur du réseau.",
      },
      {
        q: "Que faire en attendant le technicien ?",
        a: "Stoppez l’usage de l’équipement concerné, n’utilisez pas de produits chimiques agressifs qui peuvent endommager les joints.",
      },
    ],
  },
  {
    slug: "inspection-video",
    shortTitle: "Inspection vidéo",
    pillar: true,
    accent: "from-violet-500/15 to-indigo-600/10",
    badge: "Diagnostic caméra",
    title: "Inspection vidéo des canalisations",
    subtitle: "Caméra endoscopique — état du réseau, fissures, racines, pente",
    description:
      "Avant achat immobilier, après dégât des eaux ou en entretien préventif : la vidéo révèle l’état réel de vos canalisations sans tranchée.",
    heroImage: heroCamera,
    heroImageAlt: serviceImages.inspectionCamera.alt,
    highlights: ["Enregistrement HD", "Rapport détaillé", "Assurances & notaires", "Préventif"],
    benefits: [
      {
        icon: "📹",
        title: "Vision directe",
        text: "Fissures, joints, affaissements, incrustations et intrusions racinaires visibles en direct.",
      },
      {
        icon: "📄",
        title: "Preuve objective",
        text: "Supports utiles pour assurances, expertises et décisions de travaux ciblés.",
      },
      {
        icon: "🔍",
        title: "Post-fuite",
        text: "Vérifier l’état du réseau après réparation ou recherche de fuite.",
      },
      {
        icon: "🏡",
        title: "Avant travaux",
        text: "Dimensionner une réhabilitation ou un curage sans surprise.",
      },
    ],
    phases: [
      {
        label: "01",
        title: "Accès au réseau",
        text: "Regard, siphon ou point de passage identifié en sécurité.",
      },
      {
        label: "02",
        title: "Passage caméra",
        text: "Parcours du tronçon avec enregistrement et commentaire terrain.",
      },
      {
        label: "03",
        title: "Restitution",
        text: "Synthèse des anomalies et priorités de traitement.",
      },
    ],
    faqs: [
      {
        q: "Quand programmer une inspection ?",
        a: "Bouchons répétés, odeurs, doute sur l’état des canalisations, avant vente/achat, après sinistre.",
      },
      {
        q: "Est-ce invasif ?",
        a: "Non : la caméra passe par les accès existants (regards, avaloirs). Aucune tranchée.",
      },
      {
        q: "L’inspection remplace-t-elle la recherche de fuite ?",
        a: "Complémentaire : la caméra voit l’intérieur du réseau ; la recherche de fuite localise une perte d’eau active avec d’autres capteurs.",
      },
    ],
  },
  {
    slug: "canalisations",
    shortTitle: "Réseaux sanitaires",
    pillar: true,
    accent: "from-emerald-500/15 to-teal-600/10",
    badge: "Hygiène & normes",
    title: "Nettoyage et désinfection des réseaux sanitaires",
    subtitle: "Tartre, légionelles, odeurs — traitements conformes",
    description:
      "Canalisations encastrées ou collectives : entretien thermique ou chimique conforme, lutte contre tartre et légionelles, amélioration des écoulements.",
    heroImage: heroCanal,
    heroImageAlt: serviceImages.assainissement.alt,
    highlights: ["Désinfection normée", "Tartre & calcaire", "Réseaux collectifs", "Conseil entretien"],
    benefits: [
      {
        icon: "🧪",
        title: "Traitements adaptés",
        text: "Choc thermique, chloration ou peroxyde selon le besoin et la réglementation.",
      },
      {
        icon: "💧",
        title: "Qualité de l’eau",
        text: "Limiter les dépôts qui favorisent bactéries et mauvaises odeurs.",
      },
      {
        icon: "📅",
        title: "Plans d’entretien",
        text: "Programmes pour syndics, ERP et sites sensibles.",
      },
      {
        icon: "🔗",
        title: "Chaîne complète",
        text: "Du diagnostic vidéo au curage, une seule équipe sur la région.",
      },
    ],
    phases: [
      {
        label: "01",
        title: "Audit du réseau",
        text: "Usage, matériaux, historique des pannes et accès techniques.",
      },
      {
        label: "02",
        title: "Nettoyage / traitement",
        text: "Curage, désinfection ou détartrage selon le diagnostic.",
      },
      {
        label: "03",
        title: "Suivi",
        text: "Recommandations de fréquence et points de vigilance.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi désinfecter un réseau sanitaire ?",
        a: "Réduire tartre, biofilm et risques sanitaires (dont légionelles), supprimer les odeurs et stabiliser les débits.",
      },
      {
        q: "À quelle fréquence entretenir ?",
        a: "Variable selon l’usage : copropriété, hôtellerie ou maison individuelle n’ont pas les mêmes contraintes.",
      },
      {
        q: "Intervenez-vous sur le chauffage ?",
        a: "Nous pouvons orienter ou coordonner le désembouage ; notre cœur d’expertise reste fuites et réseaux d’eau / assainissement.",
      },
    ],
  },
  ...extraExpertises,
];
