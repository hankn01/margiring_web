import React from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import AlgorithmCardList from './AlgorithmCardList';
import styles from './css/AlgorithmListDiv.module.css';

function AlgorithmListDiv() {
const cookies = new Cookies();

    return (

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
            
            <span></span>
            {cookies.get('userToken')!==undefined? 
                                
                                <div className={`${styles.ListContentDiv}`}> 
                                <span></span>
                                <AlgorithmCardList />
                                <AlgorithmCardList />
                                <AlgorithmCardList />
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
                                    <Link to ="./block_newalgo">
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
            
            :
            <div className={`${styles.ListContentDiv}`}> 
            <div className={`${styles.CreateStrategyButton_NoLogged}`}>
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
            <div id={`${styles.AlgorithmLostCaption}`}>
            비로그인 사용자입니다. 작성한 알고리즘이 고객님의 브라우저에 보관되므로 데이터가 유실될 수 있습니다. 저장하려면 로그인하세요.
            </div>
            </div>
            }
                
            </div>

    );
}

export default AlgorithmListDiv;