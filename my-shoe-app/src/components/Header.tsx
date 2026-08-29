import logo from "../assets/shoe.svg";
import { Button } from "@heroui/react";
import { FaShoppingCart, FaHistory, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="h-20 border-b bg-white">
      <div className="mx-auto flex h-full justify-between items-center px-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 m-6 w-auto" />

        <div className=" flex items-center gap-4">
          <Button
            isIconOnly
            variant="ghost"
            type="button"
            aria-label="Shopping cart"
          >
            <FaSearch className="h-5 w-5" />
          </Button>
          <Button
            isIconOnly
            variant="ghost"
            type="button"
            aria-label="Shopping cart"
          >
            <FaShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            isIconOnly
            variant="ghost"
            type="button"
            aria-label="Shopping cart"
          >
            <FaHistory className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
