import {styled} from "@linaria/react";

export const BoardWrapper = styled.div`
  background-color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  color: #221c1d;
  border-radius: 12px;
  padding: 20px;
  min-height: 100%;
`;

export const BoardTitle = styled.h1`
  font-size: 1.75em;
  margin-bottom: 0.2em;
`;

export const BoardSubTitle = styled.h2`
  font-size: 1.35em;
  margin-bottom: 1em;
`;

export const ColumnsWrapper = styled.main`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  @media (min-width: 650px) {
    justify-content: space-around;
  }
  overflow: scroll;
`