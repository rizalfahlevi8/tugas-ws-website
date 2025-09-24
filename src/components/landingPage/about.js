import React from "react";

function About() {
  return (
    <div style={{
      maxWidth: 900,
      margin: "40px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      padding: "40px 32px"
    }}>
      <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>Tentang Kami</h2>
      <p style={{ fontSize: 18, marginBottom: 18 }}>
        Toko Bangunan berdiri sejak 2020 dan telah melayani ribuan pelanggan di seluruh Indonesia.
        Kami berkomitmen menghadirkan produk berkualitas, harga bersaing, dan pelayanan terbaik.
      </p>
      <p style={{ fontSize: 16, color: "#666" }}>
        <b>Alamat:</b> Jl. Pembangunan No. 123, Jakarta<br />
        <b>Email:</b> info@tokobangunan.com<br />
        <b>Telp:</b> (021) 98765432
      </p>
    </div>
  );
}

export default About;