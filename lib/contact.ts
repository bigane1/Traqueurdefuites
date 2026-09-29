export const TEL = "0625903250";
export const TEL_DISPLAY = "06 25 90 32 50";
export const TEL_E164 = "+33625903250";
export const WHATSAPP_NUMBER = "33625903250";
export const EMAIL = "contact@traqueurdefuites.fr";
export const ADDRESS =
  "34 rue de la Morinerie, 37700 Saint-Pierre-des-Corps";
export const SITE_NAME = "Traqueur de Fuites";

export const telHref = `tel:${TEL_E164}`;
export const mailtoHref = `mailto:${EMAIL}`;

export const whatsappHref = (
  text = "Bonjour Traqueur de Fuites, j'ai besoin d'une intervention pour "
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
