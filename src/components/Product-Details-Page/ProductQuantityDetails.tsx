import React, { useCallback } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Button } from "@/components/ui/button";

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
  const increase = useCallback(() => {
    if (quantity < stock) setQuantity(quantity + 1);
  }, [quantity, stock, setQuantity]);

  const decrease = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1);
  }, [quantity, setQuantity]);
  if (stock <= 0) return null;

  return (
    <div className="flex items-center border-2 border-[#00000080] h-15 rounded-lg w-full gap-4">
      {/* Decrease */}
      <Button
        onClick={decrease}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
        className={`h-full text-2xl rounded-r-none
          ${
            quantity === 1
              ? "opacity-50 cursor-not-allowed "
              : "hover:bg-main hover:text-white"
          }
        `}
      >
        <FiMinus />
      </Button>

      {/* Current Quantity */}
      <output
        aria-live="polite"
        className="text-2xl font-semibold w-full flex items-center justify-center"
      >
        {quantity}
      </output>

      {/* Increase */}
      <Button
        onClick={increase}
        disabled={quantity === stock}
        aria-label="Increase quantity"
        className={`h-full text-2xl rounded-l-none
          ${
            quantity === stock
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-main hover:text-white"
          }
        `}
      >
        <GoPlus />
      </Button>
    </div>
  );
};

export default ProductQuantity;
