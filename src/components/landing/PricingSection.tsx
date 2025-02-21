import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Inicial",
      price: "$60",
      description: "Perfecto para pequeños negocios",
      features: [
        "2 Cajas Registradoras",
        "Respaldo en la Nube",
        "Reportes Básicos",
        "Soporte por Email",
      ],
    },
    {
      name: "Profesional",
      price: "$90",
      description: "Ideal para negocios en crecimiento",
      features: [
        "3 Cajas Registradoras",
        "Análisis en Tiempo Real",
        "Reportes Avanzados",
        "Soporte 24/7",
        "Gestión de Inventario",
      ],
    },
    {
      name: "Empresarial",
      price: "$120",
      description: "Para operaciones grandes",
      features: [
        "Cajas Registradoras Ilimitadas",
        "Integración Personalizada",
        "Análisis Avanzado",
        "Soporte Prioritario",
        "Soporte Multi-ubicación",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Precios Simples y Transparentes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg border bg-card flex flex-col relative ${index === 1 ? "border-primary" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Más Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 text-3xl font-bold">{plan.price}</div>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" asChild>
                <a
                  href="https://maseasy.decotufas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prueba Gratuita
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
