import { styled } from "@linaria/react";
import { Priorities, Status, Tags } from "../../types/domain";

export const prioritiesColorMap = {
  [Priorities.low]: { bg: "#B8EBB0", text: "#221C1D" },
  [Priorities.medium]: { bg: "#F0CA81", text: "#221C1D" },
  [Priorities.height]: { bg: "#DE1D3E", text: "#fff" },
  [Priorities.critical]: { bg: "#f50b32", text: "#fff" },
  [Status.todo]: { bg: "#9e9e9e", text: "#fff" },
  [Status.inProgress]: { bg: "#9e9e9e", text: "#fff" },
  [Status.done]: { bg: "#9e9e9e", text: "#fff" },
};

export const tagsColorMap = {
  [Tags.ios]: { bg: "#000000a9", text: "rgb(245, 245, 247)" },
  [Tags.mobile]: { bg: "#de1d6eb5", text: "#fff" },
  [Tags.web]: { bg: "#3ddc85b7", text: "#000" },
  [Tags.windows]: { bg: "#0068b8ab", text: "#fff" },
  [Tags.react]: { bg: "#61dafbb5", text: "#000" },
};

export const TaskWrapper = styled.div`
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 16px 0;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const PriorityBubble = styled.div<{ type: Priorities }>`
  background-color: ${({ type }) => prioritiesColorMap[type].bg};
  color: ${({ type }) => prioritiesColorMap[type].text};
  padding: 4px 8px;
  border-radius: 20px;
  width: fit-content;
  font-size: 0.8em;
  margin-bottom: 8px;
`;

export const TaskTitle = styled.h4<{noMargin?: boolean}>`
  font-weight: 500;
  font-size: 1.1em;
  line-height: 18px;
  color: #221c1d;
  margin-bottom: ${({noMargin }) => noMargin ? '0px' : '8px'};
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

export const TagsWrapper = styled.ul`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around; */
`;

export const Tag = styled.li<{ type: Tags; selected?: boolean }>`
  background-color: ${({ type }) => tagsColorMap[type].bg};
  color: ${({ type }) => tagsColorMap[type].text};
  /* border: dashed 2px
    ${({ selected, type }) =>
      selected ? tagsColorMap[type].text : "transparent"}; */
  display: inline-block;
  opacity: ${({ selected }) =>
      selected ? 1 : 0.5};
  padding: 4px;
  border-radius: 4px;
  margin-right: 8px;
  /* margin-bottom: 5px; */
  cursor: pointer;
`;
