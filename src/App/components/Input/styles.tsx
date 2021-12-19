import { styled } from "@linaria/react";

export const TitleInput = styled.input`
  font-weight: 500;
  font-size: 1.3em;
  line-height: 18px;
  color: #221c1d;
  background-color: #ffffffab;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 5px;
`;

export const TextInput = styled.textarea`
  font-weight: 400;
  font-size: 1em;
  line-height: 18px;
  color: #221c1d;
  background-color: #ffffffab;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  font-family: inherit;
  margin-bottom: 5px;
  transition: height 2s;
`;
