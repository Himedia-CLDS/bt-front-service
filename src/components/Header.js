import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    return null; // 또는 로딩 인디케이터를 표시
  }

  const { user, login, logout } = auth;

  const handleLogin = async () => {
    try {
      await login();
      // 로그인 성공 후 필요한 작업 수행 (예: 홈페이지로 리다이렉트)
      navigate('/');
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      // 오류 처리 (예: 사용자에게 오류 메시지 표시)
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // 로그아웃 후 홈페이지로 이동
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
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
        zIndex: 1000,
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
        {user ? (
          <>
            <Link
              to="/mypage"
              style={{ color: "#555", textDecoration: "none", marginRight: "10px" }}
            >
              {user.attributes?.name || user.username}님
            </Link>
            <span onClick={handleLogout} style={{ cursor: "pointer" }}>
              로그아웃
            </span>
          </>
        ) : (
          <span onClick={handleLogin} style={{ cursor: "pointer" }}>
            로그인
          </span>
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
        <div style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            BottleTalk Main
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* <input
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
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;