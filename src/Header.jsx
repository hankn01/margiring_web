/* eslint-disable */

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";
import LoginModalContext from "./contexts/LoginModalContext";
import companyLogo from "./static/img/MARGIRING_logo.png";
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
      <img id={`${styles.MargiringLogo}`} src={companyLogo} />
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
