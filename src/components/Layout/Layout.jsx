/**@jsxImportSource @emotion/react*/

import { useQuery } from "@tanstack/react-query";
import Header from "../Header/Header";
import * as s from "./Styles";
import { getPrincipalRequest } from "../../apis/auth/authApis";

// Layout 안에 home이 있음 - header 밑에 home(childeren) - 자식 컴포넌트
function Layout({ children }) {
  const accessToken = localStorage.getItem("accessToken")
  const { data, isLoading } = useQuery({
    queryKey: ["getPrincipal"],
    queryFn: getPrincipalRequest,
    refetch: 1, 
    enabled: !!accessToken, // 암시적으로 boolean값으로 변경
  });
  return (
    <div css={s.layout}>
      {/* 요청 갔다오는 중 */}
      {isLoading > (<><p>로딩중...</p></>)}
      <Header />
      <div css={s.mainContainer}>{children}</div>
    </div>
  );
}

export default Layout;



