import React from "react";
import shoeImage from "../assets/shoe.png";
import type { OrderItem as OrderItemType } from "../types/order";

interface OrderItemProps {
  item: OrderItemType;
}

export default function OrderItem({ item }: OrderItemProps) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      {/* Image */}
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <img
          src={shoeImage}
          alt={item.name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Product info */}
      <div className="flex-1">
        <p className="text-sm text-gray-500">{item.brand}</p>

        <h3 className="font-semibold text-gray-900">{item.name}</h3>

        <div className="mt-1 text-sm text-gray-500">
          Size: {item.size} · Color: {item.color}
        </div>

        <p className="mt-2 text-sm text-gray-500">Quantity: {item.quantity}</p>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-sm text-gray-500">${item.price} each</p>
      </div>
    </div>
  );
}
