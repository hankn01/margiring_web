/* eslint-disable */
import React, {useEffect, useState} from 'react';
import axios from 'axios';


function WonCoinList() {
    const [BTCPrice, setBTCPrice] = useState(0);
    const [ETHPrice, setETHPrice] = useState(0);
    const [ETCPrice, setETCPrice] = useState(0);
    const [SANDPrice, setSANDPrice] = useState(0);
    const [FLOWPrice, setFLOWPrice] = useState(0);
    const [Error, setError] = useState(null);
    useEffect(() => {
       axios("https://api.upbit.com/v1/ticker?markets=KRW-ETH").then((res)=>{
        
        console.log(res.data[0].trade_price);
        if(res.data!==null)
        {
       setETHPrice(res.data[0].trade_price);
        }
       })
       .catch((err)=> {
        console.error("Fetch Error", err);
        setError(err);
       })
     
    }, []);
    return (
        <div>
            <div>{ETHPrice}</div>
        </div>
    )
}

export default WonCoinList;