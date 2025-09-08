import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

interface ProductQuantityProps {
  stock: number;
  quantity: number;
  setQuantity: (val: number) => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({ stock, quantity, setQuantity }) => {
  const [activeButton, setActiveButton] = useState<"plus" | "minus">("plus");

  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      setActiveButton("plus");
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setActiveButton("minus");
    }
  };

  if (stock <= 0) return null;

  return (
    <div className="flex items-center border-2 border-[#00000080]  h-15  rounded-[7px] w-full gap-4">
      <button
        onClick={decrease}
        disabled={quantity === 1}
        className={`w-full flex justify-center items-center text-4xl border-r-2 border-r-[#00000080] rounded-l-[5px] h-full 
          ${activeButton === "minus" ? "bg-[#DB4444] text-white" : ""} 
          ${quantity === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <FiMinus />
      </button>
      <span className="text-2xl font-semibold w-full flex items-center justify-center">{quantity}</span>
      <button
        onClick={increase}
        disabled={quantity === stock}
        className={`flex justify-center items-center text-4xl w-full h-full border-l-2 border-l-[#00000080] rounded-r-[5px] 
          ${activeButton === "plus" ? "bg-[#DB4444] text-white" : ""} 
          ${quantity === stock ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <GoPlus />
      </button>
    </div>
  );
};

export default ProductQuantity;
