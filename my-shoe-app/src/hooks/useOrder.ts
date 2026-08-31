import { useCallback, useState } from "react";
import type { Order } from "../types/order";
import { createOrder, getOrders } from "../api/orderService";

type CreateOrderData = {
  totalItems: number;
  totalPrice: number;
  status: Order["order_status"];
  items: Omit<Order["items"][number], "id">[];
};

export default function useOrder() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  }, []);

  const addOrder = useCallback(async (order: CreateOrderData) => {
    try {
      setLoading(true);
      setError(null);

      const newOrder = await createOrder(order);

      setOrders((currentOrders) => [...currentOrders, newOrder]);

      return newOrder;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create order");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    orders,
    loading,
    error,
    fetchOrders,
    addOrder,
  };
}
