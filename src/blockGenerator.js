/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import Blockly from "blockly";
import Python from "blockly/python_compressed"

// TODO: Assemble Python into code variable.

export function defineBlockGenerator() {
  // 시작 블록
  Python['event_program_started'] = function(block) {
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'def program_started():\n'
                  + statement + '\n';
    return code;
  };

  Python['event_program_on_working'] = function(block) {
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'def program_on_working():\n'
                  + statement + '\n';
    return code;
  };

  Python['event_signal_recieved'] = function(block) {
    const signal = block.getFieldValue('SIGNAL');
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'def signal_recieved(' + signal + '):\n'
                  + statement + '\n';
    return code;
  };

  Python['event_send_signal'] = function(block) {
    const signal = block.getFieldValue('SIGNAL');
    const code = 'send_signal(' + signal + ')';
    return code;
  };

  Python['event_await_signal'] = function(block) {
    const signal = block.getFieldValue('SIGNAL');
    const code = 'await_signal(' + signal + ')';
    return code;
  };

  Python['event_buying'] = function(block) {
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'def buying():\n'
                  + statement + '\n';
    return code
  };

  Python['event_selling'] = function(block) {
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'def selling():\n'
                  + statement + '\n';
    return code
  };

  Python['event_trade_info'] = function() {
    const code = 'trade_info';
    return [code, Python.ORDER_ATOMIC];
  };
  // 흐름 블록
  Python['flow_if'] = function(block) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const statement = Python.statementToCode(block, 'STATEMENT')
                        || Python.INDENT + 'pass\n';
    const code = 'if ' + condition + ':\n'
                + statement;
    return code;
  };

  Python['flow_if_else'] = function(block) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const if_statement = Python.statementToCode(block, 'IF_STATEMENT')
                        || Python.INDENT + 'pass\n';
    const else_statement = Python.statementToCode(block, 'ELSE_STATEMENT')
                        || Python.INDENT + 'pass\n';
    const code = 'if ' + condition + ':\n'
                + if_statement
                + 'else:\n'
                + else_statement;
    return code;
  };

  Python['flow_await'] = function() {
    const code = 'print(\'random code!\')\n';
    return code;
  };

  Python['flow_repeat_times'] = function(block) {
    const count = Python.valueToCode(block, 'COUNT', Python.ORDER_ATOMIC);
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'for _ in range(' + count + '):\n'
                + statement;
    return code;
  };

  Python['flow_repeat'] = function(block) {
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass\n';
    const code = 'while True:\n'
                + statement;
    return code;
  };

  Python['flow_while'] = function(block) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const case_ = block.getFieldValue('CASE');
    const statement = Python.statementToCode(block, 'STATEMENT')
                        || Python.INDENT + 'pass\n';
    let code;
    if (case_ == 'OPTION1') { // 될 때까지
      code = 'while not ' + condition + ':\n'
            + statement;
    }
    else { // 참인 동안
      code = 'while ' + condition + ':\n'
            + statement;
    }
    return code;
  };

  Python['flow_break'] = function() {
    const code = 'break';
    return code;
  };
  
  // 판단 블록
  Python['bool_true'] = function() {
    const code = 'True';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['bool_false'] = function() {
    const code = 'False';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['bool_eq'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' == ' + value2;
    return [code, Python.ORDER_RELATIONAL]
  };

  Python['bool_ne'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' != ' + value2;
    return [code, Python.ORDER_RELATIONAL]
  };

  Python['bool_gt'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' > ' + value2;
    return [code, Python.ORDER_RELATIONAL]
  };

  Python['bool_lt'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' < ' + value2;
    return [code, Python.ORDER_RELATIONAL]
  };

  Python['bool_ge'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' >= ' + value2;
    return [code, Python.ORDER_RELATIONAL]
  };

  Python['bool_le'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' <= ' + value2;
    return [code, Python.ORDER_RELATIONAL]
  };

  Python['bool_and'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' and ' + value2;
    return [code, Python.ORDER_LOGICAL_AND]
  };

  Python['bool_or'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' or ' + value2;
    return [code, Python.ORDER_LOGICAL_OR]
  };

  Python['bool_not'] = function(block) {
    const value = Python.valueToCode(block, 'VALUE1', Python.NONE);
    const code = 'not ' + value;
    return [code, Python.ORDER_LOGICAL_NOT]
  };
  // 시간 블록
  Python['time_now'] = function() {
    const code = 'datetime.datetime.now()';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['time_minutes_ago'] = function(block) {
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = 'datetime.datetime.now() + '
                + 'datetime.timedelta(minutes=-'
                + value
                + ')';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['time_specific'] = function(block) {
    const time = block.getFieldValue('TIME');
    const format_data = '%Y/%m/%d %H:%M';
    const code = 'datetime.strptime(' + time + ', ' + format_data + ')';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['time_detail'] = function(block) {
    const time = Python.valueToCode(block, 'TIME', Python.ORDER_ATOMIC);
    const option = block.getFieldValue('OPTION');
    let code = '(' + time + ').';
    switch (option) {
      case 'OPTION1': // 연도
        code += 'year';
        break;
      case 'OPTION2': // 월
        code += 'month';
        break;
      case 'OPTION3': // 일
        code += 'day';
        break;
      case 'OPTION4': // 시
        code += 'hour';
        break;
      case 'OPTION5': // 븐
        code += 'minute';
        break;
      case 'OPTION6': // 요일
        code += 'weekday() + 1';
        break;
    }
    
    return [code, Python.ORDER_MEMBER]
  };

  Python['time_day_week'] = function(block) {
    const option = block.getFieldValue('OPTION');
    let code;
    switch (option) {
      case 'OPTION1': // 월요일
        code = '1';
        break;
      case 'OPTION2': // 화요일
        code = '2';
        break;
      case 'OPTION3': // 수요일
        code = '3';
        break;
      case 'OPTION4': // 목요일
        code = '4';
        break;
      case 'OPTION5': // 금요일
        code = '5';
        break;
      case 'OPTION6': // 토요일
        code = '6';
        break;
      case 'OPTION7': // 일요일
        code = '7';
        break;
    }
    return [code, Python.ORDER_ATOMIC]
  };
  // 계산 블록
  Python['calc_number'] = function(block) {
    const value = block.getFieldValue('VALUE');
    const code = value;
    return [code, Python.ORDER_ATOMIC]
  };

  Python['calc_plus'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_NONE);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_NONE);
    const code = value1 + ' + ' + value2;
    return [code, Python.ORDER_ADDITIVE]
  };

  Python['calc_minus'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' - ' + value2;
    return [code, Python.ORDER_ADDITIVE]
  };

  Python['calc_times'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' * ' + value2;
    return [code, Python.ORDER_MULTIPLICATIVE]
  };

  Python['calc_divided_by'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' / ' + value2;
    return [code, Python.ORDER_MULTIPLICATIVE]
  };

  Python['calc_share_remainder'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const option = block.getFieldValue('OPTION');
    let operator;
    switch(option) {
      case 'OPTION1': // share
        operator = ' // ';
        break;
      case 'OPTION2': // remainder
        operator = ' % ';
        break;
    }
    const code = value1 + ' ' + operator + ' ' + value2;
    return [code, Python.ORDER_MULTIPLICATIVE]
  };

  Python['calc_random'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = 'random.randint(' + value1 + ', ' + value2 + ')';
    return [code, Python.ORDER_FUNCTION_CALL]
  };

  Python['calc_percentage'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' * ' + value2 + ' * 0.01';
    return [code, Python.ORDER_MULTIPLICATIVE];
  };

  Python['calc_string'] = function(block) {
    const value = block.getFieldValue('VALUE');
    const code = '\'' + value + '\'';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['calc_string_concat'] = function(block) {
    const value1 = Python.valueToCode(block, 'VALUE1', Python.ORDER_ATOMIC);
    const value2 = Python.valueToCode(block, 'VALUE2', Python.ORDER_ATOMIC);
    const code = value1 + ' + ' + value2;
    return [code, Python.ORDER_ADDITIVE]
  };

  Python['calc_string_index'] = function(block) {
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const index = Python.valueToCode(block, 'INDEX', Python.ORDER_ATOMIC);
    const code = value + '[' + (parseInt(index) + 1) + ']';
    return [code, Python.ORDER_MEMBER]
  };

  Python['calc_string_slice'] = function(block) {
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const index1 = Python.valueToCode(block, 'INDEX1', Python.ORDER_ATOMIC);
    const index2 = Python.valueToCode(block, 'INDEX2', Python.ORDER_ATOMIC);
    const code = value + '[' + (parseInt(index1) + 1) + ':' + (parseInt(index2) + 1) + ']';
    return [code, Python.ORDER_MEMBER]
  };
  // 자료 블록
  Python['data_variable'] = function(block) {
    const variable = Python.valueToCode(block, 'VARIABLE', Python.ORDER_ATOMIC);
    const code = variable;
    return [code, Python.ORDER_ATOMIC]
  };

  Python['data_variable_set'] = function(block) {
    const variable = Python.valueToCode(block, 'VARIABLE', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = variable + ' = ' + value + '\n';
    return code;
  };

  Python['data_variable_add'] = function(block) {
    const variable = Python.valueToCode(block, 'VARIABLE', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = variable + ' += ' + value + '\n';
    return code;
  };

  Python['data_list_index'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const index = Python.valueToCode(block, 'INDEX', Python.ORDER_ATOMIC);
    const code = list + '[' + index + ']';
    return [code, Python.ORDER_MEMBER]
  };

  Python['data_list_append'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = list + '.append(' + value + ')';
    return [code, Python.ORDER_FUNCTION_CALL]
  };

  Python['data_list_pop'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const index = Python.valueToCode(block, 'INDEX', Python.ORDER_ATOMIC);
    const code = list + '.append(' + index + ')';
    return [code, Python.ORDER_FUNCTION_CALL]
  };

  Python['data_list_put_in'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const index = Python.valueToCode(block, 'INDEX', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = list + '.insert(' + index + ', ' + value + ')';
    return [code, Python.ORDER_FUNCTION_CALL]
  };

  Python['data_list_set_index'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const index = Python.valueToCode(block, 'INDEX', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = list + '[' + index + '] = ' + value;
    return [code, Python.ORDER_NONE]
  };

  Python['data_list_length'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const code = 'len(' + list + ')';
    return [code, Python.ORDER_FUNCTION_CALL]
  };

  Python['data_list_have'] = function(block) {
    const list = Python.valueToCode(block, 'LIST', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = value + ' in ' + list;
    return [code, Python.ORDER_NONE]
  };

  Python['function_call'] = function(block) {
    const function_ = Python.valueToCode(block, 'FUNCTION', Python.ORDER_ATOMIC);
    const code = function_ + '()';
    return [code, Python.ORDER_NONE]
  }

  // 거래 블록
  Python['trade_buy'] = function(block) {
    const investment = block.getFieldValue('INVESTMENT');
    const volume = Python.valueToCode(block, 'VOLUME', Python.ORDER_ATOMIC);
    const code = 'order(symbol(' + investment + '), ' + volume + ')\n'
                + 'buying()';
    return code;
  };

  Python['trade_sell'] = function(block) {
    const investment = block.getFieldValue('INVESTMENT');
    const volume = Python.valueToCode(block, 'VOLUME', Python.ORDER_ATOMIC);
    const code = 'order(symbol(' + investment + '), ' + volume + ')\n'
        + 'selling()';
    return code;
  };

  Python['trade_rebalance'] = function() {
    const code = 'print(\'random code!\')';
    return code;
  }

  Python['trade_is_selling'] = function() {
    const code = 'print(\'trade is selling?\')\n';
    return code;
  };

  Python['trade_my_budget'] = function() {
    const code = 'print(\'my budget\')\n';
    return code;
  };

  Python['trade_my_coin'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_trade_info'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_trade_calc_mid'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_trade_calc'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_time_value'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_SMA'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_EMA'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_sum'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_diff_amount'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_rate'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_max'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_calc_min'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_moving_MACD'] = function() { // talib : MACD()
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_moving_MACD_SIG'] = function() { // talib : MA(MACD())
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_moving_MACD_OSC'] = function() { // MACD() - MA(MACD())
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_moving_ADX'] = function() { // ADX()
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_volume_VWAP'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_volume_OBV'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_volume_CMF'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };

  Python['trade_volume_VWAP'] = function() {
    const code = 'print(\'my coin\')\n';
    return code;
  };


}