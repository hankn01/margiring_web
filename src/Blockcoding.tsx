import React from 'react';
import BlockWorkspace from './BlockWorkspace';
import CoinList from './CoinList';
import Header from './Header';
import styles from './css/Blockcoding.module.css';

function Blockcoding() {
        return (
            <div className={`${styles.MainFrame}`}>
                <Header /> {/* 헤더 부분 */}
                <span className={`${styles.AlgorithmName}`}>알고리즘명이 들어갈 부분</span> 
                <button className={`${styles.StrategyTestButton}`}>전략 검증하기</button>
                <div className={`${styles.MiddleContentDiv}`}>
                    <div className={`${styles.BlockCodingDiv}`}>
                        <BlockWorkspace /> {/* Blockly Toolbox 및 블록 부분 */}
                        <span className={`${styles.BlockCodingTempMsg}`}>이 화면에서 특정 코인의 한글명을 선택하게 되면 위의 화면과 같이 코인에 대한 증감과 설명이 표시되며, 현재가를 클릭할 경우 차트가 표시되게 설계할 예정입니다.</span>
                    </div>
                    <div className={`${styles.CoinInfoUpperDiv}`}> {/* 코인 정보가 표시되는 오른쪽 위 부분 */}
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
                    <CoinList />
                </div>
            </div>
        );
}

export default Blockcoding;