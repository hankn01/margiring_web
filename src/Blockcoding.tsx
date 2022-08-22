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
                    </div>
                    <CoinInfo />
                </div>
            </div>
        );
}

export default Blockcoding;