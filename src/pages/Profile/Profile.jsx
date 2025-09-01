/** @jsxImportSource @emotion/react */
import * as s from "./Styles";
import profileImg from "../../assets/tNWE6ahM8L07uaj81q4HjFD6qrY.png";
import MyBoard from "../../components/MyBoard/MyBoard";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ChangePassword from "../../components/changePassword/changePassword";
import { useEffect, useState } from "react";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Profile() {
  const [tab, setTab] = useState("myBoard");
  const [tabChild, setTabChild] = useState(1);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { isLoggedIn, principal } = usePrincipalState();

  const tabClickHandler = (path) => {
    setTabChild(path === "myboard" ? 1 : 2);
    navigate(`${pathname}?tab=${path}`);
  };

  useEffect(() => {
    setTab(searchParams.get("tab"));
  }, [pathname, searchParams]);

  return (
    <div css={s.container}>
      <div css={s.profileContainer}>
        <div css={s.profileHeader}>
          <div css={s.profileImgBox}>
            <div>
              <img src={profileImg} alt="" />
            </div>
          </div>
          <div css={s.profileInfoBox}>
            <h3>{principal?.username}</h3>
            <div>
              <p>{principal?.email}</p>
              {/* 인증한 유저 인증하기 버튼 없애줌 */}
              {principal?.authorities[0].authority === "ROLE_TEMPORARY" ? (
                <button>인증하기</button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div css={s.profileBox}>
          <div css={s.profileTab(tabChild)}>
            <ul>
              <li onClick={() => tabClickHandler("myboard")}>내 게시물</li>
              <li onClick={() => tabClickHandler("changepassword")}>
                비밀번호 변경
              </li>
            </ul>
          </div>
          <div css={s.profileMain}>
            {tab === "myboard" || tab === null ? (
              <MyBoard />
            ) : (
              <ChangePassword />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
