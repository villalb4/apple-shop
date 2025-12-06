"use client";

import ProductCard from "./ProductCard";
import { getAllProducts } from "@/lib/products";

export default function FeaturedProducts() {
  const products = getAllProducts().slice(0, 8); // Get first 8 products

  return (
    <section className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Productos Destacados
        </h2>
        <p className="text-gray-600 text-lg">
          Descubre nuestra selección de productos Apple más populares
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            color={product.color}
            slug={product.slug}
            category={product.category}
            subcategory={product.subcategory}
          />
        ))}
      </div>
    </section>
  );
}
