import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#007bff",
      padding: "12px 0",
      color: "#fff",
      fontWeight: 600,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>
          Toko Bangunan
        </div>
        <div>
          <Link to="/" style={navLink}>Home</Link>
          <Link to="/about" style={navLink}>About</Link>
          <Link to="/contact" style={navLink}>Contact</Link>
          <Link to="/catalog" style={navLink}>Catalog</Link>
        </div>
      </div>
    </nav>
  );
}

const navLink = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 14px",
  fontSize: 17,
  letterSpacing: 1,
  padding: "6px 10px",
  borderRadius: 5,
  transition: "background 0.2s",
};

export default Navbar;