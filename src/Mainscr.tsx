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


    return (
        <>   
        
        <div className={`${styles.MainFrame}`}> {/* 스크린 전체 div */}
            
            <Header /> {/* 헤더 부분 */}
            <AlgorithmListDiv list={CardResultList}/>
           
            <div id={`${styles.MiddleContentWrap}`}>
            

                {/* 암호화폐 뉴스 표시 div */}
                    
                    <div className={`${styles.NewsContentDiv}`}>
                    <iframe src="https://www.coindesk.com/" width="100%" height="850" scrolling="yes" frameBorder="0"></iframe>
                    
                    </div>
                
                 {/* 암호화폐 순위 표시 div */}
                    <div className={`${styles.RankContent}`}>
                    <iframe src="https://cryptorank.io/" width="100%" height="850" scrolling="yes" frameBorder="0"></iframe>
                    </div>
                
            </div>
        </div>
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
        <Footer />
        </>
    );
}

export default Mainscr;