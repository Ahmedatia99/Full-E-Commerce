import React, { useState } from "react";
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
import { toCartProduct } from "@/utils/ProductDTO";

const Single_Product_Card = React.memo(function Single_Product_Card({
  componentProps,
  product,
}: SingleProductCardComponentProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.color || ""
  );

  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="boxContainer w-full"
    >
      <div className="group   flex flex-col justify-center relative rounded bg-[#f5f5f5] overflow-hidden">
        {/* Product image */}
        <div>
          <a href={`/product/${product.id}`} itemProp="url">
            <ProductImage
              src={product.mainImgSRC}
              alt={product.title}
              itemProp="image"
            />
          </a>
        </div>

        {/* Add to Cart button (يظهر من الشمال لليمين) */}
        <div
          className="absolute bottom-0 left-0 w-full
             opacity-0 translate-y-[100%]
             group-hover:opacity-100 group-hover:translate-y-0
             transition-all duration-500 ease-in-out"
        >
          <AddToCartButton
            fixed={true}
            className="w-full bg-black text-white py-3 font-semibold text-center rounded-none"
            ProductToAdd={toCartProduct(product, selectedColor)}
          />
        </div>

        {/* Product labels */}
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

        {/* Extra actions */}
        <ProductActions componentProps={componentProps} product={product} />

        {/* 👇 زرار View More Details */}
      </div>

      {/* Product details */}
      <Product_Card_Info
        product={product}
        hasReview={componentProps?.hasReview}
        hasColors={componentProps?.hasColors}
        ratingAndPriceInRow={componentProps?.ratingAndPriceInRow}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />
    </article>
  );
});

function Product_Card({
  componentProps,
  products,
  className,
}: ProductCardComponentProps) {
  return (
    <div
      className={`flex justify-between max-[640px]:px-18 max-[500px]:px-10 max-[450px]:px-0  gap-5 ${className}`}
    >
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
