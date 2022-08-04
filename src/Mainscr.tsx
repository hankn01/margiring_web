import React from 'react';
import {Link} from 'react-router-dom';
import styles from './css/Mainscr.module.css';

class Mainscr extends React.Component {
    render() {
        // TODO: 헤더 부분 컴포넌트 분리(8월 2-3주차까지)
        return (
            <div className={`${styles.Mainscr}`}> {/* 스크린 전체 div */}
                <div className={`${styles.Header}`}> {/* 헤더 부분 div(위쪽), 컴포넌트 분리 에정 */}
                    <div className={`${styles.LogoDiv}`}> {/* 로고 아이콘(이미지) 들어갈 부분 */}
                        <span className={`${styles.LogoText}`}>Logo</span>
                    </div>
                    <div className={`${styles.LogoutDiv}`}> {/* 로그아웃 버튼 div */}
                        <button className={`${styles.LogoutText}`}>logout</button>
                    </div>
                </div>

                <div className={`${styles.ListDiv}`}> {/* 알고리즘 리스트 div */}
                    <div className={`${styles.ListContentDiv}`}> 
                        <span className={`${styles.ListContentText}`}>Strategy 1</span>
                        <span className={`${styles.ListValueText}`}>Return : 000% , Volatility: 000%</span>
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
                <div className={`${styles.NewsDiv}`}> {/* 암호화폐 뉴스 표시 div */}
                    <span className={`${styles.NewsTitle}`}>News</span>
                    <div className={`${styles.NewsContentDiv}`}></div>
                </div>
                <div className={`${styles.RankDiv}`}> {/* 암호화폐 순위 표시 div */}
                    <span className={`${styles.RankTitle}`}>대표 암호화폐 순위</span>
                    <div className={`${styles.RankContent}`}></div>
                </div>
            </div>
        );
    }
}

export default Mainscr;