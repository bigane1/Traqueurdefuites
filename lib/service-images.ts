/** Visuels Pexels alignés sur le site Qadus (outils, action, matériel pro). */

const pex = (id: number, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&fit=crop`;

export const serviceImages = {
  debouchage: {
    src: pex(32588548),
    alt: "Plombier professionnel — débouchage mécanique sur canalisation",
  },
  curage: {
    src: pex(12919779),
    alt: "Curage haute pression — hydrocurage de canalisation",
  },
  inspectionCamera: {
    src: pex(35290678),
    alt: "Inspection caméra — diagnostic sur écran",
  },
  fuite: {
    src: pex(6419128),
    alt: "Infiltration et fuite d'eau — recherche non destructive",
  },
  fuiteReseau: {
    src: pex(12265849),
    alt: "Réseau d'eau — localisation de fuite",
  },
  urgence: {
    src: pex(36842620),
    alt: "Intervention d'urgence 24h/24 — équipe sur site",
  },
  /** Camion hydrocureur / intervention pro (visuel Qadus) */
  camion: {
    src: pex(36842620),
    alt: "Camion hydrocureur et équipe — curage et débouchage professionnel",
  },
  assainissement: {
    src: pex(32257223),
    alt: "Assainissement — intervention sur collecteur",
  },
  /** Toit-terrasse / étanchéité — proche test fumigène (intervention sur membrane) */
  fumigene: {
    src: pex(39238311),
    alt: "Toit-terrasse — recherche d'infiltration par fumigène, test non destructif",
  },
  /** Fumée au regard / canalisation EU — test d'étanchéité (photo réelle type assainissement) */
  fumigeneEu: {
    src: "/images/fumigene-fumee-regard.jpg",
    alt: "Fumée non toxique sortant d'un regard de canalisation EU — test d'étanchéité des branchements",
  },
  /** Plombier — portrait pro (public/images/plombier.jpg) */
  technicienConfiance: {
    src: "/images/plombier.jpg",
    alt: "Plombier professionnel en combinaison — intervention plomberie",
  },
  /** Plombier en diagnostic sous évier / canalisation */
  plombierIntervention: {
    src: "/images/plombier-intervention.jpg",
    alt: "Plombier au travail — inspection des canalisations sous évier",
  },
  chemisage: {
    src: pex(5691622),
    alt: "Réhabilitation de canalisation",
  },
  canalInterieur: {
    src: pex(14664521),
    alt: "État interne de canalisation — inspection caméra",
  },
  chauffage: {
    src: pex(372796),
    alt: "Réseau de chauffage — tuyauterie et manomètres",
  },
  desembouage: {
    src: pex(34938439),
    alt: "Chauffagiste sur radiateur — désembouage et entretien du circuit de chauffage",
  },
} as const;

export function tarifImage(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("recherche") || t.includes("fuite")) return serviceImages.technicienConfiance.src;
  if (t.includes("débouchage") || t.includes("debouchage")) return serviceImages.debouchage.src;
  if (t.includes("curage")) return serviceImages.camion.src;
  if (t.includes("inspection") || t.includes("caméra") || t.includes("camera"))
    return serviceImages.inspectionCamera.src;
  if (t.includes("eaux usées") || t.includes("eaux usees") || t.includes("branchement"))
    return serviceImages.fumigeneEu.src;
  if (t.includes("fumigène") || t.includes("fumigene")) return serviceImages.fumigene.src;
  if (t.includes("infiltration")) return serviceImages.fumigene.src;
  if (t.includes("désembouage") || t.includes("desembouage") || t.includes("chauffage"))
    return serviceImages.desembouage.src;
  return serviceImages.debouchage.src;
}
