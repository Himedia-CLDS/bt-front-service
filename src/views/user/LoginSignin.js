import React from "react";
import { useParams } from "react-router-dom";

function LoginSignup({ isLogin }) {
  const { type } = useParams(); // 경로 파라미터에서 type 값을 가져옵니다.

  const handleGoogleAuth = () => {
    if (isLogin) {
      console.log("Google login clicked");
      // 구글 로그인 로직을 여기에 추가하세요.
    } else {
      console.log("Google signup clicked");
      // 구글 회원가입 로직을 여기에 추가하세요.
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "100px auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {isLogin ? "로그인" : "회원가입"}
      </h2>
      <button
        onClick={handleGoogleAuth}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        구글 계정으로 {isLogin ? "로그인" : "회원가입"}
      </button>
    </div>
  );
}

export default LoginSignup;
