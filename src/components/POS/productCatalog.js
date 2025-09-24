import React, { useState } from "react";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";
import { Link } from "react-router-dom";

function ProductCatalog({ products, onAddToCart, getProductData, cartCount }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [...new Set(products.map(p => p.category))];

  const handleFilter = (category) => setSelectedCategory(category);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <h2 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: 32,
        margin: "26px 0 10px 0"
      }}>
        Katalog Bahan Bangunan
      </h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 18
      }}>
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onFilter={handleFilter}
        />
      </div>
      <div style={{
        marginBottom: 20,
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <Link to="/cart">
          <button
            style={{
              padding: "10px 22px",
              background: "#007bff",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
            }}
          >
            🛒 Lihat Keranjang
            {cartCount > 0 && (
              <span style={{
                marginLeft: 8,
                background: "#e65100",
                color: "#fff",
                borderRadius: "50%",
                padding: "3px 8px",
                fontSize: "14px",
                fontWeight: 700,
                verticalAlign: "middle"
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 8,
      }}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;