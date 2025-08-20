import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  /* 세로 정렬 되어있음 */
  flex-direction: column;
  align-items: center;
  /* 가장 위쪽으로 붙음 */
  justify-content: flex-start;
  padding: 60px 0;

  // padding 때문에 border 끊김 방지
  box-sizing: border-box;
`;

export const box = css`
  width: 500px;
  height: 400px;
  border-radius: 15px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const inputBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  gap: 10px;


  & > input {
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
  }
`;
