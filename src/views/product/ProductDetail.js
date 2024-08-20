import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { request } from "../../api/Api";
import '../../assets/css/ProductDetail.css';
import { useAuth } from "../../AuthContext";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { product_id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    try {
       const userId = user?.userId || null;
      const data = await request('GET', `/v1/api/products/${product_id}`, userId);
      setProduct(data);
    } catch (error) {
      console.error("상품 상세 정보를 가져오는 데 실패했습니다:", error);
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
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none" }}
          >
             HOME
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          
         
        </div>
      </div>
    <div className="product-detail">
      <h1 className="product-name">{product?.kor_name}</h1>
      <img src={product?.img} alt={product?.kor_name} className="product-image" />
      <div className="product-info">
        <p>{product?.eng_name}</p>
        <p>가격: {product?.price.toLocaleString()} 원</p>
        <p>카테고리: {product?.category}</p>
        <p>국가: {product?.country}</p>
        <p>알콜 도수: {product?.alcohol}</p>
        <p>용량: {product?.capacity}</p>
      </div>
      <h2 className="section-title">맛 노트</h2>
      <div className="tasting-notes">
        <p>아로마: {product?.tasting_notes.aroma}</p>
        <p>맛: {product?.tasting_notes.taste}</p>
        <p>피니시: {product?.tasting_notes.finish}</p>
      </div>
      <h2 className="section-title">상품 설명</h2>
      <p className="product-description">{product?.description}</p>
    </div>
    </>
  );
}

export default ProductDetail;