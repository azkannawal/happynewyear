import React from "react";
import "./main.scss";
import App from "./App";
import styled from "styled-components";

const BackgroundComponent = () => {
  return (
    <Container>
      <App />
      <div className="gradient-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 1920 1080"
        ></svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  position: relative;
`;

export default BackgroundComponent;
