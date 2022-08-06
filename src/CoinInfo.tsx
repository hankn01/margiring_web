import React from 'react';
import styles from './css/CoinInfo.module.css';

function CoinInfo()
{
    return (
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
    );
}

export default CoinInfo;