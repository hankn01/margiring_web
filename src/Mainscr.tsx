/* eslint-disable */

import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import styles from './css/Mainscr.module.css';
import LoginModalContext from './contexts/LoginModalContext';
import Login from './Login';

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
            
                <div className={`${styles.ListContentDiv}`}> 
                    {/*<span className={`${styles.ListContentText}`}>Strategy 1</span>*/}
                    
                    {/*<button className={`${styles.ModifyButton}`}>수정하기</button>
                    <button className={`${styles.DeleteButton}`}>삭제하기</button>
    <button className={`${styles.TestExecuteButton}`}>전략 검증하기</button>*/}
                </div>
                <Link to ="./block"> {/* Create New Strategy 버튼을 누르면 블록코딩 화면으로 연결 */}
                   
                    <div className={`${styles.CreateStrategyButton}`}>
                        Create New Strategy
                    </div>
                    
                </Link>
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
                    {value.ShowModal?<div className={`${styles.ModalWrapper}`}><Login /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </LoginModalContext.Consumer> 

        </>
    );
}

export default Mainscr;