import { useCart } from "../../hooks/useCart";
import EmptyCartMessage from "../Checkout-Page/EmptyCartMessage";
import Breadcrumbs from "../common/Breadcrumbs";
import CartTableHeader from "./CartTableHeader";
import CartProduct from "./CartProduct";
import CartQuantity from "./CartQuantity";
import CartCoupon from "./CartCoupon";
import CartTotalPrice from "./CartTotalPrice";
import { Button } from "../ui/button";
import DeleteAllProductsBtn from "./DeleteAllCartProductsBtn";

const Cart = function () {
  const { cartProducts } = useCart();

  return (
    <main aria-label="Shopping cart">
      {/* Breadcrumb */}
      <Breadcrumbs />

      {cartProducts.length === 0 && <EmptyCartMessage />}
      {cartProducts.length > 0 && (
        <section>
          <section className="py-5" aria-labelledby="cart-heading">
            {/* Table header */}
            <CartTableHeader />
            {/* Products */}
            {cartProducts.map((item) => (
              <article
                key={item.key}
                className="grid sm:grid-cols-4 gap-3 grid-cols-1 items-center mt-7 shadow-md transition duration-300 hover:scale-[0.99] px-6 py-5 rounded-md"
                aria-label={`Product: ${item.title}`}
              >
                <CartProduct item={item} />

                {/* Price */}
                <span className="text-xl">${item.price}</span>

                {/* Quantity */}
                <CartQuantity item={item} />

                {/* Subtotal */}
                <span className="flex gap-3 sm:justify-end justify-start font-medium text-xl">
                  <span className="sm:hidden">Total:</span>$
                  {item.price * item.quantity}
                </span>
              </article>
            ))}
          </section>

          {/* Buttons */}
          <section className="flex flex-col-reverse sm:flex-row justify-between gap-5 mt-5">
            <a href="/" aria-label="Return to shop">
              <Button className="border font-semibold transition duration-300 w-full px-10 py-5 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Return To Shop
              </Button>
            </a>

            <DeleteAllProductsBtn />
          </section>

          {/* Coupon & Cart Total */}
          <section
            className="grid grid-cols-1 sm:grid-cols-2 sm:gap-30 gap-5 mt-10"
            aria-labelledby="cart-summary"
          >
            {/* Coupon */}
            <CartCoupon />

            {/* Cart Total */}
            <CartTotalPrice />
          </section>
        </section>
      )}
    </main>
  );
};

export default Cart;
