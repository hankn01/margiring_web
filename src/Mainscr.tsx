import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import styles from './css/Mainscr.module.css';

function Mainscr() {
    return (    
        <div className={`${styles.MainFrame}`}> {/* 스크린 전체 div */}
            <Header /> {/* 헤더 부분 */}
            <div className={`${styles.ListDiv}`}> {/* 알고리즘 리스트 div */}
            <span id={`${styles.MyStrategyCaption}`}>My Strategy</span>
            <span id={`${styles.StrategyCountCaption}`}>0</span>
            
                <div className={`${styles.ListContentDiv}`}> 
                    <span className={`${styles.ListContentText}`}>Strategy 1</span>
                    
                    <button className={`${styles.ModifyButton}`}>수정하기</button>
                    <button className={`${styles.DeleteButton}`}>삭제하기</button>
                    <button className={`${styles.TestExecuteButton}`}>전략 검증하기</button>
                </div>
                <Link to ="./block"> {/* Create New Strategy 버튼을 누르면 블록코딩 화면으로 연결 */}
                    <button className={`${styles.CreateStrategyButton}`}>
                        (+)Create New Strategy
                    </button>
                </Link>
            </div>
            <div id={`${styles.MiddleContentWrap}`}>
                {/* 암호화폐 뉴스 표시 div */}
                    
                    <div className={`${styles.NewsContentDiv}`}></div>
                
                 {/* 암호화폐 순위 표시 div */}
                    <div className={`${styles.RankContent}`}></div>
                
            </div>
        </div>
    );
}

export default Mainscr;