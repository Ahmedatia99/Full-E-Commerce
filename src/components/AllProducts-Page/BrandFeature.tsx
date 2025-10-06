import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import products from "../../product.json";
import type { productObject } from "@/types/product_Type";

export const BrandFeature = ({ filters, setFilters }) => {
  const productsData = products as productObject[];

  const brands = Array.from(
    new Set(productsData.map((p) => p.brand).filter((b) => b))
  );
  return (
    <AccordionItem value="brand">
      <AccordionTrigger>Brand</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={filters.brand.includes(brand)}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({
                  ...prev,
                  brand: checked
                    ? [...prev.brand, brand]
                    : prev.brand.filter((b) => b !== brand),
                }))
              }
            />
            <label htmlFor={brand} className="text-sm cursor-pointer">
              {brand}
            </label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
