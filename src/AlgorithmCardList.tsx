/* eslint-disable */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/AlgorithmCardList.module.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
const cookies = new Cookies();

function DELETEAlgorithm(PycodeID) {
    let UserToken = cookies.get("userToken");
    axios.delete(
        "http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+PycodeID,
        { headers: {
            Authorization: 'Bearer '+UserToken
        }}
    ).then(
        (response) => {
        location.reload();
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )
}

function EDITAlgorithm(PycodeID) {
    let UserToken = cookies.get("userToken");
    const Navigate = useNavigate();
    Navigate(`/block_edit/${PycodeID}`);
    

}



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
                <a className={`${styles.StrategyElementRemove}`} onClick={()=>{DELETEAlgorithm(props.id)}}>삭제하기</a>
                <Link to={"/block_edit/"+props.id}>
                <button className={`${styles.StrategyCheckButton}`}>전략 수정하기</button>
                </Link>
            </div>
            : <div className={`${styles.StrategyEvenElement}`}>
            <span className={`${styles.OuterDot}`}></span>
            <span className={`${styles.Dot}`}></span>
            <a className={`${styles.StrategyStatus}`}>검증전</a>
            <a className={`${styles.StrategyElementText}`}>{props.id}</a>
            <a className={`${styles.StrategyElementRemove}`} onClick={()=>{DELETEAlgorithm(props.id)}}>삭제하기</a>
            <Link to={"/block_edit/"+props.id}>
            <button className={`${styles.StrategyCheckButton}`}>전략 수정하기</button>
            </Link>
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