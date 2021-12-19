import React from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {ColumnsProps} from "../../types/domain";
import {popupState, tasksListState,} from "../../utils/recoil";
import {Task} from "../Task";
import {AddNewTaskBtn, ColumnTitle, ColumnWrapper} from "./styles";
import {getRandomNumber} from "../../utils";
import {filterTasks, handleDropEvent} from "../Popup/utils";

export const Columns = ({columnsData}: ColumnsProps) => {
    const [tasksList, setTasksList] = useRecoilState(tasksListState);
    const setIsOpen = useSetRecoilState(popupState);

    return (
        <>
            {columnsData
                .map((column) => {
                    const {columnTitle} = column
                    return (
                        <ColumnWrapper
                            key={columnTitle}
                            onDragOver={(evt) =>
                                evt.preventDefault()
                            }
                            onDrop={(evt) =>
                                handleDropEvent(evt, tasksList, setTasksList, columnTitle)}
                        >
                            <ColumnTitle>{columnTitle}</ColumnTitle>
                            {filterTasks(tasksList, columnTitle).map((task) =>
                                <Task data={task} key={task.id}/>
                            )}
                            <AddNewTaskBtn
                                as={'button'}
                                onClick={() => {
                                    setIsOpen({isOpen: true, taskId: getRandomNumber()});
                                }}
                            >
                                +
                            </AddNewTaskBtn>
                        </ColumnWrapper>
                    );
                })}
        </>
    );
};
