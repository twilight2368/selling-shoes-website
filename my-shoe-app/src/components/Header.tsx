import logo from "../assets/shoe.svg";
import { Button } from "@heroui/react";
import { FaShoppingCart, FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-20 fixed z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-full justify-between items-center px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-14 m-6 w-auto hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />

        <div className=" flex items-center gap-4">
          {/* <Input
            aria-label="Shoe Name"
            variant="secondary"
            className="w-80"
            placeholder="Enter shoe name"
          /> */}
          <Button
            isIconOnly
            variant="ghost"
            type="button"
            aria-label="Shopping cart"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <FaShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            isIconOnly
            variant="ghost"
            type="button"
            aria-label="Shopping order"
            onClick={() => {
              navigate("/order");
            }}
          >
            <FaHistory className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
