import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "../../api/Api";
import { useAuth } from "../../AuthContext";

function Main() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const { user } = useAuth();
  const [topKeywords, setTopKeywords] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchTopKeywords();
    fetchTopProducts(); 
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await request('GET', '/v1/api/products');
      setProducts(data);
    } catch (error) {
      console.error("상품 정보를 가져오는 데 실패했습니다:", error);
    }
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const searchProducts = async (search) => {
    try {
      const userId = user?.userId || null;
      const data = await request('GET', `/v1/api/products?search=${search}`, userId);
      setProducts(data);
    } catch (error) {
      console.error("상품 정보를 가져오는 데 실패했습니다:", error);
    }
  };

  const fetchTopKeywords = async () => {
    try {
      const userId = user?.userId || null;
      const data = await request('GET', '/v1/api/products/top5Keywords', userId);
      setTopKeywords(data);
    } catch (error) {
      console.error("인기 검색어 정보를 가져오는 데 실패했습니다:", error);
    }
  };

  const fetchTopProducts = async () => {
    try {
      const userId = user?.userId || null;
      const data = await request('GET', '/v1/api/products/top5Products', userId);
      setTopProducts(data);
    } catch (error) {
      console.error("인기 상품 정보를 가져오는 데 실패했습니다:", error);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#B0C4DE",
          height: "70px",
          width: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          boxSizing: "border-box",
          position: "relative",
          marginTop: "-70px"
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
             HOME
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="검색"
            name="search"
            style={{
              padding: "5px 10px 5px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "150px",
              height: "25px",
            }}
          />
          <button
            onClick={() => searchProducts(search)}
            style={{
              position: "absolute",
              right: "5px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            🔍
          </button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#B0C4DE",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          맞춤 TOP5
        </button>
      </div>

      {isModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "20px",
            width: "80%",
            maxWidth: "600px",
            maxHeight: "80%",
            overflowY: "auto",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <h3 style={{ color: "#333", borderBottom: "2px solid #B0C4DE", paddingBottom: "10px", marginBottom: "15px" }}>
                  맞춤 인기검색어 TOP5
                </h3>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  {topKeywords.map((keyword, index) => (
                    <li
                      key={index}
                      style={{
                        margin: "10px 0",
                        padding: "10px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "5px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: "bold", color: "#007BFF", marginRight: "10px" }}>
                        {index + 1}.
                      </span>
                      <span style={{ color: "#333" }}>{keyword.keyword}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: 1, marginLeft: "10px" }}>
                <h3 style={{ color: "#333", borderBottom: "2px solid #B0C4DE", paddingBottom: "10px", marginBottom: "15px" }}>
                  맞춤 인기상품 TOP 5
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {topProducts.map((product, index) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                        padding: "15px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        color: "#333",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      onClick={() => setIsModalOpen(false)}
                    >
                      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#007BFF", marginRight: "15px" }}>
                        {index + 1}
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{  color: "#333" }}>{product.kor_name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                backgroundColor: "#B0C4DE",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                display: "block",
                margin: "20px auto 0",
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <div>
        {products.map((product) => (
          <Link
            to={`/product/${product.product_id}`}
            key={product.product_id}
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
              src={product.img}
              alt={product.kor_name}
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <div style={{ textAlign: "left", flexGrow: 1 }}>
              <div style={{ fontWeight: "bold" }}>{product.kor_name}</div>
              <div style={{ color: "#666" }}>{product.category}</div>
              <div style={{ color: "#000" }}>
                {product.price.toLocaleString()} 원
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Main;