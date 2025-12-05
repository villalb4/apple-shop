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
    <section className="border-y">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center py-12 px-6 ${
                index !== FEATURES.length - 1 ? "lg:border-r" : ""
              } ${
                index % 2 === 0 && index !== FEATURES.length - 1
                  ? "sm:border-r"
                  : ""
              }`}

              // className="flex flex-col items-center text-center py-12 px-6 border-1"
            >
              <div className="mb-4 p-4 border">
                <feature.icon
                  className="w-6 h-6 text-black"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
