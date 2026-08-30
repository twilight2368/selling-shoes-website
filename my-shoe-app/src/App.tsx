//import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import ProviderLayout from "./layout/ProviderLayout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProviderLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<HistoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
