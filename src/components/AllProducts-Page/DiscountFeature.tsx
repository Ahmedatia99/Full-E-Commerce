import { Checkbox } from "@/components/ui/checkbox";
export const DiscountFeature = ({filters, setFilters}) => {
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
