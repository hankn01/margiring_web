/* eslint-disable */
// @ts-nocheck
// Blockly의 원활한 활용을 위해 Type Check를 비활성화하였습니다.

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Blockly from "blockly";
import { debounce } from "lodash";
import { defineBlockInfo } from "./blockDefinition";
import { defineBlockGenerator } from "./blockGenerator";
import toolbox from "./toolbox.json";
import { BlocklyWorkspace } from "react-blockly";
import { getAllByLabelText } from "@testing-library/react";
import axios from "axios";
import {useLocation} from "react-router-dom";


const cookies = new Cookies();
//주의: BlocklyWorkspace와 이름 혼동하지 않도록 개발 시 주의하시기 바랍니다.




function BlockWorkspace_Logged() {
  const [BWorkspace, setBWorkspace] = useState<Blockly.WorkspaceSvg>();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [Area, setArea] = useState();
  const [UserToken, setUserToken] = useState();
  const [BlockCode, setBlockCode] = useState();
  const [CodeHash, setCodeHash] = useState("");
  

  console.log("BWorkspace : ", BWorkspace);

  useEffect(() => {
    defineBlockInfo();
    defineBlockGenerator();
    const handelResize = () => {
      console.log("width height", window.innerWidth, window.innerHeight);
      setWidth(window.innerWidth);
      
      setHeight(window.innerHeight);

      Blockly.svgResize(BWorkspace);
    };

    console.log("toolbox : ", toolbox);

    const BWorkspaceVar = Blockly.inject("blocklyDiv", {
      toolbox,
      grid: { spacing: 20, length: 2, colour: "#ccc", snap: true },
      trashcan: true,
    });
    //let BWorkspaceDeepCopy = BWorkspaceVar.products.map(item => ({...item}));
    setBWorkspace({ BWorkspaceVar });

    console.log(window.location.pathname);

    axios.get(
      "http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+CodeHash, {headers: {
          Authorization: 'Bearer '+UserToken
      }}
    )
    .then((response) => {
      console.log(response.code);
      setBlockCode(response.code);
    })

      Blockly.serialization.workspaces.load(
        JSON.parse(BlockCode),
        BWorkspaceVar
      );
    // BWorkspace.registerButtonCallback('CNV', function(button){alert("Fs");});
    BWorkspaceVar.registerButtonCallback("CNV", function (button) {
      Blockly.Variables.createVariableButtonHandler(
        BWorkspaceVar,
        null,
        "Number"
      );
    });

    window.addEventListener("resize", handelResize);
    return () => {
      const saveWorkspace = Blockly.serialization.workspaces.save(
        Blockly.common.getMainWorkspace()
      );
      window.localStorage.setItem(
        "SAVE_WORK_SPACE",
        JSON.stringify(saveWorkspace)
      );
      console.log("saveWorkspace : ", saveWorkspace);
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return (
    <div>
      <div
        id="blocklyDiv"
        style={{ width: width - 480 + "px", height: height - 120 + "px" }}
      ></div>
      <xml id="toolbox" style={{ display: "none" }}></xml>
    </div>
  );
}

export default BlockWorkspace_Logged;
