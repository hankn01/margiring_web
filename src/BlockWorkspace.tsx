// @ts-nocheck
// Blockly의 원활한 활용을 위해 Type Check를 비활성화하였습니다.

import React, { useEffect } from 'react';
import Blockly from "blockly";
import toolbox from "./BlockDefinition.json";

//주의: BlocklyWorkspace와 이름 혼동하지 않도록 개발 시 주의하시기 바랍니다.

function BlockWorkspace() {
    useEffect(() => {
        Blockly.inject("blocklyDiv", {
            toolbox: toolbox,
        });
    });

    return (
        <div>
            <div id="blocklyDiv" style={{width: "1024px", height: "1080px"}}></div>
            <xml id="toolbox" style={{display: "none"}}></xml>
        </div>
    );
}

export default BlockWorkspace;