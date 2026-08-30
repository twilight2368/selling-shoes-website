// types/cart.ts

export interface CartItem {
  shoeId: string;
  name: string;
  brand: string;
  price: number;
  size: number;
  color: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// types/order.ts

export interface OrderItem {
  shoeId: string;
  name: string;
  brand: string;
  price: number;
  size: number;
  color: string;
  quantity: number;
  subtotal: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  totalItems: number;
  totalPrice: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}
