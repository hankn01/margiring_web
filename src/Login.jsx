/* eslint-disable */


import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {generateDummyCode} from './codeGenerator';
import styles from './css/Login.module.css';
import Loading from './Loading';
import LoginModalContext from './contexts/LoginModalContext';

function Backtest({ModalClose}: any) {
    const [TestCode, setTestCode] = useState("");
    const [ReceivedData, setReceivedData] = useState({"cumulative_yield": 0, "annualized_yield": 0, "annualized_volatility": 0, "sharpe_ratio": "백테스트 전", "MDD": 0});
    const [LoadingState, setLoadingState] = useState(false);
    const [BacktestComplete, setBacktestComplete] = useState(false);
    
    useEffect(() => {
       
        //setReceivedData({"cumulative_yield": "백테스트 전", "annualized_yield": "백테스트 전", "annualized_volatility": "백테스트 전", "sharpe_ratio": "백테스트 전", "MDD": "백테스트 전"});
    });

    return (
        
            <>
            <div id={`${styles.LoginWrapper}`}>
                <h1 id={`${styles.LoginCaption}`}>로그인</h1>
                <LoginModalContext.Consumer>
                        {value=> (   
                            <>     
                            
                             <div id={`${styles.CloseButton}`} onClick={() => {value.setShowModal(false)}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 4 16 16M4 20 20 4" stroke="#495262" stroke-width="1.5"/>
                                </svg>
                             </div>
                            </>)
                        }
                    </LoginModalContext.Consumer>
                    <br></br>
                    
                    <input id={`${styles.IDInput}`}>
                    
                    </input>
                    <br></br>
                   
                    <input type="password" id={`${styles.PasswordInput}`}>
                    </input>
                    <br>
                    </br>
                    <div id={`${styles.FindPassword}`}>비밀번호 찾기</div>
                    <button id={`${styles.SignInButton}`}>
                        로그인
                    </button>
                    <br>
                    
                    </br>
                    <div id={`${styles.SignUpCaption}`}><a>마지링이 처음이신가요?</a> <a>회원가입</a></div>
                    
            </div>


            </>
    );
}

export default Backtest;