/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import Blockly from "blockly";

// TODO: Assemble Python into code variable.

export function defineBlockGenerator() {
  // 시작 블록
  // Blockly.Python['event_program_started'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['event_program_on_working'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['event_signal_recieved'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['event_send_signal'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['event_await_signal'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['event_selling'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };
  
  // Blockly.Python['event_buying'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['event_trade_info'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };
  // // 흐름 블록
  // Blockly.Python['flow_if'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['flow_if_else'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['flow_await'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['flow_repeat_times'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['flow_repeat'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['flow_while'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['flow_break'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };
  // // 거래 블록
  // Blockly.Python['trade_buy'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_sell'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_is_selling'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_is_settled'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_my_budget'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_my_coin'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_trade_info'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['trade_stock_info'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };
  // // 판단 블록
  // Blockly.Python['bool_true'] = function(block) {
  //   let code = 'True';
  //   return [code, Blockly.Python.ORDER_ATOMIC];
  // };

  // Blockly.Python['bool_false'] = function(block) {
  //   let code = 'False';
  //   return [code, Blockly.Python.ORDER_ATOMIC];
  // };

  // Blockly.Python['bool_eq'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' == ' + value2;
  //   return [code, Blockly.Python.ORDER_EQUALITY];
  // };

  // Blockly.Python['bool_ne'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' != ' + value2;
  //   return [code, Blockly.Python.ORDER_EQUALITY];
  // };

  // Blockly.Python['bool_gt'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' > ' + value2;
  //   return [code, Blockly.Python.ORDER_RELATIONAL];
  // };

  // Blockly.Python['bool_lt'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' < ' + value2;
  //   return [code, Blockly.Python.ORDER_RELATIONAL];
  // };

  // Blockly.Python['bool_ge'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' >= ' + value2;
  //   return [code, Blockly.Python.ORDER_RELATIONAL];
  // };

  // Blockly.Python['bool_le'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' <= ' + value2;
  //   return [code, Blockly.Python.ORDER_RELATIONAL];
  // };

  // Blockly.Python['bool_and'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' and ' + value2;
  //   return [code, Blockly.Python.ORDER_LOGICAL_AND];
  // };

  // Blockly.Python['bool_or'] = function(block) {
  //   const value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  //   const value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_NONE);
  //   const code = value1 + ' or ' + value2;
  //   return [code, Blockly.Python.ORDER_LOGICAL_OR];
  // };

  // Blockly.Python['bool_not'] = function(block) {
  //   const value = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.NONE);
  //   const code = 'not ' + value;
  //   return [code, Blockly.Python.ORDER_LOGICAL_NOT];
  // };
  // // 계산/시간 블록
  // Blockly.Python['time_now'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['time_minutes_ago'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['time_specific'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_plus'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_minus'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_times'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_divided_by'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_share_remainder'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_random'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_string_concat'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_string_index'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['calc_string_slice'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };
  // // 자료 블록
  // Blockly.Python['data_variable'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_variable_set'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_variable_add'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_index'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_append'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_pop'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_put_in'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_set_index'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_length'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['data_list_have'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // };

  // Blockly.Python['function_call'] = function(block) {
  //   let code = 'print(\'random code!\')\n';
  //   return code;
  // }
}