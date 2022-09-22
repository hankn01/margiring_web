/* eslint-disable */

import React, {forwareRef, useState} from 'react'; //react 기본 모듈 import
import DatePicker from 'react-datepicker';
import SignUpModalContext from './contexts/SignUpModalContext';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './css/SignUp.module.css';
import "./css/react-datepicker.css";
//회원 가입 모달 화면이 출력되는 코드입니다.

//SignUp 함수형 컴포넌트
function SignUp() {
    const [BirthDate, setBirthDate] = useState(new Date());
    
    //return하여 출력되는 화면
    return (
        <>
            <div id={`${styles.SignUpWrapper}`}>
                <h1 id={`${styles.SignUpTitleCaption}`}>회원 가입</h1>
                
                <SignUpModalContext.Consumer>
                        {value=> (   
                            <>     
                            
                             <div id={`${styles.CloseButton}`} onClick={() => {value.setShowModal(false)}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 4 16 16M4 20 20 4" stroke="#495262"/>
                                </svg>
                             </div>
                            </>)
                        }
                </SignUpModalContext.Consumer>
                
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.IDInput}`} placeholder="이메일 주소 입력">
                </input>
                <br>
                </br> 
                <input className={`${styles.TextBox}`} type="password" id={`${styles.PasswordInput}`} placeholder="비밀번호 입력" maxLength={25}>
                </input>
                <br>
                </br>
                <input className={`${styles.TextBox}`} type="password" id={`${styles.PasswordRetype}`}placeholder="비밀번호 확인" maxLength={25}></input>
                <input className={`${styles.TextBox}`} id={`${styles.NameInput}`} placeholder="이름" maxLength={7}>
                </input>
                <br>
                </br>
                
                <DatePicker selected={BirthDate} onChange={date => setBirthDate(date)} />
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.NicknameInput}`} placeholder="닉네임">
                </input>
                <br>
                </br>
                <a id={`${styles.TermsCaption}`}>회원가입을 완료하시는 경우 마지링 회원약관에 동의하는 것으로 간주됩니다.</a>
                <button id={`${styles.SignUpButton}`}>
                        회원가입
                </button>
                <button id={`${styles.CancelButton}`}>
                    취소
                </button>
            </div>
        </>
    );
}

export default SignUp;