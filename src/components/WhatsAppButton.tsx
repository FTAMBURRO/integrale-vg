import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={getWhatsAppLink("Hola! Me interesa conocer sus productos de Integrale")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Contactar por WhatsApp"
            data-testid="button-whatsapp-floating"
          >
            <svg
              viewBox="0 0 32 32"
              width="28"
              height="28"
              aria-hidden="true"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M19.11 17.45c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.17 5.04 4.44.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.11.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.11-.27-.18-.57-.33z"
              />
              <path
                fill="currentColor"
                d="M16.02 3.2c-6.99 0-12.66 5.66-12.66 12.64 0 2.22.58 4.38 1.68 6.28L3.2 28.8l6.85-1.79a12.6 12.6 0 0 0 5.97 1.52h.01c6.98 0 12.66-5.66 12.66-12.64S22.99 3.2 16.02 3.2zm0 22.99h-.01a10.4 10.4 0 0 1-5.3-1.46l-.38-.23-4.07 1.07 1.09-3.96-.25-.4a10.28 10.28 0 0 1-1.6-5.52c0-5.69 4.64-10.32 10.34-10.32 2.76 0 5.35 1.07 7.3 3.02a10.22 10.22 0 0 1 3.03 7.29c0 5.69-4.64 10.32-10.34 10.32z"
              />
            </svg>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background mr-2 py-2 px-3 font-medium">
          <p>¿Necesitás ayuda?</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
