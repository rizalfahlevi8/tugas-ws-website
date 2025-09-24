import React from "react";

function Home() {
  return (
    <div style={{
      maxWidth: 900,
      margin: "40px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      padding: "40px 32px"
    }}>
      <h1 style={{ fontSize: 38, fontWeight: 700, marginBottom: 10 }}>Selamat Datang di Toko Bangunan!</h1>
      <p style={{ fontSize: 19, marginBottom: 18 }}>
        Dapatkan berbagai macam bahan bangunan berkualitas dengan harga terjangkau. 
        Temukan produk kebutuhan renovasi rumah, pembangunan gedung, dan lainnya.
      </p>
      <ul style={{ fontSize: 16, color: "#555" }}>
        <li>Produk lengkap: semen, bata, cat, pipa, keramik, dll.</li>
        <li>Layanan ramah & pengiriman cepat</li>
        <li>Diskon menarik setiap hari!</li>
      </ul>
    </div>
  );
}

export default Home;