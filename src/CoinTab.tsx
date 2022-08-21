/* eslint-disable */

import React from 'react';
import styles from './css/CoinTab.module.css';
import {useState} from 'react'; 
import BTCCoinList from './BTCCoinList';
import InStockCoinList from './InStockCoinList';
import InterestingList from './InterestingList';
import USDTCoinList from './USDTCoinList';
import WonCoinList from './WonCoinList';


//import styles from './css/CoinTab.module.css';



const MenuList:any = {
    0: <WonCoinList />,
    1: <BTCCoinList />,
    2: <USDTCoinList />,
    3: <InStockCoinList />,
    4: <InterestingList />
};


function CoinTab() {
    const [CurMenu, setCurMenu] = useState(0);

    const changeMenu = (MenuIndex: number) => {
        setCurMenu(MenuIndex);
    }
   
return (
    <>
    <div id={`${styles.MenuDiv}`}>
        <ul className={`${styles.tabs}`}>
        <li className={`${CurMenu === 0? 'active': ''}`} onClick={() => setCurMenu(0)}>원화</li>
        <li className={`${CurMenu === 1? 'active': ''}`} onClick={() => setCurMenu(1)}>BTC</li>
        <li className={`${CurMenu === 2? 'active': ''}`} onClick={() => setCurMenu(2)}>USDT</li>
        <li className={`${CurMenu === 3? 'active': ''}`} onClick={() => setCurMenu(3)}>보유</li>
        <li className={`${CurMenu === 4? 'active': ''}`} onClick={() => setCurMenu(4)}>관심</li>
        </ul>


    </div>
    <div id={`${styles.CoinTabContents}`}>
        {MenuList[CurMenu]}
    </div>
    </>
   

    );
}

export default CoinTab;