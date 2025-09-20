import React from "react";
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
    discountPrice?: number;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { t } = useTranslation();

  // discountPrice هنا هي النسبة المئوية للخصم
  const discountPercent = product.discountPrice || 0;
  // السعر بعد الخصم (لا يمكن أن يكون أقل من 0)
  let discountedPrice = product.price;
  if (discountPercent > 0) {
    discountedPrice = product.price - (product.price * discountPercent) / 100;
    if (discountedPrice < 0 || discountPercent >= 100) discountedPrice = 0;
  }
  return (
    <>
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <div className="flex items-center gap-2 flex-wrap ">
        <StarRating rating={product.rating} />
        <span className="text-[#535353] text-xl">
          ({product.reviews} Reviews)
        </span>
        <hr className="h-5 border-1 border-[#535353]" />
        <span
          className={`text-xl ${
            product.stock > 0 ? "text-[#00FF66]" : "text-red-500"
          }`}
        >
          {product.stock > 0
            ? `In Stock (${product.stock} available)`
            : "Out of Stock"}
        </span>
      </div>
      <span className="text-3xl font-semibold">
        ${discountedPrice.toFixed(2)}
        {discountPercent > 0 && (
          <span className="ml-4 text-lg text-gray-400 line-through font-normal">
            ${product.price}
          </span>
        )}
      </span>

      <p>{product.description}</p>
      <hr className="w-full border-1 border-[#535353]" />
    </>
  );
};

export default ProductInfo;
