import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/@:username" element={<PostListPage />} />
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="write" element={<WritePage />} />
        <Route path="/@:username/:postId" element={<PostPage />} />
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
