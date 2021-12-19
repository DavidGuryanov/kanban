import React from "react";
import {useRecoilState} from "recoil";
import {
    ColumnsProps,
    ITask,
    Status,
} from "../../types/domain";
import {
    popupState,
    tasksListState,
} from "../../utils/recoil";
import {ColumnTitle, ColumnWrapper, AddNewTaskBtn} from "./styles";
import {replaceItemAtIndex} from "../../utils";

export const Columns = ({columnsData}: ColumnsProps) => {
    const [tasksList, setTasksList] = useRecoilState(tasksListState);
    const filterTasks = (tasks: ITask[], columnTitle: Status) =>
        tasks.filter((task) => task.status === columnTitle);
    const [isOpen, setIsOpen] = useRecoilState(popupState);
    const lastId = tasksList[tasksList.length - 1].id;
    return (
        <>
            {columnsData
                .sort((aCol, bCol) => aCol.order - bCol.order)
                .map((column) => {
                    return (
                        <ColumnWrapper
                            key={column.columnTitle}
                            onDragOver={(evt) => {
                                evt.preventDefault()
                            }}
                            onDrop={(evt) => {
                                const dragTaskId = evt.dataTransfer.getData("id");
                                const selectedTaskIndex = tasksList.findIndex(
                                    (task) => task.id === +dragTaskId
                                );
                                const newList = replaceItemAtIndex(
                                    tasksList,
                                    selectedTaskIndex,
                                    {
                                        ...tasksList[selectedTaskIndex],
                                        status: column.columnTitle,
                                    }
                                );
                                setTasksList(newList)

                                console.log(evt.dataTransfer.getData("id"), " DROP");
                            }}
                        >
                            <ColumnTitle>{column.columnTitle}</ColumnTitle>
                            {filterTasks(tasksList, column.columnTitle).map((task) => (
                                <p>Task goes here</p>
                            ))}
                            <AddNewTaskBtn
                                onClick={() => {
                                    setIsOpen({isOpen: true, taskId: lastId + 1});
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
