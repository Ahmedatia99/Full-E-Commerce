import { useState, useEffect } from "react";
import type { colorsVariants } from "@/types/product_Type";

export function useProductSize(colorObj: colorsVariants | undefined) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    colorObj?.sizes && colorObj.sizes.length > 0 ? colorObj.sizes[0] : undefined
  );
  useEffect(() => {
    if (!colorObj) return;
    setSelectedSize(colorObj.sizes[0] || undefined);
  }, [colorObj]);
  return { selectedSize, setSelectedSize };
}
