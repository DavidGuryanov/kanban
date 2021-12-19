import React from "react";
import {
    useRecoilState,
} from "recoil";
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

    const [isOpen, setIsOpen] = useRecoilState(popupState);

    return (
        <BoardWrapper>
            <BoardTitle>Simple board</BoardTitle>
            <BoardSubTitle>to keep track of your work</BoardSubTitle>
            <ColumnsWrapper>
                <Columns columnsData={columns}/>
            </ColumnsWrapper>
            {isOpen.isOpen && <Popup/>}
        </BoardWrapper>
    );
};

export default App