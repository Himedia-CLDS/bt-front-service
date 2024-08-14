import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed({ isUser }) {
  const img_url = process.env.REACT_APP_IMG_BASE_URL;

  const [selectedFeed, setSelectedFeed] = useState("전체피드");

  const handleSelectChange = (event) => {
    setSelectedFeed(event.target.value);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/create");
  };

  const posts = [
    {
      id: 1,
      email: "user1@example.com",
      image: "",
      description: "첫 번째 게시물 내용.",
      likes: 120,
      isLiked: false, // 내가 좋아요를 누른 게시물
      createdAt: "2024-08-14", // 작성일 추가
    },
    {
      id: 1,
      email: "user1@example.com",
      image: "",
      description: "첫 번째 게시물 내용.",
      likes: 120,
      isLiked: true, // 내가 좋아요를 누른 게시물
      createdAt: "2024-08-14", // 작성일 추가
    },
    {
      id: 1,
      email: "user1@example.com",
      image: "",
      description: "첫 번째 게시물 내용.",
      likes: 120,
      isLiked: true, // 내가 좋아요를 누른 게시물
      createdAt: "2024-08-14", // 작성일 추가
    },
    {
      id: 2,
      email: "user2@example.com",
      image: "/path/to/image2.png",
      description: "두 번째 게시물 내용.",
      likes: 95,
      isLiked: false, // 내가 좋아요를 누르지 않은 게시물
      createdAt: "2024-08-13", // 작성일 추가
    },
    {
      id: 3,
      email: "user3@example.com",
      image: "/path/to/image3.png",
      description: "세 번째 게시물 내용.",
      likes: 78,
      isLiked: false, // 내가 좋아요를 누르지 않은 게시물
      createdAt: "2024-08-12", // 작성일 추가
    },
    // 추가적인 게시물 데이터
  ];

  return (
    <div
      style={{
        padding: "10px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // 요소들을 좌우로 정렬
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <select
          value={selectedFeed}
          onChange={handleSelectChange}
          style={{
            width: "120px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#f8f8f8",
            cursor: "pointer",
          }}
        >
          <option value="전체피드">전체피드</option>
          <option value="내피드">내피드</option>
          <option value="좋아요한피드">좋아요</option>
        </select>
        {isUser && (
          <button
            onClick={handleButtonClick}
            style={{
              padding: "5px 10px",
              backgroundColor: "#B0C4DE",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            피드작성
          </button>
        )}
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            marginBottom: "20px",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{ padding: "10px", display: "flex", alignItems: "center" }}
          >
            <img
              src={`${img_url}/94b88d3c-8031-7080-500a-1463b7606495_d11a8886-3954-44b9-8f25-839a1cce001e.jpg`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
                border: "1px solid #000",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: "bold", color: "#000", margin: 0 }}>
                {post.email}
              </p>
              <p
                style={{
                  color: "#666",
                  margin: 0,
                  fontSize: "12px",
                  textAlign: "left",
                }}
              >
                {post.createdAt}
              </p>
            </div>
          </div>
          <img
            src={`${img_url}/94b88d3c-8031-7080-500a-1463b7606495_d11a8886-3954-44b9-8f25-839a1cce001e.jpg`}
            style={{
              width: "95%",
              height: "auto",
              border: "1px solid #000",
              borderRadius: "0 0 10px 10px",
            }}
          />
          <div style={{ padding: "10px" }}>
            <p style={{ fontSize: "14px", color: "#333" }}>
              {post.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: "bold", color: "#000" }}>
                {post.likes} likes
              </span>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              >
                {isUser && post.isLiked ? "🩵" : "🤍"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
