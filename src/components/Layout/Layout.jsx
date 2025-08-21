/**@jsxImportSource @emotion/react*/

import Header from "../Header/Header";
import * as s from "./Styles";

// Layout 안에 home이 있음 - header 밑에 home(childeren) - 자식 컴포넌트
function Layout({ children }) {
  return (
    <div css={s.layout}>
      <Header />
      <div css={s.mainContainer}>{children}</div>
    </div>
  );
}

export default Layout;
