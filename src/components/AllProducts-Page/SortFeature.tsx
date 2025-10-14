import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Filters } from "@/types/product_Type";

type BrandFeatureProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const SortFeature = ({ filters, setFilters }: BrandFeatureProps) => {
  return (
    <AccordionItem value="sort">
      <AccordionTrigger>Sort</AccordionTrigger>
      <AccordionContent>
        <Select
          value={filters.sort ?? ""}
          onValueChange={(v) => setFilters({ ...filters, sort: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Default</SelectItem>
            <SelectItem value="price-low">Price: Low</SelectItem>
            <SelectItem value="price-high">Price: High</SelectItem>
            <SelectItem value="rating">Rating: High</SelectItem>
          </SelectContent>
        </Select>
      </AccordionContent>
    </AccordionItem>
  );
};
