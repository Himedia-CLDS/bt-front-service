import React from "react";

function MyPage() {
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
          padding: "50px 20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>내 정보</h2>
        <p>
          <strong>이메일:</strong> {userInfo.email}
        </p>
        <p>
          <strong>아이디:</strong> {userInfo.username}
        </p>
        <p>
          <strong>성별:</strong> {userInfo.gender}
        </p>
      </div>
    </div>
  );
}

export default MyPage;
