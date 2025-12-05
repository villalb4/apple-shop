import CategoryView from "@/components/CategoryView";
import { getProductsByCategory } from "@/lib/products";
import { generateSEOMetadata } from "@/lib/metadata";
import { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return generateSEOMetadata({
    subtitle: categoryName,
    description: `Descubre todos los productos ${categoryName} disponibles. Envío a todo el país, garantía oficial y los mejores precios.`,
    keywords: [
      categoryName,
      `${categoryName} Apple`,
      `comprar ${categoryName}`,
    ],
    url: `https://tudominio.com/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const products = getProductsByCategory(category);

  // Helper to capitalize category name
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <CategoryView
      categoryName={categoryName}
      categorySlug={category}
      products={products}
    />
  );
}
