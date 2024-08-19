import React from "react";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";

function MyPage() {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <>
     <div
        style={{
          backgroundColor: "#B0C4DE",
          height: "70px",
          width: "600px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          boxSizing: "border-box",
          position: "fixed",
          marginTop: "-70px"
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none" }}
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
          
        </div>
      </div> 
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 150px)",
        backgroundColor: "#f5f5f5",
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
          <strong>이름:</strong> {user.attributes.name || user.username}
        </p>
        <p>
          <strong>이메일:</strong> {user.attributes.email}
        </p>
        <p>
          <strong>ID:</strong> {user.userId}
        </p>
        {user?.attributes?.picture && (
          <img 
            src={user?.attributes?.picture} 
            alt="프로필 사진" 
            style={{width: 96, height: 96, borderRadius: '50%', marginTop: '20px'}} 
          />
        )}
      </div>
    </div>
    </>
  );
}

export default MyPage;