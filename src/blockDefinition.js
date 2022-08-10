import Blockly from "blockly";

export function defineBlockInfo() {
  const EVENT_COLOUR = "#27ae60";
  const FLOW_COLOUR = "#70a1ff";
  const TRADE_COLOUR = "#f39c12";
  const BOOL_COLOUR = "#3742fa";
  const CALC_TIME_COLOUR = "#f1c40f";
  const DATA_COLOUR = "58b19f";
  const FUNCTINO_COLOUR = "9b59b6";

  Blockly.defineBlocksWithJsonArray(
    [
      {
        "kind": "block",
        "type": "event_program_started",
        "message0": "프로그램이 시작될 때",
        "nextStatement": null,
        "colour": EVENT_COLOUR,
        "tooltip": "프로그램이 가동될 때 한 번 실행됩니다.",
        "helpUrl": ""
      }
    ]
  )
}