import { useQueryClient } from "@tanstack/react-query";

// 로그인 안하면 해당 경로(children)로 진입 불가
function ProtectedRoute({ children }) { 
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  if (principalData === undefined) {
    alert("로그인이 필요합니다.");
    window.location.href = "/auth/signin";
    // home으로 보냄
    return;
  }
  // <Write />
  return children;
}

export default ProtectedRoute;
