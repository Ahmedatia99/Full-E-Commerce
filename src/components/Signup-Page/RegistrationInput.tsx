import React from "react";
import { useTranslation } from "react-i18next";
interface RegistrationInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  type: string;
  className?: string;
}
function RegistrationInput({
  value,
  onChange,
  placeholder,
  name,
  type,
  className = "",
}: RegistrationInputProps) {
  const { t } = useTranslation();
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={t(placeholder)}
        value={value}
        onChange={onChange}
        className={`w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-lg ${className}`}
        required
      />
    </>
  );
}

export default RegistrationInput;
