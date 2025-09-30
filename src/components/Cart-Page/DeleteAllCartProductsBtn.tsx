import { useCart } from "@/hooks/useCart";
import { Button } from "../ui/button";
import React from "react";

function DeleteAllCartProductsBtn() {
  const {
    cartProducts,

    clearCart,
  } = useCart();
  return (
    <Button
      onClick={clearCart}
      disabled={cartProducts.length === 0}
      className="border font-semibold transition duration-300 px-10 py-5 rounded hover:bg-gray-100 text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500"
      aria-disabled={cartProducts.length === 0}
      aria-label="Delete all products from cart"
    >
      Delete All Products
    </Button>
  );
}

export default React.memo(DeleteAllCartProductsBtn);
