import type { cartProduct } from "@/types/cart";
import React, { type ReactNode } from "react";
import { CartContext } from "./CartContext";

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

  //  Add multiple products at once
  const addManyToCart = (products: cartProduct[]) => {
    // merge current cart with new products
    const merged = [...cartProducts, ...products];
    // remove duplicates based on 'key' and sum quantities
    const deduped = merged.reduce<cartProduct[]>((acc, product) => {
      const existing = acc.find((p) => p.key === product.key);
      if (existing) {
        // if already exists, sum the quantities
        return acc.map((p) =>
          p.key === product.key
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      } else {
        // if not exists, add to accumulator
        return [...acc, product];
      }
    }, []);

    saveToStorage(deduped);
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
        addManyToCart,
        clearCart,
        deleteFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
