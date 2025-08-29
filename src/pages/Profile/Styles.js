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

export const profileContainer = css`
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

export const profileHeader = css`
  width: 100%;
  height: 200px;
  background-color: chocolate;
`;

export const profileMain = css`
  width: 100%;
  height: 500px;
  background-color: cyan;
`;

export const profileImgBox = css`
  width: 250px;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #bdbdbd;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 100%;
    }

    & > div {
      display: flex;
      gap: 15px;
    }
  }
`;

export const prifileInfoBox = css`
  width: calc(100%-250px);
  height: 100%;
  background-color: darkcyan;
  padding: 30px 40px;
  box-sizing: border-box;
  color: #333;
  & > h3 {
    font-size: 24px;
  }

  & > p {
    margin: 0;
  }

  & > button {
    border: none;
    padding: 3px 5px;
    font-size: 11px;
    font-weight: 600;
    border-radius: 4px;
    /* background-color: #0d; */
  }
`;
