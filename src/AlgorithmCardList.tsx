/* eslint-disable */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/AlgorithmCardList.module.css';



const AlgorithmCardList = (props) => {
   /* let XPosition, YPosition;
    let Title;
    let Id;

    if(props.index%2!==0)
        {
            console.log('test');
        }
            
       */ 
      
    
    let IndexBool = false;
    if(props.index%2===0) {
        IndexBool = false;
    }
    else {
        IndexBool = true;
    }
    
    return (
        
        <>
            {!IndexBool?<div className={`${styles.StrategyOddElement}`}>
                <span className={`${styles.OuterDot}`}></span>
                <span className={`${styles.Dot}`}></span>
                <a className={`${styles.StrategyStatus}`}>검증전</a>
                <a className={`${styles.StrategyElementText}`}>{props.id}</a>
                <a className={`${styles.StrategyElementRemove}`}>삭제하기</a>
                <button className={`${styles.StrategyCheckButton}`}>전략 수정하기</button>
            </div>
            : <div className={`${styles.StrategyEvenElement}`}>
            <span className={`${styles.OuterDot}`}></span>
            <span className={`${styles.Dot}`}></span>
            <a className={`${styles.StrategyStatus}`}>검증전</a>
            <a className={`${styles.StrategyElementText}`}>{props.id}</a>
            <a className={`${styles.StrategyElementRemove}`}>삭제하기</a>
            <button className={`${styles.StrategyCheckButton}`}>전략 수정하기</button>
        </div>

            }
            
        </>
    );


}

AlgorithmCardList.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    ischecked: PropTypes.bool,
    
};

export default AlgorithmCardList;