import React from "react";

interface ProductActionsProps {
  stock: number;
  onBuyNow: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ stock, onBuyNow }) => {
  const isOutOfStock = stock === 0;

  return (
    <div className="w-full">
      <button
        type="button"
        disabled={isOutOfStock}
        onClick={onBuyNow}
        aria-disabled={isOutOfStock}
        aria-label={
          isOutOfStock ? "Product is out of stock" : "Buy this product now"
        }
        className={`rounded-[7px] text-xl h-full w-full px-2 py-2 transition-colors duration-200 ${
          isOutOfStock
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#DB4444] hover:bg-[#b83737] text-white cursor-pointer"
        }`}
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductActions;
