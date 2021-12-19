import React from "react";
import {useSetRecoilState} from "recoil";

import {popupState} from "../../utils/recoil";
import {ITaskProps} from "../../types/domain";
import {formatDate} from "../../utils";

import {
    PriorityBubble,
    Tag,
    TagsList,
    TaskBody,
    TaskCreationDate,
    TaskTitle,
    TaskWrapper,
} from "./styles";

const Task = ({taskData}: ITaskProps) => {
    const {title, body, priority, date, id, tags} = taskData;
    const setPopupState = useSetRecoilState(popupState);

    return (
        <TaskWrapper
            draggable
            onDragStart={(evt) => {
                evt.dataTransfer.setData("id", id.toString());
            }}
        >
            <PriorityBubble type={priority}>
                {priority}
            </PriorityBubble>
            <TaskTitle onClick={() => setPopupState({isOpen: true, taskId: id})}>
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

export default Task
