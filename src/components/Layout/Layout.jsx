/**@jsxImportSource @emotion/react*/

import { useQuery } from "@tanstack/react-query";
import Header from "../Header/Header";
import * as s from "./Styles";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import { useEffect } from "react";
import { usePrincipalState } from "../../store/usePrincipalStore";

// Layout 안에 home이 있음 - header 밑에 home(childeren) - 자식 컴포넌트
function Layout({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { isLoggedIn, principal, login, logout } = usePrincipalState();
  const { data, isLoading } = useQuery({
    queryKey: ["getPrincipal"],
    queryFn: getPrincipalRequest,
    refetch: 1,
    enabled: !!accessToken,
  });

  useEffect(() => {
    console.log(data);
    if (data?.data.status === "success") {
      login(data?.data.data);
    }
  }, [data, login]);

  useEffect(() => {
    console.log(isLoggedIn, principal);
  }, [isLoggedIn, principal]);

  return (
    <div css={s.layout}>
      {isLoading ? (
        <>
          <p>로딩중...</p>
        </>
      ) : (
        <>
          <Header />
          <div css={s.mainContainer}>{children}</div>
        </>
      )}
    </div>
  );
}

export default Layout;
