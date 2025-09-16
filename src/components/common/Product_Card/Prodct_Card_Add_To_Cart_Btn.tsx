import { ShoppingCart } from "lucide-react";

const AddToCartButton = ({
  fixed,
  className,
}: {
  fixed?: boolean;
  className?: string;
}) => {
  return fixed ? (
    // Fixed Add To Cart Button
    <button
      className={`addToCartBtn bg-black text-white text-center p-3 flex items-center justify-center gap-3 rounded-b w-full`}
      aria-label="Add this product to your shopping cart"
    >
      <ShoppingCart aria-hidden="true" />
      <span>Add to cart</span>
    </button>
  ) : (
    // Hover Add To Cart Button
    <button
      className="addToCartBtn bg-black text-white text-center p-3 invisible group-hover:visible items-center justify-center gap-3 rounded-b w-full flex-row"
      aria-label="Add this product to your shopping cart"
    >
      <div className="flex items-center justify-center gap-3">
        <ShoppingCart aria-hidden="true" />
        <span>Add to cart</span>
      </div>
    </button>
  );
};

export default AddToCartButton;
