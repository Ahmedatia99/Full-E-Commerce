import type { cartProduct } from "@/types/product_Type";
import { createContext } from "react";

export type CartContextType = {
  cartProducts: cartProduct[];
  addToCart: (product: cartProduct) => void;
  deleteFromCart: (key: string) => void;
  editQuantity: (key: string, quantity: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
  cartCount: () => number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
