import type { Order, OrderItem } from "../types/order";

const API_URL = import.meta.env.VITE_API_URL + "/api/orders";

export async function getOrders(): Promise<Order[]> {
  const response = await fetch(`${API_URL}?populate=items`);

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  const result = await response.json();

  return result.data;
}

export async function getOrderById(id: string): Promise<Order | null> {
  const response = await fetch(`${API_URL}/${id}?populate=items`);

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }

    throw new Error("Failed to fetch order");
  }

  const result = await response.json();

  return result.data;
}

interface CreateOrderData {
  totalItems: number;
  totalPrice: number;
  status: Order["status"];
  items: Omit<OrderItem, "id">[];
}

export async function createOrder(order: CreateOrderData): Promise<Order> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        totalItems: order.totalItems,
        totalPrice: order.totalPrice,
        status: order.status,
        items: order.items,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  const result = await response.json();

  return result.data;
}
