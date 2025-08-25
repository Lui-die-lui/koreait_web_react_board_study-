/**@jsxImportSource @emotion/react*/
import { Link, useNavigate } from "react-router-dom";
import * as s from "./Styles";
import { LuLogIn, LuLogOut, LuUserRoundPlus } from "react-icons/lu";
import { useQueryClient } from "@tanstack/react-query";
import { IoMdPerson } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const onClickLogout = () => {
    localStorage.removeItem("accessToken")
    window.location.href = "/auth/signin";
  }

  return (
    <div css={s.header}>
      {/* 로고 */}
      <div onClick={() => onClickNavHandler("/")}>BOARD</div>
      <div>
        <ul>
          {/* 메뉴 */}
          <li>
            {" "}
            <Link to={"/board"}>게시판</Link>
          </li>
          {/* router 주소로 여기로 가라 - 대신 header는 그대로 있음- 자식 컴포넌트만 바뀜 */}
          <li>
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </div>
      <div>
        {principalData ? (
          <ul>
            <li css={s.headerIcon}>
              <IoMdPerson />
            </li>
            <li css={s.headerIcon} onClick={onClickLogout}>
              <LuLogOut />
            </li>
          </ul>
        ) : (
          <ul>
            <li
              css={s.headerIcon}
              // 오잉... 회원가입 / 로그인 페이지 안됨 나중에 볼 것
              onClick={() => onClickNavHandler("/auth/signin")}
            >
              <LuLogIn />
            </li>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signup")}
            >
              <LuUserRoundPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
