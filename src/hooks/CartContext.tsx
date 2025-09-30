import type { CartContextType } from "@/types/cart";
import React, { type ReactNode } from "react";

export const CartContext = React.createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setProducts] = React.useState<cartProduct[]>(() => {
    const savedProducts = localStorage.getItem("GuestCart");
    if (savedProducts) {
      return JSON.parse(savedProducts);
    } else {
      localStorage.setItem("GuestCart", "[]");

      console.log("Cart created");
      return [];
    }
  });

  const saveToStorage = (items: cartProduct[]) => {
    setProducts(items);
    localStorage.setItem("GuestCart", JSON.stringify(items));
  };
  const addToCart = (product: cartProduct) => {
    console.log("Added");
    const exists = cartProducts.find(
      (cartProduct) => cartProduct.key === product.key
    );
    if (exists) {
      editQuantity(product.key, exists.quantity + 1);
    } else {
      saveToStorage([...cartProducts, product]);
    }
  };
  const editQuantity = (productKey: string, newQuantity: number) => {
    saveToStorage(
      cartProducts.map((productCart) =>
        productCart.key === productKey
          ? { ...productCart, quantity: newQuantity }
          : productCart
      )
    );
  };
  const getTotalPrice = () => {
    return cartProducts.reduce(
      (total, productCart) => total + productCart.price * productCart.quantity,
      0
    );
  };
  const clearCart = () => {
    saveToStorage([]);
  };
  const deleteFromCart = (key: string) => {
    saveToStorage(
      cartProducts.filter((productCart) => productCart.key !== key)
    );
  };
  const cartCount = () => {
    return cartProducts.length;
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        editQuantity,
        getTotalPrice,
        clearCart,
        deleteFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
