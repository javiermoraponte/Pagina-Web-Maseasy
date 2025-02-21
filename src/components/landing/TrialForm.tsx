import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TrialForm() {
  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg border bg-card">
      <h3 className="text-2xl font-bold text-center mb-6">
        Comienza tu Prueba Gratuita
      </h3>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre del Negocio</Label>
          <Input id="name" placeholder="Ingresa el nombre de tu negocio" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Número de Teléfono</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Ingresa tu número de teléfono"
          />
        </div>
        <Button className="w-full" asChild>
          <a
            href="https://maseasy.decotufas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comenzar Prueba Gratuita de 14 Días
          </a>
        </Button>
      </form>
      <p className="text-sm text-muted-foreground text-center mt-4">
        No se requiere tarjeta de crédito. Cancela cuando quieras.
      </p>
    </div>
  );
}
