import { useCart } from "@/hooks/useCart";
import { Button } from "../ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
function DeleteAllCartProductsBtn() {
  const { t } = useTranslation();
  const {
    cartProducts,

    clearCart,
  } = useCart();
  return (
    <Button
      onClick={clearCart}
      disabled={cartProducts.length === 0}
      aria-disabled={cartProducts.length === 0}
      aria-label="Delete all products from cart"
    >
      {t("Delete All Products")}
    </Button>
  );
}

export default React.memo(DeleteAllCartProductsBtn);
