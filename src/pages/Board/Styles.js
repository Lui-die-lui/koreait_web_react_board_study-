import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 750px;
  padding: 40px 200px;
  box-sizing: border-box;
`;

export const listContainer = css`
  width: 100%;
  min-width: 700px;
  height: 752px;
  /* padding: 20px; */
  box-sizing: border-box;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  box-sizing: border-box;

  & > ul {
    border-top: 1px solid #333;
  }

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
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }

    & > div {
      display: flex;
      gap: 20px;
    }
  }
`;

export const paginateContainer = css`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > ul {
    width: 60%;
    display: flex;
    justify-content: space-between;

    & > li {
      padding: 8px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    & > li:hover {
      transform: translateY(-2px);
      color: #333;
    }
  }
`;
