import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";

// 이메일 / 비밀번호 변경 / 마이페이지 etc...
function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default AccountRouter;
