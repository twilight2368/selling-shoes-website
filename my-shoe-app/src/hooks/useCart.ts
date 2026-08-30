import { useEffect, useState } from "react";
import type { Cart, CartItem } from "../types/order";
import LocalStorage from "../utils/localStorage";

const CART_KEY = "cart";

const defaultCart: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export default function useCart() {
  const [cart, setCart] = useState<Cart>(() =>
    LocalStorage.get<Cart>(CART_KEY, defaultCart),
  );

  useEffect(() => {
    LocalStorage.set<Cart>(CART_KEY, cart);
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((currentCart) => {
      const existingItem = currentCart.items.find(
        (cartItem) =>
          cartItem.shoeId === item.shoeId &&
          cartItem.size === item.size &&
          cartItem.color === item.color,
      );

      let items: CartItem[];

      if (existingItem) {
        items = currentCart.items.map((cartItem) =>
          cartItem.shoeId === item.shoeId &&
          cartItem.size === item.size &&
          cartItem.color === item.color
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem,
        );
      } else {
        items = [...currentCart.items, item];
      }

      return calculateCart(items);
    });
  };

  const removeFromCart = (shoeId: string, size: number, color: string) => {
    setCart((currentCart) => {
      const items = currentCart.items.filter(
        (item) =>
          !(
            item.shoeId === shoeId &&
            item.size === size &&
            item.color === color
          ),
      );

      return calculateCart(items);
    });
  };

  const clearCart = () => {
    setCart(defaultCart);
    LocalStorage.remove(CART_KEY);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

function calculateCart(items: CartItem[]): Cart {
  return {
    items,
    totalItems: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  };
}
