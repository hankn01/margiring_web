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
    const code = 'print(\'initialize\')\n';
    console.log(block);
    return code;
  };

  Python['event_program_on_working'] = function() {
    const code = 'print(\'handle_data\')\n';
    return code;
  };

  Python['event_signal_recieved'] = function() {
    const code = 'print(\'signal recieved\')\n';
    return code;
  };

  Python['event_send_signal'] = function() {
    const code = 'print(\'send signal\')\n';
    return code;
  };

  Python['event_await_signal'] = function() {
    const code = 'print(\'await signal\')\n';
    return code;
  };

  Python['event_selling'] = function() {
    const code = 'print(\'selling\')\n';
    return [code, Python.ORDER_NONE]
  };
  
  Python['event_buying'] = function() {
    const code = 'print(\'buying\')\n';
    return [code, Python.ORDER_NONE]
  };

  Python['event_trade_info'] = function() {
    const code = 'print(\'trade information\')\n';
    return code;
  };
  // 흐름 블록
  Python['flow_if'] = function(block) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const statement = Python.statementToCode(block, 'STATEMENT')
                        || Python.INDENT + 'pass';
    const code = 'if ' + condition + ':\n'
                + statement;
    return code;
  };

  Python['flow_if_else'] = function(block) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const if_statement = Python.statementToCode(block, 'IF_STATEMENT')
                        || Python.INDENT + 'pass';
    const else_statement = Python.statementToCode(block, 'ELSE_STATEMENT')
                        || Python.INDENT + 'pass';
    const code = 'if ' + condition + ':\n'
                + if_statement + '\n'
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
                    || Python.INDENT + 'pass';
    const code = 'for _ in range(' + count + '):\n'
                + statement;
    return code;
  };

  Python['flow_repeat'] = function(block) {
    const statement = Python.statementToCode(block, 'STATEMENT')
                    || Python.INDENT + 'pass';
    const code = 'while True:\n'
                + statement;
    return code;
  };

  Python['flow_while'] = function(block) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const statement = Python.statementToCode(block, 'STATEMENT')
                        || Python.INDENT + 'pass';
    const code = 'while ' + condition + ':\n'
                + statement;
    return code;
  };

  Python['flow_break'] = function() {
    const code = 'break';
    return code;
  };
  // 거래 블록
  Python['trade_buy'] = function(block) {
    const investment = Python.valueToCode(block, 'INVESTMENT', Python.ORDER_ATOMIC);
    const volume = Python.valueToCode(block, 'VOLUME', Python.ORDER_ATOMIC);
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const code = 'order(symbol('
                  + investment + '), '
                  + volume + ')\n'
                  + 'condition = ' + condition;
    return code;
  };

  Python['trade_sell'] = function(block) {
    const investment = Python.valueToCode(block, 'INVESTMENT', Python.ORDER_ATOMIC);
    const volume = Python.valueToCode(block, 'VOLUME', Python.ORDER_ATOMIC);
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_ATOMIC);
    const code = 'order(symbol('
                  + investment + '), -'
                  + volume + ')\n'
                  + 'condition = ' + condition;
    return code;
  };

  Python['trade_is_selling'] = function() {
    const code = 'print(\'trade is selling?\')\n';
    return code;
  };

  Python['trade_is_settled'] = function() {
    const code = 'True\n';
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
    const code = 'print(\'trade information\')\n';
    return code;
  };

  Python['trade_stock_info'] = function() {
    const code = 'print(\'stock information\')\n';
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
  // 계산/시간 블록
  Python['time_now'] = function() {
    const code = 'datetime.datetime.now().strftime(\'%Y/%m/%d %H:%M\')';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['time_minutes_ago'] = function(block) {
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = '(datetime.datetime.now() + '
                + 'datetime.timedelta(minutes=-'
                + value
                + ').strftime(\'%Y/%m/%d %H:%M\')';
    return [code, Python.ORDER_ATOMIC]
  };

  Python['time_specific'] = function(block) {
    const time = Python.valueToCode(block, 'TIME', Python.ORDER_ATOMIC);
    const format_data = '%Y/%m/%d %H:%M';
    const code = 'datetime.strptime(' + time + ', ' + format_data + ')';
    return [code, Python.ORDER_ATOMIC]
  };

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
    const code = variable + ' = ' + value;
    return [code, Python.ORDER_NONE]
  };

  Python['data_variable_add'] = function(block) {
    const variable = Python.valueToCode(block, 'VARIABLE', Python.ORDER_ATOMIC);
    const value = Python.valueToCode(block, 'VALUE', Python.ORDER_ATOMIC);
    const code = variable + ' += ' + value;
    return [code, Python.ORDER_NONE]
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
}