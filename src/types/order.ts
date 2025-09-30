import type { cartProduct } from "./cart";

export interface OrderSummaryProps {
  cartProducts: cartProduct[];
  subtotal: number;
  clearCart: () => void;
}

export interface PlaceOrderButtonProps {
  cartProducts: any[];
  subtotal: number;
  paymentMethod: string;
  setSuccessOpen: (open: boolean) => void;
}
