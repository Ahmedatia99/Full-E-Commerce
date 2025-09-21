import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RegistrationInput from "./RegistrationInput";

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
    // here we will add logic to handle sign up
  };

  return (
    <div className="lg:w-[60%] sm:w-[60%] w-[100%] lg:ml-30  gap-5 ml:0 mx-auto p-6  ">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
        {t("createAccount")}
      </h1>
      <p className="text-gray-500 font-semibold mt-5 mb-6">
        {t("enterDetailsBelow")}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        <RegistrationInput
          type="text"
          name="name"
          placeholder={t("yourName")}
          value={formData.name}
          onChange={handleChange}
        />

        <RegistrationInput
          type="text"
          name="emailOrPhone"
          placeholder={t("emailOrPhone")}
          value={formData.emailOrPhone}
          onChange={handleChange}
        />

        <RegistrationInput
          type="password"
          name="password"
          placeholder={t("password")}
          value={formData.password}
          onChange={handleChange}
        />

        {/* Create Account Button */}
        <Button type="submit" className="w-full mb-5 max-sm:text-xs">
          {t("createAccount")}
        </Button>
      </form>

      {/* OR Google */}
      <Button className="w-full mb-5  max-sm:text-xs">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5 mr-3 shadow-2xl"
        />
        <span>{t("signUpWithGoogle")}</span>
      </Button>

      {/* Already have account */}
      <p className="text-center text-gray-600 mt-6">
        {t("already have account?")}
        <Link to="/login" className="text-black font-medium underline">
          {t("login")}
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
