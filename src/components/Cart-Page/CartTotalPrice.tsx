import { useCart } from "@/hooks/useCart";
import React from "react";

function CartTotalPrice() {
  const { getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  return (
    <div
      className="border rounded-md p-5"
      id="cart-summary"
      aria-label="Cart total summary"
    >
      <h2 className="font-semibold text-lg mb-3">Cart Total</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span className="text-green-600">Free</span>
      </div>
      <div className="flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>${subtotal}</span>
      </div>
      <a href="/checkout" aria-label="Proceed to checkout">
        <button className="w-full h-15 mt-5 bg-[#DB4444] text-white py-2 transition duration-300 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Proceed to Checkout
        </button>
      </a>
    </div>
  );
}

export default React.memo(CartTotalPrice);
