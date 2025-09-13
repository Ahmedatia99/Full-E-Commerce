import { useState } from "react";
import { Heart, Heart as HeartFilled } from "lucide-react";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import type { ProductCardProps } from "../../../types/Components_type";

/**
 * ProductActions component
 *
 * Renders interactive product action buttons:
 * - Favourite (toggle like/unlike)
 * - View product (quick view / details)
 * - Delete (remove product from list/cart)
 *
 * Performance:
 * - Uses lucide-react icons with individual imports
 * - Reduces unused JavaScript bundle size
 *
 * SEO & Accessibility:
 * - Uses <button> for semantic actions
 * - Adds aria-label for screen readers
 */
const ProductActions = ({
  componentProps,
}: {
  componentProps?: ProductCardProps;
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="icons absolute right-2 top-2 flex flex-col gap-3">
      {/* Favourite button */}
      {componentProps?.hasFavouriteIcon && (
        <button
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
          onClick={() => setLiked(!liked)}
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          {liked ? (
            <HeartFilled className="text-red-500" />
          ) : (
            <Heart className="text-gray-700" />
          )}
        </button>
      )}

      {/* View button */}
      {componentProps?.hasviewIcon && (
        <button
          aria-label="View product details"
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <Eye />
        </button>
      )}

      {/* Delete button */}
      {componentProps?.hasDeleteIcon && (
        <button
          aria-label="Delete product"
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <Trash2 />
        </button>
      )}
    </div>
  );
};

export default ProductActions;
