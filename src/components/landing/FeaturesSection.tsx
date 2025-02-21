import { Cloud, Smartphone, Shield, Zap, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rápido y Eficiente",
      description:
        "Procesa ventas en segundos con una interfaz intuitiva y rápida.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Análisis Detallado",
      description:
        "Obtén insights valiosos sobre tus ventas y el comportamiento de tus clientes.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gestión de Empleados",
      description: "Control de acceso y seguimiento de ventas por empleado.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Sistema Basado en la Nube",
      description:
        "Accede a tu sistema POS desde cualquier lugar, con sincronización en tiempo real y copias de seguridad automáticas.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Compatibilidad Multiplataforma",
      description:
        "Construido con Flutter para un rendimiento perfecto en iOS, Android y plataformas web.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad de Nivel Empresarial",
      description:
        "Encriptación de nivel bancario y procesamiento seguro de pagos para proteger tu negocio.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Características Poderosas para Negocios Modernos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
