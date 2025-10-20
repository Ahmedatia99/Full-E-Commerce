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

import { useNavigate } from "react-router-dom";
import type { Filters } from "@/types/product_Type";
import { useAllProducts } from "@/hooks/productsCustomHook/useAllProducts";

type CategoryFeatureProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const CategoryFeature = ({ filters, setFilters }: CategoryFeatureProps) => {
  const navigate = useNavigate();
  const { products, loading, error } = useAllProducts();

  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((p) => p.category?.toLowerCase() || "Unknown"))
    ),
  ];

  const handleCategoryChange = (v: string) => {
    setFilters((prev) => ({ ...prev, category: v }));

    if (v.toLowerCase() === "all") {
      navigate("/AllProducts");
    } else {
      navigate(`/AllProducts/${v.toLowerCase()}`);
    }
  };

  if (loading) {
    return (
      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-gray-500">Loading categories...</p>
        </AccordionContent>
      </AccordionItem>
    );
  }

  if (error) {
    return (
      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-red-500">
            Failed to load categories: {error}
          </p>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <AccordionItem value="category">
      <AccordionTrigger>Category</AccordionTrigger>
      <AccordionContent>
        <Select
          value={filters.category || "All"}
          onValueChange={handleCategoryChange}
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
