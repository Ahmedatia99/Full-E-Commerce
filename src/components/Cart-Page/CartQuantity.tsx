import { useCart } from "@/hooks/useCart";
import type { cartProduct } from "@/types/cart";

type CartQuantityProps = {
  item: cartProduct;
};
function CartQuantity({ item }: CartQuantityProps) {
  const { editQuantity } = useCart();

  return (
    <div>
      <label htmlFor={`qty-${item.key}`} className="sr-only">
        Quantity for {item.title}
      </label>
      <input
        id={`qty-${item.key}`}
        type="number"
        value={item.quantity}
        min={1}
        max={20} // item.stock
        onChange={(e) => editQuantity(item.key, parseInt(e.target.value))}
        onKeyDown={(e) => e.preventDefault()}
        className="border rounded px-2 py-3 w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default CartQuantity;
