import React from 'react';
import styles from './css/AlgorithmCardList.module.css';

function AlgorithmCardList(props: any) {
   /* let XPosition, YPosition;
    let Title;
    let Id;

    if(props.index%2!==0)
        {
            console.log('test');
        }
            
       */ 
    
    return (
        
        <>
            <div className={`${styles.StrategyOddElement}`}>
                <span className={`${styles.OuterDot}`}></span>
                <span className={`${styles.Dot}`}></span>
                <a className={`${styles.StrategyStatus}`}>검증전</a>
                <a className={`${styles.StrategyElementText}`}>Test Strategy</a>
                <a className={`${styles.StrategyElementRemove}`}>삭제하기</a>
                <button className={`${styles.StrategyCheckButton}`}>전략 검증하기</button>
            </div>

        </>
    );


}

export default AlgorithmCardList;