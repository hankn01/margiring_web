/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Blockly from "blockly"

// TODO: Assemble JavaScript into code variable.

export function defineBlockGenerator() {
  Blockly.JavaScript['event_program_started'] = function(block) {
    let code = 'print(\'random code!\')\n';
    return code;
  };
}