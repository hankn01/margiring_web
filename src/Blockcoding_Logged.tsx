/* eslint-disable */
import React, {useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';
import Backtest from './Backtest';
import BlockWorkspace_Logged from './BlockWorkspace_Logged';
import CoinInfo from './CoinInfo';
import Header from './Header';
import { generateBlockToCode } from './codeGenerator';
import styles from './css/Blockcoding.module.css';
import LoginModalContext from './contexts/LoginModalContext';
import SignUpModalContext from './contexts/SignUpModalContext';
import BacktestModalContext from './contexts/BacktestModalContext';
import Login from './Login';
import SignUp from './SignUp';
import styled from "styled-components";
import Cookies from 'universal-cookie';
import { useParams } from 'react-router-dom';

const cookiesk = new Cookies();

function NonLoginUserCaption() {
    return (
        <span id={`${styles.NoLoginCaption}`}>
            비로그인 사용자입니다. 작성한 알고리즘이 고객님의 브라우저에 보관되므로 데이터가 유실될 수 있습니다. 저장하려면 로그인하세요.
        </span>
    );
}



function Blockcoding_Logged() {
  

        const [ShowModal, setShowModal] = useState(false);
        const [IsLoggedIn, setIsLoggedIn] = useState(false);
        const [AlgorithmID, setAlgorithmID] = useState();
        const ModalClose = () => {
            setShowModal(false);
        }
        const Params = useParams();

        useEffect(() => {
            if(cookiesk.get('userToken')!==undefined)
            {
                setIsLoggedIn(true);
            }
            else
            {
                setIsLoggedIn(false);
            }
        });
        
        return (
            <>
            <div className={`${styles.MainFrame}`}>
                <Header /> {/* 헤더 부분 */}
                <div id={`${styles.AlgoNameBar}`}>
                    <span id={`${styles.AlgoNameText}`}>
                        나의 투자 전략 알고리즘
                    </span>
                   
                   {//비로그인 사용자용 캡션
                   }
                   {!IsLoggedIn?<NonLoginUserCaption />:null}
                    <button id={`${styles.StrategyTestButton}`} onClick={() => {setShowModal(true)}}>전략 검증하기</button>
                    {/*동작 이상으로 인해 일시적으로 generateCode를 삭제하였습니다. 수정 후 추가 바랍니다.*/}
                    
                    
                </div>
                
                
                <div className={`${styles.MiddleContentDiv}`}>
                    <div className={`${styles.BlockCodingDiv}`}>
                        <BlockWorkspace_Logged id={`${Params.algoid}`}/> {/* Blockly Toolbox 및 블록 부분 */}
                    </div>
                    <div id={`${styles.CoinInfoDiv}`}>
                    <CoinInfo />
                    </div>
                </div>
                
            </div>

            <div className={`${styles.ModalWrapper}`}>
            {ShowModal?<div className={`${styles.BacktestModalInnerWrapper}`}><Backtest ModalClose = {ModalClose}/></div>: null}
            {ShowModal?<div className={`${styles.ModalContainer}`}></div>:null}
            </div>

            <LoginModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.ModalContainer}`}></div>:null}
                    {value.ShowModal?<div className={`${styles.LoginModalWrapper}`}><Login /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </LoginModalContext.Consumer> 
            <SignUpModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.ModalContainer}`}></div>:null}
                    {value.ShowModal?<div className={`${styles.SignUpModalWrapper}`}><SignUp /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </SignUpModalContext.Consumer> 

            
            </>
            
        );
}

export default Blockcoding_Logged;