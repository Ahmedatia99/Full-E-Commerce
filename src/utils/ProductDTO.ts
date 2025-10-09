import type { cartProduct } from "@/types/cart";
import type { productObject } from "@/types/product_Type";

export function toCartProduct(
  product: productObject,
  color?: string,
  quantity: number = 1
): cartProduct {
  const finalColor = color ?? product.colors?.[0]?.color ?? "default";

  return {
    id: product.id,
    title: product.title,
    price: product.discountPrice || product.price,
    quantity,
    color: finalColor,
    key: `${product.id}-${finalColor}`,
    mainImage: product.mainImgSRC,
  };
}
