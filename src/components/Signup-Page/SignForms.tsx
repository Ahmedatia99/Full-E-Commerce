import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // هنا هتحط API call أو logic بتاعك
  };

  return (
    <div className="lg:w-[60%] sm:w-[60%] w-[100%] lg:ml-30  gap-5 ml:0 mx-auto p-6  ">
      {/* Title */}
      <h1 className="sm:text-4xl text-3xl font-medium tracking-wide">
        {t("createAccount")}
      </h1>
      <p className="text-gray-600 mt-5 mb-6">{t("enterDetailsBelow")}</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        <input
          type="text"
          name="name"
          placeholder={t("yourName")}
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-lg"
          required
        />

        <input
          type="text"
          name="emailOrPhone"
          placeholder={t("emailOrPhone")}
          value={formData.emailOrPhone}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder={t("password")}
          value={formData.password}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-lg"
          required
        />

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full bg-[#DB4444] text-white py-3 rounded-md text-lg font-medium hover:bg-red-600 transition"
        >
          {t("createAccount")}
        </button>
      </form>

      {/* OR Google */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 border-2 border-gray-300 py-3 rounded-md hover:bg-gray-50 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>{t("signUpWithGoogle")}</span>
      </button>

      {/* Already have account */}
      <p className="text-center text-gray-600 mt-6">
        {t("alreadyhaveaccount?")}
        <Link to="/login" className="text-black font-medium underline">
          {t("login")}
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
