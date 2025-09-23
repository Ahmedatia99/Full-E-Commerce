import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BillingForm = () => {
  const { t } = useTranslation();

  const [saveInfo, setSaveInfo] = useState(false);

  // ✅ Fill form from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("billingInfo");
    if (savedData) {
      const data = JSON.parse(savedData);
      const form = document.getElementById("billing-form") as HTMLFormElement;
      if (form) {
        Object.keys(data).forEach((key) => {
          const input = form.elements.namedItem(key) as HTMLInputElement;
          if (input) input.value = data[key];
        });
      }
      setSaveInfo(true);
    }
  }, []);

  // ✅ Handle Save Info toggle
  const handleSaveInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = document.getElementById("billing-form") as HTMLFormElement;
    if (!form) return;

    if (e.target.checked) {
      if (form.checkValidity()) {
        const formData = new FormData(form);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
          data[key] = value.toString();
        });
        localStorage.setItem("billingInfo", JSON.stringify(data));
        setSaveInfo(true);
      } else {
        e.target.checked = false;
        setSaveInfo(false);
        form.reportValidity();
      }
    } else {
      localStorage.removeItem("billingInfo");
      setSaveInfo(false);
    }
  };

  return (
    <form
      id="billing-form"
      className="grid grid-cols-1 gap-5"
      noValidate
      aria-label="Billing Information Form"
    >
      {/* First Name */}
      <div>
        <label htmlFor="first-name" className="label-base">
          {t("firstNameInput")} <span className="text-red-600">*</span>
        </label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          required
          aria-required="true"
          className="input-base"
          placeholder={t("firstNamePlaceHolderInput")}
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="companyInput" className="label-base">
          {t("companyInput")}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="input-base"
          placeholder={t("complanyPlaceHolderInput")}
        />
      </div>

      {/* Street */}
      <div>
        <label htmlFor="street" className="label-base">
          {t("streetAdressInput")}
          <span className="text-red-600">*</span>
        </label>
        <input
          id="street"
          name="street"
          type="text"
          required
          aria-required="true"
          className="input-base"
          placeholder={t("streetPlaceHolderInput")}
        />
      </div>

      {/* Apartment */}
      <div>
        <label htmlFor="apartment" className="label-base">
          {t("ApartmentAddressInput")}
          <span className="text-red-600">*</span>
        </label>
        <input
          id="apartment"
          name="apartment"
          type="text"
          className="input-base"
          required
          placeholder={t("apartmenAddresstPlaceHolderInput")}
        />
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="label-base">
          {t("cityInput")}
          <span className="text-red-600">*</span>
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          aria-required="true"
          className="input-base"
          placeholder={t("cityPlaceHolderInput")}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="label-base">
          {t("phoneInput")}
          <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          aria-required="true"
          className="input-base"
          placeholder={t("phonePlaceHolderInput")}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label-base">
          {t("emailInput")}
          <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          aria-required="true"
          className="input-base"
          placeholder={t("emailPlaceHolderInput")}
        />
      </div>

      {/* Save Info */}
      <div className="flex items-center gap-3">
        <input
          id="save-info"
          type="checkbox"
          name="saveInfo"
          className="checkbox-base"
          aria-describedby="save-info-text"
          checked={saveInfo}
          onChange={handleSaveInfoChange}
        />
        <label
          htmlFor="save-info"
          id="save-info-text"
          className="text-sm text-gray-600 cursor-pointer"
        >
          {t("saveInfoLabel")}
        </label>
      </div>
    </form>
  );
};

export default React.memo(BillingForm);
