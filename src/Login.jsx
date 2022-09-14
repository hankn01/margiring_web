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
            <div id={`${styles.BackTestWrapper}`}>
                <h1 id={`${styles.LoginCaption}`}>로그인</h1>
                <LoginModalContext.Consumer>
                        {value=> (
                             <button id={`${styles.CloseButton}`} onClick={() => {value.setShowModal(false)}}>창 닫기 시험용 버튼</button>
                        )}
                    </LoginModalContext.Consumer>
                    <br></br>
                    ID: 
                    <input id={`${styles.IDInput}`}>
                    
                    </input>
                    <br></br>
                    PASSWORD:
                    <input id={`${styles.PasswordInput}`}>
                    </input>
                    <br>
                    </br>
                    <button>
                        로그인
                    </button>
                    <button>
                        회원가입
                    </button>
                    <br>
                    
                    </br>
                    비밀번호 찾기
            </div>


            </>
    );
}

export default Backtest;