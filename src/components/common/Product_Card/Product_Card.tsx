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

/**
 * Single_Product_Card component
 *
 * Represents a single product card with:
 * - Product image
 * - Labels (e.g., New, Discount)
 * - Actions (favorite, view, delete)
 * - Add to cart button
 * - Product details (title, price, rating, colors, etc.)
 *
 * SEO:
 * - Wrapped with <article> and schema.org Product metadata
 *
 * Performance:
 * - Exported with React.memo to avoid unnecessary re-renders.
 * - Useful when rendering lists of products, since only updated cards will re-render.
 */
const Single_Product_Card = React.memo(function Single_Product_Card({
  componentProps,
  product,
  index,
}: SingleProductCardComponentProps) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="boxContainer w-full sm:w-1/2 md:w-1/3 lg:w-[270px]"
    >
      <div className="group flex flex-col justify-between relative rounded bg-white">
        {/* Product image with SEO-friendly "image" + "url" */}
        <a href={`/product/${product.id}`} itemProp="url">
          <ProductImage
            src={product.mainImgSRC}
            alt={product.title}
            itemProp="image"
          />
        </a>

        {/* Add to Cart button (configurable: fixed or relative) */}
        <AddToCartButton fixed={componentProps?.AddToCartBtnFixed} />

        {/* Product labels:
            - Show "New" if product is new
            - Show discount percentage if product has a discount
        */}
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

        {/* Extra actions (Favorite, Quick View, Delete, etc.) */}
        <ProductActions componentProps={componentProps} />
      </div>

      {/* Product details section (title, price, rating, colors, etc.) */}
      <Product_Card_Info
        product={product}
        hasReview={componentProps?.hasReview}
        hasColors={componentProps?.hasColors}
        ratingAndPriceInRow={componentProps?.ratingAndPriceInRow}
      />
    </article>
  );
});

/**
 * Product_Card component
 *
 * Renders a list of products by mapping through the products array.
 *
 * Notes:
 * - Not wrapped with React.memo because the products array reference usually changes.
 * - Instead, each Single_Product_Card is memoized for better rendering performance.
 */
function Product_Card({
  componentProps,
  products,
  index,
}: ProductCardComponentProps) {
  return (
    <>
      <div className="ProductsCards flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <Single_Product_Card
            key={product.id}
            index={index}
            componentProps={componentProps}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Product_Card;
