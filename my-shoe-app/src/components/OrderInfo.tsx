import React from "react";
import type { Order } from "../types/order";

interface OrderInfoProps {
  order: Order;
}

export default function OrderInfo({ order }: OrderInfoProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <p className="text-sm text-gray-500">Order ID</p>
          <h2 className="font-semibold text-gray-900">{order.id}</h2>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium capitalize text-gray-700">
          {order.status}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Order date</span>
          <span className="font-medium">
            {new Date(order.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Total items</span>
          <span className="font-medium">{order.totalItems}</span>
        </div>

        <div className="flex justify-between border-t pt-3">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold">${order.totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
