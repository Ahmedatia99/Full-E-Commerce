import React from "react";

/**
 * ProductLabel component
 *
 * Renders SEO-friendly product labels:
 * - "NEW" → shown if the product is newly released
 * - "Discount" → shown if the product has a discount percentage
 *
 * SEO:
 * - Uses <span> with itemProp instead of <button>
 * - Helps search engines understand product status and offers
 */
const ProductLabel = React.memo(
  ({ type, value }: { type: "new" | "discount"; value?: number }) => {
    if (type === "new") {
      return (
        <span
          itemProp="releaseStatus"
          className="bg-[#00FF66] text-white rounded absolute top-2 left-3 px-2 py-1 text-sm font-semibold"
        >
          NEW
        </span>
      );
    }

    if (type === "discount" && value) {
      return (
        <span
          itemProp="discount"
          className="bg-[#DB4444] text-white rounded absolute top-2 left-3 px-4 py-1 text-sm font-semibold"
        >
          -{value}%
        </span>
      );
    }

    return null;
  }
);

export default ProductLabel;
