import React from 'react';
import styles from './css/Profile.module.css';

function Profile() {
    return (
        <>
        TEST
        <div className={`${styles.ProfileUnitDiv}`}> {/* 알고리즘 리스트 div */}
            <span id={`${styles.ProfileInfoCaption}`}>프로필 정보</span>
            
        </div>
        </>
    );
}

export default Profile;