import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import ProductImageGallery from "@/components/ProductImageGallery";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlugAndCategory } from "@/lib/products";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/lib/metadata";
import {
  getCategoryName,
  getSubcategoryName,
  isValidCategory,
  isValidSubcategory,
} from "@/lib/categories-config";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ category: string; subcategory: string; product: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category, subcategory, product: productSlug } = await params;
  const product = getProductBySlugAndCategory(productSlug, category);

  if (!product) {
    return generateSEOMetadata({
      subtitle: "Producto no encontrado",
      description: "El producto que buscas no está disponible.",
    });
  }

  return generateSEOMetadata({
    subtitle: product.name,
    description: product.description,
    keywords: [
      product.name,
      getCategoryName(product.category),
      getSubcategoryName(product.subcategory),
      product.color,
      `${product.name} ${product.color}`,
    ],
    image: product.image,
    url: `https://tudominio.com/${category}/${subcategory}/${productSlug}`,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, subcategory, product: productSlug } = await params;

  if (!isValidCategory(category) || !isValidSubcategory(subcategory)) {
    notFound();
  }

  const product = getProductBySlugAndCategory(productSlug, category);

  if (!product) {
    notFound();
  }

  const categoryName = getCategoryName(category);
  const subcategoryName = getSubcategoryName(subcategory);

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-white dark:bg-black py-12 md:py-22">
      <div className="container mx-auto">
        <div className="mb-7">
          <DynamicBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: categoryName, href: `/${category}` },
              { label: subcategoryName, href: `/${category}/${subcategory}` },
              { label: product.name },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <ProductImageGallery
            images={product.images || [product.image]}
            productName={product.name}
          />

          {/* Product Details */}
          <div className="space-y-8 sticky top-24 self-start">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400">
                U${product.price.toLocaleString()}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Color</h3>
              <div className="flex gap-2">
                <div className="px-4 py-2 border rounded-full text-sm font-medium bg-gray-50 dark:bg-gray-900">
                  {product.color}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Descripción</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5491234567890?text=Hola,%20me%20interesa%20consultar%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto px-8 rounded-full"
                >
                  Consultar por WhatsApp
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="border-t pt-8 mt-8">
              <h3 className="font-medium text-lg mb-4">Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="border-t pt-8">
              <h3 className="font-medium text-lg mb-4">Especificaciones</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-gray-500">Almacenamiento</span>
                  <span className="font-medium">{product.specs.storage}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Pantalla</span>
                  <span className="font-medium">{product.specs.screen}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Cámara</span>
                  <span className="font-medium">{product.specs.camera}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Batería</span>
                  <span className="font-medium">{product.specs.battery}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Procesador</span>
                  <span className="font-medium">{product.specs.processor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQAccordion />
    </div>
  );
}
