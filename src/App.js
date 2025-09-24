import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/landingPage/home";
import About from "./components/landingPage/about";
import Contact from "./components/landingPage/contact";
import ProductCatalog from "./components/POS/productCatalog";
import ShoppingCart from "./components/POS/shoppingCart";
import Footer from "./components/footer";

const initialProducts = [
  {
    id: 1,
    label: "Semen Tiga Roda",
    name: "Semen 50kg",
    category: "Semen",
    price: 65000,
    stock: 100,
    image: "/images/semen-tigaroda.jpg",
    discount: 0.1,
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
    discount: 0.05,
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

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  // Cart functions
  const handleAddToCart = (product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
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
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.product.id === product.id);
      if (item) {
        return prevCart.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevCart, { product, qty: 1 }];
    });
  };

  const handleRemoveItem = (productId) => {
    const itemInCart = cart.find((item) => item.product.id === productId);
    if (!itemInCart) return;
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
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
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const getProductData = (id) => products.find((p) => p.id === id);

  // Hitung jumlah item di keranjang
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Router>
       <div
        className="App"
        style={{
          background: "#f6f7fb",
          minHeight: "100vh",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/catalog"
            element={
              <ProductCatalog
                products={products}
                onAddToCart={handleAddToCart}
                getProductData={getProductData}
                cartCount={cartCount}   // ← prop baru
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart.map((item) => ({
                  ...item,
                  product: getProductData(item.product.id),
                }))}
                onRemoveItem={handleRemoveItem}
              />
            }
          />
          
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;