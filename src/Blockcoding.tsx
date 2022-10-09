/* eslint-disable */
import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
import Backtest from './Backtest';
import BlockWorkspace from './BlockWorkspace';
import CoinInfo from './CoinInfo';
import Header from './Header';
import { generateBlockToCode } from './codeGenerator';
import styles from './css/Blockcoding.module.css';
import LoginModalContext from './contexts/LoginModalContext';
import SignUpModalContext from './contexts/SignUpModalContext';
import Login from './Login';
import SignUp from './SignUp';


function Blockcoding() {
        const [ShowModal, setShowModal] = useState(false);
        const ModalClose = () => {
            setShowModal(false);
        }
        return (
            <>
            <div className={`${styles.MainFrame}`}>
                <Header /> {/* 헤더 부분 */}
                <div id={`${styles.AlgoNameBar}`}>
                    <span id={`${styles.AlgoNameText}`}>
                        나의 투자 전략 알고리즘
                    </span>
                    <span id={`${styles.NoLoginCaption}`}>
                        비로그인 사용자입니다. 작성한 알고리즘이 고객님의 브라우저에 보관되므로 데이터가 유실될 수 있습니다. 저장하려면 로그인하세요.
                    </span>
                    <button id={`${styles.StrategyTestButton}`} onClick={() => {generateBlockToCode(); setShowModal(true)}}>전략 검증하기</button>
                    
                    
                </div>
                
                
                <div className={`${styles.MiddleContentDiv}`}>
                    <div className={`${styles.BlockCodingDiv}`}>
                        <BlockWorkspace /> {/* Blockly Toolbox 및 블록 부분 */}
                    </div>
                    <div id={`${styles.CoinInfoDiv}`}>
                    <CoinInfo />
                    </div>
                </div>
                
            </div>
            <div className={`${styles.ModalWrapper}`}>
            {ShowModal?<Backtest ModalClose = {ModalClose}/> : null}
            </div>
            
            <LoginModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.LoginModalWrapper}`}><Login /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </LoginModalContext.Consumer> 
            <SignUpModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.SignUpModalWrapper}`}><SignUp /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </SignUpModalContext.Consumer> 
            </>
            
        );
}

export default Blockcoding;