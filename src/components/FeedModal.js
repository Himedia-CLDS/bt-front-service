function FeedModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p style={{ marginBottom: "20px" }}>삭제하시겠습니까?</p>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "3% 0% 0% 0%" }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "6px 12px",
              margin: "10px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "6px 12px",
              margin: "10px",
              backgroundColor: "#B0C4DE",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "4% 0%",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
};

export default FeedModal;
