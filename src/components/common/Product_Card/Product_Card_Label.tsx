import React from "react";

// 🟢 ProductLabel component: renders a label for a product (NEW or Discount)
// 🟢 Wrapped with React.memo to avoid unnecessary re-renders
const ProductLabel = React.memo(
  ({ type, value }: { type: "new" | "discount"; value?: number }) => {
    // ✅ Case: product is new
    if (type === "new") {
      return (
        <button className="bg-[#00FF66] text-white rounded absolute top-2 left-3 px-2 py-1">
          NEW
        </button>
      );
    }

    // ✅ Case: product has a discount
    if (type === "discount") {
      return (
        <button className="bg-[#DB4444] text-white rounded absolute top-2 left-3 px-4 py-1">
          -{value}%
        </button>
      );
    }

    // ❌ Default: no label to render
    return null;
  }
);

export default ProductLabel;
