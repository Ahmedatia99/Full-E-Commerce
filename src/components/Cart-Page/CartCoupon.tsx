function CartCoupon() {
  return (
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
  );
}

export default CartCoupon;
