import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductGrid from "@/components/ProductGrid";
// import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProductsByCategory } from "@/lib/products";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const products = getProductsByCategory(category);

  // Helper to capitalize category name
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex flex-col gap-20 min-h-screen py-10 md:py-20">
      <div>
        <div className="container mx-auto mb-10 flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoryName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Select>
            <SelectTrigger className="w-[200px] rounded-none">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="recientes">Más recientes</SelectItem>
              <SelectItem value="precio-menor">
                Precio: Menor a Mayor
              </SelectItem>
              <SelectItem value="precio-mayor">
                Precio: Mayor a Menor
              </SelectItem>
              <SelectItem value="vendidos">Más vendidos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="container mx-auto">
          <main className="flex-1">
            <ProductGrid products={products} categorySlug={category} />
          </main>
        </div>
      </div>

      <FAQAccordion />
    </div>
  );
}
