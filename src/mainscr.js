import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/mainscr.css';

class mainscr extends React.Component {
    render() {
        return (
            <div class="MainFrame">
            <div class="Header">
                <div class="LogoDiv">
                    <span class="LogoText">Logo</span>
                </div>
                <div class="LogoutDiv">
                    <button class="LogoutText">logout</button>
                </div>
            </div>
            
            <div class="ListDiv">
                <div class="ListContentDiv">
                    <span class="ListContentText">Strategy 1</span>
                    <span class="ListValueText">Return : 000% , Volatility: 000%</span>
                    <button class="ModifyButton">수정하기</button>
            
                    <button class="DeleteButton">삭제하기</button>
                        
                    
                     <button class="TestExecuteButton">전략 검증하기</button>
                    
                    
                </div>
                <button class="CreateStrategyButton">
                    (+)Create New Strategy
                </button>
                </div>

                    <div class="NewsDiv">
                    <span class="NewsTitle">News</span>
                    <div class="NewsContentDiv"></div>
                    </div>
                    <div class="RankDiv">
                    <span class="RankTitle">대표 암호화폐 순위</span>
                    <div class="RankContent">
    
                    </div>
                    </div>


            </div>
        );
    }
}