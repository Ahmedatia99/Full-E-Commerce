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

import products from "../../product.json";
import type { productObject } from "@/types/product_Type";

const CategoryFeature = ({ selectValue, setFilters }) => {
  const productsData = products as productObject[];
  const categories = [
    "All",
    ...Array.from(new Set(productsData.map((p) => p.category))),
  ];

  return (
    <AccordionItem value="category">
      <AccordionTrigger>Category</AccordionTrigger>
      <AccordionContent>
        <Select value={selectValue} onValueChange={setFilters}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CategoryFeature;
