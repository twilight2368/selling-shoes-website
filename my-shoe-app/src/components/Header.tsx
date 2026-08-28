import logo from "../assets/shoe.svg";

export default function Header() {
  return (
    <header className="h-20 border-b bg-white">
      <div className="flex h-full items-center justify-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>
    </header>
  );
}
