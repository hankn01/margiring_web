/* eslint-disable */

//import React, { createContext, useState } from 'react'; // createContext를 불러온다.

/*
//하나의 Context를 생성합니다.
export const LoginModalVisibleStore = createContext(null);

const LoginModalContext = (props) => {

    const [ LoginModalVisible, setLoginModalVisible ] = useState(); // 유저 이름
    const ModalOpen = () => setLoginModalVisible(true);
    const ModalClose = () => setLoginModalVisible(false);
    
    return (<LoginModalVisibleStore.Provider value={{LoginModalVisible, ModalOpen, ModalClose}}>{props.children}</LoginModalVisibleStore.Provider>);
};

export default LoginModalContext;
*/

//const LoginModalContext = createContext({ModalOpen: false});
//export default LoginModalContext;

import React, {createContext} from "react";

const LoginModalContext = createContext({
    ShowModal: false,
    setShowModal: null
});

export default LoginModalContext;