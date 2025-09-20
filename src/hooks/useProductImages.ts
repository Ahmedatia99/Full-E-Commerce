import { useState, useEffect, useMemo } from "react";
import type { productObject, colorsVariants } from "@/types/product_Type";

export function useProductImages(
  product: productObject | undefined,
  colorObj: colorsVariants | undefined
) {
  // فلترة الصور الفارغة للون المختار فقط
  const colorImages = useMemo(
    () => (colorObj?.images || []).filter((img) => img && img.trim() !== ""),
    [colorObj]
  );
  // الصور المعروضة هي فقط صور اللون المختار، ولو مفيش صور للون المختار استخدم صورة المنتج الرئيسية فقط
  const images = useMemo(() => {
    if (colorImages.length > 0) return colorImages;
    if (product?.mainImgSRC) return [product.mainImgSRC];
    return [];
  }, [colorImages, product]);
  // الصورة الرئيسية الافتراضية هي أول صورة من الصور المتاحة
  const [mainImage, setMainImage] = useState<string | null>(images[0] || null);
  useEffect(() => {
    setMainImage(images[0] || null);
  }, [images]);
  return { images, mainImage, setMainImage };
}
