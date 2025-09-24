import React from "react";

function Contact() {
  return (
    <div style={{
      maxWidth: 900,
      margin: "40px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      padding: "40px 32px"
    }}>
      <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>Kontak Kami</h2>
      <p style={{ fontSize: 18, marginBottom: 18 }}>
        Silakan hubungi kami untuk pertanyaan, pemesanan, atau saran.
      </p>
      <form>
        <div style={{ marginBottom: 16 }}>
          <label>Nama:</label><br />
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Email:</label><br />
          <input type="email" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Pesan:</label><br />
          <textarea rows={4} style={inputStyle}></textarea>
        </div>
        <button type="submit" style={{
          background: "#007bff",
          color: "#fff",
          padding: "10px 22px",
          border: "none",
          borderRadius: 6,
          fontWeight: 600,
          fontSize: 16,
          cursor: "pointer"
        }}>
          Kirim
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: 6,
  border: "1.5px solid #bfc6d1",
  fontSize: 15,
  marginTop: 5
};

export default Contact;