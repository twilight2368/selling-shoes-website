import React, { useState } from "react";
import type { Order } from "../types/order";
import OrderItem from "../components/OrderItem";

const orders: Order[] = [
  {
    id: "order-001",
    items: [
      {
        shoeId: "shoe-001",
        name: "Air Runner",
        brand: "Nike",
        price: 120,
        size: 42,
        color: "Black",
        quantity: 1,
        subtotal: 120,
      },
      {
        shoeId: "shoe-002",
        name: "Classic Leather",
        brand: "Adidas",
        price: 100,
        size: 41,
        color: "White",
        quantity: 2,
        subtotal: 200,
      },
    ],
    totalItems: 3,
    totalPrice: 320,
    status: "delivered",
    createdAt: "2026-08-25T10:30:00Z",
  },
  {
    id: "order-002",
    items: [
      {
        shoeId: "shoe-003",
        name: "Street Pro",
        brand: "Puma",
        price: 85,
        size: 40,
        color: "Red",
        quantity: 1,
        subtotal: 85,
      },
    ],
    totalItems: 1,
    totalPrice: 85,
    status: "shipped",
    createdAt: "2026-08-28T14:20:00Z",
  },
];

export default function HistoryPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order>(orders[0]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Order History</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Order list */}
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="border-b p-5">
            <h2 className="font-semibold text-gray-900">Your Orders</h2>
          </div>

          <div>
            {orders.map((order) => (
              <button
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className={`w-full border-b p-5 text-left transition ${
                  selectedOrder.id === order.id
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{order.id}</span>

                  <span className="text-sm capitalize text-gray-500">
                    {order.status}
                  </span>
                </div>

                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>

                  <span className="font-medium text-gray-900">
                    ${order.totalPrice}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected order */}
        <div className="rounded-xl border border-gray-200 bg-white lg:col-span-2">
          <div className="flex items-center justify-between border-b p-5">
            <div>
              <p className="text-sm text-gray-500">Order</p>
              <h2 className="font-semibold text-gray-900">
                {selectedOrder.id}
              </h2>
            </div>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm capitalize text-gray-700">
              {selectedOrder.status}
            </span>
          </div>

          <div className="px-5">
            {selectedOrder.items.map((item) => (
              <OrderItem
                key={`${item.shoeId}-${item.size}-${item.color}`}
                item={item}
              />
            ))}
          </div>

          <div className="border-t p-5">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Total items</span>
              <span>{selectedOrder.totalItems}</span>
            </div>

            <div className="mt-2 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold">
                ${selectedOrder.totalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
