import React, { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { popupState, tasksListState } from "../../utils/recoil";
import {
  Dot,
  DotsWrapper,
  PopupBackdrop,
  PopupWindow,
  PopupWindowHeader,
  PopupWindowTitle,
} from "./styles";
import { TaskCard } from "../TaskCard";
import { Priorities, Status, Tags } from "../../types/domain";
import { getRandomNumber } from "../../utils";
import { TaskTitle } from "../Task/styles";

const emptyTask = {
  title: "",
  body: "",
  priority: Priorities.medium,
  status: Status.todo,
  date: new Date(),
  tags: [] as Tags[],
  id: getRandomNumber(),
  authorId: 14222,
};

export const Popup = () => {
  const [popupTaskState, setPopupTaskState] = useRecoilState(popupState);
  const tasksList = useRecoilValue(tasksListState);
  const selectedTaskIndex = tasksList.findIndex(
    (task) => task.id === popupTaskState.taskId
  );
  const selectedTask =
    selectedTaskIndex >= 0 ? tasksList[selectedTaskIndex] : emptyTask;
  const ref = useRef<HTMLDivElement>(null);

  function closePopup() {
    setPopupTaskState({ ...popupTaskState, isOpen: false });
  }

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);
  return (
    <PopupBackdrop
      onClick={(evt) => {
        if (ref.current === evt.target) {
          closePopup();
        }
      }}
      onKeyUp={(evt) => {
        if (evt.key === "Escape") {
          closePopup();
        }
      }}
      ref={ref}
      tabIndex={-1}
    >
      <PopupWindow>
        <PopupWindowHeader>
          <DotsWrapper>
            <Dot type="button" onClick={closePopup} />
            <Dot />
            <Dot />
          </DotsWrapper>
          <PopupWindowTitle>
            <TaskTitle noMargin>
              {selectedTask.title ? `Edit task` : "Create new task"}
            </TaskTitle>
          </PopupWindowTitle>
        </PopupWindowHeader>

        <TaskCard taskData={selectedTask} taskIndexInList={selectedTaskIndex} />
      </PopupWindow>
    </PopupBackdrop>
  );
};
