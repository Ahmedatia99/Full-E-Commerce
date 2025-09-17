import type { productObject } from "./product_Type";

// Users
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  password?: string;
  orders?: Order[];
  wishlist?: number[];
}

export interface Order {
  orderId: number;
  products: productObject[];
  status: "pending" | "shipped" | "delivered" | "cancelled" | "returned";
  totalAmount: number;
  createdAt: string;
}

// 👇 ده للـ Account form بس
export interface UserForm extends User {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
