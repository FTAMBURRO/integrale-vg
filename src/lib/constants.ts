import { FileText, Wheat, Croissant } from "lucide-react";

export const WHATSAPP_NUMBER = "5493446534509";
export const DEFAULT_WHATSAPP_MESSAGE = "Hola Integrale! Quisiera hacer una consulta sobre sus productos.";

export const SITE_CONFIG = {
  name: "Integrale VG",
  whatsapp: WHATSAPP_NUMBER,
  orderUrl: "https://pedido-integrale.vercel.app/",
  instagramUrl: "https://www.instagram.com/integralevg/",
  facebookUrl: "https://facebook.com/integrale_vg",
};

export const getWhatsAppLink = (message: string = DEFAULT_WHATSAPP_MESSAGE) => {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const buildWhatsAppLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
