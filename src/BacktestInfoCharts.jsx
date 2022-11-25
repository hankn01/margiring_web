/* eslint-disable */
// @ts-nocheck

import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  [
    { name: "Group A", value: 67 },
    { name: "Group B", value: 33 },
  ],
  [
    { name: "Group A", value: 80 },
    { name: "Group B", value: 20 },
  ],
  [
    { name: "Group A", value: 75 },
    { name: "Group B", value: 25 },
  ],
  [
    { name: "Group A", value: 56 },
    { name: "Group B", value: 44 },
  ],
  [
    { name: "Group A", value: 73 },
    { name: "Group B", value: 27 },
  ],
];

export default function BacktestInfoCharts(dataNum) {
  let rNum = 0;
  if (dataNum >= 0 && dataNum <= 4) {
    rNum = dataNum;
  }

  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data[rNum]}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
