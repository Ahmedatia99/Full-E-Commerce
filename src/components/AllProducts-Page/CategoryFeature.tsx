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
import products from "../../product.json";
import type { productObject } from "@/types/product_Type";
type CategoryFeatureProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};
const CategoryFeature = ({ filters, setFilters }: CategoryFeatureProps) => {
  const productsData = products as productObject[];
  const categories = [
    "All",
    ...Array.from(new Set(productsData.map((p) => p.category))),
  ];

  return (
    <AccordionItem value="category">
      <AccordionTrigger>Category</AccordionTrigger>
      <AccordionContent>
        <Select
          value={filters.category || "All"}
          onValueChange={(v) => setFilters({ ...filters, category: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat ?? ""}>
                {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "Unknown"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CategoryFeature;
