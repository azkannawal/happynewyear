import React, { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const App = () => {
  const playlistId = "PLclODpQJhNz7vm19Ab3k31tUX7dncoup4";
  const [player, setPlayer] = useState(null);

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

  return (
    <Container>
      <Button onClick={playVideo}>Play Video</Button>
      <YouTube opts={opts} onReady={onReady} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
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
export default App;
