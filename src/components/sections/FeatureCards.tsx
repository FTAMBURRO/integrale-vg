import { motion } from "framer-motion";
import { Wheat, ShoppingBag, Sparkles } from "lucide-react";

const CARDS = [
  {
    icon: Wheat,
    title: "Opciones Keto",
    description: "Descubrí nuestras opciones Keto, hechas con ingredientes seleccionados para que disfrutes sin culpa. Panes, pizzetas, delicias dulces y más, todo sin harinas refinadas y con el sabor casero que nos caracteriza. ¡Probá lo diferente!",
  },
  {
    icon: ShoppingBag,
    title: "Variedad de Productos",
    description: "Explorá nuestra variedad de productos y armá el combo perfecto. Desde panes artesanales integrales y especiales, hasta opciones dulces como alfajores, pepas y tortas. Combiná lo salado y lo dulce para disfrutar de sabores únicos.",
  },
  {
    icon: Sparkles,
    title: "Novedades que Sorprenden",
    description: "Descubrí nuestras innovaciones. Además de nuestra amplia variedad, creamos productos nuevos con recetas y combinaciones exclusivas para ofrecer experiencias frescas y nutritivas. ¡Estate atento a nuestras novedades!",
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function FeatureCards() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {CARDS.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <card.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
