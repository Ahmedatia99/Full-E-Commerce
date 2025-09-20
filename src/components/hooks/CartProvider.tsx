import { type ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import type { cartProduct } from "@/types/product_Type";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setProducts] = useState<cartProduct[]>(() => {
    const savedProducts = localStorage.getItem("GuestCart");
    if (savedProducts) return JSON.parse(savedProducts);
    localStorage.setItem("GuestCart", "[]");
    console.log("Cart created");
    return [];
  });

  const saveToStorage = (items: cartProduct[]) => {
    setProducts(items);
    localStorage.setItem("GuestCart", JSON.stringify(items));
  };

  const addToCart = (product: cartProduct) => {
    const exists = cartProducts.find((p) => p.key === product.key);
    if (exists) editQuantity(product.key, exists.quantity + 1);
    else saveToStorage([...cartProducts, product]);
  };

  const editQuantity = (productKey: string, newQuantity: number) => {
    saveToStorage(
      cartProducts.map((p) =>
        p.key === productKey ? { ...p, quantity: newQuantity } : p
      )
    );
  };

  const getTotalPrice = () =>
    cartProducts.reduce((total, p) => total + p.price * p.quantity, 0);

  const clearCart = () => saveToStorage([]);

  const deleteFromCart = (key: string) =>
    saveToStorage(cartProducts.filter((p) => p.key !== key));

  const cartCount = () => cartProducts.length;

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
