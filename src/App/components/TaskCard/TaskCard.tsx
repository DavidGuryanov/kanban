import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { Icons, ITask, Priorities, Status, Tags } from "../../types/domain";
import { formatDate } from "../../utils";
import { popupState, tasksListState } from "../../utils/recoil";
import { StyledInput } from "../Input";
import { InputVariants } from "../Input/Input";
import { replaceItemAtIndex } from "../../utils";
import {
  PopupContent,
  StyledSelect,
  TaskTitlePopup,
  TaskBodyPopup,
  TagsSection,
  TagsWrapper,
  Tag,
  ChangeIcon,
  MetaInfo,
  TaskCreationDate,
  UserPhoto,
  FieldWrapper,
  BodyEditBtnsWrapper,
  SaveChangesButton,
} from "./styles";


import photo from "./img/photo1.png";

import photo2 from "./img/photo2.jpeg";

interface IProps {
  taskData: ITask;
  taskIndexInList: number;
}

export const TaskCard = ({ taskData, taskIndexInList }: IProps) => {
  const [popupTaskState, setPopupTaskState] = useRecoilState(popupState);
  const [tasksList, setTasksList] = useRecoilState(tasksListState);

  const refPopupContent = useRef<HTMLDivElement>(null);
  const [newData, setNewData] = useState({ ...taskData });
  const [isEditingField, setIsEditingField] = useState(
    taskIndexInList >= 0
      ? {
          title: false,
          body: false,
          tags: false,
        }
      : {
          title: true,
          body: true,
          tags: true,
        }
  );
  const { title, priority, body, date, authorId, tags, status } = newData;
  function setFieldValue(field: string, value: any) {
    setNewData({ ...newData, [field]: value });
  }
  function editingField(field: string, value = true) {
    setIsEditingField({
      ...isEditingField,
      [field]: value,
    });
  }
  function editTask(newItem: any) {
    let newList;
    if (taskIndexInList >= 0) {
      newList = replaceItemAtIndex(tasksList, taskIndexInList, {
        ...newItem,
      });
    } else {
      newList = [...tasksList, newItem];
    }

    setTasksList(newList);
  }
  function closePopup() {
    setPopupTaskState({ taskId: taskData.id, isOpen: false });
  }
  function enumToArray<EnumType>(someEnum: EnumType) {
    return Object.keys(someEnum) as Array<keyof typeof someEnum>;
  }

  const isSomethingHasChanged =
    taskData.body === newData.body &&
    taskData.title === newData.title &&
    taskData.priority === newData.priority &&
    taskData.status === newData.status &&
    newData.tags.every((tag) => taskData.tags.includes(tag));

  return (
    <PopupContent ref={refPopupContent}>
      <FieldWrapper>
        <StyledSelect
          type={priority}
          value={priority}
          onChange={(evt) => {
            setFieldValue("priority", evt.target.value);
          }}
        >
          {enumToArray(Priorities).map((key) => (
            <option key={Priorities[key]}>{Priorities[key]}</option>
          ))}
        </StyledSelect>

        <StyledSelect
          value={status}
          type={status}
          onChange={(evt) => {
            setFieldValue("status", evt.target.value);
          }}
        >
          {enumToArray(Status).map((key) => (
            <option key={Status[key]}>{Status[key]}</option>
          ))}
        </StyledSelect>
      </FieldWrapper>
      <FieldWrapper>
        {!isEditingField.title ? (
          <>
            <TaskTitlePopup>{title}</TaskTitlePopup>
            <ChangeIcon
              onClick={() => editingField("title")}
              type={Icons.edit}
            />
          </>
        ) : (
          <>
            <StyledInput
              value={title}
              field="title"
              onChange={setFieldValue}
              variant={InputVariants.title}
            />
            <ChangeIcon
              onClick={() => editingField("title", false)}
              type={Icons.check}
            />
            <ChangeIcon
              onClick={() => {
                setFieldValue("title", tasksList[taskIndexInList].title);
                editingField("title", false);
              }}
              type={Icons.cancel}
            />
          </>
        )}
      </FieldWrapper>
      {!isEditingField.body ? (
        <FieldWrapper>
          <TaskBodyPopup>{body}</TaskBodyPopup>
          <BodyEditBtnsWrapper>
            <ChangeIcon
              onClick={() => editingField("body")}
              type={Icons.edit}
            />
          </BodyEditBtnsWrapper>
        </FieldWrapper>
      ) : (
        <FieldWrapper>
          <StyledInput
            value={body}
            field="body"
            onChange={setFieldValue}
            variant={InputVariants.text}
          />
          <BodyEditBtnsWrapper>
            <ChangeIcon
              onClick={() => editingField("body", false)}
              type={Icons.check}
            />
            <ChangeIcon
              onClick={() => {
                setFieldValue("body", tasksList[taskIndexInList].body);
                editingField("body", false);
              }}
              type={Icons.cancel}
            />
          </BodyEditBtnsWrapper>
        </FieldWrapper>
      )}
      <TagsSection>
        {!isEditingField.tags ? (
          <>
            <TagsWrapper>
              {tags.map((str) => (
                <Tag type={str} key={str} selected>
                  {str}
                </Tag>
              ))}
            </TagsWrapper>
            <ChangeIcon
              onClick={() => editingField("tags")}
              type={Icons.edit}
            />
          </>
        ) : (
          <>
            <TagsWrapper>
              {enumToArray(Tags).map((tag) => (
                <Tag
                  type={Tags[tag]}
                  key={Tags[tag]}
                  selected={!!tags.find((el) => el === Tags[tag])}
                  onClick={() => {
                    if (!tags.find((el) => el === Tags[tag])) {
                      setFieldValue("tags", [...tags, Tags[tag]]);
                    } else {
                      const tagInd = tags.findIndex((el) => el === Tags[tag]);
                      const newTags = [...tags];
                      newTags.splice(tagInd, 1);
                      setFieldValue("tags", newTags);
                    }
                  }}
                >
                  {Tags[tag]}
                </Tag>
              ))}
            </TagsWrapper>
            <ChangeIcon
              onClick={() => {
                editingField("tags", false);
                console.log(
                  newData.tags,
                  taskData.tags,
                  newData.tags.every((tag) => taskData.tags.includes(tag))
                );
              }}
              type={Icons.check}
            />
            <ChangeIcon
              onClick={() => {
                setFieldValue("tags", tasksList[taskIndexInList].tags);
                editingField("tags", false);
              }}
              type={Icons.cancel}
            />
          </>
        )}
      </TagsSection>

      <MetaInfo>
        <TaskCreationDate>{formatDate(date)}</TaskCreationDate>
        <div>
          <UserPhoto src={photo}></UserPhoto>
          <UserPhoto src={photo2}></UserPhoto>
        </div>
      </MetaInfo>

      <SaveChangesButton
        onClick={() => {
          //   newData.priority = Priorities.critical
          //   newData.status = Status.todo
          editTask(newData);
          closePopup();
        }}
        disabled={isSomethingHasChanged}
      >
        Save changes
      </SaveChangesButton>
    </PopupContent>
  );
};
