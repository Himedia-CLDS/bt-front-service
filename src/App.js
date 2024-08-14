import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignin from "./views/user/LoginSignin";
import MyPage from "./views/user/MyPage";
import Main from "./views/product/Main";
import ProductDetail from "./views/product/ProductDetail";
import Feed from "./views/feed/Feed";
import CreateFeed from "./views/feed/CreateFeed";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const isUser = isLogin; // isLogin 상태를 isUser로 활용

  const handleUpdateLoginStatus = (status) => {
    setIsLogin(status);
  };

  return (
    <Router>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* isUser와 handleUpdateLoginStatus를 Header와 Footer에 전달 */}
        <Header isUser={isUser} onUpdateLoginStatus={handleUpdateLoginStatus} />
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            margin: "0px auto",
            flexGrow: 1,
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/loginsingup/:type"
              element={<LoginSignin isLogin={isLogin} />}
            />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/feed" element={<Feed isUser={isUser} />} />
            <Route path="/create" element={<CreateFeed />} />
          </Routes>
        </div>
        <Footer isUser={isUser} />
      </div>
    </Router>
  );
}

export default App;
