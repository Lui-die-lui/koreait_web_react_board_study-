import { create } from "zustand";

// 외부 사용 가능
export const usePrincipalState = create((set, get) => ({
  // get - 현재 상태를 가져올때 사용
  isLoggedIn: false,
  principal: null,

  // 바꿔줄 수 있는 set 함수를 커스텀해서 로직을 만듦
  login: (userData) => set({ isLoggedIn: true, principal: userData }),
  // 로그인이 되었고, 유저 데이터가 있음
  logout: () => {
    localStorage.removeItem("accessToken");
    // 로그아웃 상태 set
    set({ isLoggedIn: false, principal: null });
    window.location.href = "/auth/signin";
  },
}));

/*
전역 상태 관리
Zustand

전역 상태관리를 사용하는 이유
1. 컴포넌트 간의 상태 공유
2. Props Drilling 방지
  - 코드 복잡성 증가 
  - 유지보수 어려워짐
  - 불필요한 렌더링을 유발 
3. 관심사 분리
4. 상태 예측 가능성
*/
