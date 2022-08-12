/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Blockly from "blockly"

// TODO: Assemble JavaScript into code variable.

export function defineBlockGenerator() {
  // 시작 블록
  Blockly.JavaScript['event_program_started'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['event_program_on_working'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['event_signal_recieved'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['event_send_signal'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['event_await_signal'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['event_selling'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
  
  Blockly.JavaScript['event_buying'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['event_trade_info'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
  // 흐름 블록
  Blockly.JavaScript['flow_if'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['flow_if_else'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['flow_await'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['flow_repeat_times'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['flow_repeat'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['flow_while'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['flow_break'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
  // 거래 블록
  Blockly.JavaScript['trade_buy'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_sell'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_is_selling'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_is_settled'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_my_budget'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_my_coin'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_trade_info'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['trade_stock_info'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
  // 판단 블록
  Blockly.JavaScript['bool_true'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_false'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_eq'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_ne'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_gt'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_lt'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_ge'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_le'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_and'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_or'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['bool_not'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
  // 계산/시간 블록
  Blockly.JavaScript['time_now'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['time_minutes_ago'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['time_specific'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_plus'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_minus'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_times'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_divided_by'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_share_remainder'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_random'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_string_concat'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_string_index'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['calc_string_slice'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
  // 자료 블록
  Blockly.JavaScript['data_variable'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_variable_set'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_variable_add'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_index'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_append'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_pop'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_put_in'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_set_index'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_length'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['data_list_have'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };

  Blockly.JavaScript['function_call'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  }
}