import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import Breadcrumbs from "../Breadcrumbs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";

type BillingForm = {
  firstName: string;
  company?: string;
  street: string;
  apartment?: string;
  city: string;
  phone: string;
  email: string;
};

const Checkout: React.FC = () => {
  const { cartProducts, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState<BillingForm>({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit
  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    // basic validation
    if (
      !formData.firstName ||
      !formData.street ||
      !formData.city ||
      !formData.phone ||
      !formData.email
    ) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      alert("⚠️ Invalid email address.");
      return;
    }

    if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      alert("⚠️ Invalid phone number.");
      return;
    }

    // build order object
    const orderData = {
      customer: formData,
      items: cartProducts,
      total: subtotal,
      paymentMethod,
    };

    console.log("✅ Order Placed:", orderData);
    alert("🎉 Order placed successfully!");
  };

  return (
    <main
      aria-label="Checkout page"
      className="container mx-auto px-5 my-10"
      role="main"
    >
      {/* Breadcrumb */}
      <Breadcrumbs />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-10">
        {/* Billing Details */}
        <section aria-labelledby="billing-heading">
          <h1
            id="billing-heading"
            className="text-2xl font-bold mb-5 text-gray-900"
          >
            Billing Details
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5"
            noValidate
          >
            {/* First Name */}
            <label htmlFor="firstName" className="font-medium text-gray-700">
              First Name <span className="text-red-600">*</span>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* Company */}
            <label htmlFor="company" className="font-medium text-gray-700">
              Company Name
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* Street */}
            <label htmlFor="street" className="font-medium text-gray-700">
              Street Address <span className="text-red-600">*</span>
              <input
                id="street"
                name="street"
                type="text"
                value={formData.street}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* Apartment */}
            <label htmlFor="apartment" className="font-medium text-gray-700">
              Apartment, floor, etc. (optional)
              <input
                id="apartment"
                name="apartment"
                type="text"
                value={formData.apartment}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* City */}
            <label htmlFor="city" className="font-medium text-gray-700">
              Town/City <span className="text-red-600">*</span>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* Phone */}
            <label htmlFor="phone" className="font-medium text-gray-700">
              Phone Number <span className="text-red-600">*</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* Email */}
            <label htmlFor="email" className="font-medium text-gray-700">
              Email Address <span className="text-red-600">*</span>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded px-3 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </label>

            {/* Save Info */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer accent-[#DB4444] focus:ring-[#DB4444]"
              />
              <span className="text-sm text-gray-600">
                Save this information for faster checkout next time
              </span>
            </label>
          </form>
        </section>

        {/* Order Summary */}
        <section aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="text-xl font-bold mb-5 text-gray-900"
          >
            Order Summary
          </h2>

          <div className="p-5 bg-white rounded-lg shadow">
            {/* Cart Items */}
            {cartProducts.map((item) => (
              <div
                key={item.key}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-12 h-12 object-contain rounded"
                    loading="lazy"
                  />
                  <span className="text-sm text-gray-800">{item.title}</span>
                </div>
                <span className="font-medium text-gray-900">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}

            {/* Totals */}
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-gray-900 border-t pt-3">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>

            {/* Payment Methods */}
            <fieldset className="mt-5 space-y-3">
              <legend className="sr-only">Payment Method</legend>

              {/* Bank Payment */}
              <label className="flex justify-between items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50  ">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-black cursor-pointer"
                  />
                  <span className="text-gray-800 font-medium">Bank</span>
                </div>
                <div className="flex items-center gap-2 ml-2 text-2xl text-gray-700">
                  <FaCcVisa aria-label="Visa" />
                  <FaCcMastercard aria-label="Mastercard" />
                </div>
              </label>

              {/* Cash on Delivery */}
              <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5 accent-black cursor-pointer"
                />
                <span className="text-gray-800 font-medium">
                  Cash on Delivery
                </span>
              </label>
            </fieldset>

            {/* Coupon */}
            <div className="flex gap-2 mt-5">
              <input
                type="text"
                placeholder="Coupon Code"
                aria-label="Coupon Code"
                className="border rounded w-full sm:flex-2 px-3 py-2 focus:outline-none "
              />
              <button
                type="button"
                className="bg-[#DB4444] flex-1 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Apply Coupon
              </button>
            </div>

            {/* Place Order */}
            <button
              onClick={() => handleSubmit()}
              className="w-full mt-5 bg-[#DB4444] transition duration-300 text-white py-3 rounded hover:bg-red-700 text-lg font-semibold "
            >
              Place Order
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Checkout;
