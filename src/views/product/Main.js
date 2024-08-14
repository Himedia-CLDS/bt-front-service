import React from "react";
import { Link } from "react-router-dom";

function Main() {
  const img_url = process.env.REACT_APP_IMG_BASE_URL
  const products = [
    {
      id: 1,
      name: "BlueLemon",
      category: "whiskey",
      price: 3500,
      image:
        "https://kihyatr7690.cdn-nhncommerce.com/data/goods/23/02/05/1000000301/1000000301_detail_012.png",
    },
    {
      id: 2,
      name: "JimBeam",
      category: "whiskey",
      price: 53500,
      image:
        "https://godomall.speedycdn.net/0aecb35d97566a7153dd46c4ee5a1641/goods/1000000152/image/detail/1000000152_detail_021.png",
    },
    {
      id: 3,
      name: "Suntory",
      category: "whiskey",
      price: 40500,
      image:
        "https://kihyatr7690.cdn-nhncommerce.com/data/goods/23/02/05/1000000301/1000000301_detail_012.png",
    },
    { id: 4, name: "BlueLemon", category: "whiskey", price: 3500 },
    {
      id: 5,
      name: "JimBeam",
      category: "whiskey",
      price: 53500,
      image:
        "https://kihyatr7690.cdn-nhncommerce.com/data/goods/23/02/05/1000000301/1000000301_detail_012.png",
    },
    {
      id: 6,
      name: "Suntory",
      category: "whiskey",
      price: 40500,
      image:
        "https://godomall.speedycdn.net/0aecb35d97566a7153dd46c4ee5a1641/goods/1000000152/image/detail/1000000152_detail_021.png",
    },
    {
      id: 1,
      name: "BlueLemon",
      category: "whiskey",
      price: 3500,
      image:
        "https://godomall.speedycdn.net/0aecb35d97566a7153dd46c4ee5a1641/goods/1000000152/image/detail/1000000152_detail_021.png",
    },
    { id: 2, name: "JimBeam", category: "whiskey", price: 53500 },
    { id: 3, name: "Suntory", category: "whiskey", price: 40500 },
    { id: 4, name: "BlueLemon", category: "whiskey", price: 3500 },
    {
      id: 5,
      name: "JimBeam",
      category: "whiskey",
      price: 53500,
      image:
        "https://godomall.speedycdn.net/0aecb35d97566a7153dd46c4ee5a1641/goods/1000000152/image/detail/1000000152_detail_021.png",
    },
    { id: 6, name: "Suntory", category: "whiskey", price: 40500 },
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
            src={product.image}
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
