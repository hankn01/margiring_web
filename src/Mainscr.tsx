/* eslint-disable */

import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import AlgorithmListDiv from './AlgorithmListDiv';
import styles from './css/Mainscr.module.css';
import LoginModalContext from './contexts/LoginModalContext';
import SignUpModalContext from './contexts/SignUpModalContext';
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useState } from 'react';
import styled from "styled-components";

const cookies = new Cookies();
//const [UserToken, setUserToken] = useState();
//const [] = useState();




function NewStrategyButton() {
    

    return (
        <div className={`${styles.CreateStrategyButton}`}>
        <Link to ="./block">
            <div id={`${styles.CreateStrategyInner}`}>
            <span id={`${styles.StrategyAddIcon}`}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.3 8h1.384V4.684H8V3.299H4.684V0H3.299v3.3H0v1.384h3.3V8z" fill="#fff"/>
            </svg>
            </span>
            Create New Strategy
            </div>
            </ Link>
        </div>
    );
}



function Mainscr() {
    const [UserToken, setUserToken] = useState();
    const [AlgorithmList, setAlgorithmList] = useState([]);
    const [CardResultList, setCardResultList] = useState<any[]>([]);
    const [AlgoRequestAll, setAlgoRequestAll] = useState<any[]>([]);
    let AlgoList;
    let tempReq;
    let AlgoRequest;

    


    useEffect(() => {
        
        let UserToken = cookies.get('userToken');
        setUserToken(UserToken);
        //console.log(UserToken);
        if(UserToken!==undefined) {
            axios.get("http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode", { headers: {
                Authorization: 'Bearer '+UserToken
            }}).then((response) => {
                AlgoList = response.data
                //console.log(AlgoList);
                setAlgorithmList(AlgoList);
                
                
            })
        }
   
       
        AlgoRequest = [];
        if(AlgorithmList!==undefined&&AlgorithmList.length!==0)
        {
            //let AlgoRequest = [];
           
            
            
            for(var i=0;i<AlgorithmList.length;i++)
            {
                //console.log(AlgorithmList[i]);
                AlgoRequest[i] = axios.get("http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+AlgorithmList[i], { headers: {
                    Authorization: 'Bearer '+UserToken
                }});
    
                
                //console.log(AlgoRequestAll);
                
            }
            setAlgoRequestAll([...AlgoRequest]);
    
            axios.all(AlgoRequestAll)
            .then(
                axios.spread((...responses) => {
                    
                   //setCardResultList([...responses]);
                    //console.log(CardResultList);
                    var FinalList = responses.map(item=>item.data);
                    //console.log(FinalList);
                    setCardResultList(FinalList);
                    
                    //console.log(CardResultList);
                    //console.log(typeof CardResultList);
                    //console.log(CardResultList[0].progname);
                })
                
            ).catch((errors) => {
                console.error(errors);
            })
    
            
            //const requestOne = axios.get(AlgorithmList[0]);
            /*
            axios.all([])
            AlgorithmList.forEach((AlgorithmElement, Index) => {
                console.log(AlgorithmElement);
                axios.get("http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+AlgorithmElement, { headers: {
                    Authorization: 'Bearer '+UserToken
                }}).then((response) => {
                    //console.log(response.data);
                    
                    setCardResultList([...CardResultList, response.data]);
                    console.log(response.data);
                    
                })
    
                console.log(CardResultList);
            })
            */
           //console.log(CardResultList);
        }


    }, [UserToken, AlgorithmList.length, AlgoRequestAll.length]);

    
                        //console.log(AlgorithmList);
                        //console.log(AlgoRequestAll);
                        console.log(CardResultList);


    const MiddleWrap = styled.div`
    position: absolute;
    top: ${(86+60*(AlgorithmList.length/2+1)+16*((AlgorithmList.length)/2+1)+124)}px;
    width: 99.5%;
    height: 670px;
    margin-right: 3.125%;
    margin-left: 3.125%;
    display: grid;
    grid-template-columns: 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667% 6.6666667%;
    grid-column-gap: 24px;
    `;


    const FooterDiv = styled.div`
    font-size: 10px;
    color: #999999;
    text-align: center;
    width: 100%;
    position: absolute;
    top: ${980+64*(CardResultList.length/2)+16*(CardResultList.length/2-1)}px;
    `;
    
    const FooterDiv_NonLogin = styled.div`
    font-size: 10px;
    color: #999999;
    text-align: center;
    width: 100%;
    position: absolute;
    top: ${1000+64*(CardResultList.length/2)+16*(CardResultList.length/2-1)}px;
    `;

    const MainFrameDiv = styled.div`
    width: 100%;
    height: ${980+64*(CardResultList.length/2)+16*(CardResultList.length/2-1)}px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
    `

    return (
        <>   
        
        <MainFrameDiv>{/* 스크린 전체 div */}
            
            <Header /> {/* 헤더 부분 */}
            <AlgorithmListDiv list={CardResultList}/>
           
           <MiddleWrap>
            
            

                {/* 암호화폐 뉴스 표시 div */}
                    
                    <div className={`${styles.NewsContentDiv}`}>
                    <iframe src="https://www.coindesk.com/" width="100%" height="850" scrolling="yes" frameBorder="0"></iframe>
                    
                    </div>
                
                 {/* 암호화폐 순위 표시 div */}
                    <div className={`${styles.RankContent}`}>
                    <iframe src="https://cryptorank.io/" width="100%" height="850" scrolling="yes" frameBorder="0"></iframe>
                    </div>
                
            
            </MiddleWrap>
            </MainFrameDiv>
        <LoginModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.ModalContainer}`}></div>:null}
                    {value.ShowModal?<div className={`${styles.ModalWrapper}`}><Login /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </LoginModalContext.Consumer> 
            <SignUpModalContext.Consumer>
             {value => (
                <>
                    {value.ShowModal?<div className={`${styles.SignUpModalWrapper}`}><SignUp /></div>:null}
                </>
             )}
             {//<div className={`${styles.ModalWrapper}`}>{value.ModalOpen?<Login />:null}</div>
      }
            </SignUpModalContext.Consumer> 


        {UserToken?<FooterDiv>
        마지링은 블록 코딩을 이용한 투자의 수익률 및 안정성을 안내해 드리기 위한 플랫폼으로 모든 투자는 손실이 발생할 수 있으며, 마지링은 손실에 대한 법적 책임이 없습니다.
        <br>
        </br>
        마지링은 백테스팅에 대한 추천 결과만 제공하며, 모든 투자의 판단과 책임은 투자자에게 있습니다.
        <br>
        </br>
        <br>
        </br>
        마지링
        <br>
        </br>
        서울특별시 강남구 테헤란로 311, 7층
        <br>
        </br>
        Copyright © 2022 Margiring. All rights reserved.
        <br>
        </br>
        </FooterDiv>:
        <FooterDiv_NonLogin>
        마지링은 블록 코딩을 이용한 투자의 수익률 및 안정성을 안내해 드리기 위한 플랫폼으로 모든 투자는 손실이 발생할 수 있으며, 마지링은 손실에 대한 법적 책임이 없습니다.
        <br>
        </br>
        마지링은 백테스팅에 대한 추천 결과만 제공하며, 모든 투자의 판단과 책임은 투자자에게 있습니다.
        <br>
        </br>
        <br>
        </br>
        마지링
        <br>
        </br>
        서울특별시 강남구 테헤란로 311, 7층
        <br>
        </br>
        Copyright © 2022 Margiring. All rights reserved.
        <br>
        </br>


        </FooterDiv_NonLogin>
        }
        
        </>
    );
}

export default Mainscr;