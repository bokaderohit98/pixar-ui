import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import MainPanel from "./MainPanel";
import PreviewPanel from "./PreviewPanel";
import ResultPanel from "./ResultPanel";

const Container = styled.div`
  overflow-x: hidden;
`;

class Home extends Component {
  state = {
    imageFile: null,
    previewUrl: null,
    showPreview: false,
    showResult: false,
    resultLoading: false,
    resultError: false,
    resultUrl: null,
    enablePixifyButton: false
  };

  handleInputImageChange = event => {
    const imageFile = event.target.files[0];
    const previewUrl = URL.createObjectURL(imageFile);
    this.setState({
      imageFile,
      previewUrl,
      enablePixifyButton: true,
      showPreview: true
    });
  };

  handlePixifyButtonClick = () => {
    this.setState({
      showResult: true,
      resultLoading: true,
      resultError: false,
      resultUrl: null
    });

    this.handleFormSubmit();
  };

  handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("file", this.state.imageFile);

    axios
      .post("http://localhost:5000/api?pixify=True", formData)
      .then(res => {
        localStorage.setItem("resultImg", res.data);
        this.setState({
          resultLoading: false,
          resultUrl: `data:image/jpeg;base64,${res.data}`
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ resultLoading: false, resultError: true });
      });
  };

  togglePreview = showPreview => {
    this.setState({ showPreview });
  };

  toggleResult = showResult => {
    this.setState({ showResult });
  };

  render() {
    const {
      previewUrl,
      showPreview,
      resultLoading,
      resultError,
      resultUrl,
      showResult,
      enablePixifyButton
    } = this.state;
    return (
      <Container>
        <ResultPanel
          resultLoading={resultLoading}
          resultError={resultError}
          resultUrl={resultUrl}
          showResult={showResult && (resultLoading || resultError || resultUrl)}
          handleCloseResultButtonClick={() => this.toggleResult(false)}
        />
        <MainPanel
          showPreview={showPreview}
          enablePixifyButton={enablePixifyButton}
          previewUrl={previewUrl}
          showResult={showResult}
          resultUrl={resultUrl}
          handleInputImageChange={this.handleInputImageChange}
          handlePixifyButtonClick={this.handlePixifyButtonClick}
          handleOpenPreviewButtonClick={() => this.togglePreview(true)}
          handleOpenResultButtonClick={() => this.toggleResult(true)}
        />
        <PreviewPanel
          previewUrl={previewUrl}
          showPreview={showPreview}
          handleClosePreviewButtonClick={() => this.togglePreview(false)}
        />
      </Container>
    );
  }
}

export default Home;
