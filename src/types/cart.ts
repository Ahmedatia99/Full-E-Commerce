export type CartContextType = {
  cartProducts: cartProduct[];
  addToCart: (product: cartProduct) => void;
  deleteFromCart: (key: string) => void;
  editQuantity: (key: string, quantity: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
  cartCount: () => number;
};

export type cartProduct = {
  id: number;
  mainImage: string;
  title: string;
  price: number;
  quantity: number;
  color: string | undefined;
  key: string;
};
