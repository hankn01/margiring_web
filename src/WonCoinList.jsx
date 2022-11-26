/* eslint-disable */
//axios로 불러온 자료가 any형이라 자주 에러가 발생하여 일시적으로 eslint를 disable하였습니다.
import React, { useEffect, useState } from "react";
import styles from "./css/WonCoinList.module.css";
import axios from "axios"; //Upbit에서 axios로 가격 정보를 불러오기 위한 모듈입니다.
//import { first } from "cypress/types/lodash";
//import { startsWith } from "cypress/types/lodash";

//let LoadOroginalData = [];

function WonCoinList() {
  //중간 평가 전까지 일단 하드 코딩으로 구현 후 추후 리스트에 따른 State로 리팩토링 예정입니다.
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

  const [CoinListAndData, setCoinListAndData] = useState([]);
  const [AllCoinList, setAllCoinList] = useState([]);

  const Columns = ["화폐명", "현재가", "전일대비", "거래대금"];
  const Data = Array();

  const [LoadOriginalData, setLoadOriginalData] = useState(null);
  function DataToTable({ LoadData }) {
    return (
      <tr>
        <td>{LoadData.currency}</td>
        <td>{LoadData.last}</td>
        <td>{LoadData.last - LoadData.yesterday_last}</td>
        <td>{LoadData.volume}</td>
      </tr>
    );
  }

  function LoadCoinList() {
    // let TempArray = Array.from(Result.data);
    // setAllCoinList(TempArray);
    // console.log(TempArray);

    axios
      .get("/ticker?currency=all")
      .then(function (result) {
        let temp_state = Object.values(result.data);
        if (temp_state) {
          let output = temp_state.sort((a, b) => {
            if (a && b) {
              if (a.currency === undefined) return 1;
              if (b.currency === undefined) return -1;
              if (a.currency.toLowerCase() < b.currency.toLowerCase()) {
                return -1;
              }
              if (a.currency.toLowerCase() > b.currency.toLowerCase()) {
                return 1;
              }
            }
            return 0;
          });
        }
        //console.log(temp_state);
        setLoadOriginalData([...temp_state]);
        //console.log(LoadOriginalData);
        //setLoadOriginalData(result.data.slice(0));
      })
      .catch(function (error) {
        console.log("Axios GET ERROR 발생");
        console.log(error);
      });

    //console.log(LoadOroginalData);

    /*
    AllCoinList.data.forEach(function (CoinElement) {
        let MarketName = CoinElement.market;
        //let KoreanName = CoinElement.korean_name;
        if (MarketName.startsWith("KRW") === true) {
          // console.log(MarketName);
          // console.log(CoinElement.korean_name);
          //  console.log("시작여부"+MarketName.startsWith("KRW"));
          //WonCoinAllInfo.push(CoinElement);
          console.log(CoinElement);
          console.log(typeof CoinElement);
          let KoreanName = CoinElement.korean_name;
          let EnglishName = CoinElement.english_name;
          let MarketName = CoinElement.market;
          let CoinEleRes = {
            korean_name: KoreanName,
            english_name: EnglishName,
            market: MarketName,
          };
          console.log(KoreanName);
          setCoinListAndData([1, 2, 3, 4, 5]);
          console.log(CoinListAndData);
          //WonCoinAllInfo[WonCoinAllInfo.length] = CoinElement;
        }
        
      });
*/
    //console.log(WonCoinAllInfo);
    //let MarketName = AllCoinList.data[0].market;
    //console.log(MarketName);
    //console.log("시작여부"+MarketName.startsWith("KRW"));
  }

  useEffect(() => {
    let WonCoinAllInfo = [];

    setInterval(LoadCoinList, 1000);

    //console.log(typeof WonCoinAllInfo);
    /*

       for(let i=0;i<WonCoinAllInfo.length;i++)
       {
         let MarketInfo = WonCoinAllInfo[i].market;
         console.log("마켓 인포: "+MarketInfo);
         axios("https://api.upbit.com/v1/ticker?markets="+MarketInfo).then((Result)=>{
            console.log(Result.data[0].trade_price);
            console.log(Result.data);
         });
       }
       */
    /*
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
*/
  }, []);
  console.log(LoadOriginalData);

  //console.log(AllCoinList);
  //console.log(AllCoinList[0]);
  /*
  AllCoinList.forEach((Element) => {
    let MarketInfo = Element.market;
    if (MarketInfo.startsWith("KRW") === true) {
      axios("https://api.upbit.com/v1/ticker?markets=" + MarketInfo).then(
        (result) => {
          // console.log(MarketName);
          // console.log(CoinE;ement.korean_name);
          //  console.log("시작여부"+MarketName.startsWith("KRW"));
          //WonCoinAllInfo.push(CoinElement);
          setCoinListAndData([...CoinListAndData, result]);
          console.log(CoinListAndData);
          //WonCoinAllInfo[WonCoinAllInfo.length] = CoinElement;
        }
      );
    }
  });
*/
  return (
    <div>
      {/*
      <table>
        <thead id={`${styles.CoinTHead}`}>
          <tr>
            <th>한글명</th>
            <th>현재가</th>
            <th>전일대비</th>
            <th>거래대금</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>비트코인</td>
            <td className={`${styles.CoinTableRightText}`}>{BTCPrice}</td>
            <td className={`${styles.CoinTableRightText}`}>
              {BTCChange[0] + BTCChange[1]}
              <br></br>
              {BTCChange[0] +
                ((Math.round(BTCChange[2] * 10000) / 10000) * 100).toFixed(2) +
                "%"}
            </td>
            <td className={`${styles.CoinTableRightText}`}>
              {Math.round(BTCAccTradePrice / 1000000) + "백만"}
            </td>
          </tr>
          <tr>
            <td>이더리움</td>
            <td className={`${styles.CoinTableRightText}`}>{ETHPrice}</td>
            <td className={`${styles.CoinTableRightText}`}>
              {ETHChange[0] + ETHChange[1]}
              <br></br>
              {ETHChange[0] +
                ((Math.round(ETHChange[2] * 10000) / 10000) * 100).toFixed(2) +
                "%"}
            </td>
            <td className={`${styles.CoinTableRightText}`}>
              {Math.round(ETHAccTradePrice / 1000000) + "백만"}
            </td>
          </tr>
          <tr>
            <td>이더리움 클래식</td>
            <td className={`${styles.CoinTableRightText}`}>{ETCPrice}</td>
            <td className={`${styles.CoinTableRightText}`}>
              {ETCChange[0] + ETCChange[1]}
              <br></br>
              {ETCChange[0] +
                ((Math.round(ETCChange[2] * 10000) / 10000) * 100).toFixed(2) +
                "%"}
            </td>
            <td className={`${styles.CoinTableRightText}`}>
              {Math.round(ETCAccTradePrice / 1000000) + "백만"}
            </td>
          </tr>
          <tr>
            <td>샌드박스</td>
            <td className={`${styles.CoinTableRightText}`}>{SANDPrice}</td>
            <td className={`${styles.CoinTableRightText}`}>
              {SANDChange[0] + SANDChange[1]}
              <br></br>
              {SANDChange[0] +
                ((Math.round(SANDChange[2] * 10000) / 10000) * 100).toFixed(2) +
                "%"}
            </td>
            <td className={`${styles.CoinTableRightText}`}>
              {Math.round(SANDAccTradePrice / 1000000) + "백만"}
            </td>
          </tr>
          <tr>
            <td>플로우</td>
            <td className={`${styles.CoinTableRightText}`}>{FLOWPrice}</td>
            <td className={`${styles.CoinTableRightText}`}>
              {FLOWChange[0] + FLOWChange[1]}
              <br></br>
              {FLOWChange[0] +
                ((Math.round(FLOWChange[2] * 10000) / 10000) * 100).toFixed(2) +
                "%"}
            </td>
            <td className={`${styles.CoinTableRightText}`}>
              {Math.round(FLOWAccTradePrice / 1000000) + "백만"}
            </td>
          </tr>
        </tbody>
      </table>

              */}
      <table>
        <thead id={`${styles.CoinTHead}`}>
          <tr>
            <th>한글명</th>
            <th>현재가</th>
            <th>전일대비</th>
            <th>거래대금</th>
          </tr>
        </thead>
        {/*
          
        
        */}
        <tbody><tr><td>1inch</td><td>709.1</td><td>709.1</td><td>4371.1803</td></tr><tr><td>aave</td><td>78900.0</td><td>78900.0</td><td>9.7517</td></tr><tr><td>abl</td><td>8.23</td><td>8.23</td><td>2764288.5935</td></tr><tr><td>ach</td><td>12.9</td><td>12.9</td><td>12097.9103</td></tr><tr><td>ada</td><td>437.1</td><td>437.1</td><td>1080657.2678</td></tr><tr><td>alpha</td><td>119.0</td><td>119.0</td><td>3430.7181</td></tr><tr><td>amo</td><td>1.083</td><td>1.083</td><td>1658556.7082</td></tr><tr><td>ankr</td><td>31.0</td><td>31.0</td><td>161.3225</td></tr><tr><td>aoa</td><td>0.298</td><td>0.298</td><td>281580.8086</td></tr><tr><td>arpa</td><td>35.67</td><td>35.67</td><td>0.0</td></tr><tr><td>asm</td><td>17.1</td><td>17.1</td><td>171170.3967</td></tr><tr><td>asta</td><td>0.53</td><td>0.53</td><td>162007998.4863</td></tr><tr><td>atom</td><td>13910.0</td><td>13910.0</td><td>24988.1704</td></tr><tr><td>att</td><td>1.024</td><td>1.024</td><td>189689322.6268</td></tr><tr><td>auction</td><td>7180.0</td><td>7180.0</td><td>0.6907</td></tr><tr><td>avax</td><td>17870.0</td><td>17870.0</td><td>2219.9188</td></tr><tr><td>axs</td><td>9180.0</td><td>9180.0</td><td>2731.9822</td></tr><tr><td>baas</td><td>0.7174</td><td>0.7174</td><td>82526278.3136</td></tr><tr><td>bal</td><td>8375.0</td><td>8375.0</td><td>23.1322</td></tr><tr><td>band</td><td>2440.0</td><td>2440.0</td><td>1737.2373</td></tr><tr><td>basic</td><td>1.315</td><td>1.315</td><td>0.0</td></tr><tr><td>bat</td><td>310.8</td><td>310.8</td><td>244.4726</td></tr><tr><td>bch</td><td>157600.0</td><td>157600.0</td><td>528.7552</td></tr><tr><td>bel</td><td>590.1</td><td>590.1</td><td>4484.68</td></tr><tr><td>bit</td><td>465.1</td><td>465.1</td><td>2162.1844</td></tr><tr><td>bmp</td><td>0.252</td><td>0.252</td><td>68714374.3881</td></tr><tr><td>bnt</td><td>469.9</td><td>469.9</td><td>10.6426</td></tr><tr><td>bora</td><td>215.6</td><td>215.6</td><td>62145.607</td></tr><tr><td>bsv</td><td>55000.0</td><td>55000.0</td><td>11.9539</td></tr><tr><td>btc</td><td>22748000.0</td><td>22748000.0</td><td>624.1496</td></tr><tr><td>btg</td><td>20000.0</td><td>20000.0</td><td>27.7572</td></tr><tr><td>btr</td><td>38.38</td><td>38.38</td><td>3090436.124</td></tr><tr><td>btt</td><td>0.001</td><td>0.001</td><td>1128380685.6307</td></tr><tr><td>bwo</td><td>1129.0</td><td>1129.0</td><td>1076615.371</td></tr><tr><td>bzrx</td><td>61.8</td><td>61.8</td><td>43006.9885</td></tr><tr><td>cbank</td><td>4.526</td><td>4.526</td><td>24363596.1802</td></tr><tr><td>cbk</td><td>991.0</td><td>991.0</td><td>0.0</td></tr><tr><td>celeb</td><td>12.89</td><td>12.89</td><td>41653981.8796</td></tr><tr><td>ckb</td><td>3.327</td><td>3.327</td><td>1597.9536</td></tr><tr><td>clbk</td><td>3.704</td><td>3.704</td><td>555483.2194</td></tr><tr><td>clv</td><td>84.1</td><td>84.1</td><td>14767.5312</td></tr><tr><td>comp</td><td>50550.0</td><td>50550.0</td><td>33.8679</td></tr><tr><td>cos</td><td>6.49</td><td>6.49</td><td>7240.4342</td></tr><tr><td>cro</td><td>81.1</td><td>81.1</td><td>92.8287</td></tr><tr><td>cru</td><td>718.0</td><td>718.0</td><td>10.4206</td></tr><tr><td>crv</td><td>940.0</td><td>940.0</td><td>0.0</td></tr><tr><td>ctsi</td><td>143.5</td><td>143.5</td><td>380.6041</td></tr><tr><td>cvx</td><td>5940.0</td><td>5940.0</td><td>810.1824</td></tr><tr><td>dad</td><td>29.1</td><td>29.1</td><td>4576.5641</td></tr><tr><td>dao</td><td>1125.0</td><td>1125.0</td><td>457.3616</td></tr><tr><td>data</td><td>32.41</td><td>32.41</td><td>16264.4401</td></tr><tr><td>dia</td><td>446.7</td><td>446.7</td><td>0.0</td></tr><tr><td>dodo</td><td>160.6</td><td>160.6</td><td>1818.2981</td></tr><tr><td>doge</td><td>128.4</td><td>128.4</td><td>49212845.2673</td></tr><tr><td>don</td><td>17030.0</td><td>17030.0</td><td>221413.4524</td></tr><tr><td>dot</td><td>7285.0</td><td>7285.0</td><td>23268.2142</td></tr><tr><td>drc</td><td>3.176</td><td>3.176</td><td>344970849.92</td></tr><tr><td>drm</td><td>6.881</td><td>6.881</td><td>282490.7933</td></tr><tr><td>dvi</td><td>26.13</td><td>26.13</td><td>269999.2495</td></tr><tr><td>egg</td><td>7.701</td><td>7.701</td><td>2216542.3885</td></tr><tr><td>eos</td><td>1290.0</td><td>1290.0</td><td>752207.7812</td></tr><tr><td>ern</td><td>2528.0</td><td>2528.0</td><td>0.0</td></tr><tr><td>etc</td><td>27980.0</td><td>27980.0</td><td>44543.0593</td></tr><tr><td>eth</td><td>1659000.0</td><td>1659000.0</td><td>3549.5279</td></tr><tr><td>ever</td><td>54.19</td><td>54.19</td><td>8339780.7179</td></tr><tr><td>fet</td><td>85.0</td><td>85.0</td><td>0.0</td></tr><tr><td>fil</td><td>5960.0</td><td>5960.0</td><td>79221.2783</td></tr><tr><td>fis</td><td>430.0</td><td>430.0</td><td>0.0</td></tr><tr><td>flow</td><td>1558.0</td><td>1558.0</td><td>2453.7469</td></tr><tr><td>flux</td><td>602.0</td><td>602.0</td><td>0.0</td></tr><tr><td>front</td><td>269.5</td><td>269.5</td><td>27.5344</td></tr><tr><td>ftm</td><td>261.5</td><td>261.5</td><td>8336.443</td></tr><tr><td>ftt</td><td>2070.0</td><td>2070.0</td><td>1112.959</td></tr><tr><td>gala</td><td>34.96</td><td>34.96</td><td>225800.248</td></tr><tr><td>gas</td><td>2106.0</td><td>2106.0</td><td>59.94</td></tr><tr><td>get</td><td>1006.0</td><td>1006.0</td><td>0.0</td></tr><tr><td>gom2</td><td>6.12</td><td>6.12</td><td>428185.0614</td></tr><tr><td>grt</td><td>84.8</td><td>84.8</td><td>26483.8432</td></tr><tr><td>handy</td><td>19.99</td><td>19.99</td><td>49261617.2082</td></tr><tr><td>hard</td><td>208.9</td><td>208.9</td><td>1995.4981</td></tr><tr><td>hibs</td><td>0.884</td><td>0.884</td><td>6170946.6541</td></tr><tr><td>hint</td><td>0.76</td><td>0.76</td><td>8451787.032</td></tr><tr><td>hot</td><td>2.243</td><td>2.243</td><td>40244.4067</td></tr><tr><td>hum</td><td>114.1</td><td>114.1</td><td>1647.1215</td></tr><tr><td>ibp</td><td>0.659</td><td>0.659</td><td>362861654.2426</td></tr><tr><td>icx</td><td>236.7</td><td>236.7</td><td>0.0</td></tr><tr><td>idv</td><td>1.799</td><td>1.799</td><td>10964697.0471</td></tr><tr><td>ilv</td><td>53500.0</td><td>53500.0</td><td>58.0583</td></tr><tr><td>inj</td><td>2195.0</td><td>2195.0</td><td>1860.71</td></tr><tr><td>iota</td><td>292.2</td><td>292.2</td><td>21427.0125</td></tr><tr><td>iotx</td><td>33.13</td><td>33.13</td><td>20491.0908</td></tr><tr><td>ipx</td><td>1.077</td><td>1.077</td><td>850198.083</td></tr><tr><td>isdt</td><td>0.3318</td><td>0.3318</td><td>10303255.2409</td></tr><tr><td>isr</td><td>4.975</td><td>4.975</td><td>40184.5698</td></tr><tr><td>itamcube</td><td>96.8</td><td>96.8</td><td>196686.6347</td></tr><tr><td>jst</td><td>34.87</td><td>34.87</td><td>0.0</td></tr><tr><td>kai</td><td>8.3</td><td>8.3</td><td>20042.6274</td></tr><tr><td>kava</td><td>1216.0</td><td>1216.0</td><td>5769.9194</td></tr><tr><td>kdag</td><td>199.9</td><td>199.9</td><td>0.0</td></tr><tr><td>klay</td><td>250.1</td><td>250.1</td><td>4438868.7653</td></tr><tr><td>knc</td><td>849.0</td><td>849.0</td><td>7896.4795</td></tr><tr><td>ksc</td><td>6.581</td><td>6.581</td><td>82277086.3958</td></tr><tr><td>ksm</td><td>36850.0</td><td>36850.0</td><td>1.1726</td></tr><tr><td>ksp</td><td>906.0</td><td>906.0</td><td>22291.1773</td></tr><tr><td>lbl</td><td>6.005</td><td>6.005</td><td>1363800.4117</td></tr><tr><td>lbxc</td><td>0.1219</td><td>0.1219</td><td>310394979.7136</td></tr><tr><td>ldn</td><td>49.1</td><td>49.1</td><td>3045003.26</td></tr><tr><td>lina</td><td>8.16</td><td>8.16</td><td>105846.0128</td></tr><tr><td>link</td><td>9530.0</td><td>9530.0</td><td>31419.2644</td></tr><tr><td>lit</td><td>977.0</td><td>977.0</td><td>9.982</td></tr><tr><td>lzm</td><td>56.43</td><td>56.43</td><td>0.0</td></tr><tr><td>mana</td><td>543.6</td><td>543.6</td><td>83119.8345</td></tr><tr><td>map</td><td>10.05</td><td>10.05</td><td>676821.11</td></tr><tr><td>matic</td><td>1177.0</td><td>1177.0</td><td>102155.7049</td></tr><tr><td>mbl</td><td>3.391</td><td>3.391</td><td>7951.9774</td></tr><tr><td>mch</td><td>34.15</td><td>34.15</td><td>101508459.2076</td></tr><tr><td>mega</td><td>28.71</td><td>28.71</td><td>19048435.4423</td></tr><tr><td>mev</td><td>15.61</td><td>15.61</td><td>4873130.4717</td></tr><tr><td>mlk</td><td>371.0</td><td>371.0</td><td>15469.7242</td></tr><tr><td>mnr</td><td>2.976</td><td>2.976</td><td>64036918.4064</td></tr><tr><td>mov</td><td>5.79</td><td>5.79</td><td>11443.2225</td></tr><tr><td>msb</td><td>37.38</td><td>37.38</td><td>31836357.2307</td></tr><tr><td>mta</td><td>87.5</td><td>87.5</td><td>603.356</td></tr><tr><td>mts</td><td>6.116</td><td>6.116</td><td>80031688.7618</td></tr><tr><td>mvc</td><td>4.02</td><td>4.02</td><td>38125.7674</td></tr><tr><td>myce</td><td>0.1207</td><td>0.1207</td><td>153438360.5207</td></tr><tr><td>neo</td><td>9610.0</td><td>9610.0</td><td>753.776</td></tr><tr><td>nest</td><td>30.68</td><td>30.68</td><td>14955.7914</td></tr><tr><td>nft</td><td>0.0006</td><td>0.0006</td><td>4251165504.6602</td></tr><tr><td>nfup</td><td>1.628</td><td>1.628</td><td>8152592.052</td></tr><tr><td>noa</td><td>15.02</td><td>15.02</td><td>5452820.1391</td></tr><tr><td>npt</td><td>1067.0</td><td>1067.0</td><td>0.0</td></tr><tr><td>ogn</td><td>139.0</td><td>139.0</td><td>145.669</td></tr><tr><td>omg</td><td>1635.0</td><td>1635.0</td><td>19703.9337</td></tr><tr><td>ong</td><td>404.9</td><td>404.9</td><td>765.9816</td></tr><tr><td>ont</td><td>247.2</td><td>247.2</td><td>1702.0732</td></tr><tr><td>onx</td><td>79.8</td><td>79.8</td><td>293.9133</td></tr><tr><td>orbr</td><td>22270.0</td><td>22270.0</td><td>105238.4201</td></tr><tr><td>orbs</td><td>40.01</td><td>40.01</td><td>24943.889</td></tr><tr><td>orc</td><td>123.7</td><td>123.7</td><td>299360.3075</td></tr><tr><td>pci</td><td>324.0</td><td>324.0</td><td>41048.7099</td></tr><tr><td>pha</td><td>207.1</td><td>207.1</td><td>0.0</td></tr><tr><td>pib</td><td>0.42</td><td>0.42</td><td>101940133.454</td></tr><tr><td>pica</td><td>5.2</td><td>5.2</td><td>673645.5842</td></tr><tr><td>prom</td><td>6000.0</td><td>6000.0</td><td>247.1514</td></tr><tr><td>pure</td><td>25.07</td><td>25.07</td><td>29195570.8014</td></tr><tr><td>pxl</td><td>0.245</td><td>0.245</td><td>2161784.3547</td></tr><tr><td>qtcon</td><td>1.322</td><td>1.322</td><td>23448245.8411</td></tr><tr><td>qtum</td><td>2968.0</td><td>2968.0</td><td>4169.9156</td></tr><tr><td>reap</td><td>34.22</td><td>34.22</td><td>47555961.3377</td></tr><tr><td>redi</td><td>0.6999</td><td>0.6999</td><td>133857002.7499</td></tr><tr><td>ren</td><td>142.9</td><td>142.9</td><td>390112.1092</td></tr><tr><td>rush</td><td>5.01</td><td>5.01</td><td>442915839.2751</td></tr><tr><td>sand</td><td>784.0</td><td>784.0</td><td>348142.1931</td></tr><tr><td>six</td><td>64.48</td><td>64.48</td><td>44842.154</td></tr><tr><td>sklay</td><td>270.6</td><td>270.6</td><td>1550.1911</td></tr><tr><td>sku</td><td>17.0</td><td>17.0</td><td>27590.7074</td></tr><tr><td>sml</td><td>6754.5</td><td>6754.5</td><td>341782.8541</td></tr><tr><td>snx</td><td>2317.0</td><td>2317.0</td><td>180.8553</td></tr><tr><td>soba</td><td>0.0225</td><td>0.0225</td><td>148863227.3134</td></tr><tr><td>soc</td><td>3.552</td><td>3.552</td><td>8188.8159</td></tr><tr><td>sol</td><td>19690.0</td><td>19690.0</td><td>29453.9125</td></tr><tr><td>spa</td><td>9.07</td><td>9.07</td><td>1911.1237</td></tr><tr><td>srm</td><td>402.0</td><td>402.0</td><td>4555.8398</td></tr><tr><td>stnd</td><td>45.98</td><td>45.98</td><td>745.887</td></tr><tr><td>stpl</td><td>2.221</td><td>2.221</td><td>4862299.2373</td></tr><tr><td>stpt</td><td>42.5</td><td>42.5</td><td>2131.8069</td></tr><tr><td>sun</td><td>8.64</td><td>8.64</td><td>0.0</td></tr><tr><td>sushi</td><td>1622.0</td><td>1622.0</td><td>60.9587</td></tr><tr><td>sxp</td><td>329.3</td><td>329.3</td><td>10249.7551</td></tr><tr><td>tari</td><td>35640.0</td><td>35640.0</td><td>40307.1881</td></tr><tr><td>temco</td><td>2.1</td><td>2.1</td><td>514156.4043</td></tr><tr><td>thn</td><td>4.438</td><td>4.438</td><td>84900.519</td></tr><tr><td>tmtg</td><td>0.12</td><td>0.12</td><td>96483903.5627</td></tr><tr><td>tom</td><td>64300.0</td><td>64300.0</td><td>8825.5538</td></tr><tr><td>tomoe</td><td>520.0</td><td>520.0</td><td>0.0038</td></tr><tr><td>trcl</td><td>2.386</td><td>2.386</td><td>2016605.5314</td></tr><tr><td>trix</td><td>0.4183</td><td>0.4183</td><td>131718380.6568</td></tr><tr><td>trx</td><td>72.73</td><td>72.73</td><td>18905156.3706</td></tr><tr><td>tvk</td><td>37.78</td><td>37.78</td><td>6303.7818</td></tr><tr><td>uma</td><td>2221.0</td><td>2221.0</td><td>53.7562</td></tr><tr><td>uni</td><td>7310.0</td><td>7310.0</td><td>86.9176</td></tr><tr><td>uos</td><td>200.0</td><td>200.0</td><td>255.7725</td></tr><tr><td>vsys</td><td>1.623</td><td>1.623</td><td>633617.2431</td></tr><tr><td>we</td><td>17835.0</td><td>17835.0</td><td>93618.442</td></tr><tr><td>wemix</td><td>493.0</td><td>493.0</td><td>218561.9338</td></tr><tr><td>wiken</td><td>6.46</td><td>6.46</td><td>1506092.7865</td></tr><tr><td>wncg</td><td>77.1</td><td>77.1</td><td>14127.8324</td></tr><tr><td>xec</td><td>0.0402</td><td>0.0402</td><td>310990936.2669</td></tr><tr><td>xlm</td><td>123.2</td><td>123.2</td><td>1264895.0178</td></tr><tr><td>xpn</td><td>1.424</td><td>1.424</td><td>2591292.6342</td></tr><tr><td>xrp</td><td>556.5</td><td>556.5</td><td>34978682.0745</td></tr><tr><td>xtz</td><td>1375.0</td><td>1375.0</td><td>2548.4025</td></tr><tr><td>zil</td><td>31.38</td><td>31.38</td><td>51322.375</td></tr><tr><td>zrx</td><td>270.6</td><td>270.6</td><td>0.0</td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody>
        
      </table>
    </div>
  );
}




