/**@jsxImportSource @emotion/react*/
import { useNavigate } from "react-router-dom";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./Styles";
import { useState } from "react";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //??

  const signupOnClickHandler = () => {
    navigate("/auth/signup");
  };

  const signinOnclikHandler = () => {
    console.log(username, password);
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("아이디 또는 비밀번호를 입력 해주세요.");
      return;
    } else {
      // 로그인 API요청 보내기
    }
  };

  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type={"text"}
            placeholder={"아이디"}
            state={username}
            setState={setUsername}
          />
          <AuthInput
            type={"password"}
            placeholder={"비밀번호"}
            state={password}
            setState={setPassword}
          />
        </div>
        <div css={s.signinBtnBox}>
          <button
            style={{ backgroundColor: "rgb(196, 196, 196)" }}
            onClick={signupOnClickHandler}
          >
            회원가입
          </button>
          <button
            style={{ backgroundColor: "#3383fc" }}
            onClick={signinOnclikHandler}
          >
            로그인
          </button>
        </div>
        <div css={s.oauthBtnBox}>
          {/* 소셜 로그인 버튼 */}
          <button style={{ backgroundColor: "rgb(143, 143, 143)" }}>
            구글로 로그인
          </button>
          <button style={{ backgroundColor: "#03c75a" }}>
            네이버로 로그인
          </button>
          <button style={{ backgroundColor: "#f0d805" }}>
            카카오로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
