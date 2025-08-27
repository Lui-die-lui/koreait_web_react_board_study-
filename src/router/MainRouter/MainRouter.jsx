import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Write from "../../pages/Write/Write";
import Board from "../../pages/Board/Board";
import AuthRouter from "../AuthRouter/AuthRouter";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/board"
          element={
            <ProtectedRoute>
              <Board />
            </ProtectedRoute>
          }
        />
        <Route
          path="/write"
          element={
            // protected route 로 감싸서 write를 로그인이 필요한 페이지로 만듦
            <ProtectedRoute>
              <Write />
            </ProtectedRoute>
          }
        />
        {/* 중첩 라우터 */}
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
}

export default MainRouter;
