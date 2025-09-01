import { css } from "@emotion/react";

export const input = css`
	width: 100%;
	outline: none;
	border: 1px solid #dbdbdb;
	border-radius: 8px;
	padding: 10px 15px;
	font-size: 16px;
	color: #333;
	box-sizing: border-box;
`;

export const inputBox = css`
display: flex;
flex-direction: column;
gap: 12px;

& > button {
	border: none;
	padding: 8px 15px;
	background-color: aliceblue;
	color: white;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		opacity: 0.8;
	}
}
`