import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

interface ProductQuantityProps {
  stock: number;
  quantity: number;
  setQuantity: (val: number) => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  stock,
  quantity,
  setQuantity,
}) => {
  if (stock <= 0) return null;

  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border-2 border-[#00000080] h-15 rounded-[7px] w-full gap-4">
      {/* Decrease */}
      <button
        onClick={decrease}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
        className={` cursor-pointer w-full flex justify-center items-center text-4xl border-r-2 border-r-[#00000080] rounded-l-[5px] h-full transition-colors duration-200
          ${
            quantity === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#DB4444] hover:text-white"
          }
        `}
      >
        <FiMinus />
      </button>

      {/* Current Quantity */}
      <output
        aria-live="polite"
        className="text-2xl font-semibold w-full flex items-center justify-center"
      >
        {quantity}
      </output>

      {/* Increase */}
      <button
        onClick={increase}
        disabled={quantity === stock}
        aria-label="Increase quantity"
        className={` cursor-pointer flex justify-center items-center text-4xl w-full h-full border-l-2 border-l-[#00000080] rounded-r-[5px] transition-colors duration-200
          ${
            quantity === stock
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#DB4444] hover:text-white"
          }
        `}
      >
        <GoPlus />
      </button>
    </div>
  );
};

export default ProductQuantity;
