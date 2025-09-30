import React from "react";
import type { cartProduct } from "../types/product_Type";

export type CartContextType = {
  cartProducts: cartProduct[];
  addToCart: (product: cartProduct) => void;
  addManyToCart: (products: cartProduct[]) => void;
  deleteFromCart: (key: string) => void;
  editQuantity: (key: string, quantity: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
  cartCount: () => number;
};


export const CartContext = React.createContext<CartContextType | undefined>(
  undefined
);
