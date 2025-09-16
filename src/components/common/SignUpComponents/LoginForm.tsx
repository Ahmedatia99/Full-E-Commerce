import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
    // هنا تضيف logic بتاع الـ API للـ login
  };

  return (
    <div className="lg:w-[60%]   sm:w-[60%] w-[100%] lg:ml-30  ml:0 mx-auto p-6">
      {/* Title */}
      <h1 className="sm:text-4xl text-3xl font-medium tracking-wide">Log in to Exclusive</h1>
      <p className="text-gray-600 mt-5 mb-6">Enter your details below</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Email or Phone Number"
          value={formData.emailOrPhone}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-lg"
          required
        />

        <div className="flex items-center justify-between">
          {/* Log In Button */}
          <button
            type="submit"
            className="bg-[#DB4444] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition"
          >
            Log In
          </button>

          {/* Forget Password */}
          <a
            href="/forgot-password"
            className="text-[#DB4444] font-medium hover:underline"
          >
            Forget Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
