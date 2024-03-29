/* eslint-disable */
//axios로 불러온 자료가 any형이라 자주 에러가 발생하여 일시적으로 eslint를 disable하였습니다.
import React, {useEffect, useState} from 'react';
import styles from './css/WonCoinList.module.css';
import axios from 'axios'; //Upbit에서 axios로 가격 정보를 불러오기 위한 모듈입니다.


function WonCoinList() { //중간 평가 전까지 일단 하드 코딩으로 구현 후 추후 리스트에 따른 State로 리팩토링 예정입니다.
    const [BTCPrice, setBTCPrice] = useState(0);
    const [BTCChange, setBTCChange] = useState([0]);
    const [BTCAccTradePrice, setBTCAccTradePrice] = useState(0);

    const [ETHPrice, setETHPrice] = useState(0);
    const [ETHChange, setETHChange] = useState([0]);
    const [ETHAccTradePrice, setETHAccTradePrice] = useState(0);

    const [ETCPrice, setETCPrice] = useState(0);
    const [ETCChange, setETCChange] = useState([0]);
    const [ETCAccTradePrice, setETCAccTradePrice] = useState(0);


    const [SANDPrice, setSANDPrice] = useState(0);
    const [SANDChange, setSANDChange] = useState([0]);
    const [SANDAccTradePrice, setSANDAccTradePrice] = useState(0);

    const [FLOWPrice, setFLOWPrice] = useState(0);
    const [FLOWChange, setFLOWChange] = useState([0]);
    const [FLOWAccTradePrice, setFLOWAccTradePrice] = useState(0);


    const [Error, setError] = useState(null);
    useEffect(() => {
       axios("https://api.upbit.com/v1/ticker?markets=KRW-BTC").then((BTCres)=>{ //비트코인 가격 로드 및 저장
        console.log(BTCres.data[0].trade_price);
        console.log(BTCres.data);
        if(BTCres.data!==null)
        {
       setBTCPrice(BTCres.data[0].trade_price);
       let PlusMinus = '+';
       if(BTCres.data[0].change==="RISE")
       {
          PlusMinus = '+';
       }
       else if(BTCres.data[0].change==="FALL")
       {
          PlusMinus = '-';
       }
       else
       {
          PlusMinus = '';
       }
       setBTCChange([PlusMinus, BTCres.data[0].change_price, BTCres.data[0].change_rate]);
       setBTCAccTradePrice(BTCres.data[0].acc_trade_price);


        }
       })
       .catch((err)=>{
        console.log("Fecth error", err);
        setError(err);
       })

       axios("https://api.upbit.com/v1/ticker?markets=KRW-ETH").then((ETHres)=>{ //이더리움 가격 로드 및 저장
       
        console.log(ETHres.data[0].trade_price);
        if(ETHres.data!==null)
        {
       setETHPrice(ETHres.data[0].trade_price);
        }
        let PlusMinus = '+';
        if(ETHres.data[0].change==="RISE")
        {
           PlusMinus = '+';
        }
        else if(ETHres.data[0].change==="FALL")
        {
           PlusMinus = '-';
        }
        else
        {
           PlusMinus = '';
        }
        setETHChange([PlusMinus, ETHres.data[0].change_price, ETHres.data[0].change_rate]);
        setETHAccTradePrice(ETHres.data[0].acc_trade_price);
 


       })
       .catch((err)=> {
        console.error("Fetch Error", err);
        setError(err);
       })
     
       axios("https://api.upbit.com/v1/ticker?markets=KRW-ETC").then((ETCres)=>{ //이더리움 클래식 가격 로드 및 저장
       
        console.log(ETCres.data[0].trade_price);
        if(ETCres.data!==null)
        {
       setETCPrice(ETCres.data[0].trade_price);
        }


        let PlusMinus = '+';
        if(ETCres.data[0].change==="RISE")
        {
           PlusMinus = '+';
        }
        else if(ETCres.data[0].change==="FALL")
        {
           PlusMinus = '-';
        }
        else
        {
           PlusMinus = '';
        }
        setETCChange([PlusMinus, ETCres.data[0].change_price, ETCres.data[0].change_rate]);
        setETCAccTradePrice(ETCres.data[0].acc_trade_price);
 
       })
       .catch((err)=> {
        console.error("Fetch Error", err);
        setError(err);
       })


       axios("https://api.upbit.com/v1/ticker?markets=KRW-SAND").then((SANDres)=>{ //SAND 가격 로드 및 저장
       
        console.log(SANDres.data[0].trade_price);
        if(SANDres.data!==null)
        {
       setSANDPrice(SANDres.data[0].trade_price);
        }


        
        let PlusMinus = '+';
        if(SANDres.data[0].change==="RISE")
        {
           PlusMinus = '+';
        }
        else if(SANDres.data[0].change==="FALL")
        {
           PlusMinus = '-';
        }
        else
        {
           PlusMinus = '';
        }
        setSANDChange([PlusMinus, SANDres.data[0].change_price, SANDres.data[0].change_rate]);
        setSANDAccTradePrice(SANDres.data[0].acc_trade_price);
 

       })
       .catch((err)=> {
        console.error("Fetch Error", err);
        setError(err);
       })

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
        <div>
             <table>
      <thead id={`${styles.CoinTHead}`}>
        <tr>
          <th>한글명</th><th>현재가</th><th>전일대비</th><th>거래대금</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>비트코인</td><td className={`${styles.CoinTableRightText}`}>{BTCPrice}</td><td className={`${styles.CoinTableRightText}`}>{BTCChange[0]+BTCChange[1]}<br></br>{BTCChange[0]+(((Math.round(BTCChange[2]*10000))/10000)*100).toFixed(2)+'%'}</td><td className={`${styles.CoinTableRightText}`}>{Math.round(BTCAccTradePrice/1000000)+"백만"}</td>
        </tr>
        <tr>
          <td>이더리움</td><td className={`${styles.CoinTableRightText}`}>{ETHPrice}</td><td className={`${styles.CoinTableRightText}`}>{ETHChange[0]+ETHChange[1]}<br></br>{ETHChange[0]+(((Math.round(ETHChange[2]*10000))/10000)*100).toFixed(2)+'%'}</td><td className={`${styles.CoinTableRightText}`}>{Math.round(ETHAccTradePrice/1000000)+"백만"}</td>
        </tr>
        <tr>
          <td>이더리움 클래식</td><td className={`${styles.CoinTableRightText}`}>{ETCPrice}</td><td className={`${styles.CoinTableRightText}`}>{ETCChange[0]+ETCChange[1]}<br></br>{ETCChange[0]+(((Math.round(ETCChange[2]*10000))/10000)*100).toFixed(2)+'%'}</td><td className={`${styles.CoinTableRightText}`}>{Math.round(ETCAccTradePrice/1000000)+"백만"}</td>
        </tr>
        <tr>
          <td>샌드박스</td><td className={`${styles.CoinTableRightText}`}>{SANDPrice}</td><td className={`${styles.CoinTableRightText}`}>{SANDChange[0]+SANDChange[1]}<br></br>{SANDChange[0]+(((Math.round(SANDChange[2]*10000))/10000)*100).toFixed(2)+'%'}</td><td className={`${styles.CoinTableRightText}`}>{Math.round(SANDAccTradePrice/1000000)+"백만"}</td>
        </tr>
        <tr>
          <td>플로우</td><td className={`${styles.CoinTableRightText}`}>{FLOWPrice}</td><td className={`${styles.CoinTableRightText}`}>{FLOWChange[0]+FLOWChange[1]}<br></br>{FLOWChange[0]+(((Math.round(FLOWChange[2]*10000))/10000)*100).toFixed(2)+'%'}</td><td className={`${styles.CoinTableRightText}`}>{Math.round(FLOWAccTradePrice/1000000)+"백만"}</td>
        </tr>
      </tbody>
    </table>

        </div>
    )
}

export default WonCoinList;

//TODO: 중간평가 완료 후 실제 리스트로 구현하고 실제 사용 가능한 모듈로 대체하여야 합니다.