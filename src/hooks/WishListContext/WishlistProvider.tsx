import { useState, type ReactNode } from "react";
import { WishlistContext } from "./WishlistContext";

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  // Try to load saved items from localStorage, otherwise start with an empty array
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const saved = localStorage.getItem("Wishlist");
    if (saved) return JSON.parse(saved);
    localStorage.setItem("Wishlist", "[]");
    return [];
  });
  // Always update both React state and localStorage to keep them in sync
  const saveToStorage = (items: number[]) => {
    setWishlist(items);
    localStorage.setItem("Wishlist", JSON.stringify(items));
  };
  //  Add a product to the wishlist
  const addToWishlist = (id: number) => {
    if (!wishlist.includes(id)) {
      saveToStorage([...wishlist, id]);
    }
  };
  //  Remove a product from the wishlist
  const removeFromWishlist = (id: number) => {
    saveToStorage(wishlist.filter((pid) => pid !== id));
  };
  //  Clear the entire wishlist
  const clearWishlist = () => saveToStorage([]);

  // Provide state + actions to children
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
