import React, { type ReactNode } from "react";
import { CartContext } from "./CartContext"; // 👈 استدعاء الـ context هنا
import type { cartProduct } from "../types/product_Type";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Try to load saved items from localStorage, otherwise start with an empty array
  const [cartProducts, setProducts] = React.useState<cartProduct[]>(() => {
    const savedProducts = localStorage.getItem("GuestCart");
    if (savedProducts) {
      return JSON.parse(savedProducts) as cartProduct[];
    } else {
      localStorage.setItem("GuestCart", "[]");
      console.log("Cart created");
      return [];
    }
  });
  // Always update both React state and localStorage to keep them in sync
  const saveToStorage = (items: cartProduct[]) => {
    setProducts(items);
    localStorage.setItem("GuestCart", JSON.stringify(items));
  };
  //  Add a product to the cart
  const addToCart = (product: cartProduct) => {
    const exists = cartProducts.find((p) => p.key === product.key);
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
  //  Edit quantity of a specific product in the cart
  const editQuantity = (productKey: string, newQuantity: number) => {
    saveToStorage(
      cartProducts.map((p) =>
        p.key === productKey ? { ...p, quantity: newQuantity } : p
      )
    );
  };
  //  Calculate total price of items in the cart
  const getTotalPrice = () =>
    cartProducts.reduce((total, p) => total + p.price * p.quantity, 0);
  //  Clear the entire cart
  const clearCart = () => saveToStorage([]);
  //  Remove a specific product from the cart
  const deleteFromCart = (key: string) =>
    saveToStorage(cartProducts.filter((p) => p.key !== key));
  //  Get total count of items in the cart
  const cartCount = () =>
    cartProducts.reduce((count, p) => count + p.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        addManyToCart,
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
