import { Link, useLocation } from "wouter";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const [location] = useLocation();

  return (
    <footer className="bg-[#2D2A26] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Integrale
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mt-4 leading-relaxed text-sm">
              Panadería artesanal en Gualeguaychú especializada en opciones Keto y productos integrales. Elaborados con amor y dedicación.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <a href={location === "/" ? "#nosotros" : "/#nosotros"} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nosotros
                </a>
              </li>
              <li>
                <a href={location === "/" ? "#contacto" : "/#contacto"} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Seguinos</h4>
            <div className="flex items-center gap-4">
              <a 
                href={SITE_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
              <a 
                href={SITE_CONFIG.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>Hecho con amor en Gualeguaychú</p>
          <p>© {new Date().getFullYear()} Integrale VG. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
