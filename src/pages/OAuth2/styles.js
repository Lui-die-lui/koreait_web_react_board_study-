import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10em;
  gap: 5em;
`;

export const card = css`
  width: 350px;
  height: 250px;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3em;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.2s ease;

  & > h3 {
    margin: 0;
    font-size: 2em;
    color: #333;
  }

  & > p {
    margin: 0;
    font-size: 0.9em;
    word-break: keep-all;
    text-align: center;
    
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;
