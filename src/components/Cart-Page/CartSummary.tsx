import CartCoupon from "./CartCoupon";
import CartTotalPrice from "./CartTotalPrice";

const CartSummary = () => (
  <section
    className="grid grid-cols-1 sm:grid-cols-2 sm:gap-30 gap-5 mt-10"
    aria-labelledby="cart-summary"
  >
    <CartCoupon />
    <CartTotalPrice />
  </section>
);

export default CartSummary;
