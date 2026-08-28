//import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import ProviderLayout from "./layout/ProviderLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProviderLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
