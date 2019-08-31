import React from "react";
import styled, { withTheme } from "styled-components";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import errorImg from "../../assets/error.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  z-index: 100;
  background: ${props => props.theme.palette.light};
  transition: all 1s;
  overflow: hidden;

  .material-icons {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 16px;
    cursor: pointer;
    margin-right: 32px;
  }

  p {
    margin-top: 28px;
    color: ${props => props.theme.palette.primary};
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }
`;

const ResultArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ResultImg = styled.img`
  height: auto;
  max-height: 80vh;
  width: auto;
  max-width: 90vw;
`;

const ErrorImg = styled.img`
  width: 250px;
  height: auto;
`;

const SaveButton = styled.a`
  margin-top: 16px;
  border: 0;
  width: 80px;
  height: 24px;
  font-size: 16px;
  background: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.light};
  padding: 4px;
  text-align: center;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  &:hover {
    cursor: pointer;
  }

  &:active,
  &:visited,
  &:focus {
    border: none;
    outline: none;
  }
`;

const ResultPanel = props => {
  const {
    resultLoading,
    resultError,
    resultUrl,
    showResult,
    handleCloseResultButtonClick
  } = props;
  return (
    <Container style={{ width: showResult ? "100%" : "0" }}>
      <i
        className="material-icons"
        onClick={handleCloseResultButtonClick}
        style={{ display: resultError || resultUrl ? "flex" : "none" }}
      >
        close
      </i>
      {resultLoading && (
        <ResultArea>
          <ClimbingBoxLoader
            color={props.theme.palette.primary}
            loading={true}
            size={25}
          />
          <p>COLOVARIA!</p>
        </ResultArea>
      )}
      {resultError && (
        <ResultArea>
          <ErrorImg src={errorImg} />
          <p>SYSTEM CRASHED</p>
        </ResultArea>
      )}
      {resultUrl && (
        <ResultArea>
          <ResultImg src={resultUrl} />
          <SaveButton href={resultUrl} download target="_blank">
            Save
          </SaveButton>
        </ResultArea>
      )}
    </Container>
  );
};

export default withTheme(ResultPanel);
