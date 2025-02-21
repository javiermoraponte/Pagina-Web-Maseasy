import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container flex flex-col items-center text-center space-y-8">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight lg:text-6xl max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Software Moderno de Punto de Venta para tu Negocio
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Construido con Flutter y potenciado por Google Cloud para un
          rendimiento y fiabilidad definitivos. Comienza tu prueba gratuita de
          14 días hoy.
        </motion.p>
        <Button size="lg" className="mt-8" asChild>
          <a
            href="https://maseasy.decotufas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comienza tu Prueba Gratuita
          </a>
        </Button>
        <div className="mt-16 relative w-full mx-auto max-w-4xl">
          <div className="relative rounded-lg border bg-card p-2 shadow-2xl w-full max-w-[900px] mx-auto">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/maseasy-back-office-51zq7o/assets/igxw0lfp5m4m/Captura_de_pantalla_2025-02-21_132532.png"
                alt="POS System Demo"
                className="rounded-md w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur px-6 py-3 rounded-full border shadow-lg flex items-center gap-4">
            <img
              src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
              alt="Flutter Logo"
              className="h-8"
            />
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="Firebase Logo"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
