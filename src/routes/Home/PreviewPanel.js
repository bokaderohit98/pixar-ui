import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 0px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.palette.light};
  -webkit-box-shadow: 8px 0 10px -6px #777;
  -moz-box-shadow: 8px 0 10px -6px #777;
  box-shadow: 8px 0 10px -6px #777;
  transition: all 0.6s;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PreviewImage = styled.img`
  width: auto;
  max-width: 90%;
  height: auto;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  .material-icons {
    padding: 16px;
    cursor: pointer;
  }
`;

const PreviewPanel = props => {
  const { previewUrl, showPreview, handleClosePreviewButtonClick } = props;
  return (
    <Container style={{ width: showPreview ? "450px" : "0px" }}>
      <CloseButtonContainer>
        <i className="material-icons" onClick={handleClosePreviewButtonClick}>
          close
        </i>
      </CloseButtonContainer>
      <ImageContainer>
        <PreviewImage src={previewUrl} />
      </ImageContainer>
    </Container>
  );
};

export default PreviewPanel;
