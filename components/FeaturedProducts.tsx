"use client";

import ProductGrid from "./ProductGrid";
import Link from "next/link";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    image: "/images/iphone-15-pro.jpg",
    slug: "iphone-15-pro-max",
    color: "Titanio Natural",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1099,
    image: "/images/macbook-air-m2.jpg",
    slug: "macbook-air-m2",
    color: "Medianoche",
  },
  {
    id: 3,
    name: "iPad Air 5",
    price: 599,
    image: "/images/ipad-air-5.jpg",
    slug: "ipad-air-5",
    color: "Azul",
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    price: 799,
    image: "/images/apple-watch-ultra-2.jpg",
    slug: "apple-watch-ultra-2",
    color: "Titanio",
  },
];

export default function FeaturedProducts() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-start gap-4 mb-6">
          <h2 className="text-xl font-light text-gray-400">Destacados</h2>
        </div>

        <ProductGrid products={FEATURED_PRODUCTS} />
      </div>
    </section>
  );
}
