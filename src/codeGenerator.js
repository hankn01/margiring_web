/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Blockly from "blockly"
import Python from "blockly/python_compressed"

export function generateBlockToCode() {
    let code = "import random\n"
                + "import datetime\n"
                + "import zipline\n"
                + "import pandas\n\n";
    code += Python.workspaceToCode(Blockly.common.getMainWorkspace());
    console.log(code);
    return code;
}

export function generateDummyCode() {
    let code1 = 
`from json import dumps
from random import uniform

result_object = {
    'cumulative_yield': None, # 누적 수익률
    'annualized_yield': None, # 연율화 수익률
    'annualized_volatility': None, # 연율화 변동성
    'sharpe_ratio': None, # 샤프 지수
    'MDD': None # 최대 손실 (MDD)
}

result_object['cumulative_yield'] = uniform(-0.3, 0.3)
result_object['annualized_yield'] = uniform(-0.3, 0.3)
result_object['annualized_volatility'] = uniform(-0.3, 0.3)
result_object['sharpe_ratio'] = uniform(0, 0.6)
result_object['MDD'] = uniform(-0.6, 0)

result_json = dumps(result_object)
print(result_json)`;
    return code1;
}