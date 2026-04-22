import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-[100svh] md:h-[100dvh] flex items-center justify-center pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fondo1.jpg" 
          alt="Panadería artesanal" 
          className="w-full h-full object-cover object-center md:object-top"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-left md:text-center"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-5 md:mb-7 text-white drop-shadow-md">
            SABORES INTEGRALES, <br className="block" />FRESCURA Y SALUD.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 md:mb-10 max-w-2xl md:mx-auto font-medium leading-relaxed">
            Desde Gualeguaychú, nuestra panadería artesanal ofrece productos Keto e Integrales, frescos y saludables, que transforman tu alimentación.
            <br />
            ¡Descubrí la diferencia!
          </p>
          
          <div className="mt-3 md:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white text-white hover:bg-white hover:text-black w-full sm:w-auto h-14 px-8 text-base font-semibold uppercase tracking-wider"
            >
              <Link href="/catalogo">
                Ver Catálogo
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none w-full sm:w-auto h-14 px-8 text-base font-semibold uppercase tracking-wider"
            >
              <a href={SITE_CONFIG.orderUrl} target="_blank" rel="noopener noreferrer">
                Realizar Pedido
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
