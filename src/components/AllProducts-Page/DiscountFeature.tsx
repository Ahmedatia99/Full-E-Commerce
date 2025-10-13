import { Checkbox } from "@/components/ui/checkbox";
import type { Filters } from "@/types/product_Type";
type BrandFeatureProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const DiscountFeature = ({ filters, setFilters }: BrandFeatureProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="discountOnly"
        checked={filters.discountOnly}
        onCheckedChange={(checked) =>
          setFilters({ ...filters, discountOnly: Boolean(checked) })
        }
      />
      <label htmlFor="discountOnly" className="text-sm cursor-pointer">
        Discount Only
      </label>
    </div>
  );
};
