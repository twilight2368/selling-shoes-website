import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@heroui/react";

import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import useOrder from "../hooks/useOrder";

export default function CartPage() {
  const navigate = useNavigate();

  const { cart, removeFromCart, clearCart } = useCart();
  const { addOrder } = useOrder();

  const [placingOrder, setPlacingOrder] = useState(false);

  const handlePlaceOrder = async () => {
    if (cart.items.length === 0) return;

    try {
      setPlacingOrder(true);

      await addOrder({
        totalItems: cart.totalItems,
        totalPrice: cart.totalPrice,
        status: "pending",
        items: cart.items.map((item) => ({
          shoeId: item.shoeId,
          name: item.name,
          brand: item.brand,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
        })),
      });

      // Clear cart after order is successfully created
      clearCart();

      // Go to order history
      navigate("/order");
    } catch (error) {
      console.error("Failed to place order:", error);
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart items */}
        <div className="lg:col-span-2">
          {cart.items.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white px-6">
              {cart.items.map((item) => (
                <CartItem
                  key={`${item.shoeId}-${item.size}-${item.color}`}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Cart summary */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Items</span>
              <span>{cart.totalItems}</span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold">${cart.totalPrice}</span>
            </div>
          </div>

          <Button
            isDisabled={cart.items.length === 0 || placingOrder}
            onPress={handlePlaceOrder}
            className="mt-6 w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {placingOrder ? "Placing Order..." : "Place Order"}
          </Button>
        </div>
      </div>
    </main>
  );
}
