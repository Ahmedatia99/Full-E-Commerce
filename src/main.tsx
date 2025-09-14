import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main_Layout from "./Layout/Main_Layout";

import "./index.css";
import ProductsDetails from "./pages/productsDetails";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/productsCard" element={<Main_Layout />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
