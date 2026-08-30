import React from "react";
import type { CartItem as CartItemType } from "../types/order";
import { FaTrash } from "react-icons/fa";
import shoeImage from "../assets/shoe.png";
interface CartItemProps {
  item: CartItemType;
  onRemove: (shoeId: string, size: number, color: string) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
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

        <div className="mt-2 text-sm text-gray-500">
          Quantity: {item.quantity}
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="font-semibold text-gray-900">
          ${item.price * item.quantity}
        </p>

        <p className="text-sm text-gray-500">${item.price} each</p>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(item.shoeId, item.size, item.color)}
        className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-500"
        aria-label="Remove item"
      >
        <FaTrash />
      </button>
    </div>
  );
}
