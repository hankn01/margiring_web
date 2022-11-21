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
    const [Email, setEmail] = useState();
    const [Name, setName] = useState();
    const [Password, setPassword] = useState();
    const [Passcheck, setPasscheck] = useState();
    const [Nickname, setNickname] = useState();
      

    function IsAdult(DOB) {
        const DateOf18YearsAgo = new Date();
        DateOf18YearsAgo.setFullYear(DateOf18YearsAgo.getFullYear() - 18);
        return DOB <= DateOf18YearsAgo;
    }

    const EmailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(Email))
        {
            console.log("이메일 형식 잘못됨");
        }
        
        

    }

    const NameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const PasswordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        if(Password!==Passcheck)
        {
            console.log("비밀번호 불일치");
        }
    }

    const PasscheckHandler = (e) => {
        e.preventDefault();
        setPasscheck(e.target.value);
        if(Password!==Passcheck)
        {
            console.log("비밀번호 불일치");
        }
    }

    const NicknameHandler = (e) => {
        e.preventDefault();
        setNickname(e.target.value);
    }

    function FormSubmitHandler() {
        event.preventDefault();
        console.log("SUBMIT BUTTON TEST");
        if(Email!==null&&Password!==null&&Passcheck!==null&&Name!==null&&Nickname!==null)
        {
            if(IsAdult(BirthDate)==true)
            {
                const sendData = {email: Email, name: Name, nickname: Nickname, password: Password, birth: "1990-01-01"};
            console.log(sendData);
            axios
            .post("http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/users", sendData)
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
            })
            .catch((e)=>console.log('ERR:(',e));
            } else{
                console.log("만 18세 미만 가입 금지");
            }
        }
        else {
            console.log("미입력된 정보 존재");
        }

       
        
    }
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
                <input className={`${styles.TextBox}`} id={`${styles.IDInput}`} placeholder="이메일 주소 입력" type="email" value={Email} onChange={EmailHandler}>
                </input>
                <br>
                </br> 
                <input className={`${styles.TextBox}`} type="password" id={`${styles.PasswordInput}`} placeholder="비밀번호 입력" maxLength={25} value={Password} onChange={PasswordHandler}>
                </input>
                <br>
                </br>
                <input className={`${styles.TextBox}`} type="password" id={`${styles.PasswordRetype}`}placeholder="비밀번호 확인" maxLength={25} value={Passcheck} onChange={PasscheckHandler}></input>
                <input className={`${styles.TextBox}`} id={`${styles.NameInput}`} placeholder="이름" maxLength={7} value={Name} onChange={NameHandler}>
                </input>
                <br>
                </br>
                <div id={`${styles.DOBCaption}`}>생년월일</div>
                <div id={`${styles.DatePickerDiv}`}>
                <DatePicker selected={BirthDate} onChange={date => setBirthDate(date)} popperPlacement="bottom"/>
                </div>
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.NicknameInput}`} placeholder="닉네임" value={Nickname} onChange={NicknameHandler}>
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