import CategoryView from "@/components/CategoryView";
import { getProductsByCategory } from "@/lib/products";
import { generateSEOMetadata } from "@/lib/metadata";
import {
  getCategoryName,
  getCategoryDescription,
  isValidCategory,
} from "@/lib/categories-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isValidCategory(category)) {
    return generateSEOMetadata({
      subtitle: "Categoría no encontrada",
      description: "La categoría que buscas no está disponible.",
    });
  }

  const categoryName = getCategoryName(category);
  const categoryDescription = getCategoryDescription(category);

  return generateSEOMetadata({
    subtitle: categoryName,
    description:
      categoryDescription ||
      `Descubre todos los productos ${categoryName} disponibles. Envío a todo el país, garantía oficial y los mejores precios.`,
    keywords: [
      categoryName,
      `${categoryName} Apple`,
      `comprar ${categoryName}`,
      `${categoryName} Argentina`,
    ],
    url: `https://tudominio.com/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  const products = getProductsByCategory(category);
  const categoryName = getCategoryName(category);

  return (
    <CategoryView
      categoryName={categoryName}
      categorySlug={category}
      products={products}
    />
  );
}
