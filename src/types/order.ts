import type { cartProduct } from "./product_Type";

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
