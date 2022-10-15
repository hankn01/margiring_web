import { createContext } from "react";

const BacktestModalContext = createContext({
  ShowModal: false,
  setShowModal: null,
});

export default BacktestModalContext;
