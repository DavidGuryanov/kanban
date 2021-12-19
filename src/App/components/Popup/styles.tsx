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
`;

export const PopupWindow = styled.div`
  min-width: 50%;
  /* min-height: 50%; */
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  background-color: #f6f6f6;
  border-radius: 5px;
  box-shadow: 4px 4px 6px 2px rgb(78 78 78 / 21%);
  position: relative;
`;

export const PopupWindowHeader = styled.div`
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
`

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

export const TaskTitlePopup = styled.h4`
  font-weight: 500;
  font-size: 1.3em;
  line-height: 18px;
  color: #221c1d;
  margin: 15px 0;
  padding-left: 8px;
`;

export const TaskBodyPopup = styled.p`
  font-weight: 500;
  font-size: 1.1em;
  color: #221c1db0;
  margin-bottom: 8px;
  min-height: 110px;
  padding: 8px;
`;


export const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  margin-left: 10px;
  border: solid #dedede 2px;
`;

