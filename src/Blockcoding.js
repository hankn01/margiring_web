import React from 'react';
import BlockWorkspace from './BlockWorkspace';
import styles from './css/Blockcoding.module.css';

class Blockcoding extends React.Component {
    render() {
        return (
            <div className={`${styles.MainFrame}`}>
                <div className={`${styles.Header}`}>
                    <div className={`${styles.LogoDiv}`}>
                        <span className={`${styles.LogoText}`}>Logo</span>
                    </div>
                    <div className={`${styles.LogoutDiv}`}>
                        <button className={`${styles.LogoutText}`}>logout</button>
                    </div>
                </div>



                <span className={`${styles.AlgorithmName}`}>알고리즘명이 들어갈 부분</span>
                
                
                
                <button className={`${styles.StrategyTestButton}`}>전략 검증하기</button>
                
               
                <div className={`${styles.MiddleContentDiv}`}>
                    
                    <div className={`${styles.BlockCodingDiv}`}>
                        <BlockWorkspace />
                        <span className={`${styles.BlockCodingTempMsg}`}>이 화면에서 특정 코인의 한글명을 선택하게 되면 위의 화면과 같이 코인에 대한 증감과 설명이 표시되며, 현재가를 클릭할 경우 차트가 표시되게 설계할 예정입니다.</span>
                    </div>

                    <div className={`${styles.CoinInfoUpperDiv}`}>
                        <div className={`${styles.CoinInfoUpperInnerDiv}`}>
                            <span className={`${styles.CompareYesterday}`}>전일대비</span>
                            <span className={`${styles.CoinImage}`}>(이미지)</span>
                            <span className={`${styles.CoinName}`}>이름</span>
                            <span className={`${styles.CoinID}`}>(영어)</span>
                            <span className={`${styles.PlusMinus}`}>증감여부</span>
                            <span className={`${styles.CurrentPrice}`}>현재가</span>
                            <span className={`${styles.MarketCap}`}>거래대금</span>
                            <div className={`${styles.CoinDescriptionDiv}`}>
                            <span className={`${styles.CoinDescription}`}>코인 설명</span>
                            </div>
                            <div className={`${styles.CoinNewsDiv}`}>
                                <span className={`${styles.CoinNews}`}>코인 뉴스</span>
                            </div>
                            
                            </div>
                    </div>
                    <div className={`${styles.CoinListDiv}`}></div>
                </div>
                </div>
        );

    }

}

export default Blockcoding;