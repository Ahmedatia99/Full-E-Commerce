import { useTranslation } from "react-i18next";
import Breadcrumbs from "../common/Breadcrumbs";
import React from "react";
function CartTableHeader() {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumbs />
      <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-700 shadow-md p-6 bg-gray-100">
        <span className="text-center">{t("product")}</span>
        <span className="text-center">{t("price")}</span>
        <span className="text-center">{t("quantity")}</span>
        <span className="text-center">{t("subtotal")}</span>
      </div>
    </>
  );
}

export default React.memo(CartTableHeader);
