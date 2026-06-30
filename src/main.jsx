import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import BrandsPage from "./BrandsPage.jsx";
import BrandPage from "./BrandPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/accessories/:brand" element={<BrandPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
