/* eslint-disable */
// @ts-nocheck

import React, {useEffect, useState} from 'react';
import CoinTab from './CoinTab';
import styles from './css/CoinInfo.module.css';
import axios from 'axios';


function CoinInfo()
{
    const [FLOWPrice, setFLOWPrice] = useState(0);
    const [FLOWChange, setFLOWChange] = useState([]);
    const [FLOWAccTradePrice, setFLOWAccTradePrice] = useState(0);
    useEffect(() => {
        axios("https://api.upbit.com/v1/ticker?markets=KRW-FLOW").then((FLOWres)=>{ //FLOW 가격 로드 및 저장
       
        console.log(FLOWres.data[0].trade_price);
        if(FLOWres.data!==null)
        {
       setFLOWPrice(FLOWres.data[0].trade_price);
        }

        
        let PlusMinus = '+';
        if(FLOWres.data[0].change==="RISE")
        {
           PlusMinus = '+';
        }
        else if(FLOWres.data[0].change==="FALL")
        {
           PlusMinus = '-';
        }
        else
        {
           PlusMinus = '';
        }
        setFLOWChange([PlusMinus, FLOWres.data[0].change_price, FLOWres.data[0].change_rate]);
        setFLOWAccTradePrice(FLOWres.data[0].acc_trade_price);
 


       })
       .catch((err)=> {
        console.error("Fetch Error", err);
        setError(err);
       })


    

    }, []);
    return (
        <div className={`${styles.CoinInfoUpperDiv}`}> {/* 코인 정보가 표시되는 오른쪽 위 부분 */}
            <div className={`${styles.CoinInfoUpperInnerDiv}`}>
                
                <span className={`${styles.CoinImage}`}>
                    <img src="https://cryptologos.cc/logos/flow-flow-logo.png?v=023" width="100%" height="100%"></img>



                </span>
                <div id={`${styles.CoinNameDiv}`}>
                    <span className={`${styles.CoinName}`}>플로우</span>
                    <span className={`${styles.CoinID}`}>FLOW</span>
                </div>
                <div id={`${styles.CoinPMDiv}`}>
                    <span className={`${styles.CompareYesterday}`}>전일대비</span>
                    <div id={`${styles.ComparePercent}`}>{FLOWChange[0]+(Math.round(Number(FLOWChange[2])*10000)/10000*100).toFixed(2)+'%'}</div>
                    <span className={`${styles.PlusMinus}`}>{FLOWChange[0]+FLOWChange[1]}</span>
                    <span className={`${styles.MarketCap}`}>거래대금</span>
                    <span id={`${styles.MarketCapValue}`}>{Math.round(Number(FLOWAccTradePrice)).toLocaleString('ko-KR')} KRW</span>
                </div>
                
                <div id={`${styles.PriceDiv}`}>
                <span className={`${styles.CurrentPrice}`}>{FLOWPrice.toLocaleString('ko-KR')}</span>
                <span id={`${styles.MoneyCurrency}`}>KRW</span>
                </div>
               
                <div className={`${styles.CoinDescriptionDiv}`}>
                    <span className={`${styles.CoinDescription}`}>플로우는 게임, 디앱(DApp), 디지털 자산들의 개발을 지원하는 레이어-1 블록체인 네트워크입니다. Flow는 플로우 네트워크의 네이티브 토큰(Native token)으로서 네트워크 서비스와 데이터 저장공간 사용에 대한 지불, 검증 노드 보상, 거버넌스 참여 등에 사용됩니다.</span>
                </div>
                <div id={`${styles.DNHR}`}></div>
                <div className={`${styles.CoinNewsDiv}`}>
                    <span className={`${styles.CoinNews}`}>부테린 이더리움 창시자 &quot;가상자산, 실제 쓰일 수 있도록 변해야&quot;</span>
                    <br></br>
                    <br></br>
                    
                    <span className={`${styles.CoinNews}`}>NFT 시장의 대표주자로 부상 '플로우(FLOW)' [한경 코알라]</span>
                   
                    <br></br>
                    <br></br>

                    <span className={`${styles.CoinNews}`}>구찌, 슈퍼구찌 NFT 발매 예정 외 암호화폐·가상통화 뉴스와이어 [블록체인 외신 뉴스브리핑]</span>

                </div>
               



            </div>
            <div id={`${styles.SEHR}`}></div>
            <div id={`${styles.CoinListSearchDiv}`}>
                <input id={`${styles.CoinNameSymbolSearchInput}`}>
                
                </input>

        <div id={`${styles.SearchOptionLogo}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m18.5 12-1-.583c-1.083-.667-1.083-2.25 0-2.917l1-.583c.833-.5 1.083-1.5.583-2.25L18.25 4.25c-.5-.833-1.5-1.083-2.25-.583l-1 .583c-1.083.667-2.5-.167-2.5-1.417V1.667C12.5.75 11.75 0 10.833 0H9.167C8.25 0 7.5.75 7.5 1.667V2.75C7.5 4 6.083 4.833 5 4.167l-1-.5a1.616 1.616 0 0 0-2.25.583L.917 5.667C.5 6.5.75 7.5 1.5 8l1 .583c1.083.584 1.083 2.25 0 2.834L1.5 12c-.833.5-1.083 1.5-.583 2.25l.833 1.417c.5.833 1.5 1.083 2.25.583l1-.5c1.083-.667 2.5.167 2.5 1.417v1.166C7.5 19.25 8.25 20 9.167 20h1.666c.917 0 1.667-.75 1.667-1.667V17.25c0-1.25 1.417-2.083 2.5-1.417l1 .584c.833.5 1.833.166 2.25-.584l.833-1.416C19.5 13.5 19.25 12.5 18.5 12zM10 13.333A3.343 3.343 0 0 1 6.667 10c0-1.833 1.5-3.333 3.333-3.333 1.833 0 3.333 1.5 3.333 3.333 0 1.833-1.5 3.333-3.333 3.333z" fill="#95A0B4"/>
            </svg>
        </div>
            
            <CoinTab />
            </div>
        </div>
    );
}

export default CoinInfo;