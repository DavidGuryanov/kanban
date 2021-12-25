import React from "react";
import { useSetRecoilState } from "recoil";

import { popupState } from "../../utils/recoil";
import { ITaskProps } from "../../types/domain";
import { formatDate } from "../../utils";

import {
  OpenTaskIcon,
  PriorityBubble,
  Tag,
  TagsList,
  TaskBody,
  TaskCreationDate, TaskHeader,
  TaskTitle,
  TaskWrapper,
} from "./styles";
import eyeIcon from './img/eye.svg'


const Task = ({ taskData }: ITaskProps) => {
  const { title, body, priority, date, id, tags } = taskData;
  const setPopupState = useSetRecoilState(popupState);

  return (
    <TaskWrapper
      draggable
      onDragStart={(evt) => {
        evt.dataTransfer.setData("id", id.toString());
      }}
    >
      <TaskHeader>
        <PriorityBubble type={priority}>{priority}</PriorityBubble>
        <OpenTaskIcon src={eyeIcon} onClick={() => setPopupState({ isOpen: true, taskId: id })}/>
      </TaskHeader>
      <TaskTitle onClick={() => setPopupState({ isOpen: true, taskId: id })}>
        {title}
      </TaskTitle>
      <TaskBody>{body}</TaskBody>
      <TagsList>
        {tags.map((str) => (
          <Tag type={str} key={str} selected={true}>
            {str}
          </Tag>
        ))}
      </TagsList>
      <TaskCreationDate>{formatDate(date)}</TaskCreationDate>
    </TaskWrapper>
  );
};

export default Task;
