import React from "react";
import { useCart } from "../../hooks/useCart";
import EmptyCartMessage from "../Checkout-Page/EmptyCartMessage";
import CartItemsList from "./CartItemsList";
import CartActions from "./CartActions";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cartProducts } = useCart();

  return (
    <main aria-label="Shopping cart">
      {cartProducts.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
          <CartItemsList />
          <CartActions />
          <CartSummary />
        </>
      )}
    </main>
  );
};

export default React.memo(Cart);
