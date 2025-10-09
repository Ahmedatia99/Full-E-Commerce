import type { CartContextType } from "@/types/cart";

import React from "react";

export const CartContext = React.createContext<CartContextType | undefined>(
  undefined
);
