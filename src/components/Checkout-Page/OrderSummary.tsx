import React, { useState, memo } from "react";
import PlaceOrderButton from "./PlaceOrderButton";
import paymentMethodIcon from "@/assets/images/paymentMethodIcon (1).webp";
import OrderSuccessDialog from "./OrderSuccessDialog";
import { useCart } from "@/hooks/useCart";

const OrderSummary = () => {
  const { cartProducts, getTotalPrice } = useCart();

  // Cart subtotal
  const subtotal = getTotalPrice();

  // Manage success dialog state
  const [successOpen, setSuccessOpen] = useState(false);

  // Payment method (default: Cash on Delivery)
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Coupon state
  const [coupon, setCoupon] = useState("");

  // Currency formatter (USD)
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  // Placeholder coupon logic
  const applyCoupon = () => {
    alert("To Be Implemented");
  };

  // Handle payment method change
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      {/* Cart Items */}
      {cartProducts.map((item) => (
        <div key={item.key} className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3 font-semibold">
            <img
              src={item.mainImage}
              alt={item.title}
              className="w-12 h-12 object-contain rounded"
              loading="lazy"
            />
            <span className="text-sm text-gray-800">{item.title}</span>
          </div>
          <span className="font-medium text-gray-900">
            {formatCurrency(item.price * item.quantity)}
          </span>
        </div>
      ))}

      {/* Totals */}
      <div className="flex justify-between mb-2 text-gray-700 font-semibold">
        <span>Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex justify-between mb-2 text-gray-700 font-semibold">
        <span>Shipping:</span>
        <span className="text-green-600">Free</span>
      </div>
      <div className="flex justify-between font-semibold text-lg text-gray-900 border-t pt-3">
        <span>Total:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      {/* Payment Methods */}
      <fieldset className="mt-5 space-y-3">
        <legend className="sr-only">Payment Method</legend>

        {/* Bank Payment */}
        <label className="flex justify-between items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={handlePaymentChange}
              className="w-5 h-5 accent-black cursor-pointer"
              aria-label="Bank Payment"
            />
            <span className="text-gray-800 font-medium">Bank</span>
          </div>
          <div className="flex items-center gap-2 ml-2 text-2xl text-gray-700">
            <img
              src={paymentMethodIcon}
              alt="Available Bank Methods"
              width={200}
              loading="lazy"
            />
          </div>
        </label>

        {/* Cash on Delivery */}
        <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={handlePaymentChange}
            className="w-5 h-5 accent-black cursor-pointer"
            aria-label="Cash on Delivery"
          />
          <span className="text-gray-800 font-medium">Cash on Delivery</span>
        </label>
      </fieldset>

      {/* Coupon */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          applyCoupon();
        }}
        className="flex gap-2 mt-5"
      >
        <input
          type="text"
          placeholder="Coupon Code"
          aria-label="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border rounded w-full sm:flex-2 px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#DB4444] flex-1 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Apply Coupon
        </button>
      </form>

      {/* Place Order Button */}
      <PlaceOrderButton
        cartProducts={cartProducts}
        subtotal={subtotal}
        paymentMethod={paymentMethod}
        setSuccessOpen={setSuccessOpen}
      />

      {/* Success Dialog */}
      <OrderSuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
    </div>
  );
};

// ✅ Wrapped with memo to prevent unnecessary re-renders
export default memo(OrderSummary);
