/**@jsxImportSource @emotion/react*/
import * as s from "./Styles";
import { LuLogIn, LuUserRoundPlus } from "react-icons/lu";

function Header() {
  return (
    <div css={s.header}>
      {/* 로고 */}
      <div>BOARD</div>
      <div>
        <ul>
          {/* 메뉴 */}
          <li>게시판</li>
          <li>글쓰기</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <LuLogIn /> 
          </li>
          <li>
            <LuUserRoundPlus />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
