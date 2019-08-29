import React from "react";
import styled from "styled-components";
import uploadIcon from "../../assets/uploadIcon.png";
import forwardIcon from "../../assets/forwardIcon.png";
import backwardIcon from "../../assets/backwardIcon.png";

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.palette.light};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.6s;
`;

const UploadIcon = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const OpenPreview = styled.img`
  position: absolute;
  left: -25px;
  top: calc(50vh - 25px);
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const OpenResult = styled.img`
  position: absolute;
  right: 0px;
  top: calc(50vh - 25px);
  width: 24px;
  height: 50px;
  cursor: pointer;
`;

const PixifyButton = styled.button`
  padding: 0;
  margin: 0;
  margin-top: 24px;
  border: 0;
  width: 80px;
  height: 32px;
  font-size: 16px;
  background: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.light};
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:disabled {
    background: ${props => props.theme.palette.disabled};
    cursor: not-allowed;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const MainPanel = props => {
  const {
    handleInputImageChange,
    handlePixifyButtonClick,
    handleOpenPreviewButtonClick,
    handleOpenResultButtonClick,
    showPreview,
    showResult,
    resultUrl,
    previewUrl,
    enablePixifyButton
  } = props;

  return (
    <Container style={{ marginLeft: showPreview ? "350px" : "0px" }}>
      {previewUrl && !showPreview && (
        <OpenPreview src={forwardIcon} onClick={handleOpenPreviewButtonClick} />
      )}
      {!showResult && resultUrl && (
        <OpenResult src={backwardIcon} onClick={handleOpenResultButtonClick} />
      )}
      <label htmlFor="input-image">
        <UploadIcon src={uploadIcon} />
      </label>
      <ImageInput
        type="file"
        id="input-image"
        accept=".jpg, .jpeg, .png"
        onChange={handleInputImageChange}
      />
      <PixifyButton
        onClick={handlePixifyButtonClick}
        disabled={!enablePixifyButton}
      >
        Pixify
      </PixifyButton>
    </Container>
  );
};

export default MainPanel;
