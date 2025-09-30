import { useState, useEffect } from "react";
import type { colorsVariants } from "@/types/product_Type";

export function useProductSize(colorObj?: colorsVariants) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    colorObj?.sizes?.[0] // safer with optional chaining
  );
  
  useEffect(() => {
    if (!colorObj) {
      setSelectedSize(undefined);
      return;
    }
    setSelectedSize(colorObj.sizes?.[0] ?? undefined);
  }, [colorObj]);

  return { selectedSize, setSelectedSize };
}
