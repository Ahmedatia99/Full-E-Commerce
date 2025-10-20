import { createContext } from "react";

export type WishlistContextType = {
  wishlist: number[]; // productObject[]
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  wishlistCount: number; //  number
};

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);
