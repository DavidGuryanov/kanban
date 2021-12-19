import React from "react";
import {Columns} from "./components/Columns";
import {
    BoardSubTitle,
    BoardTitle,
    BoardWrapper,
    ColumnsWrapper,
} from "./styles";
import columns from "./data/defaultColumns";

const App = () => {


    return (
        <BoardWrapper>
            <BoardTitle>Simple board</BoardTitle>
            <BoardSubTitle>to keep track of your work</BoardSubTitle>
            <ColumnsWrapper>
                <Columns columnsData={columns}/>
            </ColumnsWrapper>
        </BoardWrapper>
    );
};

export default App