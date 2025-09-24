import React, { useState } from "react";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";
import ShoppingCart from "./shoppingCart";

// Example: add discount property to some products
const initialProducts = [
  {
    id: 1,
    label: "Semen Tiga Roda",
    name: "Semen 50kg",
    category: "Semen",
    price: 65000,
    stock: 100,
    image: "/images/semen-tigaroda.jpg",
    discount: 0.1, // 10%
    totalSold: 0,
  },
  {
    id: 2,
    label: "Bata Merah",
    name: "Bata Merah",
    category: "Bata",
    price: 800,
    stock: 1000,
    image: "/images/bata-merah.jpg",
    discount: 0.05, // 5%
    totalSold: 0,
  },
  {
    id: 3,
    label: "Cat Dulux",
    name: "Cat Tembok 5kg",
    category: "Cat",
    price: 120000,
    stock: 40,
    image: "/images/cat-dulux.jpg",
    discount: 0.08,
    totalSold: 0,
  },
  {
    id: 4,
    label: "Pipa PVC Rucika",
    name: "Pipa PVC 3 Inch",
    category: "Pipa",
    price: 35000,
    stock: 150,
    image: "/images/pipa-pvc.jpg",
    // no discount
    totalSold: 0,
  },
  {
    id: 5,
    label: "Keramik Roman",
    name: "Keramik Lantai 40x40",
    category: "Keramik",
    price: 60000,
    stock: 200,
    image: "/images/keramik-roman.jpg",
    discount: 0.15,
    totalSold: 0,
  },
];

function ProductCatalog() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  const categories = [...new Set(products.map(p => p.category))];

  const handleFilter = (category) => setSelectedCategory(category);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  // Update: stock berkurang jika add to cart, dan totalSold bertambah
  const handleAddToCart = (product) => {
    setProducts(prevProducts =>
      prevProducts.map(p => {
        if (p.id === product.id && p.stock > 0) {
          return {
            ...p,
            stock: p.stock - 1,
            totalSold: (p.totalSold || 0) + 1,
          };
        }
        return p;
      })
    );

    setCart(prevCart => {
      const item = prevCart.find(i => i.product.id === product.id);
      if (item) {
        // Increase qty
        return prevCart.map(i =>
          i.product.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      // Add new
      return [...prevCart, { product, qty: 1 }];
    });
  };

  // Remove from cart: increase stock and decrease totalSold
  const handleRemoveItem = (productId) => {
    // Find the item in cart
    const itemInCart = cart.find(item => item.product.id === productId);
    if (!itemInCart) return;

    setProducts(prevProducts =>
      prevProducts.map(p => {
        if (p.id === productId) {
          return {
            ...p,
            stock: p.stock + 1,
            totalSold: (p.totalSold || 0) - 1,
          };
        }
        return p;
      })
    );

    setCart(prevCart =>
      prevCart
        .map(item =>
          item.product.id === productId
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // Pass the latest product (with stock/discount) info to cart + ProductCard
  const getProductData = (id) => products.find(p => p.id === id);

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
        margin: "0 auto",
        maxWidth: "900px"
      }}>
        <ShoppingCart
          cart={cart.map(item => ({
            ...item,
            product: getProductData(item.product.id)
          }))}
          onRemoveItem={handleRemoveItem}
        />
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
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;