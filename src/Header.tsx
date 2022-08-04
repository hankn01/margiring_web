import React from 'react';
import styles from './css/Header.module.css'

class Header extends React.Component {
    render() {
        return (
            <div className={`${styles.Header}`}> {/* 헤더 부분 div(위쪽) */}
                    <div id={`${styles.LogoDiv}`}> {/* 로고 아이콘(이미지) 들어갈 부분 */}
                        <span id={`${styles.LogoText}`}>Logo</span>
                    </div>
                    <div id={`${styles.LogoutDiv}`}> {/* 로그아웃 버튼 div */}
                        <button id={`${styles.LogoutText}`}>logout</button>
                    </div>
            </div>
        );
    }
}

export default Header;