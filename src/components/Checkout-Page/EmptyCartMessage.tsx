import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "@/assets/images/empty-cart.png";

/**
 * EmptyCartMessage Component
 * ---------------------------------------
 * This component is displayed when the shopping cart is empty.
 * It shows:
 * - An illustration of an empty cart.
 * - A heading and a description message.
 * - A button (Link) to redirect users back to the homepage for shopping.
 *
 * Improvements:
 * - Added descriptive alt text for SEO and accessibility.
 * - Used `loading="lazy"` for the image to improve performance.
 * - Added `aria-live="polite"` to announce empty cart state for screen readers.
 * - Wrapped with `React.memo` to avoid unnecessary re-renders.
 * - Converted to a regular function instead of React.FC (no children/props).
 */
function EmptyCartMessage() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center"
      aria-live="polite" // Accessibility: announce updates politely
    >
      {/* 🛒 Empty cart illustration */}
      <img
        src={emptyCartImg}
        alt="Illustration of an empty shopping cart"
        className="w-50 h-50 mb-6"
        loading="lazy" // Performance: lazy load image
      />

      {/* 📝 Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Your cart is empty
      </h2>

      {/* 📌 Description */}
      <p className="text-gray-600 mb-6">You have no items to checkout.</p>

      {/* 🔗 Redirect to homepage button */}
      <Link
        to="/"
        className="bg-[#DB4444] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
      >
        Go Shopping
      </Link>
    </div>
  );
}

// ✅ Optimization: prevent re-rendering when parent re-renders unnecessarily
export default React.memo(EmptyCartMessage);
