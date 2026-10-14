import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CoffeeProvider } from "./context/CoffeeContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </StrictMode>
);