import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import styled from "styled-components";
import theme from "../constants/theme";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${() => theme.palette.light};

  h1 {
    font-family: "Open Sans", sans-serif;
    color: ${() => theme.palette.dark};
    font-size: 48px;
  }
`;

export default () => {
  return (
    <Container>
      <BounceLoader color={theme.palette.primary} loading={true} size={80} />
      <h1>P!XAR</h1>
    </Container>
  );
};
