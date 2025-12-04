"use client";

import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color?: string;
  isNew?: boolean;
  isSale?: boolean;
  slug?: string;
}

interface ProductGridProps {
  products: Product[];
  categorySlug?: string;
}

export default function ProductGrid({
  products,
  categorySlug,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          color={product.color}
          slug={product.slug}
          categorySlug={categorySlug}
        />
      ))}
    </div>
  );
}
