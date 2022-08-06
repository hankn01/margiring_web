import React from 'react';
import BlockWorkspace from './BlockWorkspace';
import CoinInfo from './CoinInfo';
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
                    <CoinInfo />
                    <CoinList />
                </div>
            </div>
        );
}

export default Blockcoding;