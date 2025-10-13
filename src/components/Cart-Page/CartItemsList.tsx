import { useCart } from "../../hooks/useCart";
import CartTableHeader from "./CartTableHeader";
import CartItemCard from "./CartItemCard";

const CartItemsList = () => {
  const { cartProducts } = useCart();

  return (
    <section aria-labelledby="cart-heading">
      <CartTableHeader />
      {cartProducts.map((item) => (
        <CartItemCard key={item.key} item={item} />
      ))}
    </section>
  );
};

export default CartItemsList;
