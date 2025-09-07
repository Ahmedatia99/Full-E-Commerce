import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main_Layout from "./Layout/Main_Layout";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main_Layout />
  </StrictMode>
);
