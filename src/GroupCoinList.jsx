/* eslint-disable */

import React from 'react';
import GridTree from 'react-gridtree';
import styles from './css/GroupCoinList.module.css';

function GroupCoinList() {
    return (
        <>
          <GridTree
    data={[
        {
            name: "item 1",
            qty: 2,
            children: [
                {
                    name: "item 1.1",
                    qty: 1,
                    children: [
                      {
                        name: "item 112",
                        qty: 3,
                      }
                    ]
                }
            ]
        },
        {
            name: "item 2",
            qty: 4
        }
    ]}
    options={{
        fields: [
            { 
                property: 'name',
                displayName: 'Name',
                width: '70%' 
            },
            {
                property: 'qty',
                displayName: 'Quantity',
                format: (value) => value.toFixed(2)
            }
        ]
    }}
/>
        {/*<table>
 <thead id={`${styles.CoinTHead}`}>
   <tr>
     <th>한글명</th><th>현재가</th><th>전일대비</th><th>거래대금</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>비트코인</td><td className={`${styles.CoinTableRightText}`}>T1</td><td className={`${styles.CoinTableRightText}`}>{}<br></br>{}</td><td className={`${styles.CoinTableRightText}`}>{}</td>
   </tr>
   <tr>
     <td>이더리움</td><td className={`${styles.CoinTableRightText}`}>T2</td><td className={`${styles.CoinTableRightText}`}>{}<br></br>{}</td><td className={`${styles.CoinTableRightText}`}>{}</td>
   </tr>
   <tr>
     <td>이더리움 클래식</td><td className={`${styles.CoinTableRightText}`}>T3</td><td className={`${styles.CoinTableRightText}`}>{}<br></br>{}</td><td className={`${styles.CoinTableRightText}`}>{}</td>
   </tr>
   <tr>
     <td>샌드박스</td><td className={`${styles.CoinTableRightText}`}>T4</td><td className={`${styles.CoinTableRightText}`}>{}<br></br>{}</td><td className={`${styles.CoinTableRightText}`}>{}</td>
   </tr>
   <tr>
     <td>플로우</td><td className={`${styles.CoinTableRightText}`}>T5</td><td className={`${styles.CoinTableRightText}`}>{}<br></br>{}</td><td className={`${styles.CoinTableRightText}`}>{}</td>
   </tr>
 </tbody>
</table>
  */}
   </>
    )
}

export default GroupCoinList;