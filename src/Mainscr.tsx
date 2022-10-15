/* eslint-disable */

import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import styles from './css/Mainscr.module.css';
import LoginModalContext from './contexts/LoginModalContext';
import SignUpModalContext from './contexts/SignUpModalContext';
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';

function Mainscr() {
    useEffect(() => {


    });

    
    return (
        <>   
        
        <div className={`${styles.MainFrame}`}> {/* 스크린 전체 div */}
            
            <Header /> {/* 헤더 부분 */}
            
            <div className={`${styles.ListDiv}`}> {/* 알고리즘 리스트 div */}
            
            <span id={`${styles.MyStrategyCaption}`}>My Strategy</span>
            {//<span id={`${styles.StrategyCountCaption}`}>0</span>
            }
                 <div id={`${styles.StrategyContentMenu}`}>
                <div id={`${styles.AllStrategyButton}`}>
                    전체
                </div>
                <div id={`${styles.BeforeBacktestButton}`}>
                    검증전
                </div>
                <div id={`${styles.AfterBacktestButton}`}>
                    검증완료
                </div>
            </div>
                <div className={`${styles.ListContentDiv}`}> 
               
                <div className={`${styles.StrategyOddElement}`}>
                    <span className={`${styles.OuterDot}`}></span>
                    <span className={`${styles.Dot}`}></span>
                    <a className={`${styles.StrategyStatus}`}>검증전</a>
                    <a className={`${styles.StrategyElementText}`}>Strategy 1</a>
                    <a className={`${styles.StrategyElementRemove}`}>삭제하기</a>
                    <button className={`${styles.StrategyCheckButton}`}>전략 검증하기</button>
                </div>
                <div className={`${styles.StrategyEvenElement}`}>
                <span className={`${styles.OuterDot}`}></span>
                <span className={`${styles.Dot}`}></span>
                <a className={`${styles.StrategyStatus}`}>검증전</a>
                <a className={`${styles.StrategyElementText}`}>Strategy 2</a>
                <a className={`${styles.StrategyElementRemove}`}>삭제하기</a>
                    <button className={`${styles.StrategyCheckButton}`}>전략 검증하기</button>

                </div>
                <div className={`${styles.StrategyOddElement}`}>
                <span className={`${styles.OuterDot}`}></span>
                <span className={`${styles.Dot}`}></span>
                <a className={`${styles.StrategyStatus}`}>검증전</a>
                <a className={`${styles.StrategyElementText}`}>Strategy 3</a>
                <a className={`${styles.StrategyElementRemove}`}>삭제하기</a>
                    <button className={`${styles.StrategyCheckButton}`}>전략 검증하기</button>

                </div>
                 {/* Create New Strategy 버튼을 누르면 블록코딩 화면으로 연결 */}
                   
                    <div className={`${styles.CreateStrategyButton}`}>
                    <Link to ="./block">
                        <div id={`${styles.CreateStrategyInner}`}>
                        <span id={`${styles.StrategyAddIcon}`}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.3 8h1.384V4.684H8V3.299H4.684V0H3.299v3.3H0v1.384h3.3V8z" fill="#fff"/>
                        </svg>
                        </span>
                        Create New Strategy
                        </div>
                        </ Link>
                    </div>
                    
                
                    {/*<span className={`${styles.ListContentText}`}>Strategy 1</span>*/}
                    
                    {/*<button className={`${styles.ModifyButton}`}>수정하기</button>
                    <button className={`${styles.DeleteButton}`}>삭제하기</button>
    <button className={`${styles.TestExecuteButton}`}>전략 검증하기</button>*/}
                </div>
                
            </div>
            <div id={`${styles.MiddleContentWrap}`}>
            

                {/* 암호화폐 뉴스 표시 div */}
                    
                    <div className={`${styles.NewsContentDiv}`}>
                    <iframe src="https://www.coindesk.com/" width="100%" height="850" scrolling="yes" frameBorder="0"></iframe>
                    
                    </div>
                
                 {/* 암호화폐 순위 표시 div */}
                    <div className={`${styles.RankContent}`}>
                    <iframe src="https://cryptorank.io/" width="100%" height="850" scrolling="yes" frameBorder="0"></iframe>
                    </div>
                
            </div>
        </div>
        <LoginModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.ModalContainer}`}></div>:null}
                    {value.ShowModal?<div className={`${styles.ModalWrapper}`}><Login /></div>:null}
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
        <Footer />
        </>
    );
}

export default Mainscr;