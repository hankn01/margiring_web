/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Blockly from "blockly"
import Python from "blockly/python_compressed"

export function generateBlockToCode() {
    let code = 
`import random
import datetime
import zipline
import pandas

def program_started():
${Python.INDENT}pass

def program_on_working():
${Python.INDENT}pass

def signal_recieved():
${Python.INDENT}pass

def buying():
${Python.INDENT}pass

def selling():
${Python.INDENT}pass


`
    code += Python.workspaceToCode(Blockly.common.getMainWorkspace());
    code +=
`
def initialize(context):
    # code
    program_started()

def handle_data(context):
    # code
    program_on_working()
`

    console.log(code);
    return code;
}

export function generateDummyCode() {
    const code1 = 
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