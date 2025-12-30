import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import ProductPage from "./landing_page/products/ProductPage";
import NotFoundPage from "./landing_page/NotFoundPage";

// ✅ DASHBOARD IMPORT (CHANGE PATH IF NEEDED)
import Dashboard from "./dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : window.location.replace("/login");
};

root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* ✅ PROTECTED DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
