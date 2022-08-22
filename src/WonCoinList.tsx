/* eslint-disable */
import React, {useEffect, useState} from 'react';
import axios from 'axios'; //Upbit에서 axios로 가격 정보를 불러오기 위한 모듈입니다.


function WonCoinList() { //중간 평가 전까지 일단 하드 코딩으로 구현 후 추후 리스트에 따른 State로 리팩토링 예정입니다.
    const [BTCPrice, setBTCPrice] = useState(0);
    const [ETHPrice, setETHPrice] = useState(0);
    const [ETCPrice, setETCPrice] = useState(0);
    const [SANDPrice, setSANDPrice] = useState(0);
    const [FLOWPrice, setFLOWPrice] = useState(0);
    const [Error, setError] = useState(null);
    useEffect(() => {
       axios("https://api.upbit.com/v1/ticker?markets=KRW-BTC").then((BTCres)=>{ //비트코인 가격 로드 및 저장
        console.log(BTCres.data[0].trade_price);
        console.log(BTCres.data);
        if(BTCres.data!==null)
        {
       setBTCPrice(BTCres.data[0].trade_price);
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
       })
       .catch((err)=> {
        console.error("Fetch Error", err);
        setError(err);
       })


    }, []);
    return (
        <div>
             <table>
      <thead>
        <tr>
          <th>한글명</th><th>현재가</th><th>전일대비</th><th>거래대금</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>비트코인</td><td>{BTCPrice}</td><td>전일대비1</td><td>거래대금</td>
        </tr>
       
      </tbody>
    </table>


            <br></br>
            {ETHPrice}<br></br>
            {ETCPrice}<br></br>
            {SANDPrice}<br></br>
            {FLOWPrice}
        </div>
    )
}

export default WonCoinList;