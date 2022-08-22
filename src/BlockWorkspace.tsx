/* eslint-disable */
// @ts-nocheck
// Blockly의 원활한 활용을 위해 Type Check를 비활성화하였습니다.

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Blockly from "blockly";
import { debounce } from 'lodash';
import { defineBlockInfo } from "./blockDefinition"
import { defineBlockGenerator } from "./blockGenerator";
import toolbox from "./toolbox.json"


//주의: BlocklyWorkspace와 이름 혼동하지 않도록 개발 시 주의하시기 바랍니다.

function BlockWorkspace() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        defineBlockInfo();
        defineBlockGenerator();
        const handelResize = () => {
            console.log("width height", window.innerWidth, window.innerHeight);
            setWidth(window.innerWidth);
        
        };

        
        Blockly.inject("blocklyDiv", {
            toolbox: toolbox,
            grid:
         {spacing: 20,
          length: 2,
          colour: '#ccc',
          snap: true},
          trashcan: true
        });
        
       window.addEventListener("resize", handelResize);
       return () => {
        window.removeEventListener("resize", handelResize);
       }
    });

    return (
        <div>
            <div id="blocklyDiv" style={{width: (width-480)+"px", height: "952px"}}></div>
            <xml id="toolbox" style={{display: "none"}}></xml>
        </div>
    );
}

export default BlockWorkspace;