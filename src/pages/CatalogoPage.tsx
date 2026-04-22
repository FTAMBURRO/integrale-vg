import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, ProductCategory, ProductSubcategory } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/constants";
import { Input } from "@/components/ui/input";

type MainFilter = "todos" | ProductCategory;
type SubFilter = "todas" | ProductSubcategory;

export default function CatalogoPage() {
  const [location] = useLocation();
  const [activeMainFilter, setActiveMainFilter] = useState<MainFilter>("todos");
  const [activeSubFilter, setActiveSubFilter] = useState<SubFilter>("todas");
  const [searchQuery, setSearchQuery] = useState("");

  const activeProducts = useMemo(() => {
    return PRODUCTS.filter((product) => product.isActive !== false);
  }, []);

  // Parse URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    if (cat === "integrales" || cat === "keto") {
      setActiveMainFilter(cat);
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    return activeProducts.filter((product) => {
      // Name filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        if (!product.name.toLowerCase().includes(query) && !product.description.toLowerCase().includes(query)) {
          return false;
        }
      }
      
      // Main category filter
      if (activeMainFilter !== "todos" && product.category !== activeMainFilter) return false;
      
      // Subcategory filter
      if (activeSubFilter !== "todas" && product.subcategory !== activeSubFilter) return false;
      
      return true;
    });
  }, [activeMainFilter, activeSubFilter, searchQuery, activeProducts]);

  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-secondary/40 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">Catálogo</span>
          </nav>
          
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            NUESTRO CATÁLOGO
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Descubrí todos nuestros productos artesanales. Elaborados con ingredientes seleccionados y mucho amor.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
            {/* Filters */}
            <div className="space-y-6 flex-grow">
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { id: "todos", label: "Todos los productos" },
                  { id: "integrales", label: "Productos Integrales" },
                  { id: "keto", label: "Productos Keto" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveMainFilter(filter.id as MainFilter)}
                    data-testid={`filter-main-${filter.id}`}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeMainFilter === filter.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-surface border-2 border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center gap-2"><SlidersHorizontal size={16}/> Filtrar por:</span>
                {[
                  { id: "todas", label: "Todas" },
                  { id: "saladas", label: "Saladas" },
                  { id: "dulces", label: "Dulces" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveSubFilter(filter.id as SubFilter)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeSubFilter === filter.id
                        ? "bg-foreground text-background"
                        : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Buscar productos..." 
                  className="pl-10 h-12 rounded-full border-border bg-surface text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-8 pb-4 border-b border-border/50">
            <p className="text-muted-foreground font-medium">
              Mostrando {filteredProducts.length} de {activeProducts.length} productos
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="h-full"
                >
                  <ProductCard product={product} useCatalogAccent />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-secondary/20 rounded-3xl border border-dashed border-border mt-8"
            >
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">No se encontraron productos</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No tenemos productos que coincidan con tu búsqueda o filtros actuales. Intentá cambiar los criterios.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveMainFilter("todos");
                  setActiveSubFilter("todas");
                }}
                variant="outline"
                className="mt-8 rounded-full"
              >
                Limpiar filtros
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary/5 py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-lg text-muted-foreground mb-10">
            Comunicate con nosotros, ¡quizás te lo podemos preparar especialmente!
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-primary border-2 text-primary hover:bg-primary hover:text-primary-foreground h-16 px-10 text-lg font-bold shadow-sm transition-all hover:-translate-y-1"
          >
            <a 
              href={buildWhatsAppLink("Hola! Necesito hacerles una consulta")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultanos por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
