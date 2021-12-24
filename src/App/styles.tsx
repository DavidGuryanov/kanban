import { styled } from "@linaria/react";

export const BoardWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #221c1d;
  box-shadow: 0 2px 13px 7px rgb(78 78 78 / 29%);
  padding: 20px;
  min-height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #e5e5e5;
  opacity: 1;
  background-image:  radial-gradient(#221c1d 0.7000000000000001px, transparent 0.7000000000000001px), radial-gradient(#221c1d 0.7000000000000001px, #e5e5e5 0.7000000000000001px);
  background-size: 28px 28px;
  background-position: 0 0,14px 14px;
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
`;
