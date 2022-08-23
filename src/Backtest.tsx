import React from 'react';
import styles from './css/Backtest.module.css';

function Backtest() {
    return (
            <>
            <div id={`${styles.BackTestWrapper}`}>
            <div className={`${styles.BacktestUpperDiv}`}>
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

                    {/*<button className={`${styles.OtherTermButton}`}>직접 입력 </button>*/}
                    </div>
                    <span className={`${styles.InvestFeeCaption}`}>수수료(%)</span>
                    <span className={`${styles.InvestSlippageCaption}`}>슬리피지(%)</span>
                    <input id={`${styles.InvestSlippageInput}`}></input>
                    <span className={`${styles.InvestTaxCaption}`}>세금(%)</span>
                    <input className={`${styles.InvestAmountInput}`}></input>


                    <input className={`${styles.TaxInput}`}></input>
                    <input className={`${styles.FeeInput}`}></input>
                    <button id={`${styles.ExecuteButton}`}>백테스팅 수행</button>
                </div>
            </div>
            <div className={`${styles.BacktestMiddleDiv}`}>
                <span id={`${styles.SummaryCaption}`}>성과 요약</span>
                <span id={`${styles.SummaryDesc}`}>전략의 성과는 동일 비중 투자 방식으로 계산되었습니다.</span>
                <table id={`${styles.SummaryTable}`}>
                    <thead id={`${styles.SummaryTableHead}`}>
                        <tr>
                            <th>
                                 
                            </th>
                            <th>
                                누적 수익률
                            </th>
                            <th>
                                연율화 수익률
                            </th>
                            <th>
                                연율화 변동성
                            </th>
                            <th>
                                샤프지수
                            </th>
                            <th>
                                최대손실 (MDD)
                            </th>
                        </tr>
                    </thead>
                    <tbody id={`${styles.SummaryTableBody}`}>
                        <tr>
                            <td>
                               전략
                            </td>
                            <td>
                                테스트
                            </td>
                            <td>
                                테스트
                            </td>
                            <td>
                                테스트
                            </td>
                            <td>
                                테스트
                            </td>
                            <td>
                                테스트
                            </td>
                        </tr>
                    </tbody>

                </table>
                <span id={`${styles.AccTableCaption}`}>누적 수익률</span>
        </div>
           
            <div className={`${styles.name}`}></div>
            </div></>
    );
}

export default Backtest;