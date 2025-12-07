import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
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
  subcategoryName?: string;
  subcategorySlug?: string;
  products: Product[];
}

export default function CategoryView({
  categoryName,
  categorySlug,
  subcategoryName,
  subcategorySlug,
  products,
}: CategoryViewProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...(subcategoryName
      ? [
          { label: categoryName, href: `/${categorySlug}` },
          { label: subcategoryName },
        ]
      : [{ label: categoryName }]),
  ];

  return (
    <div className="flex flex-col gap-20 min-h-screen py-10 md:py-20">
      <div>
        <div className="container mx-auto mb-5 flex items-center justify-between">
          <DynamicBreadcrumb items={breadcrumbItems} />

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
            <ProductGrid products={products} />
          </main>
        </div>
      </div>

      <FAQAccordion />
    </div>
  );
}
