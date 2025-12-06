"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/lib/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">
          No hay productos disponibles en esta categoría.
        </p>
      </div>
    );
  }

  return (
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
  );
}
