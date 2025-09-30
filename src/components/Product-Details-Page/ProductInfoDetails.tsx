import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import StarRating from "../common/Product_Card/Product_Card_Rating";

interface ProductInfoProps {
  product: {
    title: string;
    rating: number;
    reviews: number;
    stock: number;
    price: number;
    description: string;
    discountPrice?: number; // represents discount percentage
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { t } = useTranslation();

  // use => useMemo to avoid recalculating discount on every render
  const discountedPrice = useMemo(() => {
    const discountPercent = product.discountPrice || 0;
    let priceAfterDiscount = product.price;

    if (discountPercent > 0) {
      priceAfterDiscount =
        product.price - (product.price * discountPercent) / 100;
      if (priceAfterDiscount < 0 || discountPercent >= 100) {
        priceAfterDiscount = 0;
      }
    }
    return { discountPercent, priceAfterDiscount };
  }, [product.price, product.discountPrice]);

  return (
    <section aria-labelledby="product-title" className="flex flex-col gap-3">
      <h1 id="product-title" className="text-3xl font-semibold">
        {product.title}
      </h1>

      {/* Rating and stock info */}
      <div className="flex items-center gap-3 flex-wrap">
        <StarRating rating={product.rating} />
        <span className="text-gray-700 text-xl">
          ({product.reviews} {t("reviews")})
        </span>
        <hr className="h-5 border-1 border-gray-600" />

        {/* Accessible stock status */}
        <span
          className={`text-xl font-semibold ${
            product.stock > 0 ? "text-green-600" : "text-red-500"
          }`}
          aria-live="polite"
        >
          {product.stock > 0
            ? t("inStock", { stock: product.stock })
            : t("Out of Stock")}
        </span>
      </div>

      {/* Price with discount */}
      <span className="text-3xl font-semibold">
        ${discountedPrice.priceAfterDiscount.toFixed(2)}
        {discountedPrice.discountPercent > 0 && (
          <span className="ml-4 text-lg text-gray-400 line-through font-normal">
            ${product.price}
          </span>
        )}
      </span>

      {/* Description */}
      <p>{product.description}</p>
      <hr className="w-full border-1 border-gray-300 mt-5" />
    </section>
  );
};

export default ProductInfo;
