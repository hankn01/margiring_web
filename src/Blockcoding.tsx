import React from 'react';
import {Link} from 'react-router-dom';
import BlockWorkspace from './BlockWorkspace';
import CoinInfo from './CoinInfo';
import Header from './Header';
import styles from './css/Blockcoding.module.css';

function Blockcoding() {
        return (
            <div className={`${styles.MainFrame}`}>
                <Header /> {/* 헤더 부분 */}
                <div id={`${styles.AlgoNameBar}`}>
                    <span id={`${styles.AlgoNameText}`}>
                        알고리즘 트레이딩 프로젝트 이름 (예시)
                    </span>
                    <Link to ="/backtest">
                    <button id={`${styles.StrategyTestButton}`}>전략 검증하기</button>
                    </Link>
                    
                </div>
                
                
                <div className={`${styles.MiddleContentDiv}`}>
                    <div className={`${styles.BlockCodingDiv}`}>
                        <BlockWorkspace /> {/* Blockly Toolbox 및 블록 부분 */}
                        <span className={`${styles.BlockCodingTempMsg}`}>이 화면에서 특정 코인의 한글명을 선택하게 되면 위의 화면과 같이 코인에 대한 증감과 설명이 표시되며, 현재가를 클릭할 경우 차트가 표시되게 설계할 예정입니다.</span>
                    </div>
                    <CoinInfo />
               
                </div>
            </div>
        );
}

export default Blockcoding;