import { motion } from "framer-motion";
import { Server, Cpu } from "lucide-react";

export default function TechSpecsSection() {
  return (
    <section id="tech" className="py-20 bg-secondary/20">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Construido con Tecnología Moderna
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              className="p-6 rounded-lg border bg-card hover:border-primary transition-colors"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Flutter Framework</h3>
              </div>
              <p className="text-muted-foreground">
                Framework moderno de UI que permite crear aplicaciones nativas
                de alto rendimiento para iOS, Android y web desde un solo
                código. Con Hot Reload para desarrollo ágil y widgets
                personalizables.
              </p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg border bg-card hover:border-primary transition-colors"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Server className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  Google Cloud Infrastructure
                </h3>
              </div>
              <p className="text-muted-foreground">
                Infraestructura de clase mundial con auto-escalado, balanceo de
                carga global y 99.99% de tiempo activo. Incluye CDN, análisis en
                tiempo real y protección contra DDoS.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="static h-[644px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-primary-foreground/20 p-8 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Technology Stack"
                className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
