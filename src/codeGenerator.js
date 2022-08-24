/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Blockly from "blockly"
import Python from "blockly/python_compressed"

export function generateBlockToCode() {
    let code = "import random\n"
                + "import datetime\n"
                + "import zipline\n"
                + "import pandas\n\n";
    code += Python.workspaceToCode(Blockly.common.getMainWorkspace());
    console.log(code);
}