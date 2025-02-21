import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/maseasy-back-office-51zq7o/assets/pd6cnogn4lir/maseasy_(10).png"
                alt="MasEasy Logo"
                className="w-[164] w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Software moderno de punto de venta para negocios en crecimiento.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary">
                  Características
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-primary">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary">
                  Precios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cotufassystem/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=584121302131&text=Hola%2C%20podrias%20enviarme%20informacion%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MasEasy POS. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
