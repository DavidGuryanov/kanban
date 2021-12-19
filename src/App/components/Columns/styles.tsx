import { styled } from "@linaria/react";
import { TaskWrapper } from "../Task/styles";

export const ColumnWrapper = styled.section`
  width: 300px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 650px) {
    min-width: calc(100vw - 40px);
  }
`;

export const ColumnTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const AddNewTaskBtn = styled(TaskWrapper)`
  width: 100%;
  margin-top: 0;
  font-weight: 600;
  color: #a0a0a0;

  &:nth-child(2) {
    margin-top: 16px;
  }
`;
