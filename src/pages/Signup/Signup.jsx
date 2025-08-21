/**@jsxImportSource @emotion/react*/
import * as s from "./Styles";
import AuthInput from "../../components/AuthInput/AuthInput";
import { useEffect, useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errorMesssage, setErrorMessage] = useState({});

  const signupOnClickHandler = () => {
    if (
      username.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0 ||
      email.trim().length
    ) {
      alert("모든 항목을 입력해 주세요");
      return;
    }
  };

  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // useEffect(() => {
  //   const newErrorMessage = {};
  //   if (password.length > 0) {
  //     const passwordRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  //     if (!passwordRegex.test(password)) {
  //       newErrorMessage.password =
  //         "비밀번호는 최소 8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야합니다.";
  //     }
  //   }

  //   if (email.length > 0) {
  //     const emailRegex =
  //       /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/;
  //     if (!emailRegex.test(email)) {
  //       newErrorMessage.email = "이메일 형식에 맞게 입력해주세요.";
  //     }
  //   }

  //   setErrorMessage(newErrorMessage);
  // }, [password, email]);

  return (
    <div css={s.container}>
      <h1>회원가입</h1>
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
          <AuthInput
            type={"password"}
            placeholder={"비밀번호 확인"}
            state={confirmPassword}
            setState={setConfirmPassword}
          />
          <AuthInput
            type={"email"}
            placeholder={"이메일"}
            state={email}
            setState={setEmail}
          />
        </div>
        {/* <div>{Object.keys(errorMesssage).length ! == 0 ? (


        )}</div> */}
        <div>
          <button css={s.btnBox} onClick={signupOnClickHandler}>
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
