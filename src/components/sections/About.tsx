import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 uppercase">
            Nuestra Historia
          </h2>
          
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed font-medium">
            <p>
              Integrale nació de la pasión por la cocina saludable y el deseo de ofrecer alternativas reales para quienes buscan cuidarse sin renunciar al placer de un buen pan.
            </p>
            <p>
              Desde Gualeguaychú, elaboramos cada producto de forma artesanal, con ingredientes seleccionados y mucho cariño. Creemos que comer bien no tiene que ser aburrido ni difícil.
            </p>
            <p>
              Nuestro compromiso es ofrecerte productos frescos, saludables y deliciosos, hechos con amor y dedicación todos los días.
            </p>
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-px bg-primary/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
