import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";
import { buildWhatsAppLink } from "@/lib/constants";
import { formatARS } from "@/lib/utils";
import { MessageCircle } from "lucide-react";


interface ProductCardProps {
  product: Product;
  useCatalogAccent?: boolean;
}


// Simple image gallery/carrusel for modal
function ProductImageGallery({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-1 shadow-md z-10"
        style={{ display: images.length > 1 ? "block" : "none" }}
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <img
        src={images[current]}
        alt={name}
        className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-md bg-white"
        style={{ transition: "all 0.3s" }}
      />
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-1 shadow-md z-10"
        style={{ display: images.length > 1 ? "block" : "none" }}
        aria-label="Siguiente"
      >
        &#8594;
      </button>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full ${idx === current ? "bg-primary" : "bg-gray-300"}`}
              aria-label={`Imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default function ProductCard({ product, useCatalogAccent = false }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === product.id) {
        setModalOpen(true);
      }
    };
    window.addEventListener('openProductModal', handleOpenModal);
    return () => window.removeEventListener('openProductModal', handleOpenModal);
  }, [product.id]);

  return (
    <>
      <div 
        className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border flex flex-col h-full cursor-pointer cursor-pointer-card ${
          useCatalogAccent ? "border-border hover:border-[hsl(var(--catalog-accent))]" : "border-border"
        }`}
        onClick={() => setModalOpen(true)}
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.category === "integrales" && (
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 border-none font-medium px-2.5 py-1 uppercase text-xs tracking-wider shadow-sm">
                INTEGRAL
              </Badge>
            )}
            {product.category === "keto" && (
              <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 border-none font-medium px-2.5 py-1 uppercase text-xs tracking-wider shadow-sm">
                KETO
              </Badge>
            )}
            <Badge className="bg-white/90 text-black border-none font-medium px-2.5 py-1 uppercase text-[10px] tracking-wider shadow-sm w-fit backdrop-blur-sm">
              {product.subcategory}
            </Badge>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="font-bold text-2xl text-foreground">{formatARS(product.price)}</span>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-full w-10 h-10 border border-border transition-colors text-muted-foreground z-10 ${
                  useCatalogAccent
                    ? "hover:bg-[hsl(var(--catalog-accent))/0.1] hover:text-[hsl(var(--catalog-accent))]"
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(buildWhatsAppLink(`Hola! Me interesa el producto: ${product.name} - ${formatARS(product.price)}. ¿Cómo coordinamos?`), '_blank');
                }}
                title="Consultar por WhatsApp"
              >
                <MessageCircle size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-[94vw] max-w-4xl max-h-[90dvh] p-0 overflow-hidden bg-card border-none rounded-2xl md:rounded-3xl">
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
          <DialogDescription className="sr-only">{product.description}</DialogDescription>
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 bg-secondary/20 relative aspect-[4/3] md:aspect-auto md:min-h-0 flex items-center justify-center">
              {/* Gallery/Carrusel */}
              <ProductImageGallery images={product.images} name={product.name} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-5 sm:p-6 md:p-10 overflow-y-auto min-h-0">
              <div className="flex gap-2 mb-6">
                <Badge className={product.category === "integrales" ? "bg-primary text-primary-foreground hover:bg-primary" : "bg-accent text-accent-foreground hover:bg-accent"}>
                  {product.category.toUpperCase()}
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  {product.subcategory.toUpperCase()}
                </Badge>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {product.name}
              </h2>
              <p className={`text-3xl font-bold mb-6 ${useCatalogAccent ? "text-[hsl(var(--catalog-accent))]" : "text-foreground"}`}>
                {formatARS(product.price)}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
