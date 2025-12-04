"use client";

import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En todos los pedidos superiores a $500.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía Apple",
    description: "1 año de garantía oficial en todos los productos.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Expertos listos para ayudarte en cualquier momento.",
  },
  {
    icon: CreditCard,
    title: "Pago Seguro",
    description: "Tus transacciones están protegidas y encriptadas.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                <feature.icon
                  className="w-8 h-8 text-black"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
