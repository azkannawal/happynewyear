import React, { useState } from "react";
import Countdown from "react-countdown";
import styled from "styled-components";

const Content = () => {
  const [newYearMessage, setNewYearMessage] = useState(["Goodbye 2023"]);

  const timeLeft = () => {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <Container>
      <h1>{newYearMessage}</h1>
      <Countdown
        date={Date.now() + timeLeft()}
        onComplete={() => setNewYearMessage("Happy New Year")}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;
export default Content;
