import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ProductSizesProps {
  sizes: string[];
  selectedSize?: string;
  setSelectedSize: (val: string) => void;
}

const ProductSizes: React.FC<ProductSizesProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  if (!sizes?.length) return null;

  return (
    <div className="flex flex-col gap-3 pt-1 pb-5">
      {/* Label */}
      <div className="flex items-center gap-2 sm:gap-9">
        <span className="text-2xl font-semibold" id="product-size-label">
          Size:
        </span>

        {/* Toggle Group */}
        <ToggleGroup
          type="single"
          value={selectedSize}
          onValueChange={(val) => val && setSelectedSize(val)}
          className="flex-wrap gap-4 w-full !flex"
          aria-labelledby="product-size-label"
        >
          {sizes.map((size) => (
            <ToggleGroupItem
              key={size}
              value={size}
              aria-label={`Select size ${size}`}
              className="w-10 h-10 sm:w-12 sm:h-12 text-lg cursor-pointer rounded-md transition-colors duration-200
                data-[state=off]:border-2 data-[state=off]:border-[#0000005e]
                data-[state=on]:text-white data-[state=on]:bg-[#DB4444] data-[state=on]:border-[#DB4444]"
            >
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Show selected size */}
      {selectedSize && (
        <span className="text-gray-600 text-lg">
          Selected size: <strong>{selectedSize}</strong>
        </span>
      )}
    </div>
  );
};

export default ProductSizes;
