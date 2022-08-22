import React from 'react';
import styles from './css/Backtest.module.css';

function Backtest() {
    return (
            <>
            <div id={`${styles.BackTestWrapper}`}>
            <div className={`${styles.BacktestMiddleDiv}`}>
           
        </div><div className={`${styles.BacktestUpperDiv}`}>
                <div id={`${styles.BacktestPanel}`}>
                    <h1 id={`${styles.StrategyTitleCaption}`}>전략 검증하기</h1>
                    <span className={`${styles.InvestAmountCaption}`}>투자금액</span>
                    <span className={`${styles.TenThousandWonCaption}`}>만 원</span>
                    <div id={`${styles.InvestTermDiv}`}>
                        <span className={`${styles.InvestTermCaption}`}>투자기간</span>
                        <div id={`${styles.WeeklyButtonDiv}`}>
                            <button className={`${styles.WeeklyButton}`}>1주</button>
                        </div>
                        <div id={`${styles.MonthlyButtonDiv}`}>
                            <button className={`${styles.MonthlyButton}`}>1개월</button>
                        </div>
                        <div id={`${styles.ThreeMonthButtonDiv}`}>
                        <button className={`${styles.ThreeMonthButton}`}>3개월</button>
                        </div>

                    <button className={`${styles.OtherTermButton}`}>직접 입력 </button>
                    </div>
                    <span className={`${styles.InvestFeeCaption}`}>거래소수수료</span>
                    <span className={`${styles.InvestSlippageCaption}`}>슬리피지</span>
                    <span className={`${styles.InvestTaxCaption}`}>세금고려</span>
                    <input className={`${styles.InvestAmountInput}`}></input>


                    <input className={`${styles.TaxInput}`}></input>
                    <input className={`${styles.FeeInput}`}></input>
                </div>
            </div>
           
            <div className={`${styles.name}`}></div>
            </div></>
    );
}

export default Backtest;