import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import Task from "../Task";

import { popupState, tasksListState } from "../../utils/recoil";
import { filterTasks, handleDropEvent } from "./utils";
import { getRandomNumber } from "../../utils";
import { ColumnsProps } from "../../types/domain";
import { AddNewTaskBtn, ColumnTitle, ColumnWrapper } from "./styles";

const Columns = ({ columnsData }: ColumnsProps) => {
  const [tasksList, setTasksList] = useRecoilState(tasksListState);
  const setPopupState = useSetRecoilState(popupState);

  return (
    <>
      {columnsData.map((column) => {
        const { columnTitle } = column;
        return (
          <ColumnWrapper
            key={columnTitle}
            onDragOver={(evt) => evt.preventDefault()}
            onDrop={(evt) =>
              handleDropEvent(evt, tasksList, setTasksList, columnTitle)
            }
          >
            <ColumnTitle>{columnTitle}</ColumnTitle>
            {filterTasks(tasksList, columnTitle).map((task) => (
              <Task taskData={task} key={task.id} />
            ))}
            <AddNewTaskBtn
              as={"button"}
              onClick={() => {
                setPopupState({ isOpen: true, taskId: getRandomNumber() });
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

export default Columns;
