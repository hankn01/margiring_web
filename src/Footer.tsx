import React from 'react';
import styles from './css/Footer.module.css';

function Footer() {
    return(
        <div id={`${styles.FooterFont}`}>
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
        </div>
    );
}

export default Footer;