import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-2 w-[168px] h-12">
          <img
            src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/maseasy-back-office-51zq7o/assets/pd6cnogn4lir/maseasy_(10).png"
            alt="Maseasy Logo"
            className="w-full h-full"
          />
        </div>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm" href="#features">
                Características
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm" href="#tech">
                Tecnología
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm" href="#pricing">
                Precios
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild>
          <a
            href="https://maseasy.decotufas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prueba Gratuita
          </a>
        </Button>
      </div>
    </header>
  );
}
