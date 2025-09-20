import React from "react";
import { useCart } from "../../hooks/useCart";
import Breadcrumbs from "../common/Breadcrumbs";
import { TiDelete } from "react-icons/ti";

const Cart: React.FC = () => {
  const {
    cartProducts,
    editQuantity,
    deleteFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();

  const subtotal = getTotalPrice();

  return (
    <main aria-label="Shopping cart">
      {/* Breadcrumb */}
      <Breadcrumbs />

      {/* Cart Section */}
      <section className="py-5" aria-labelledby="cart-heading">
        <h1 id="cart-heading" className="sr-only">
          Shopping Cart
        </h1>

        {/* Table header */}
        <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-700 shadow-md p-6">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span className="text-right">Subtotal</span>
        </div>

        {/* Products */}
        {cartProducts.map((item) => (
          <article
            key={item.key}
            className="grid sm:grid-cols-4 gap-3 grid-cols-1 items-center mt-7 shadow-md transition duration-300 hover:scale-[0.99] px-6 py-5 rounded-md"
            aria-label={`Product: ${item.title}`}
          >
            {/* Product */}
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

            {/* Price */}
            <span className="text-xl">${item.price}</span>

            {/* Quantity */}
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
              className="border rounded px-2 py-3 w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

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
          <button className="border font-semibold transition duration-300 w-full px-10 py-5 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Return To Shop
          </button>
        </a>

        <button
          onClick={clearCart}
          disabled={cartProducts.length === 0}
          className="border font-semibold transition duration-300 px-10 py-5 rounded hover:bg-gray-100 text-red-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-disabled={cartProducts.length === 0}
          aria-label="Delete all products from cart"
        >
          Delete All Products
        </button>
      </section>

      {/* Coupon & Cart Total */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-30 gap-5 mt-10"
        aria-labelledby="cart-summary"
      >
        {/* Coupon */}
        <div>
          <label htmlFor="coupon" className="sr-only">
            Coupon Code
          </label>
          <div className="flex gap-2">
            <input
              id="coupon"
              type="text"
              placeholder="Coupon Code"
              className="border rounded w-full px-3 py-2"
            />
            <button className="bg-[#DB4444] transition duration-300 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <div
          className="border rounded-md p-5"
          id="cart-summary"
          aria-label="Cart total summary"
        >
          <h2 className="font-semibold text-lg mb-3">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <a href="/checkout" aria-label="Proceed to checkout">
            <button className="w-full h-15 mt-5 bg-[#DB4444] text-white py-2 transition duration-300 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Proceed to Checkout
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Cart;
