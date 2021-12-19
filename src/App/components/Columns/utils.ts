import { ITask, Status } from "../../types/domain";
import React from "react";
import { SetterOrUpdater } from "recoil";
import { replaceItemAtIndex } from "../../utils";

export const filterTasks = (tasks: ITask[], columnTitle: Status) =>
  tasks.filter((task) => task.status === columnTitle);

export function handleDropEvent(
  evt: React.DragEvent<HTMLElement>,
  tasksList: ITask[],
  setTasksList: SetterOrUpdater<any>,
  title: Status
) {
  const selectedTaskIndex = tasksList.findIndex(
    (task) => task.id === +evt.dataTransfer.getData("id")
  );
  setTasksList(
    replaceItemAtIndex(tasksList, selectedTaskIndex, {
      ...tasksList[selectedTaskIndex],
      status: title,
    })
  );
}
