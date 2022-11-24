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
import Cookies from 'universal-cookie';

const cookies = new Cookies();
//주의: BlocklyWorkspace와 이름 혼동하지 않도록 개발 시 주의하시기 바랍니다.
const TempUserToken = cookies.get("userToken");

let RecordAlgorithm;
let SendAlgorithm;

function SaveWS() {
  const saveWorkspace = Blockly.serialization.workspaces.save(
    Blockly.common.getMainWorkspace()
  );
  console.log(JSON.stringify(saveWorkspace));
  setSendA(JSON.stringify(saveWorkspace));
}
function BlockWorkspace_Logged(id) {
  const [BWorkspace, setBWorkspace] = useState<Blockly.WorkspaceSvg>();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [Area, setArea] = useState();
  const [UserToken, setUserToken] = useState();
  const [BlockCode, setBlockCode] = useState();
  const [CodeHash, setCodeHash] = useState("");
  const [AlgorithmCode, setAlgorithmCode] = useState();
  const [SendA, setSendA] = useState();

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
    let AlgoCode;
    console.log(id.id);
    
    console.log(TempUserToken);
    axios.get("http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+id.id,
    { headers: {
      Authorization: 'Bearer '+TempUserToken
  }}
    ).then((response) => {
      
      AlgoCode = response.data;
      //console.log(AlgoCode);
      RecordAlgorithm = AlgoCode;
      console.log(RecordAlgorithm.code);
    }).catch((error) => {
      console.log(error);
    })

    
  

/*
    axios.get(
      "http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+CodeHash, {headers: {
          Authorization: 'Bearer '+UserToken
      }}
    )
    .then((response) => {
      console.log(response.code);
      setBlockCode(response.code);
    })
*/
      
window.localStorage.getItem("SAVE_WORK_SPACE_LOGIN"+id.id) &&
      Blockly.serialization.workspaces.load(
        JSON.parse(window.localStorage.getItem("SAVE_WORK_SPACE_LOGIN"+id.id)),
        BWorkspaceVar
      );
  BWorkspaceVar.render();
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
      

      let saveWorkspace = Blockly.serialization.workspaces.save(
        Blockly.common.getMainWorkspace()
      );

   
      window.localStorage.setItem(
        "SAVE_WORK_SPACE_LOGIN"+id.id,
        JSON.stringify(saveWorkspace)
      );
      console.log("saveWorkspace : ", saveWorkspace);

      //console.log(JSON.stringify(saveWorkspace));
      setSendA(JSON.stringify(saveWorkspace));



      //console.log(SendA);
      console.log(RecordAlgorithm.progname);
      console.log(RecordAlgorithm.publicview);
      console.log(RecordAlgorithm.result);
      console.log(RecordAlgorithm.owner);
      console.log(id.id);
   if(SendA)
   {
    axios({
      method: 'put',
      url: "http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+id.id,
      headers: {
        Authorization: 'Bearer '+TempUserToken
    }, data: {
      "code": SendA,
      "progname": RecordAlgorithm.progname,
      "publicview": RecordAlgorithm.publicview,
      "result": RecordAlgorithm.result,
      "owner": RecordAlgorithm.owner,
    }

    }).then((response) => {
      console.log(response);
    }).catch((error) => {console.log(error);})
    //console.log(saveWorkspace);
   }

      window.removeEventListener("resize", handelResize);
    };
  }, []);
  
  useEffect(() => {
    let inid = setInterval(() => {
      
      let saveWorkspace = Blockly.serialization.workspaces.save(
        Blockly.common.getMainWorkspace()
      );
      //console.log(JSON.stringify(saveWorkspace));
      setSendA(JSON.stringify(saveWorkspace));



      //console.log(SendA);
      console.log(RecordAlgorithm.progname);
      console.log(RecordAlgorithm.publicview);
      console.log(RecordAlgorithm.result);
      console.log(RecordAlgorithm.owner);
      console.log(id.id);
   if(SendA)
   {
    axios({
      method: 'put',
      url: "http://backendserver-env.eba-gg774wd2.ap-northeast-2.elasticbeanstalk.com/pycode/"+id.id,
      headers: {
        Authorization: 'Bearer '+TempUserToken
    }, data: {
      "code": SendA,
      "progname": RecordAlgorithm.progname,
      "publicview": RecordAlgorithm.publicview,
      "result": RecordAlgorithm.result,
      "owner": RecordAlgorithm.owner,
    }

    }).then((response) => {
      console.log(response);
    }).catch((error) => {console.log(error);})
    //console.log(saveWorkspace);
   }


    }, 1000);
    return () => clearInterval(inid);
    
  });
  


  console.log(id.id);
  console.log(TempUserToken);
  console.log(RecordAlgorithm);
  console.log(SendA);
  
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
