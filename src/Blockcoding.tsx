import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
import Backtest from './Backtest';
import BlockWorkspace from './BlockWorkspace';
import CoinInfo from './CoinInfo';
import Header from './Header';
import { generateBlockToCode } from './codeGenerator';
import styles from './css/Blockcoding.module.css';



function Blockcoding() {
        const [ShowModal, setShowModal] = useState(false);
        const ModalClose = () => {
            setShowModal(false);
        }
        return (
            <>
            <div className={`${styles.MainFrame}`}>
                <Header /> {/* 헤더 부분 */}
                <div id={`${styles.AlgoNameBar}`}>
                    <span id={`${styles.AlgoNameText}`}>
                        알고리즘 트레이딩 프로젝트 이름 (예시)
                    </span>
                    <button id={`${styles.StrategyTestButton}`} onClick={() => {generateBlockToCode(); setShowModal(true)}}>전략 검증하기</button>
                    
                    
                </div>
                
                
                <div className={`${styles.MiddleContentDiv}`}>
                    <div className={`${styles.BlockCodingDiv}`}>
                        <BlockWorkspace /> {/* Blockly Toolbox 및 블록 부분 */}
                    </div>
                    <CoinInfo />
                </div>
                
            </div>
            <div className={`${styles.ModalWrapper}`}>
            {ShowModal?<Backtest ModalClose = {ModalClose}/> : null}
            </div>
            
            </>
            
        );
}

export default Blockcoding;