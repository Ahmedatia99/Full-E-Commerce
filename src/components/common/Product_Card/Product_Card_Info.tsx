import StarRating from "./Product_Card_Rating";
import type { productObject } from "../../../types/product_Type";
import { Circle } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

function Product_Card_InfoComponent({
  product,
  hasReview,
  hasColors,
  ratingAndPriceInRow,
  selectedColor,
  onColorSelect,
}: {
  product: productObject;
  hasReview?: boolean;
  hasColors?: boolean;
  ratingAndPriceInRow?: boolean;
  selectedColor: string;
  onColorSelect: (color: string) => void;
}) {
  return (
    <div className="mt-4 flex flex-col gap-2 ml-3 md:ml-0">
      <Link to={`/product/${product.id}`}>
        <h3 itemProp="name" className="font-semibold" title={product.title}>
          {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </h3>
      </Link>

      <div
        className={`flex gap-4 ${
          ratingAndPriceInRow ? "flex-row" : "flex-col"
        } `}
      >
        {product.discountPrice ? (
          <div
            itemScope
            itemType="https://schema.org/Offer"
            className="flex gap-4"
          >
            <span
              className="productPrice text-[#DB4444] font-medium"
              itemProp="price"
            >
              {product.discountPrice}$
            </span>
            <meta itemProp="priceCurrency" content="EGP" />
            <del className="text-[#727272] font-medium">{product.price}</del>
          </div>
        ) : (
          <span className="productPrice text-[#DB4444] font-medium">
            {product.price}
          </span>
        )}

        {hasReview && (
          <div
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
            className="flex items-center gap-2"
          >
            <StarRating rating={product.avgRate} />

            <span className="text-[#727272] font-medium">
              ({product.ratingCount})
            </span>

            <meta itemProp="ratingValue" content={product.avgRate.toString()} />
            <meta
              itemProp="reviewCount"
              content={product.ratingCount.toString()}
            />
          </div>
        )}
      </div>

      {product.colors && hasColors && (
        <div className="colors flex gap-2">
          {product.colors.map((colorVariant, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="color"
                  value={colorVariant.color}
                  checked={selectedColor === colorVariant.color}
                  onChange={() => onColorSelect(colorVariant.color)}
                  className="peer hidden"
                />

                <Circle
                  color={colorVariant.color}
                  fill={colorVariant.color}
                  size={25}
                  className={`cursor-pointer rounded-full ${
                    selectedColor === colorVariant.color
                      ? "border-2 border-black"
                      : ""
                  }`}
                />
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

const Product_Card_Info = React.memo(Product_Card_InfoComponent);

export default Product_Card_Info;
