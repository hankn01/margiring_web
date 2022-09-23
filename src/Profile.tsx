import React from 'react';
import styles from './css/Profile.module.css';

function Profile() {
    return (
        <>
        TEST
        <div className={`${styles.ListDiv}`}> {/* 알고리즘 리스트 div */}
            
            <span id={`${styles.MyStrategyCaption}`}>My Strategy</span>
        </div>
        </>
    );
}