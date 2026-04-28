import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductHighlightProps {
  badge: string;
  subtitle?: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  inverted?: boolean;
}

export default function ProductHighlight({ 
  badge, 
  subtitle, 
  title, 
  text, 
  imageSrc, 
  imageAlt, 
  imageClassName,
  imageWrapperClassName,
  inverted = false 
}: ProductHighlightProps) {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-14`}>
          
          <motion.div 
            initial={{ opacity: 0, x: inverted ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className={cn("relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg", imageWrapperClassName)}>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                loading="lazy"
                className={cn("w-full h-full object-cover", imageClassName)}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: inverted ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-semibold px-3 py-1 uppercase tracking-wider mb-4">
              {badge}
            </Badge>
            
            {subtitle && (
              <h4 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">
                {subtitle}
              </h4>
            )}
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {text}
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
