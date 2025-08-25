import { css } from "@emotion/react";

export const container = css`
  display: flex;
  /* 세로 정렬 되어있음 */
  flex-direction: column;
  align-items: center;
  /* 가장 위쪽으로 붙음 */
  justify-content: center;
  padding: 40px;

  /* // padding 때문에 border 끊김 방지
  box-sizing: border-box; */
`;

export const box = css`
	width: 360px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const inputBox = css`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
