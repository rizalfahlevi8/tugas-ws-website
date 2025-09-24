import React from "react";
import PropTypes from "prop-types";

function ShoppingCart({ cart, onRemoveItem }) {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  // Total harga dan diskon
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, item) =>
      acc +
      (item.product.discount
        ? item.product.price * item.product.discount * item.qty
        : 0),
    0
  );
  const total = subtotal - totalDiscount;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ececec",
        borderRadius: "8px",
        margin: "0 0 30px 0",
        backgroundColor: "#fafbfc",
        minWidth: "330px",
        maxWidth: "100%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
      }}
    >
      <h3 style={{
        fontWeight: 700, fontSize: 20, margin: 0, display: "inline-block"
      }}>
        <span role="img" aria-label="cart">🛒</span> Shopping Cart
      </h3>{" "}
      <span style={{
        color: "#444", fontWeight: 500, fontSize: 16, marginLeft: 4
      }}>
        ({totalItems} item{totalItems !== 1 ? "s" : ""})
      </span>
      <div style={{ marginTop: 10 }}>
        {cart.length === 0 ? (
          <span style={{ color: "#888", fontSize: 15 }}>
            Your cart is empty
          </span>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {cart.map(item => (
              <li key={item.product.id} style={{
                marginBottom: 15, borderBottom: "1px solid #eee", paddingBottom: "8px"
              }}>
                <span style={{ fontWeight: "600" }}>{item.product.name}</span>
                <span style={{ color: "#007bff", fontSize: 13, marginLeft: 6 }}>
                  x{item.qty}
                </span>
                <br />
                <span style={{ color: "#888" }}>
                  Rp {item.product.price.toLocaleString("id-ID")}
                </span>
                {item.product.discount &&
                  <span style={{
                    color: "#e65100",
                    fontWeight: 600,
                    fontSize: 13,
                    marginLeft: 8
                  }}>
                    -{Math.round(item.product.discount * 100)}% OFF
                  </span>
                }
                <br />
                <span style={{ color: "#009e4e", fontWeight: 600 }}>
                  Total dibeli: {item.product.totalSold}
                </span>
                <br />
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  style={{
                    marginTop: "5px",
                    padding: "4px 14px",
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.95em",
                    fontWeight: 500,
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cart.length > 0 && (
        <div style={{ marginTop: 12, borderTop: "1px solid #eee", paddingTop: 12 }}>
          <div style={{ fontSize: 15 }}>
            <b>Subtotal:</b> Rp {subtotal.toLocaleString("id-ID")}
          </div>
          <div style={{ fontSize: 15, color: "#e65100" }}>
            <b>Diskon:</b> -Rp {totalDiscount.toLocaleString("id-ID")}
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#007bff" }}>
            Total: Rp {total.toLocaleString("id-ID")}
          </div>
        </div>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object.isRequired,
      qty: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default ShoppingCart;