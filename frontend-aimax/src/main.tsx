import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnePage from "./pages/OnePage";
import "./index.css";

// Definimos rutas principales
const router = createBrowserRouter([
  {
    path: "/",
    element: <OnePage />, // Renderiza todo el one-page
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
