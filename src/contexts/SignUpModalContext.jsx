import {createContext} from "react";

const SignUpModalContext = createContext({
    ShowModal: false,
    setShowModal: null
});

export default SignUpModalContext;