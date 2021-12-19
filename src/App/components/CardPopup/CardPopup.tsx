import React, { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { StyledInput } from "../Input";

import {
  ICardPopupProps,
  Icons,
  Priorities,
  Status,
  Tags,
} from "../../types/domain";
import { enumToArray, formatDate } from "../../utils";
import { popupState, tasksListState } from "../../utils/recoil";
import { InputVariants } from "../../types/domain";
import {
  createFieldEditSetter,
  createFieldSetter,
  createTaskEditor,
  everythingIsEditing,
  handleTagClick,
  nothingIsEditing,
} from "./helpers";

import {
  PopupContent,
  StyledSelect,
  TaskTitlePopup,
  TaskBodyPopup,
  TagsSection,
  TagsWrapper,
  Tag,
  ControlButton,
  MetaInfo,
  TaskCreationDate,
  UserPhoto,
  FieldWrapper,
  BodyEditBtnsWrapper,
  SaveChangesButton,
} from "./styles";
import photo from "./img/photo1.png";
import photo2 from "./img/photo2.jpeg";

const CardPopup = ({ taskData, taskIndexInList }: ICardPopupProps) => {
  const setPopupTaskState = useSetRecoilState(popupState);
  const [tasksList, setTasksList] = useRecoilState(tasksListState);
  const [newData, setNewData] = useState({ ...taskData });
  const refPopupContent = useRef<HTMLDivElement>(null);

  const [isEditingField, setIsEditingField] = useState(
    taskIndexInList >= 0 ? nothingIsEditing : everythingIsEditing
  );
  const { title, priority, body, date, tags, status } = newData;

  const setFieldValue = createFieldSetter(setNewData, newData);
  const editingField = createFieldEditSetter(setIsEditingField, isEditingField);
  const editTask = createTaskEditor(setTasksList, tasksList, taskIndexInList);

  function closePopup() {
    setPopupTaskState({ taskId: taskData.id, isOpen: false });
  }

  const nothingChanged = JSON.stringify(taskData) === JSON.stringify(newData);

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
            <ControlButton
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
            <ControlButton
              onClick={() => editingField("title", false)}
              type={Icons.check}
            />
            <ControlButton
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
            <ControlButton
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
            <ControlButton
              onClick={() => editingField("body", false)}
              type={Icons.check}
            />
            <ControlButton
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
            <ControlButton
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
                    handleTagClick(setFieldValue, tags, tag);
                  }}
                >
                  {Tags[tag]}
                </Tag>
              ))}
            </TagsWrapper>
            <ControlButton
              onClick={() => {
                editingField("tags", false);
              }}
              type={Icons.check}
            />
            <ControlButton
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
          <UserPhoto src={photo} />
          <UserPhoto src={photo2} />
        </div>
      </MetaInfo>

      <SaveChangesButton
        onClick={() => {
          editTask(newData);
          closePopup();
        }}
        disabled={nothingChanged}
      >
        Save changes
      </SaveChangesButton>
    </PopupContent>
  );
};

export default CardPopup;
