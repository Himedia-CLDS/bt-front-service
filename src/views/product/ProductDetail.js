import React, { useRef } from "react";

function ProductDetail() {
  const img_url = process.env.REACT_APP_IMG_BASE_URL;
  const usageRef = useRef(null);
  const ratingRef = useRef(null);
  const notesRef = useRef(null);

  const handleTabClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        padding: "20px",
        paddingTop: "40px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={`${img_url}/img_name`}
          style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        />
        <div
          style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px" }}
        >
          BlueLemon
        </div>
        <div style={{ color: "#777", fontSize: "18px" }}>whiskey</div>
        <div style={{ fontSize: "20px", marginTop: "10px" }}>3,500 원</div>
      </div>

      <div style={{}}>
        <div
          ref={usageRef}
          style={{
            marginBottom: "40px",
            borderTop: "1px solid #B0C4DE",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              color: "#000",
            }}
          >
            응용방법
          </h3>
          <p style={{ color: "#555", lineHeight: "1.5" }}>
            달달한 케이크랑 같이 드시면 좋아요~ 상품과 같이 보내드린 음용법을
            참고하세요.
          </p>
        </div>
        <div
          ref={ratingRef}
          style={{
            marginBottom: "40px",
            border: "1px solid #B0C4DE",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            별점
          </h3>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "24px",
                marginBottom: "5px",
                color: "#B0C4DE",
              }}
            >
              ★ ★ ★ ★ ★
            </div>
            <div style={{ fontSize: "18px", color: "#777" }}>5.0 (3)</div>
          </div>
        </div>
        <div ref={notesRef}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              borderBottom: "1px solid #B0C4DE",
              paddingBottom: "10px",
              color: "#000",
            }}
          >
            테이스팅 노트
          </h3>
          {[
            {
              id: 1,
              username: "유저1",
              date: "2024-08-13",
              rating: 5,
              comment: "달달하면서도 상쾌한 맛이었어요.",
            },
            {
              id: 2,
              username: "유저2",
              date: "2024-08-12",
              rating: 4,
              comment: "생각보다 강하지 않은 맛이에요.",
            },
            {
              id: 3,
              username: "유저3",
              date: "2024-08-11",
              rating: 5,
              comment: "다시 사고 싶어요.",
            },
          ].map((note) => (
            <div
              key={note.id}
              style={{
                marginBottom: "15px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {note.username}{" "}
                <span style={{ color: "#777", fontSize: "12px" }}>
                  ({note.date})
                </span>
              </div>
              <div style={{ color: "#B0C4DE", fontSize: "14px" }}>
                ★ ★ ★ ★ ★ {note.rating}
              </div>
              <p style={{ fontSize: "14px", color: "#555" }}>{note.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
