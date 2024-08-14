import React from "react";
import { Link } from "react-router-dom";

function Main() {
  const products = [
    { id: 1, name: "BlueLemon", category: "whiskey", price: 3500 },
    { id: 2, name: "JimBeam", category: "whiskey", price: 53500 },
    { id: 3, name: "Suntory", category: "whiskey", price: 40500 },
    { id: 4, name: "BlueLemon", category: "whiskey", price: 3500 },
    { id: 5, name: "JimBeam", category: "whiskey", price: 53500 },
    { id: 6, name: "Suntory", category: "whiskey", price: 40500 },
    { id: 1, name: "BlueLemon", category: "whiskey", price: 3500 },
    { id: 2, name: "JimBeam", category: "whiskey", price: 53500 },
    { id: 3, name: "Suntory", category: "whiskey", price: 40500 },
    { id: 4, name: "BlueLemon", category: "whiskey", price: 3500 },
    { id: 5, name: "JimBeam", category: "whiskey", price: 53500 },
    { id: 6, name: "Suntory", category: "whiskey", price: 40500 },
    // 추가적인 상품 데이터
  ];

  return (
    <div>
      {products.map((product) => (
        <Link
          to="/product"
          key={product.id}
          style={{
            border: "1px solid #B0C4DE",
            borderRadius: "10px",
            padding: "10px",
            margin: "5px 5px",
            display: "flex",
            alignItems: "center",
            color: "#333",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#333")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
        >
          <img
            src={require("../../assets/images/sinchan.png")}
            // alt={product.name}
            style={{ width: "60px", height: "60px", marginRight: "10px" }}
          />
          <div style={{ textAlign: "left", flexGrow: 1 }}>
            <div style={{ fontWeight: "bold" }}>{product.name}</div>
            <div style={{ color: "#666" }}>{product.category}</div>
            <div style={{ color: "#000" }}>
              {product.price.toLocaleString()} 원
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Main;
