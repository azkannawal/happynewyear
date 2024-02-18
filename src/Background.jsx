import React, { useState } from "react";
import "./main.scss";
import styled, { keyframes } from "styled-components";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Content from "./Content";
import YouTube from "react-youtube";

const Background = () => {
  const [particlesVisible, setParticlesVisible] = useState(false);
  const playlistId = "PLpJkq76UxZ9zzIiLPv423bfHEYQJBInlX";
  const [player, setPlayer] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      listType: "playlist",
      list: playlistId,
      autoplay: 0,
      mute: 0,
      playsinline: 1,
      origin: window.location.origin,
    },
  };

  const playVideo = () => {
    if (player) {
      player.playVideo();
    }
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const handleTwo = () => {
    playVideo();
    setShowModal(false);
  };

  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const handleToggleParticles = () => {
    setParticlesVisible((prevParticlesVisible) => !prevParticlesVisible);
  };

  return (
    <Container>
      {showModal ? (
        <Modal>
          <Button onClick={handleTwo}>Get Started</Button>
        </Modal>
      ) : (
        <>
          <Meta>
            <Content></Content>
            <Buttons onClick={handleToggleParticles}>
              {particlesVisible ? "Hide Mercon" : "Show Mercon"}
            </Buttons>
          </Meta>
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
          {particlesVisible && (
            <Particles
              init={particlesInit}
              options={{ preset: "fireworks" }}
              style={{ position: "absolute", zIndex: "1" }}
            />
          )}
        </>
      )}
      <YouTube opts={opts} onReady={onReady} style={{ position: "absolute" }} />
    </Container>
  );
};

const zoomAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  display: block;
  position: relative;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-color: black;
`;
const Button = styled.div`
  cursor: pointer;
  padding: 10px 12px;
  background-color: maroon;
  border-radius: 1em;
  &:not(:hover) {
    animation: ${zoomAnimation} 1s ease infinite;
  }
`;
const Meta = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;
const Buttons = styled.div`
  position: relative;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
  padding: 10px 12px;
  background-color: maroon;
  border-radius: 1em;
`;

export default Background;
