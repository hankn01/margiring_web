/* eslint-disable */

import React, {forwareRef, useState} from 'react'; //react 기본 모듈 import
import DatePicker from 'react-datepicker';
import SignUpModalContext from './contexts/SignUpModalContext';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './css/SignUp.module.css';
import "./css/react-datepicker.css";
import axios from 'axios';
//회원 가입 모달 화면이 출력되는 코드입니다.

//SignUp 함수형 컴포넌트
function SignUp() {
    const [BirthDate, setBirthDate] = useState(new Date());
    function FormSubmitHandler() {
        event.preventDefault();
        console.log("SUBMIT BUTTON TEST");
        
    }
    function SignUpApplicate(Email, Name, Nickname, Password, Age) {
        const sendData = {email: Email, name: Name, nickname: Nickname, password: Password, age: Age};
        axios
        .post("http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/users", sendData)
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
        })
        .catch((e)=>console.log('ERR:(',e));
    };
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
                <form onSubmit={FormSubmitHandler}>
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
                <div id={`${styles.DatePickerDiv}`}>
                <DatePicker selected={BirthDate} onChange={date => setBirthDate(date)} popperPlacement="bottom"/>
                </div>
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.NicknameInput}`} placeholder="닉네임">
                </input>
                <br>
                </br>
                <a id={`${styles.TermsCaption}`}>회원가입을 완료하시는 경우 마지링 회원약관에 동의하는 것으로 간주됩니다.</a>
                <button id={`${styles.SignUpButton}`} type="submit">
                        회원가입
                </button>
                </form>
                <SignUpModalContext.Consumer>
                    {value => (
                        <button id={`${styles.CancelButton}`} onClick={() => {value.setShowModal(false)}}>
                        취소
                    </button>
                    )}
                </SignUpModalContext.Consumer>
               
            </div>
        </>
    );
}

export default SignUp;