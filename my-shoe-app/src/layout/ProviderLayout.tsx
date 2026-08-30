import { Outlet } from "react-router";
import Header from "../components/Header";

export default function ProviderLayout() {
  return (
    <>
      <Header />
      <div className="w-full pt-20">
        <Outlet />
      </div>
    </>
  );
}
