import React from 'react';
import styles from './css/CoinInfo.module.css';

function CoinInfo()
{
    return (
        <div className={`${styles.CoinInfoUpperDiv}`}> {/* 코인 정보가 표시되는 오른쪽 위 부분 */}
            <div className={`${styles.CoinInfoUpperInnerDiv}`}>
                
                <span className={`${styles.CoinImage}`}>(I)</span>
                <div id={`${styles.CoinNameDiv}`}>
                    <span className={`${styles.CoinName}`}>플로우</span>
                    <span className={`${styles.CoinID}`}>FLOW</span>
                </div>
                <div id={`${styles.CoinPMDiv}`}>
                    <span className={`${styles.CompareYesterday}`}>전일대비</span>
                    <div id={`${styles.ComparePercent}`}>-3.74%</div>
                    <span className={`${styles.PlusMinus}`}>-140</span>
                    <span className={`${styles.MarketCap}`}>거래대금</span>
                    <span id={`${styles.MarketCapValue}`}>139,262,025,593 KRW</span>
                </div>
                
                <div id={`${styles.PriceDiv}`}>
                <span className={`${styles.CurrentPrice}`}>313.59</span>
                <span id={`${styles.MoneyCurrency}`}>KRW</span>
                </div>
               
                <div className={`${styles.CoinDescriptionDiv}`}>
                    <span className={`${styles.CoinDescription}`}>플로우는 게임, 디앱(DApp), 디지털 자산들의 개발을 지원하는 레이어-1 블록체인 네트워크입니다. Flow는 플로우 네트워크의 네이티브 토큰(Native token)으로서 네트워크 서비스와 데이터 저장공간 사용에 대한 지불, 검증 노드 보상, 거버넌스 참여 등에 사용됩니다.</span>
                </div>
                <div id={`${styles.DNHR}`}></div>
                <div className={`${styles.CoinNewsDiv}`}>
                    <span className={`${styles.CoinNews}`}>부테린 이더리움 창시자 &quot;가상자산, 실제 쓰일 수 있도록 변해야&quot;</span>
                </div>



            </div>
            <div id={`${styles.CoinListSearchDiv}`}></div>
        </div>
    );
}

export default CoinInfo;