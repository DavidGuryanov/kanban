import {styled} from "@linaria/react";

export const BoardWrapper = styled.div`
  background-color: #f8f8f8;
  margin: 15px 15px 0 15px;
  font-family: "Poppins", sans-serif;
  color: #221c1d;
  height: calc(100% - 55px);
  border-radius: 12px;
  padding: 20px;
`;

export const BoardTitle = styled.h1`
  font-size: 1.75em;
  margin-bottom: 0.2em;
`;

export const BoardSubTitle = styled.h2`
  font-size: 1.35em;
  margin-bottom: 1em;
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 100%; */
  justify-content: space-around;
`