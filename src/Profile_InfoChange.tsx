import React from 'react';
import Header from './Header';
import styles from './css/Profile_InfoChange.module.css';
function Profile_InfoChange() {
    return(
        <>
        <Header />
        <div className={`${styles.ProfileUnitDiv}`}> {/* 알고리즘 리스트 div */}
            <span id={`${styles.ProfileInfoCaption}`}>프로필 정보</span>
        </div>

        
        </>
    );

}