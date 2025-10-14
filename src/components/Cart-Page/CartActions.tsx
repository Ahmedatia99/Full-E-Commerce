import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useCart } from "@/hooks/useCart";

const CartActions = () => {
  const { t } = useTranslation();
  const {
    cartProducts,

    clearCart,
  } = useCart();
  return (
    <section className="flex justify-between gap-5 mt-5">
      <Link to="/" aria-label="Return to shop">
        <Button className="!py-0 !px-3 max-sm:!text-xs">
          {t("Home Page")}
        </Button>
      </Link>
      <Button
        onClick={clearCart}
        disabled={cartProducts.length === 0}
        aria-disabled={cartProducts.length === 0}
        aria-label="Delete all products from cart"
        className="!py-0 !px-3 max-sm:!text-xs"
      >
        {t("Delete All Products")}
      </Button>
    </section>
  );
};

export default React.memo(CartActions);
