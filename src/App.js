import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/landingPage/home";
import About from "./components/landingPage/about";
import Contact from "./components/landingPage/contact";
import ProductCatalog from "./components/POS/productCatalog";

function App() {
  return (
    <Router>
      <div className="App" style={{
        background: "#f6f7fb",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Arial, sans-serif"
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<ProductCatalog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;