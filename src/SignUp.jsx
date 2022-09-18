import React from 'react'; //react 기본 모듈 import
import SignUpModalContext from './contexts/SignUpModalContext';
import styles from './css/SignUp.module.css';

//회원 가입 모달 화면이 출력되는 코드입니다.

//SignUp 함수형 컴포넌트
function SignUp() {

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
                <input className={`${styles.TextBox}`} id={`${styles.IDInput}`}>
                </input>
                <a className={`${styles.Caption}`} id={`${styles.IDInputCaption}`}>메일 주소 입력</a>
                <br>
                </br> 
                <input className={`${styles.TextBox}`} type="password" id={`${styles.PasswordInput}`}>
                </input>
                <a className={`${styles.Caption}`} id={`${styles.PasswordInputCaption}`}>비밀번호 입력</a>
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.NameInput}`}>
                </input>
                <a className={`${styles.Caption}`} id={`${styles.NameInputCaption}`}>이름 입력</a>
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.AgeInput}`}>
                </input>
                <a className={`${styles.Caption}`} id={`${styles.AgeInputCaption}`}>나이 입력</a>
                <br>
                </br>
                <input className={`${styles.TextBox}`} id={`${styles.NicknameInput}`}>
                </input>
                <a className={`${styles.Caption}`} id={`${styles.NicknameInputCaption}`}>닉네임 입력</a>
            </div>
        </>
    );
}

export default SignUp;