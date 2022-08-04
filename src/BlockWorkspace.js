import React, { useEffect } from 'react';
import Blockly from "blockly";
//import { BlocklyWorkspace } from 'react-blockly';

function BlockWorkspace() {
    useEffect(() => {
        Blockly.inject("blocklyDiv", {
            toolbox: document.getElementById("toolbox")
        });
    });

    return (
        <div>
            <div id="blocklyDiv" style={{width: "1024px", height: "600px"}}></div>

            <xml id="toolbox" style={{display: "none"}}>
            <category name="Loops" colour="%{BKY_LOOPS_HUE}">
                <block type="controls_repeat_ext">
                    <value name="TIMES">
                        <block type="math_number">
                            <field name="NUM">10</field>
                        </block>
                    </value>
                </block>
                <block type="controls_whileUntil"></block>
            </category>
            <category name="Math" colour="%{BKY_MATH_HUE}">
                <block type="math_number">
                    <field name="NUM">123</field>
                </block>
            </category>
            <category name="Text" colour="%{BKY_TEXTS_HUE}">
                <block type="text"></block>
                <block type="text_print"></block>
            </category>
        </xml>

        </div>
    );
}

export default BlockWorkspace;