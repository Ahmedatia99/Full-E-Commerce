import type { productObject } from "@/types/product_Type";
import type { cartProduct } from "@/types/cart";
export function toCartProduct(
  product: productObject,
  color: string | undefined,
  quantity: number = 1
): cartProduct {
  return {
    id: product.id,
    title: product.title,
    price: product.discountPrice || product.price,
    quantity,
    color: color,
    key: color ? `${product.id}-${color}` : `${product.id}`,
    mainImage: product.mainImgSRC,
  };
}
