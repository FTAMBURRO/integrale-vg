import { FileText, Wheat, Croissant } from "lucide-react";

export const SITE_CONFIG = {
  name: "Integrale VG",
  whatsapp: "5493446000000",
  orderUrl: "https://pedido-integrale.vercel.app/",
  instagramUrl: "https://instagram.com/integrale_vg",
  facebookUrl: "https://facebook.com/integrale_vg",
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_NUMBER = "5493446000000";

export const buildWhatsAppLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
