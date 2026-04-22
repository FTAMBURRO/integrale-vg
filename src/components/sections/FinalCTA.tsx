import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppLink } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/logo1.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-primary-foreground flex flex-col items-center"
        >
          <Badge className="bg-white/20 text-white hover:bg-white/30 border-none font-semibold px-4 py-1.5 uppercase tracking-widest mb-6">
            Emprendimiento Integral
          </Badge>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            ¡TE INVITO A CONOCERNOS!
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
            En Integrale te esperamos con productos que no podés dejar de probar. Venite, encontrá tus favoritos y disfrutá de lo mejor de nuestro horno. ¡No te lo pierdas!
          </p>
          
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-primary hover:bg-white/90 h-16 px-10 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <a 
              href={getWhatsAppLink("Hola! Me interesa conocer sus productos de Integrale")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Nuestro WhatsApp</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
