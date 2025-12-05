import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductGrid from "@/components/ProductGrid";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/products";

interface CategoryViewProps {
  categoryName: string;
  categorySlug: string;
  products: Product[];
}

export default function CategoryView({
  categoryName,
  categorySlug,
  products,
}: CategoryViewProps) {
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
            <ProductGrid products={products} categorySlug={categorySlug} />
          </main>
        </div>
      </div>

      <FAQAccordion />
    </div>
  );
}
