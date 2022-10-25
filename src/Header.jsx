/* eslint-disable */

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";
import LoginModalContext from "./contexts/LoginModalContext";
import Cookies from "universal-cookie";
import { useState } from "react";
const cookies = new Cookies();

function LogoutExecute() {
  cookies.remove("userToken");
}

function LoginButton() {
  return (
    <LoginModalContext.Consumer>
      {(value) => (
        <button
          id={`${styles.LogoutText}`}
          onClick={() => {
            value.setShowModal(true);
          }}
        >
          로그인
        </button>
      )}
    </LoginModalContext.Consumer>
  );
}

function LogoutButton() {
  return (
    <button
      id={`${styles.LogoutText}`}
      onClick={() => {
        LogoutExecute();
        location.reload();
      }}
    >
      로그아웃
    </button>
  );
}

function HeaderTitle() {
  return (
    <div id={`${styles.LogoDiv}`}>
      {" "}
      {/* 로고 아이콘(이미지) 들어갈 부분 */}
      <Link to="/">
        <svg
          width="88"
          height="24"
          viewBox="0 0 88 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2.5" y="3.5" width="16" height="3" rx="1.5" fill="#52FF78" />
          <rect
            x="8.5"
            y="10.5"
            width="13"
            height="3"
            rx="1.5"
            fill="#FBD888"
          />
          <rect
            x="2.5"
            y="17.5"
            width="16"
            height="3"
            rx="1.5"
            fill="#3586FF"
          />
          <path
            d="M40.656 18.817v-3.035h-7.344v-3.829h6.648V9.082h-6.648V5.3h7.344V2.265H30v16.552h10.656zM46.78 12.21c0-1.33.816-2.381 2.208-2.381 1.536 0 2.184 1.004 2.184 2.288v6.7h3.192V11.58c0-2.522-1.344-4.553-4.272-4.553-1.272 0-2.688.537-3.408 1.728V7.33h-3.096v11.486h3.192V12.21zM61.54 3.899h-2.88v1.61c0 1.028-.576 1.822-1.824 1.822h-.6v2.755h2.136v5.346c0 2.218 1.44 3.549 3.744 3.549.936 0 1.512-.164 1.8-.28v-2.569c-.168.047-.6.094-.984.094-.912 0-1.392-.327-1.392-1.331v-4.81h2.376V7.332H61.54V3.899zM73.663 7.284c-.24-.023-.48-.047-.744-.047-1.008 0-2.64.28-3.36 1.798V7.331h-3.096v11.486h3.192v-5.253c0-2.474 1.416-3.245 3.048-3.245.288 0 .6.023.96.093V7.284zM80.504 23.346 87.92 7.331h-3.408l-2.904 6.724-3.144-6.724h-3.576l5.016 10.039-2.784 5.976h3.384z"
            fill="#fff"
          />
        </svg>
      </Link>
    </div>
  );
}
function Header() {
  useEffect(() => {
    /*
    if (cookies.get("userToken") !== undefined) {
      location.reload();
    }
    */
    //location.reload();
  });
  
  if (cookies.get("userToken") === undefined) {
    return (
      <div className={`${styles.Header}`}>
        {" "}
        {/* 헤더 부분 div(위쪽) */}
        <HeaderTitle />
        <LoginButton />
      </div>
    );
  } else {
    return (
      <div className={`${styles.Header}`}>
        {" "}
        {/* 헤더 부분 div(위쪽) */}
        <HeaderTitle />
        <LogoutButton />
      </div>
    );
  }
}

export default Header;
