import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  // li 갯수 많아지면 스크롤 자동 생성
  overflow: auto;

  & > ul > li {
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
    color: #333;
    font-size: 14px;

    & > div {
      display: flex;
      gap: 20px;
    }
  }
`;

