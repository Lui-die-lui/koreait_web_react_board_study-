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
  padding: 120px 0;

  // padding 때문에 border 끊김 방지
  box-sizing: border-box;
`;

export const box = css`
  width: 400px;
  height: auto;
  border-radius: 15px;
  /* border: 1px solid #dbdbdb; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
`;

export const inputBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > input {
    width: 100%;
  }
`;

export const btnBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #0d6efd;
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  & > button {
    width: 100%;
  }

  &:hover {
    background-color: #105bcc;
  }
`;

export const errorBox = css`
padding-left: 20px;
  & > ul {
    list-style: disc;
    & > li {
      color: #dc3545;
      font-size: 13px;
    }
  }
`;
