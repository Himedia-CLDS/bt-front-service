import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateFeed() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const handleCancel = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleSubmit = () => {
    // 작성 로직을 여기에 추가
    console.log("피드 작성 완료");
    navigate("/"); // 작성 후 메인 페이지로 이동
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>피드 작성</h2>
        <textarea
          placeholder="내용을 입력하세요..."
          style={{
            width: "100%",
            height: "150px",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            resize: "none", // 크기 조정 막기
          }}
        ></textarea>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="미리보기"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            ) : (
              <span style={{ fontSize: "12px", color: "#aaa" }}>
                이미지 미리보기
              </span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              fontSize: "14px",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            onClick={handleCancel}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f5f5f5",
              color: "#555",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#B0C4DE",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            작성
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateFeed;
