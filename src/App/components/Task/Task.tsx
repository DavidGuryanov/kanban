import React from "react";
import {useRecoilState} from "recoil";
import {ITaskProps, Tags} from "../../types/domain";
import {formatDate} from "../../utils";
import {popupState} from "../../utils/recoil";
import {
    PriorityBubble,
    Tag,
    TagsWrapper,
    TaskBody,
    TaskCreationDate,
    TaskTitle,
    TaskWrapper,
} from "./styles";

export function renderTags(tags: Tags[]) {
    return (
        <TagsWrapper>
            {tags.map((str) => (
                <Tag type={str} key={str} selected={true}>
                    {str}
                </Tag>
            ))}
        </TagsWrapper>
    );
}

export const Task = ({data}: ITaskProps) => {
    const {title, body, priority, status, date, id, authorId, tags} = data;
    const [isOpen, setIsOpen] = useRecoilState(popupState);
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
            <TaskTitle onClick={() => setIsOpen({isOpen: true, taskId: data.id})}>
                {title}
            </TaskTitle>
            <TaskBody>{body}</TaskBody>
            {tags ? renderTags(tags) : null}
            <TaskCreationDate>{formatDate(date)}</TaskCreationDate>
        </TaskWrapper>
    );
};

