import React from 'react';
import styles from './css/SignUpCancelConfirm.module.css';


function SignUpCancelConfirm() {
    return(
        <>
            <div id={`${styles.MessageWrapper}`}>
            회원가입을 취소하시겠습니까?
            <br>
            </br>
            마지링의 다양한 서비스를 즐겨보세요!
            </div>
        </>
    );

}

export default SignUpCancelConfirm;