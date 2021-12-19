import React from "react";
import {useRecoilValue} from "recoil";
import {Columns} from "./components/Columns";
import {Popup} from "./components/Popup";
import {
    BoardSubTitle,
    BoardTitle,
    BoardWrapper,
    ColumnsWrapper,
} from "./styles";
import {popupState} from "./utils/recoil";
import columns from "./data/defaultColumns";

const App = () => {
    const isOpen = useRecoilValue(popupState)
    return (
        <BoardWrapper>
            <header>
                <BoardTitle>Simple board</BoardTitle>
                <BoardSubTitle>to keep track of your work</BoardSubTitle>
            </header>
            <ColumnsWrapper>
                <Columns columnsData={columns}/>
            </ColumnsWrapper>
            {isOpen.isOpen && <Popup/>}
        </BoardWrapper>
    );
};

export default App