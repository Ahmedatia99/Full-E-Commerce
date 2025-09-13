import { ShoppingCart } from "lucide-react";

const AddToCartButton = ({ fixed }: { fixed?: boolean }) => {
  return fixed ? (
    // Fixed Add To Cart Button
    <button
      className="addToCartBtn bg-black text-white text-center p-3 flex items-center justify-center gap-3 rounded-b w-full"
      aria-label="Add this product to your shopping cart"
    >
      <ShoppingCart aria-hidden="true" />
      <span>Add to cart</span>
    </button>
  ) : (
    // Hover Add To Cart Button
    <button
      className="addToCartBtn bg-black text-white text-center p-3 hidden group-hover:flex items-center justify-center gap-3 rounded-b w-full"
      aria-label="Add this product to your shopping cart"
    >
      <ShoppingCart aria-hidden="true" />
      <span>Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
