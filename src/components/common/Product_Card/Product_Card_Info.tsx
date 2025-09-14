import StarRating from "./Product_Card_Rating";
import type { productObject } from "../../../types/product_Type";
import { Circle } from "lucide-react";

function Product_Card_Info({
  product,
  hasReview,
  hasColors,
  ratingAndPriceInRow,
}: {
  product: productObject;
  hasReview?: boolean;
  hasColors?: boolean;
  ratingAndPriceInRow?: boolean;
}) {
  return (
    <>
      <div className="mt-4 flex  flex-col gap-2 ">
        <h3 itemProp="name">{product.title}</h3>
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
              <span className="productPrice text-[#DB4444]" itemProp="price">
                {product.discountPrice}$
              </span>
              <meta itemProp="priceCurrency" content="EGP" />
              <del className="text-[#727272]">{product.price}</del>
            </div>
          ) : (
            <span className="productPrice text-[#DB4444]">{product.price}</span>
          )}

          {hasReview && (
            <div
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
              className="flex items-center gap-2"
            >
              <StarRating rating={product.avgRate} />

              <span className="text-[#727272]">({product.ratingCount})</span>

              <meta
                itemProp="ratingValue"
                content={product.avgRate.toString()}
              />
              <meta
                itemProp="reviewCount"
                content={product.ratingCount.toString()}
              />
            </div>
          )}
          {/* Colors Section*/}
        </div>
        {product.colors && hasColors && (
          <div className="colors flex gap-2">
            {product.colors.map((colorVariant, index) => {
              return (
                <label key={index}>
                  <input type="radio" name="color" className="peer hidden" />

                  <Circle
                    color={colorVariant.color}
                    size={25}
                    className="cursor-pointer rounded-full peer-checked:border-3 peer-checked:border-black"
                  />
                </label>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Product_Card_Info;
