import React from "react";
import { useRecoilValue } from "recoil";

import Columns from "./components/Columns";
import Popup from "./components/Popup";

import { popupState } from "./utils/recoil";
import columnData from "./data/defaultColumns";

import {
  BoardSubTitle,
  BoardTitle,
  BoardWrapper,
  ColumnsWrapper,
} from "./styles";

const App = () => {
  const isOpen = useRecoilValue(popupState);
  return (
    <BoardWrapper>
      <header>
        <BoardTitle>Simple board</BoardTitle>
        <BoardSubTitle>to keep track of your work</BoardSubTitle>
      </header>
      <ColumnsWrapper>
        <Columns columnsData={columnData} />
      </ColumnsWrapper>
      {isOpen.isOpen && <Popup />}
    </BoardWrapper>
  );
};

export default App;
