import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import products from "../../product.json";
import type { productObject } from "@/types/product_Type";
import type { Filters } from "@/types/product_Type";
type BrandFeatureProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const BrandFeature = ({ filters, setFilters }: BrandFeatureProps) => {
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
              checked={brand ? filters.brand.includes(brand) : false}
              onChange={(e) => {
                const checked = (e.target as HTMLInputElement).checked;
                if (!brand) return;

                setFilters((prev) => ({
                  ...prev,
                  brand: checked
                    ? [...prev.brand, brand]
                    : prev.brand.filter((b) => b !== brand),
                }));
              }}
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
