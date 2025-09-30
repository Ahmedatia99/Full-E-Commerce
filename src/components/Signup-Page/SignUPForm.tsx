import  { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RegistrationInput from "./RegistrationInput";

const SignUpForm = () => {
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
    <section
      className="lg:w-[80%] sm:w-[60%] w-[100%]  gap-5 ml:0 mx-auto p-6"
      aria-labelledby="signup-title"
    >
      {/* Title */}
      <h1
        id="signup-title"
        className="text-3xl md:text-4xl font-bold tracking-wide"
      >
        {t("createAccount")}
      </h1>
      <p className="text-gray-500 font-semibold mt-5 mb-6">
        {t("enterDetailsBelow")}
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-7"
        aria-label={t("createAccount")}
      >
        <RegistrationInput
          type="text"
          name="name"
          label="yourName"
          placeholder={t("Enter your name")}
          value={formData.name}
          onSubmit={handleChange}
        />

        <RegistrationInput
          type="text"
          name="emailOrPhone"
          label="emailOrPhone"
          placeholder={t("Enter your email or phone")}
          value={formData.emailOrPhone}
          onSubmit={handleChange}
        />

        <RegistrationInput
          type="password"
          name="password"
          label="password"
          placeholder={t("Enter your password")}
          value={formData.password}
          onSubmit={handleChange}
        />

        {/* Create Account Button */}
        <Button
          type="submit"
          className="w-full mb-5 max-sm:text-sm"
          aria-label={t("createAccount")}
        >
          {t("createAccount")}
        </Button>
      </form>

      {/* OR Google */}
      <Button
        className="w-full mb-5 max-sm:text-sm"
        aria-label={t("signUpWithGoogle")}
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          className="w-5 h-5 mr-3 shadow-2xl"
        />
        <span>{t("signUpWithGoogle")}</span>
      </Button>

      {/* Already have account */}
      <p className="text-center text-gray-600 mt-6">
        {t("already have account?")}{" "}
        <Link
          to="/login"
          className="text-black font-medium underline"
          aria-label={t("login to your account")}
        >
          {t("login")}
        </Link>
      </p>
    </section>
  );
};

export default SignUpForm;
