import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
function CartCoupon() {
  const { t } = useTranslation();
  return (
    <div>
      <label htmlFor="coupon" className="sr-only">
        {t("Coupon Code")}
      </label>
      <div className="flex gap-2">
        <input
          id="coupon"
          type="text"
          placeholder={t("Coupon Code")}
          className="border rounded w-full px-3 py-2"
        />
        <Button className="!py-0 !px-0 !h-14 max-sm:!h-12 !w-40  max-sm:!text-xs">{t("Apply Coupon")}</Button>
      </div>
    </div>
  );
}

export default React.memo(CartCoupon);
