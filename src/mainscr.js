import React from 'react';
//import ReactDOM from 'react-dom';
import styles from './css/Mainscr.module.css';

class Mainscr extends React.Component {
    render() {
        return (
            <div className={`${styles.Mainscr}`}>
            <div className={`${styles.Header}`}>
                <div className={`${styles.LogoDiv}`}>
                    <span className={`${styles.LogoText}`}>Logo</span>
                </div>
                <div className={`${styles.LogoutDiv}`}>
                    <button className={`${styles.LogoutText}`}>logout</button>
                </div>
            </div>
            
            <div className={`${styles.ListDiv}`}>
                <div className={`${styles.ListContentDiv}`}>
                    <span className={`${styles.ListContentText}`}>Strategy 1</span>
                    <span className={`${styles.ListValueText}`}>Return : 000% , Volatility: 000%</span>
                    <button className={`${styles.ModifyButton}`}>수정하기</button>
            
                    <button className={`${styles.DeleteButton}`}>삭제하기</button>
                        
                    
                     <button className={`${styles.TestExecuteButton}`}>전략 검증하기</button>
                    
                    
                </div>
                <button className={`${styles.CreateStrategyButton}`}>
                    (+)Create New Strategy
                </button>
                </div>

                    <div className={`${styles.NewsDiv}`}>
                    <span className={`${styles.NewsTitle}`}>News</span>
                    <div className={`${styles.NewsContentDiv}`}></div>
                    </div>
                    <div className={`${styles.RankDiv}`}>
                    <span className={`${styles.RankTitle}`}>대표 암호화폐 순위</span>
                    <div className={`${styles.RankContent}`}>
    
                    </div>
                    </div>


            </div>
        );
    }
}

export default Mainscr;