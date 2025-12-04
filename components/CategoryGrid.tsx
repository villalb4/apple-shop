"use client";

import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    id: 1,
    name: "iPhone",
    image: "/images/iphones-xl.png",
    href: "/iphone",
    colSpan: "col-span-2 md:col-span-1",
  },
  {
    id: 2,
    name: "Mac",
    image: "/images/home-hero.png", // Placeholder
    href: "/mac",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    name: "iPad",
    image: "/images/hero (2).png", // Placeholder
    href: "/ipad",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    name: "Watch",
    image: "/images/hola.png", // Placeholder
    href: "/watch",
    colSpan: "col-span-1",
  },
  {
    id: 5,
    name: "Audio",
    image: "/images/iphones-xl.png", // Placeholder
    href: "/audio",
    colSpan: "col-span-1",
  },
  {
    id: 6,
    name: "Accesorios",
    image: "/images/home-hero.png", // Placeholder
    href: "/accesorios",
    colSpan: "col-span-2 md:col-span-1",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group relative h-64 md:h-80 overflow-hidden bg-gray-100 ${category.colSpan}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <span className="inline-flex items-center text-white text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explorar &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
