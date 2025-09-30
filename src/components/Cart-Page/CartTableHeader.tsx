import React from "react";

function CartTableHeader() {
  return (
    <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-700 shadow-md p-6 bg-gray-100">
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span className="text-right">Subtotal</span>
    </div>
  );
}

export default React.memo(CartTableHeader);
