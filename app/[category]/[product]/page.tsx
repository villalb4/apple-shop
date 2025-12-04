import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/lib/products";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  // Helper to capitalize category name
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-white dark:bg-black py-12 md:py-22">
      <div className="container mx-auto">
        <div className="mb-12">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${category}`}>
                  {categoryName}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-100 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400">
                ${product.price}
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
              <Button size="lg" className="w-full md:w-auto px-8 rounded-full">
                Consultar por WhatsApp
              </Button>
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
