import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Slider } from "@/components/ui/slider";
import type { Filters } from "./ShowProducts";

type BrandFeatureProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const PriceRangeFeature = ({
  filters,
  setFilters,
}: BrandFeatureProps) => {
  return (
    <AccordionItem value="price">
      <AccordionTrigger>Price Range</AccordionTrigger>
      <AccordionContent>
        <div className="px-2">
          <Slider
            defaultValue={[0, 3000]}
            value={filters.priceRange}
            max={3000}
            step={50}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: value as [number, number],
              }))
            }
            className="mt-3"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
