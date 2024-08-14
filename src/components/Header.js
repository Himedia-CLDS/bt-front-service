import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isUser, onUpdateLoginStatus }) {
  const navigate = useNavigate();

  const handleClick = (path, isLogin) => {
    onUpdateLoginStatus(isLogin); // 상태 업데이트
    navigate(path); // 경로로 이동
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 10px 5px 0px",
          color: "#555",
          fontSize: "14px",
        }}
      >
        {isUser ? (
          <Link
            to="/mypage"
            style={{ color: "#555", textDecoration: "none" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#555")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#555")}
          >
            user님
          </Link>
        ) : (
          <>
            <span
              onClick={() => handleClick("/loginsingup/login", true)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              login
            </span>
            |
            <span
              onClick={() => handleClick("/loginsingup/signup", false)}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              sign up
            </span>
          </>
        )}
      </div>
      <div
        style={{
          backgroundColor: "#B0C4DE",
          height: "55px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            Bottle Talk
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="검색"
            style={{
              padding: "5px 40px 5px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "150px",
              height: "25px",
            }}
          />
          <button
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
    </header>
  );
}

export default Header;
