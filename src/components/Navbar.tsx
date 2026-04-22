import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#") && location !== "/") {
      // If we are on another page, let link handle it, but wait for navigation
      setTimeout(() => {
        const el = document.getElementById(href.substring(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (href.startsWith("#")) {
      const el = document.getElementById(href.substring(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGoHome = () => {
    setIsMobileMenuOpen(false);

    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-background/95 backdrop-blur-md border-b border-border/70 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={handleGoHome} className="flex items-center gap-2 z-50">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">
            Integrale Vg
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" onClick={handleGoHome} className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Inicio
          </Link>
          <Link href="/catalogo" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Catálogo
          </Link>
          <a
            href={location === "/" ? "#nosotros" : "/#nosotros"}
            onClick={() => handleNavClick("#nosotros")}
            className="text-foreground hover:text-primary transition-colors font-medium text-sm cursor-pointer"
          >
            Nosotros
          </a>
          <a
            href={location === "/" ? "#contacto" : "/#contacto"}
            onClick={() => handleNavClick("#contacto")}
            className="text-foreground hover:text-primary transition-colors font-medium text-sm cursor-pointer"
          >
            Contacto
          </a>
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6"
          >
            <a href={SITE_CONFIG.orderUrl} target="_blank" rel="noopener noreferrer" data-testid="link-nav-order">
              Hacer Pedido
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className={`md:hidden z-[70] p-2.5 rounded-full border shadow-sm transition-colors ${
                isMobileMenuOpen
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/95 text-foreground border-border"
              }`}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="md:hidden w-[88vw] max-w-none p-8 border-l border-border bg-background"
          >
            <div className="flex flex-col items-start justify-center h-full gap-8 pt-8">
              <SheetClose asChild>
                <Link href="/" onClick={handleGoHome} className="text-3xl font-serif text-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/catalogo" onClick={() => handleNavClick("/catalogo")} className="text-3xl font-serif text-foreground hover:text-primary transition-colors">
                  Catálogo
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <a
                  href={location === "/" ? "#nosotros" : "/#nosotros"}
                  onClick={() => handleNavClick("#nosotros")}
                  className="text-3xl font-serif text-foreground hover:text-primary transition-colors"
                >
                  Nosotros
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a
                  href={location === "/" ? "#contacto" : "/#contacto"}
                  onClick={() => handleNavClick("#contacto")}
                  className="text-3xl font-serif text-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </SheetClose>

              <Button
                asChild
                size="lg"
                className="rounded-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href={SITE_CONFIG.orderUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  Hacer Pedido
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
