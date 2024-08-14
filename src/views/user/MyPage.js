import React from "react";

function MyPage() {
  
  const img_url = process.env.REACT_APP_IMG_BASE_URL;

  const userInfo = {
    email: "user@example.com",
    username: "user123",
    gender: "남성", // 또는 "여성"
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 150px)", // 뷰포트 전체 높이 사용하여 가운데 정렬
        backgroundColor: "#f5f5f5", // 배경색 설정
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px 20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>내 정보</h2>
        <img
          src={`${img_url}/94b88d3c-8031-7080-500a-1463b7606495_d11a8886-3954-44b9-8f25-839a1cce001e.jpg`}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        />
        <p>
          <strong>이메일:</strong> {userInfo.email}
        </p>
      </div>
    </div>
  );
}

export default MyPage;
