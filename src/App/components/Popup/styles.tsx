import { styled } from "@linaria/react";

export const PopupBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00000038;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus-visible {
    outline: none;
  }
`;

export const PopupWindow = styled.article`
  min-width: 50%;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  background-color: #f6f6f6;
  border-radius: 5px;
  box-shadow: 4px 4px 6px 2px rgb(78 78 78 / 21%);
  position: relative;
  @media (max-width: 650px) {
    min-width: calc(100vw - 20px);
  }
`;

export const PopupWindowHeader = styled.header`
  background-color: #ffffff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

export const PopupWindowTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

export const Dot = styled.button`
  width: 20px;
  height: 20px;
  background-color: #e1ddd9;
  border-radius: 15px;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:first-child {
    background-color: #f95e55;
    &:hover::before {
      content: "✕";
      color: #750201;
      font-weight: 600;
      font-size: 1.2em;
      padding-top: 1px;
    }
  }
`;
