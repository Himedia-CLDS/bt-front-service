import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/setting.css";

function Footer({ isUser }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        width: "100%",
        maxWidth: "600px",
        boxSizing: "border-box",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)", // Keep footer centered on all screens
        backgroundColor: "#fff",
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <div
        style={{
          backgroundColor: "#B0C4DE",
          padding: "10px",
          width: "100%",
          maxWidth: "600px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px 10px 0 0",
          height: "60px",
        }}
      >
        <Link
          to="/"
          style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
        >
          메인
        </Link>
        <Link
          to="/feed"
          style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
        >
          피드
        </Link>
        {isUser ? (
          <Link
            to="/mypage"
            style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
          >
            내정보
          </Link>
        ) : (
          <Link
            to="/loginsingup/login"
            style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
          >
            로그인
          </Link>
        )}
      </div>
      <button
        onClick={scrollToTop}
        style={{
          width: "45px",
          height: "45px",
          position: "fixed", // fixed position to keep it on the same spot
          bottom: "70px", // Distance from the bottom of the viewport
          right: "10px", // Distance from the right side of the viewport
          backgroundColor: "#B0C4DE",
          border: "none",
          borderRadius: "23px",
          cursor: "pointer",
          fontSize: "30px",
          color: "#fff",
          zIndex: 1000, // Ensure it stays above other content
        }}
      >
        ▲
      </button>
    </footer>
  );
}

export default Footer;
