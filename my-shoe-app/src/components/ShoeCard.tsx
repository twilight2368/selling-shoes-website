import shoeImage from "../assets/shoe.png";
import type { Shoe } from "../types/shoe";
import { Button } from "@heroui/react";
import { useState } from "react";
import useCart from "../hooks/useCart";
import { toast } from "react-hot-toast";

interface ShoeCardProps {
  shoe: Shoe;
}

export default function ShoeCard({ shoe }: ShoeCardProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const handleAddToCart = () => {
    if (selectedSize === null) {
      toast.error("Select size!!!");
      return;
    }

    addToCart({
      shoeId: shoe.id,
      name: shoe.name,
      brand: shoe.brand,
      price: shoe.price,
      size: selectedSize,
      color: shoe.color,
      quantity: 1,
    });

    toast.success("Added to cart");
  };

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Shoe image */}
      <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gray-100">
        <img
          src={shoeImage}
          alt={shoe.name}
          className="h-full w-full object-contain p-6"
        />
      </div>

      {/* Brand */}
      <p className="text-sm font-medium text-gray-500">{shoe.brand}</p>

      {/* Name */}
      <h2 className="mt-1 text-lg font-semibold text-gray-900">{shoe.name}</h2>

      {/* Category + Color */}
      <div className="mt-2 flex gap-2 text-sm text-gray-500">
        <span>{shoe.category}</span>
        <span>•</span>
        <span>{shoe.color}</span>
      </div>

      {/* Price */}
      <p className="mt-4 text-xl font-bold text-gray-900">${shoe.price}</p>

      {/* Sizes */}
      <div className="mt-3">
        <p className="mb-2 text-sm font-medium text-gray-700">Select Size</p>

        <div className="flex flex-wrap gap-2">
          {shoe.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "primary" : "ghost"}
              onPress={() => setSelectedSize(size)}
              className={
                selectedSize === size
                  ? "rounded-md bg-black px-3 py-1.5 text-sm text-white"
                  : "rounded-md border border-gray-300 px-3 py-1.5 text-sm"
              }
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Add to cart */}
      <Button
        onPress={handleAddToCart}
        className="mt-5 w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Add to Cart
      </Button>
    </div>
  );
}
