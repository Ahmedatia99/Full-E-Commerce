import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main_Layout from "./Layout/Main_Layout";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Main_Layout />
    </BrowserRouter>
  </StrictMode>
);
