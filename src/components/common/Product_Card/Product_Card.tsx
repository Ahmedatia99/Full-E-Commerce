import React from "react";
import ProductImage from "./Product_Card_Img";
import ProductActions from "./Product_Card_Actions";
import AddToCartButton from "./Prodct_Card_Add_To_Cart_Btn";
import ProductLabel from "./Product_Card_Label";
import Product_Card_Info from "./Product_Card_Info";
import ProductStats from "@/utils/ProductStats";
import type {
  ProductCardComponentProps,
  SingleProductCardComponentProps,
} from "@/types/Components_type";
import type { productObject } from "@/types/product_Type";

/**
 * Single_Product_Card component
 * Renders a single product card with image, labels, actions, and info.
 *
 * Wrapped with React.memo (at export):
 * - Prevents unnecessary re-renders when props haven't changed.
 * - Useful for lists of cards where only a few items may update.
 */
const Single_Product_Card = React.memo(function Single_Product_Card({
  componentProps,
  product,
}: SingleProductCardComponentProps) {
  return (
    <div className="boxContainer w-[270px]">
      <div className="group flex flex-col justify-between relative rounded bg-white">
        {/* Product image */}
        <ProductImage src={product.mainImgSRC} alt={product.title} />

        {/* Add To Cart Button */}
        <AddToCartButton fixed={componentProps?.AddToCartBtnFixed} />

        {/* Product Labels (NEW or Discount) */}
        {product.isNew ? (
          <ProductLabel type="new" />
        ) : product.discountPrice ? (
          <ProductLabel
            type="discount"
            value={ProductStats.getDiscountPercentage(
              product.price,
              product.discountPrice
            )}
          />
        ) : null}

        {/* Product Actions (Favorite, View, Delete) */}
        <ProductActions componentProps={componentProps} />
      </div>

      {/* Product Info (title, price, rating, colors, etc.) */}
      <Product_Card_Info
        product={product}
        hasReview={componentProps?.hasReview}
        hasColors={componentProps?.hasColors}
        ratingAndPriceInRow={componentProps?.ratingAndPriceInRow}
      />
    </div>
  );
});

/**
 * Product_Card component
 * Renders a list of product cards by mapping through the products array.
 *
 * Note:
 * - We don't wrap this in React.memo because `products` is usually a new array reference.
 * - Instead, Single_Product_Card is memoized so only changed cards re-render.
 */
function Product_Card({ componentProps, products }: ProductCardComponentProps) {
  return (
    <div className="ProductsCards flex gap-8 flex-wrap">
      {products.map((product) => (
        <Single_Product_Card
          key={product.id}
          componentProps={componentProps}
          product={product}
        />
      ))}
    </div>
  );
}

export default Product_Card;
