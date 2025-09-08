import React from "react";

interface ProductActionsProps {
  stock: number;
  onBuyNow: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  stock,
  onBuyNow,
}) => {
  return (
    <div className="w-full">
      <button
        disabled={stock === 0}
        onClick={onBuyNow}
        className={`rounded-[7px] text-xl h-full cursor-pointer w-full px-2 py-2 ${
          stock === 0
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#DB4444] text-white"
        }`}
      >
        {stock === 0 ? "Out of Stock" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductActions;
