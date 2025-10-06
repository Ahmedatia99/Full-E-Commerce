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
export const SortFeature = ({ filters, setFilters }) => {
  return (
    <AccordionItem value="sort">
      <AccordionTrigger>Sort</AccordionTrigger>
      <AccordionContent>
        <Select
          value={filters.sort}
          onValueChange={(v) => setFilters({ ...filters, sort: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Default</SelectItem>
            <SelectItem value="price-low">Price: Low</SelectItem>
            <SelectItem value="price-high">Price: High</SelectItem>
            <SelectItem value="az">Rating: High</SelectItem>
          </SelectContent>
        </Select>
      </AccordionContent>
    </AccordionItem>
  );
};
