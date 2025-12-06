"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  color?: string;
  slug: string;
  category: string;
  subcategory: string;
}

export default function ProductCard({
  name,
  price,
  image,
  color = "Negro",
  slug,
  category,
  subcategory,
}: ProductCardProps) {
  // Generate proper 3-level URL: /category/subcategory/product
  const href = `/${category}/${subcategory}/${slug}`;

  return (
    <Link href={href}>
      <div className="border-1 shadow-none p-0 overflow-hidden rounded-none hover:shadow-lg transition-shadow duration-200">
        {/* Card Header */}
        <div className="p-0 bg-gray-200 border-b">
          <div className="relative w-full aspect-square">
            <Image alt={name} src={image} fill className="object-cover" />
          </div>
        </div>

        {/* Card Content */}
        <div className="px-4 py-2">
          <span className="text-gray-500 text-sm">apple</span>
          <h3 className="text-base font-bold truncate">{name}</h3>
        </div>

        {/* Card footer */}
        <div className="border-t border-dashed p-4">
          <span className="text-gray-500 text-sm font-semibold">
            U${price.toLocaleString("es-UY")}
          </span>
        </div>
      </div>
    </Link>
  );
}
