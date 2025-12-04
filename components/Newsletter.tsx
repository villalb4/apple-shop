"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Newsletter() {
  return (
    <section className="py-24 bg-black text-white mt-24">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mantente actualizado
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Suscríbete a nuestro boletín para recibir las últimas novedades,
          lanzamientos exclusivos y ofertas especiales directamente en tu
          bandeja de entrada.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus-visible:ring-white rounded-none h-12"
          />
          <Button
            type="submit"
            className="bg-white text-black hover:bg-gray-200 rounded-none h-12 px-8 font-semibold"
          >
            Suscribirse
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          Al suscribirte, aceptas nuestra Política de Privacidad. Puedes darte
          de baja en cualquier momento.
        </p>
      </div>
    </section>
  );
}
