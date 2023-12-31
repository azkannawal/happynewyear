import React, { useState } from "react";
import styled from "styled-components";

const ToggleParticles = ({ onToggle }) => {
  const [particlesVisible, setParticlesVisible] = useState(false);

  const toggleParticles = () => {
    setParticlesVisible(!particlesVisible);
    onToggle(!particlesVisible); // Pass the updated visibility state to the parent component
  };

  return (
    <Container>
      <Button onClick={toggleParticles}>
        {particlesVisible ? "Hide Particles" : "Show Particles"}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 0x 0 0 0;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const Button = styled.div`
  z-index: 1;
  cursor: pointer;
  padding: 10px 12px;
  background-color: maroon;
  border-radius: 1em;
`;

export default ToggleParticles;
