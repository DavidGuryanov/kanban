import { styled } from "@linaria/react";
import { Icons, Priorities, Status, Tags } from "../../types/domain";
import { prioritiesColorMap, tagsColorMap } from "../Task/styles";
import checkIcon from "./img/checkmark.svg";
import cancelIcon from "./img/cancel.svg";
import changeIcon from "./img/change.svg";

const iconsMap = {
  [Icons.check]: checkIcon,
  [Icons.cancel]: cancelIcon,
  [Icons.edit]: changeIcon,
};

export const PopupContent = styled.section`
  height: 100%;
  margin: 10px 10px 35px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledSelect = styled.select<{ type: Priorities | Status }>`
  background-color: ${({ type }) =>
    type ? prioritiesColorMap[type].bg : "#ffbd2e"};
  color: ${({ type }) => (type ? prioritiesColorMap[type].text : "#a46306")};
  padding: 2px 0;
  text-align: center;
  border: none;
  border-radius: 20px;
  width: fit-content;
  font-size: 0.8em;
  margin-bottom: 8px;

  &:focus {
    outline: none;
  }
`;

export const FieldWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export const TaskTitlePopup = styled.h4`
  font-weight: 500;
  font-size: 1.3em;
  line-height: 18px;
  color: #221c1d;
  margin: 15px 0;
  padding-left: 8px;
  display: inline-block;
`;

export const TaskBodyPopup = styled.p`
  font-weight: 500;
  font-size: 1.1em;
  color: #221c1db0;
  margin-bottom: 8px;
  min-height: 110px;
  padding: 8px;
  width: 100%;
  border: 1px solid #dddddd;
`;

export const BodyEditBtnsWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 5px;
`;

export const TagsSection = styled.div`
  display: flex;
  align-items: center;
`;

export const TagsWrapper = styled.ul``;

export const Tag = styled.li<{ type: Tags; selected?: boolean }>`
  background-color: ${({ type }) => tagsColorMap[type].bg};
  color: ${({ type }) => tagsColorMap[type].text};
  display: inline-block;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  padding: 4px;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;

export const ControlButton = styled.span<{ type: Icons }>`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: ${({ type }) => {
    return `url(${iconsMap[type]})`;
  }};
  background-size: contain;
  margin: 0 4px;
  cursor: pointer;
  transition: transform 0.5s;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
export const TaskBody = styled.p`
  font-weight: 500;
  font-size: 0.9em;
  color: #221c1db0;
  margin-bottom: 8px;
`;

export const TaskCreationDate = styled(TaskBody)`
  margin-top: 4px;
`;

export const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  margin-left: 10px;
  border: solid #dedede 2px;
`;

export const SaveChangesButton = styled.button`
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #29c542;
  width: 100%;
  height: 30px;
  color: #016201;
  font-family: inherit;
  cursor: pointer;
  opacity: 0.9;

  &:disabled {
    background-color: #e1ddd9;
    color: #7d7d7d;
    cursor: default;
  }
`;