export default WonCoinList;

//TODO: 중간평가 완료 후 실제 리스트로 구현하고 실제 사용 가능한 모듈로 대체하여야 합니다.


{
/*
<tbody>
          {LoadOriginalData === null ? (
            <tr>
              <td>"Loading..."</td>
            </tr>
          ) : (
            LoadOriginalData.map((item) => {
            return(
              <tr>
                <td>{item ? item.currency : null}</td>
                <td>{item ? item.last : null}</td>
                <td>{item ? item.last : null}</td>
                <td>{item ? item.volume : null}</td>
              </tr>
            );
            })
          )}

          {/*


          <tr>
            <td>{LoadOriginalData ? LoadOriginalData[100].currency : null}</td>
            <td>{LoadOriginalData ? LoadOriginalData[100].last : null}</td>
            <td>
              {LoadOriginalData
                ? LoadOriginalData[100].last -
                  LoadOriginalData[100].yesterday_last
                : null}
            </td>
            <td>{LoadOriginalData ? LoadOriginalData[100].volume : null}</td>
          </tr>

          <tr>
            <td>{LoadOriginalData ? LoadOriginalData[100].currency : null}</td>
            <td>{LoadOriginalData ? LoadOriginalData[100].last : null}</td>
            <td>
              {LoadOriginalData
                ? LoadOriginalData[100].last -
                  LoadOriginalData[100].yesterday_last
                : null}
            </td>
            <td>{LoadOriginalData ? LoadOriginalData[100].volume : null}</td>
          </tr>


              */}

              {
                //LoadOriginalData.map((ElementData) => {
                //<DataToTable LoadData={LoadOriginalData} />;
                //})}
              }
            {//</tbody>}





}