import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import ProductHighlight from "@/components/sections/ProductHighlight";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Wheat, Leaf, Heart, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const BENEFICIOS = [
  { icon: Wheat, title: "Sin harinas refinadas" },
  { icon: Leaf, title: "Aptos Keto" },
  { icon: Heart, title: "100% artesanal" },
  { icon: Sparkles, title: "Ingredientes seleccionados" }
];

export default function HomePage() {
  // Hand-picked featured products (mix of integrales and keto, sweet and salty)
  const featuredProductsIds = [11, 20, 22, 57, 59, 7, 47, 26]; // Pan Integral, Brownie, Carrot Cake, Pan Dulce keto, Rogel keto, Focaccia, Alfajor keto, Pepas
  const featuredProducts = PRODUCTS.filter(p => featuredProductsIds.includes(p.id));
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    if (featuredProducts.length <= 1) return;

    const interval = window.setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <main className="min-h-[100dvh] bg-background flex flex-col">
      <Navbar />
      
      <Hero />
      
      {/* Beneficios Section */}
      <section className="py-14 md:py-18 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {BENEFICIOS.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <b.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">{b.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">¿Qué estás buscando?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Elegí tu línea preferida y descubrí un mundo de sabores diseñados para cuidarte.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group overflow-hidden rounded-3xl aspect-[4/3] md:aspect-square lg:aspect-[4/3] cursor-pointer shadow-md"
            >
              <img src="/images/family-panes-integrales.png" alt="Productos Integrales" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col p-8 md:p-10">
                <div className="mt-auto max-w-md w-full grid grid-rows-[minmax(72px,auto)_minmax(84px,auto)_auto] md:grid-rows-[minmax(88px,auto)_minmax(84px,auto)_auto] gap-3">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white flex items-end">PRODUCTOS<br />INTEGRALES</h3>
                  <p className="text-white/80 text-lg">Panes, tartas y delicias dulces elaboradas con harinas 100% integrales y semillas.</p>
                  <Button asChild size="lg" className="w-fit rounded-full bg-primary hover:bg-primary/90 text-white border-none px-8 font-semibold">
                    <Link href="/catalogo?cat=integrales">
                      Ver productos <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group overflow-hidden rounded-3xl aspect-[4/3] md:aspect-square lg:aspect-[4/3] cursor-pointer shadow-md"
            >
              <img src="/images/family-panes-keto.png" alt="Productos Keto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col p-8 md:p-10">
                <div className="mt-auto max-w-md w-full grid grid-rows-[minmax(72px,auto)_minmax(84px,auto)_auto] md:grid-rows-[minmax(88px,auto)_minmax(84px,auto)_auto] gap-3">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white flex items-end">PRODUCTOS<br />KETO</h3>
                  <p className="text-white/80 text-lg">Opciones deliciosas sin harinas refinadas ni azúcar. El placer de siempre, keto friendly.</p>
                  <Button asChild size="lg" className="w-fit rounded-full bg-accent hover:bg-accent/90 text-white border-none px-8 font-semibold">
                    <Link href="/catalogo?cat=keto">
                      Ver productos <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Values />

      <ProductHighlight 
        badge="DELICIA INTEGRAL"
        subtitle="PARA DISFRUTAR EN CUALQUIER MOMENTO"
        title="PANES SABROSOS"
        text="Descubrí nuestra variedad de panes integrales, pensados para acompañar cualquier momento. Sabores únicos, combinaciones que sorprenden y una textura casera que marca la diferencia. Desde opciones clásicas hasta panes saborizados, todo está hecho para disfrutar y compartir."
        imageSrc="/images/family-panes-integrales.png"
        imageAlt="Variedad de panes artesanales de sabores"
      />
      
      <ProductHighlight 
        badge="LA MERIENDA DE CADA DÍA"
        title="ALGO RICO, SIEMPRE"
        text="Descubrí nuestra variedad de productos dulces, pensados para disfrutar en cualquier momento. Sabores que se sienten, combinaciones que sorprenden y una calidad casera que se nota en cada bocado. Perfectos para cortar el día con algo realmente rico."
        imageSrc="/images/family-brownies-budines.png"
        imageAlt="Brownie integral de chocolate"
        inverted={true}
      />

      {/* Productos Destacados */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Los más pedidos</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Nuestros Favoritos</h3>
          </div>

          <div className="mb-12 md:mb-14">
            <div className="max-w-sm mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProducts[featuredIndex]?.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="h-full"
                >
                  {featuredProducts[featuredIndex] && (
                    <ProductCard product={featuredProducts[featuredIndex]} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {featuredProducts.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setFeaturedIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    featuredIndex === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/60"
                  }`}
                  aria-label={`Ir al producto ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background h-16 px-12 text-lg font-bold">
              <Link href="/catalogo">
                Ver todo el catálogo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <About />
      <FinalCTA />
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
