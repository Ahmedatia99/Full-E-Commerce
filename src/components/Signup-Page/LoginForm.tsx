import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RegistrationInput from "./RegistrationInput";

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
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
    // here we will add logic to handle login
  };

  return (
    <section
      className="lg:w-[60%] sm:w-[60%] w-[100%] lg:ml-30 ml:0 mx-auto p-6"
      aria-labelledby="login-title"
    >
      {/* Title */}
      <h1
        id="login-title"
        className="sm:text-4xl text-3xl font-bold tracking-wide"
      >
        {t("loginToExclusive")}
      </h1>
      <p className="text-gray-600 mt-5 mb-6">{t("enterDetailsBelow")}</p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        aria-label={t("loginToExclusive")}
      >
        <RegistrationInput
          type="text"
          name="emailOrPhone"
          label="emailOrPhone"
          placeholder="Enter your email or phone"
          value={formData.emailOrPhone}
          onChange={handleChange}
        />

        <RegistrationInput
          type="password"
          name="password"
          label="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Log In Button */}
          <Button variant="default" aria-label={t("login")}>
            {t("login")}
          </Button>

          {/* Forget Password */}
          <Link
            to="/forgot-password"
            className="text-[#DB4444] font-medium hover:underline mt-5 md:mt-0"
            aria-label={t("forgot your password")}
          >
            {t("forgetPassword")}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
