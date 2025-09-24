import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "18px 0",
        textAlign: "center",
        fontSize: "16px",
        marginTop: "40px",
        letterSpacing: ".04em"
      }}
    >
      &copy; {new Date().getFullYear()} Toko Bangunan. All Rights Reserved.
    </footer>
  );
}

export default Footer;