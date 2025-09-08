import { FaCartShopping } from "react-icons/fa6";
const AddToCartButton = ({ fixed }: { fixed?: boolean }) => {
  return fixed ? (
    // Fixed Add To Cart Button
    <div className="addToCartBtn bg-black text-white text-center p-3 flex items-center justify-center gap-3 rounded-b">
      <FaCartShopping />
      <button>Add to cart</button>
    </div>
  ) : (
    // Hover Add To Cart Button
    <div className="addToCartBtn bg-black text-white text-center p-3 hidden group-hover:block rounded-b">
      <button>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;
