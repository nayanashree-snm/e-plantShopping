import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function Home() {
  return (
    <>
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Bring Nature Home. Grow Happiness Every Day.</p>

          <Link to="/plants" className="get-started">
            Get Started
          </Link>
        </div>
      </div>

      <AboutUs />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;