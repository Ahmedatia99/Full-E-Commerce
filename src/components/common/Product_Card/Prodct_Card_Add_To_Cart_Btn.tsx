import { memo, useContext, useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { CartContext } from "../../hooks/cartContext";
import type { cartProduct } from "@/types/product_Type";

const AddToCartButton = ({
  fixed,
  ProductToAdd,
  className,
}: {
  fixed?: boolean;
  ProductToAdd: cartProduct;
  className?: string;
}) => {
  const cartContext = useContext(CartContext);

  // State to temporarily show "Added to Cart" feedback
  const [justAdded, setJustAdded] = useState(false);

  // Check if this product (with a specific key = color/variant) already exists in the cart
  const exists = cartContext?.cartProducts.some(
    (p) => p.key === ProductToAdd.key
  );

  const HandleAddToCartBtn = () => {
    if (exists) {
      // If product already exists → increase its quantity
      cartContext?.editQuantity(
        ProductToAdd.key,
        (cartContext?.cartProducts.find((p) => p.key === ProductToAdd.key)
          ?.quantity || 0) + 1
      );
    } else {
      // If product does not exist → add it to the cart
      cartContext?.addToCart(ProductToAdd);
    }

    // Show "Added to Cart" state for 2 seconds (button disabled during this time)
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  // Common button classes (shared between fixed/hover modes)
  const buttonClasses = `addToCartBtn text-center p-3 flex items-center justify-center gap-3 rounded-b w-full cursor-pointer ${
    className || ""
  }`;

  return fixed ? (
    // Fixed button (always visible)
    <button
      className={`${buttonClasses} ${
        justAdded ? "bg-green-600 text-white" : "bg-black text-white"
      }`}
      aria-label="Add this product to your shopping cart"
      onClick={HandleAddToCartBtn}
      disabled={justAdded} // disable for 2 seconds when just added
    >
      {justAdded ? (
        // State shown right after adding product
        <>
          <Check aria-hidden="true" />
          <span>Added to Cart</span>
        </>
      ) : exists ? (
        // If product already exists in the cart
        <>
          <ShoppingCart aria-hidden="true" />
          <span>Increase Quantity</span>
        </>
      ) : (
        // Default state (product not in cart yet)
        <>
          <ShoppingCart aria-hidden="true" />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  ) : (
    // Hover-only button (becomes visible on hover with group-hover:visible)
    <button
      className={`${buttonClasses} invisible group-hover:visible ${
        justAdded ? "bg-green-600 text-white" : "bg-black text-white"
      }`}
      aria-label="Add this product to your shopping cart"
      onClick={HandleAddToCartBtn}
      disabled={justAdded} // disable for 2 seconds when just added
    >
      <div className="flex items-center justify-center gap-3">
        {justAdded ? (
          // State shown right after adding product
          <>
            <Check aria-hidden="true" />
            <span>Added to Cart</span>
          </>
        ) : exists ? (
          // If product already exists in the cart
          <>
            <ShoppingCart aria-hidden="true" />
            <span>Increase Quantity</span>
          </>
        ) : (
          // Default state (product not in cart yet)
          <>
            <ShoppingCart aria-hidden="true" />
            <span>Add to Cart</span>
          </>
        )}
      </div>
    </button>
  );
};

export default memo(AddToCartButton);
