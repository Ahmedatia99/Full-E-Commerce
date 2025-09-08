import React from "react";

interface ProductInfoProps {
  product: {
    title: string;
    rating: number;
    stock: number;
    price: number;
    description: string;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[#535353] text-xl">({product.rating} Reviews)</span>
        <hr className="h-5 border-1 border-[#535353]" />
        <span className={`text-xl ${product.stock > 0 ? "text-[#00FF66]" : "text-red-500"}`}>
          {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
        </span>
      </div>
      <span className="text-3xl font-semibold">${product.price}</span>
      <p>{product.description}</p>
      <hr className="w-full border-1 border-[#535353]" />
    </>
  );
};

export default ProductInfo;
