import React from 'react';
import styles from './css/Backtest.module.css';

function Backtest() {
    return (
            <><div className={`${styles.BacktestMiddleDiv}`}>
           
        </div><div className={`${styles.BacktestUpperDiv}`}>
                <span className={`${styles.InvestAmountCaption}`}>투자금액</span>
                <span className={`${styles.InvestTermCaption}`}>투자기간</span>
                <span className={`${styles.InvestFeeCaption}`}>거래소수수료</span>
                <span className={`${styles.InvestSlippageCaption}`}>슬리피지</span>
                <span className={`${styles.InvestTaxCaption}`}>세금고려</span>
                <input className={`${styles.InvestAmountInput}`}></input>
                <button className={`${styles.WeeklyButton}`}>1주</button>
                <button className={`${styles.MonthlyButton}`}>1개월</button>
                <button className={`${styles.ThreeMonthButton}`}>3개월</button>
                <button className={`${styles.OtherTermButton}`}>직접 입력 </button>
                <span className={`${styles.TenThousandWonCaption}`}>만 원</span>
                <input className={`${styles.TaxInput}`}></input>
                <input className={`${styles.FeeInput}`}></input>
            </div>
           
            <div className={`${styles.name}`}></div></>
    );
}

export default Backtest;