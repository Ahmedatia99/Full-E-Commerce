import { createContext } from "react";

export type WishlistContextType = {
  wishlist: number[]; // بدل productObject[]
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  wishlistCount: number; // 👈 number عادي
};

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);
