"use client";

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Data arrays
const STORE_ITEMS = [
  { name: "iPhone", href: "#" },
  { name: "AirPods", href: "#" },
  { name: "Accesorios", href: "#" },
  { name: "Ofertas", href: "#" },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-white pt-16 pb-4 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-black font-bold text-xl">NOMBRE</span>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Tu destino premium para productos Apple. Calidad garantizada y
              servicio excepcional.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              {SOCIAL_LINKS.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-gradient-apple transition-smooth"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-black text-lg mb-4">Tienda</h3>
            <ul className="space-y-2 text-gray-400">
              {STORE_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-smooth font-light"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:ml-auto md:max-w-sm text-right">
            <h3 className="font-semibold text-black text-lg mb-4">
              Mantente actualizado
            </h3>
            <p className="text-gray-400 text-sm font-light mb-4">
              Suscríbete para recibir ofertas exclusivas
            </p>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus-visible:ring-black rounded-none h-10"
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800 rounded-none h-10 w-full font-semibold"
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-light">© 2025 Nombre.</p>
          <p className="text-gray-400 text-sm font-light">
            Desarrollado por{" "}
            <a
              href="https://github.com/villalb4"
              target="_blank"
              className="hover:text-black transition-smooth"
            >
              <strong className="font-semibold">villalb4</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
