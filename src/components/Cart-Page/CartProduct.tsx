import { useCart } from "@/hooks/useCart";
import type { cartProduct } from "@/types/cart";
import { TiDelete } from "react-icons/ti";
type CartProductProps = {
  item: cartProduct;
};
function CartProduct({ item }: CartProductProps) {
  const { deleteFromCart } = useCart();

  return (
    <div className="flex relative sm:flex-row flex-col sm:items-center gap-3">
      <button
        onClick={() => deleteFromCart(item.key)}
        aria-label={`Remove ${item.title} from cart`}
        className="cursor-pointer absolute left-0 top-0 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
      >
        <TiDelete className="text-3xl text-[#DB4444]" />
      </button>
      <img
        src={item.mainImage}
        alt={item.title}
        loading="lazy"
        className="sm:w-15 sm:h-15 w-[50%] h-[50%] ml-5 mt-3 sm:mt-0 object-contain rounded"
      />
      <span className="font-medium">{item.title}</span>
    </div>
  );
}

export default CartProduct;
