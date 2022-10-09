/* eslint-disable */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateDummyCode } from "./codeGenerator";
import styles from "./css/Login.module.css";
import Loading from "./Loading";
import LoginModalContext from "./contexts/LoginModalContext";
import SignUpModalContext from "./contexts/SignUpModalContext";

function Login() {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  const [InputEmail, setInputEmail] = useState("");
  const [InputPassword, setInputPassword] = useState("");

  function LoginSend() {
    console.log("로그인 버튼을 눌렀습니다");
    if (InputEmail !== "" && InputPassword !== "") {
      //axios, 서버로 로그인 정보를 전송합니다
      axios
        .post(
          "http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/users/login",
          { email: InputEmail, password: InputPassword }
        )
        .then(function (response) {
          console.log(response);
        });
    }
  }

  const [TestCode, setTestCode] = useState("");
  const [ReceivedData, setReceivedData] = useState({
    cumulative_yield: 0,
    annualized_yield: 0,
    annualized_volatility: 0,
    sharpe_ratio: "백테스트 전",
    MDD: 0,
  });
  const [LoadingState, setLoadingState] = useState(false);
  const [BacktestComplete, setBacktestComplete] = useState(false);
  useEffect(() => {
    //setReceivedData({"cumulative_yield": "백테스트 전", "annualized_yield": "백테스트 전", "annualized_volatility": "백테스트 전", "sharpe_ratio": "백테스트 전", "MDD": "백테스트 전"});
  });

  return (
    <>
      <div id={`${styles.LoginWrapper}`}>
        <h1 id={`${styles.LoginCaption}`}>로그인</h1>
        <LoginModalContext.Consumer>
          {(value) => (
            <>
              <div
                id={`${styles.CloseButton}`}
                onClick={() => {
                  value.setShowModal(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4 4 16 16M4 20 20 4"
                    stroke="#495262"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </>
          )}
        </LoginModalContext.Consumer>
        <br></br>

        <input id={`${styles.IDInput}`} placeholder="이메일 입력"></input>
        <br></br>

        <input
          type="password"
          id={`${styles.PasswordInput}`}
          placeholder="비밀번호 입력"
        ></input>
        <br></br>
        <div id={`${styles.FindPassword}`}>비밀번호 찾기</div>
        <button id={`${styles.SignInButton}`} onClick={LoginSend}>
          로그인
        </button>
        <br></br>

        {/*
                            <LoginModalContext.Consumer>
                        {value=> (
                             <button id={`${styles.LogoutText}`} onClick={() => {value.setShowModal(true)}}>로그인</button>
                        )}
                    </LoginModalContext.Consumer>
                            */}
        <SignUpModalContext.Consumer>
          {(value) => (
            <div id={`${styles.SignUpCaption}`}>
              <a>마지링이 처음이신가요?</a>{" "}
              <a
                id={`${styles.SignUpLink}`}
                onClick={() => {
                  value.setShowModal(true);
                }}
              >
                회원가입
              </a>
            </div>
          )}
        </SignUpModalContext.Consumer>
      </div>
    </>
  );
}

export default Login;
