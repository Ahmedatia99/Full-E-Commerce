import { useState } from "react";
import { mockUser } from "../common/mockUser";
import type { UserForm } from "@/types/user_Type";
import AccountSidebar from "./Account-SideBar";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

function AccountDetails() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center md:flex-row flex-col    ">
      {/* Sidebar */}
      <AccountSidebar />

      {/* Main Content */}
      <main className="flex-1 justify-center items-centerbg-[white] rounded-md shadow-sm mt-10 md:mt-0   p-5 ">
        <form
          onSubmit={handleSubmit}
          className="  flex flex-col justify-center gap-4  w-full"
        >
          <h1 className="text-xl font-semibold text-[#DB4444] ">
            {t("editProfileHeader")}
          </h1>
          {/* First Row */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-10 ">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("firstNameInput")} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full  rounded-md px-3 py-4 bg-[#F5F5F5]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("lastNameInput")} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full rounded-md px-3 py-4 bg-gray-100"
                required
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid sm:grid-cols-2 grid-cols-1   gap-4 sm:gap-10 ">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("emailInput")} <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                disabled
                className="w-full rounded-md px-3 py-4 bg-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("addressInput")} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="address"
                className="w-full rounded-md px-3 py-4 bg-gray-100"
                required
              />
            </div>
          </div>

          {/* Password Section */}
          <h2 className="my-5 text-xl font-semibold text-[#DB4444]">
            {t("passwordChangesLabel")}
          </h2>
          <div className="space-y-5 mb-6">
            <label htmlFor="password" className="label-base">
              {t("passwordInput")}
              <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type="password"
              name="currentPassword"
              className="w-full rounded-md px-3 py-4 bg-gray-100"
            />
            <label htmlFor="newPassword" className="label-base">
              {t("newPasswordInput")}
              <span className="text-red-600">*</span>
            </label>
            <input
              id="newPassword"
              type="password"
              name="newPassword"
              className="w-full rounded-md px-3 py-4 bg-gray-100"
            />
            <label htmlFor="confirmNewPassword" className="label-base">
              {t("confirmNewPasswordInput")}
              <span className="text-red-600">*</span>
            </label>
            <input
              id="confirmNewPassword"
              type="password"
              name="confirmPassword"
              className="w-full rounded-md px-3 py-4 bg-gray-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between md:justify-around  space-x-4 flex-wrap gap-3 ">
            <Button type="button">{t("cancelBtn")}</Button>
            <Button type="submit" className="bg-green-700">
              {t("saveChangesBtn")}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AccountDetails;
