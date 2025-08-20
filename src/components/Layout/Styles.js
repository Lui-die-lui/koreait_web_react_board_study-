import { css } from "@emotion/react";

export const layout = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const mainContainer = css`
  width: 60%;
  /* 전체 화면 높이 중에 헤더(60px) 영역 제외한 만큼 높이를 잡아줌 */
  height: calc(100vh - 60px);
  min-height: 800px;
  /* border-right: 1px solid #dbdbdd;
  border-left: 1px solid #dbdbdd; */
  /* box-sizing: border-box; */
`;
