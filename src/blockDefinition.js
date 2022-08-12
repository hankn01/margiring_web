import Blockly from "blockly";

export function defineBlockInfo() {
  const EVENT_COLOUR = "#27ae60";
  const FLOW_COLOUR = "#70a1ff";
  const TRADE_COLOUR = "#f39c12";
  const BOOL_COLOUR = "#3742fa";
  const CALC_TIME_COLOUR = "#f1c40f";
  const DATA_COLOUR = "58b19f";
  const FUNCTION_COLOUR = "9b59b6";

  Blockly.defineBlocksWithJsonArray(
    [
      // 시작 블록
      {
        "kind": "block",
        "type": "event_program_started",
        "message0": "프로그램이 시작될 때",
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "프로그램이 가동될 때 한 번 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "event_program_on_working",
        "message0": "프로그램이 작동되는 동안",
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "프로그램이 가동 중일 때 계속 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "event_signal_recieved",
        "message0": "%1 신호를 받았을 때",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SIGNAL",
            "options": [
              [
                "대상 없음",
                "OPTION1"
              ]
            ]
          }
        ],
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "사전에 정한 신호를 받았을 경우 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "event_send_signal",
        "message0": "%1 신호 보내기",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SIGNAL",
            "options": [
              [
                "대상 없음",
                "OPTION1"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "사전에 정한 신호를 호출합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "event_await_signal",
        "message0": "%1 신호 기다리기",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SIGNAL",
            "options": [
              [
                "대상 없음",
                "OPTION1"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "사전에 정한 신호를 받을 때까지 기다립니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "event_selling",
        "message0": "%1 매도 시",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "INVESTMENT",
            "options": [
              [
                "현재 종목",
                "OPTION1"
              ]
            ]
          }
        ],
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "특정 종목이 매도되었을 때 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "event_buying",
        "message0": "%1 매수 시",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "INVESTMENT",
            "options": [
              [
                "현재 종목",
                "OPTION1"
              ]
            ]
          }
        ],
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "특정 종목이 매수되었을 때 실행됩니다.",
        "helpUrl": ""
      },
      {
        "type": "event_trade_info",
        "message0": "해당 거래정보",
        "output": "TradeInfo",
        "colour": EVENT_COLOUR,
        "tooltip": "\"매도 시\", \"매수 시\" 블록과 같이 쓰여 해당 거래 정보를 가리킵니다.",
        "helpUrl": ""
      },
      // 흐름 블록
      {
        "kind": "block",
        "type": "flow_if",
        "message0": "만일 %1 이라면 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "IF_STATEMENT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "선택지가 참일 경우 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "flow_if_else",
        "message0": "만일 %1 이라면 %2 %3  %4 아니면 %5 %6",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "IF_STATEMENT"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "ELSE_STATEMENT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "선택지가 참일 경우와 아닌 경우 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "flow_await",
        "message0": "%1 이 될 때까지 기다리기 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "STATEMENT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "선택지가 참일 때까지 해당 문단의 작동을 중단합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "flow_repeat_times",
        "message0": "%1 번 반복하기 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "COUNT"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "STATEMENT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "선택지의 횟수만큼 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "flow_repeat",
        "message0": "계속 반복하기 %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "STATEMENT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "\"반복 중단하기\"를 사용하기 전까지 계속 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "flow_while",
        "message0": "%1 이 %2 반복하기 %3 %4",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "될 때까지",
                "OPTIONNAME"
              ],
              [
                "참인 동안",
                "OPTIONNAME"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "IF_STATEMENT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "선택지가 참이 될 때까지, 혹은 참인 동안에만 계속 실행됩니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "flow_break",
        "message0": "반복 중단하기",
        "previousStatement": null,
        "nextStatement": null,
        "colour": FLOW_COLOUR,
        "tooltip": "반복 블록들 안에 쓰여, 반복을 중단하고 다음 블록으로 넘어갑니다.",
        "helpUrl": ""
      },
      // 거래 블록
      {
        "kind": "block",
        "type": "trade_buy",
        "message0": "%1 종목을 %2 코인 매수 (단, %3 분 뒤에 체결이 안 되면 취소)",
        "args0": [
          {
            "type": "input_value",
            "name": "INVESTMENT"
          },
          {
            "type": "input_value",
            "name": "VOLUME"
          },
          {
            "type": "input_value",
            "name": "CONDITION"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": TRADE_COLOUR,
        "tooltip": "선택한 종목을 일정량 매수합니다. 체결 취소 조건을 추가할 수 있습니다. 기본 취소 시간은 체결이 안 된 지 10분입니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "trade_sell",
        "message0": "%1 종목을 %2 코인 매도 (단, %3 분 뒤에 체결이 안 되면 취소)",
        "args0": [
          {
            "type": "input_value",
            "name": "INVESTMENT"
          },
          {
            "type": "input_value",
            "name": "VOLUME"
          },
          {
            "type": "input_value",
            "name": "CONDITION"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": TRADE_COLOUR,
        "tooltip": "선택한 종목을 일정량 매도합니다. 체결 취소 조건을 추가할 수 있습니다. 기본 취소 시간은 체결이 안 된 지 10분입니다.",
        "helpUrl": ""
      },
      {
        "type": "trade_is_selling",
        "message0": "%1 가 %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "매수",
                "OPTIONNAME"
              ],
              [
                "매도",
                "OPTIONNAME"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": TRADE_COLOUR,
        "tooltip": "선택한 거래 정보가 매수되었는지, 혹은 매도되었는지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "trade_is_settled",
        "message0": "%1 가 체결됨",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "output": "Boolean",
        "colour": TRADE_COLOUR,
        "tooltip": "선택한 거래 정보가 체결되었는지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "trade_my_budget",
        "message0": "내 자산",
        "output": "Number",
        "colour": TRADE_COLOUR,
        "tooltip": "현재 내 자산을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "trade_my_coin",
        "message0": "내가 보유한 %1 코인 수",
        "args0": [
          {
            "type": "field_input",
            "name": "INVESTMENT",
            "text": "현재 종목"
          }
        ],
        "output": "Number",
        "colour": TRADE_COLOUR,
        "tooltip": "현재 내 자산을 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "trade_trade_info",
        "message0": "%1 의 %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "종목 정보",
                "OPTION1"
              ],
              [
                "거래 시간",
                "OPTION2"
              ],
              [
                "주식 수",
                "OPTION3"
              ],
              [
                "주 당 가격",
                "OPTION4"
              ]
            ]
          }
        ],
        "output": null,
        "colour": TRADE_COLOUR,
        "tooltip": "선택한 거래 정보의 상세 정보를 알 수 있습니다.",
        "helpUrl": ""
      },
      {
        "type": "trade_stock_info",
        "message0": "%1 의 %2 의 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          },
          {
            "type": "input_value",
            "name": "NAME"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "코드",
                "OPTION1"
              ],
              [
                "시세",
                "OPTION2"
              ],
              [
                "거래량",
                "OPTION3"
              ],
              [
                "가격",
                "OPTION4"
              ],
              [
                "MACD",
                "OPTION5"
              ],
              [
                "RSI",
                "OPTION6"
              ],
              [
                "불린저밴드",
                "OPTION7"
              ],
              [
                "이동평균선 값",
                "OPTION8"
              ],
              [
                "이동평균선 기울기",
                "OPTION9"
              ]
            ]
          }
        ],
        "output": null,
        "colour": TRADE_COLOUR,
        "tooltip": "선택한 거래 종목의 상세 정보를 알 수 있습니다.",
        "helpUrl": ""
      },
      // 판단 블록
      {
        "type": "bool_true",
        "message0": "참",
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "일부 \"흐름\" 블록들의 이행에 활용됩니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_false",
        "message0": "거짓",
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "일부 \"흐름\" 블록들의 불이행에 활용됩니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_eq",
        "message0": "%1 = %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "두 선택지가 같은지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_ne",
        "message0": "%1 ≠ %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "두 선택지가 다른지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_gt",
        "message0": "%1 > %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "앞 숫자가 뒤 숫자보다 큰지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_lt",
        "message0": "%1 < %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "앞 숫자가 뒤 숫자보다 작은지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_ge",
        "message0": "%1 ≥ %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "앞 숫자가 뒤 숫자보다 크거나 같은지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_le",
        "message0": "%1 ≤ %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "앞 숫자가 뒤 숫자보다 작거나 같은지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_and",
        "message0": "%1 그리고 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "두 선택지가 모두 참인지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_or",
        "message0": "%1 또는 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "VALUE2"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "두 선택지 중 하나 이상이 참인지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "bool_not",
        "message0": "%1 이 아님",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1"
          }
        ],
        "output": "Boolean",
        "colour": BOOL_COLOUR,
        "tooltip": "선택지가 참이 아닌지를 의미합니다. 선택지가 참이면 결과가 거짓이 되고, 그 반대면 참이 됩니다.",
        "helpUrl": ""
      },
      // 계산/시간 블록
      {
        "type": "time_now",
        "message0": "현재",
        "output": "Time",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "현재 시간을 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "time_minutes_ago",
        "message0": "%1 분 전",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "output": "Time",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "입력한 시간 만큼 전 시간을 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "time_specific",
        "message0": "%1 일 때",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "\bYYYY/MM/DD HH:mm"
          }
        ],
        "output": "Time",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "선택한 시간을 의미합니다.",
        "helpUrl": ""
      },
      {
        "type": "calc_number",
        "message0": "%1",
        "args0": [
          {
            "type": "field_input",
            "name": "VALUE",
            "text": "10"
          }
        ],
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "입력한 숫자의 값을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_plus",
        "message0": "%1 + %2",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "두 숫자를 더한 값을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_minus",
        "message0": "%1 - %2",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "앞 숫자에서 뒤 숫자를 뺀 값을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_times",
        "message0": "%1 × %2",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "두 숫자를 곱한 값을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_divided_by",
        "message0": "%1 ÷ %2",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "앞 숫자에서 뒤 숫자를 나눈 값을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_share_remainder",
        "message0": "%1 ÷ %2 의 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "몫",
                "OPTION1"
              ],
              [
                "나머지",
                "OPTION2"
              ]
            ]
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "앞 숫자에서 뒤 숫자를 나눴을 때의 몫이나 나머지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_random",
        "message0": "%1 부터 %2 사이의 무작위 정수",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "앞 숫자와 뒤 숫자 사이의 무작위 정수를 의미합니다. 매 실행마다 달라집니다.",
        "helpUrl": ""
      },
      {
        "type": "calc_string",
        "message0": "%1",
        "args0": [
          {
            "type": "field_input",
            "name": "VALUE",
            "text": "안녕하세요!"
          }
        ],
        "output": "String",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "입력한 글을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_string_concat",
        "message0": "%1 과(와) %2 를(을) 합치기",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "String"
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "두 글을 이어 붙인 글을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_string_index",
        "message0": "%1 의 %2 번째 글자",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "작성한 글의 작성한 숫자번째의 글자를 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "calc_string_slice",
        "message0": "%1 의 %2 번째 글자부터 %3 번째 글자까지의 글자",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE1",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "VALUE2",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE3",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": CALC_TIME_COLOUR,
        "tooltip": "작성한 글의 작성한 앞 숫자부터 뒤 숫자까지의 글을 의미합니다.",
        "helpUrl": ""
      },
      // 자료 블록
      {
        "type": "data_variable",
        "message0": "%1 의 값",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "output": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 변수의 값을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_variable_set",
        "message0": "%1 의 값을 %2 으로 정하기",
        "args0": [
          {
            "type": "input_value",
            "name": "VARIABLE"
          },
          {
            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 변수의 값을 정합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_variable_add",
        "message0": "%1 의 값을 %2 만큼 더하기",
        "args0": [
          {
            "type": "input_value",
            "name": "VARIABLE"
          },
          {
            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 변수의 숫자 값을 특정한 만큼 더합니다. 음수도 가능합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_index",
        "message0": "%1 의 %2 번째 항목",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          },
          {
            "type": "input_value",
            "name": "INDEX"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트의 작성한 숫자번째의 항목을 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_append",
        "message0": "%1 에 %2 항목을 추가하기",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          },
          {
            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트에 새 항목을 추가합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_pop",
        "message0": "%1 에서 %2 번째 항목을 삭제하기",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          },
          {
            "type": "input_value",
            "name": "INDEX"
          }
        ],
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트의 작성한 숫자번째의 항목을 삭제합니다. 기존의 항목 이후의 항목들은 앞으로 한 칸씩 당겨집니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_put_in",
        "message0": "%1 의 %2 번째에 %3 항목을 넣기",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          },
          {
            "type": "input_value",
            "name": "INDEX"
          },
          {
            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트에 새 항목을 작성한 숫자번째의 항목에 추가합니다. 기존의 항목부터 이후의 항목들은 뒤로 한 칸씩 밀려납니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_set_index",
        "message0": "%1 의 %2 번째 항목을 %3 (으)로 바꾸기",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          },
          {
            "type": "input_value",
            "name": "INDEX"
          },
          {
            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트의 작성한 숫자번째의 항목의 값을 변경합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_length",
        "message0": "%1 항목 수",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          }
        ],
        "output": "Number",
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트의 항목의 개수를 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "data_list_have",
        "message0": "%1 에 %2 (이)가 포함되어 있는가?",
        "args0": [
          {
            "type": "input_value",
            "name": "LIST"
          },
          {
            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": "Boolean",
        "colour": DATA_COLOUR,
        "tooltip": "선택한 리스트에 작성한 값이 포함되어 있는지를 의미합니다.",
        "helpUrl": ""
      },
      {
        "kind": "block",
        "type": "function_call",
        "message0": "%1 실행",
        "colour": FUNCTION_COLOUR,
        "args0": [
          {
            "type": "input_value",
            "name": "FUNCTION"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "선택한 함수를 실행합니다.",
        "helpUrl": ""
      },
    ]
  )
}