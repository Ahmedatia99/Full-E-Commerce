import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";

export function useProductColor(product: productObject | undefined) {
  // أول لون الكمية فيه > 0
  const getFirstAvailableColor = () => {
    if (!product || !product.colors.length) return undefined;
    const available = product.colors.find((c) => c.quantity > 0);
    return available ? available.color : product.colors[0].color;
  };
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    getFirstAvailableColor()
  );
  const colorObj = product?.colors.find((c) => c.color === selectedColor);
  // عند تغيير المنتج فقط (أو أول تحميل)، اختار أول لون متاح
  useEffect(() => {
    setSelectedColor(getFirstAvailableColor());
    // eslint-disable-next-line
  }, [product]);
  return { selectedColor, setSelectedColor, colorObj };
}
