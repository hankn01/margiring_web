/* eslint-disable */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";
import LoginModalContext from "./contexts/LoginModalContext";
import companyLogo from "./static/img/MARGIRING_logo.png";

function Header() {
  return (
    <div className={`${styles.Header}`}>
      {" "}
      {/* 헤더 부분 div(위쪽) */}
      <div id={`${styles.LogoDiv}`}>
        {" "}
        {/* 로고 아이콘(이미지) 들어갈 부분 */}
        <Link to="/">
          <img id={`${styles.MargiringLogo}`} src={companyLogo} />
        </Link>
      </div>
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
    </div>
  );
}

export default Header;
