import type { cartProduct } from "./product_Type";

export interface OrderSummaryProps {
  cartProducts: cartProduct[];
  subtotal: number;
  clearCart: () => void;
}
