import CategoryView from "@/components/CategoryView";
import { getProductsBySubcategory } from "@/lib/products";
import { generateSEOMetadata } from "@/lib/metadata";
import {
  getCategoryName,
  getSubcategoryName,
  getSubcategoryDescription,
  isValidCategory,
  isValidSubcategory,
} from "@/lib/categories-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SubcategoryPageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateMetadata({
  params,
}: SubcategoryPageProps): Promise<Metadata> {
  const { category, subcategory } = await params;

  if (!isValidCategory(category) || !isValidSubcategory(subcategory)) {
    return generateSEOMetadata({
      subtitle: "Página no encontrada",
      description: "La página que buscas no está disponible.",
    });
  }

  const categoryName = getCategoryName(category);
  const subcategoryName = getSubcategoryName(subcategory);
  const subcategoryDescription = getSubcategoryDescription(subcategory);

  return generateSEOMetadata({
    subtitle: `${categoryName} - ${subcategoryName}`,
    description:
      subcategoryDescription ||
      `Descubre ${categoryName} ${subcategoryName}. Envío a todo el país, garantía oficial y los mejores precios.`,
    keywords: [
      `${categoryName} ${subcategoryName}`,
      categoryName,
      subcategoryName,
      `comprar ${categoryName}`,
    ],
    url: `https://tudominio.com/${category}/${subcategory}`,
  });
}

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const { category, subcategory } = await params;

  if (!isValidCategory(category) || !isValidSubcategory(subcategory)) {
    notFound();
  }

  const products = getProductsBySubcategory(category, subcategory);
  const categoryName = getCategoryName(category);
  const subcategoryName = getSubcategoryName(subcategory);

  return (
    <CategoryView
      categoryName={categoryName}
      categorySlug={category}
      subcategoryName={subcategoryName}
      subcategorySlug={subcategory}
      products={products}
    />
  );
}
