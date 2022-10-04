import React from 'react';
import Header from './Header';
import styles from './css/Profile.module.css';

function Profile() {
    return (
        <>
        <Header />
        <div className={`${styles.ProfileUnitDiv}`}> {/* 알고리즘 리스트 div */}
            <span id={`${styles.ProfileInfoCaption}`}>프로필 정보</span>
        </div>

        <div id={`${styles.ProfileMenuWrapper}`}>
           
        <div className={`${styles.ProfileMenuButtonDiv}`}>
            회원정보 수정
        </div>
        <div className={`${styles.ProfileMenuButtonDiv}`}>
            현재 운용중 알고리즘
        </div>
        <div className={`${styles.ProfileMenuButtonDiv}`} onClick={()=>{window.alert("현재 준비중인 기능입니다. 거래 기능은 추후 제공 예정입니다.");}}>
            API 등록/수정
        </div>
        </div>
        
        </>
    );
}

export default Profile;