import { motion } from "framer-motion";

export default function Values() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Nuestros Valores
          </h2>
          <p className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8 leading-snug">
            Elaboramos cada producto con
            <br />
            <span className="italic text-primary">Amor y Dedicación</span>
          </p>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground italic mb-5">
            "Siempre auténtico, exquisito y diferente."
          </p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
