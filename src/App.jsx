import React from "react";
import { useState } from "react";
import Welcome from './components/welcome/Welcome';
import Scene from './components/scene/Scene';
import stories from "./data/storiesdata";
import { Container, WelcomeContainer, SceneContainer  } from './components/style';
import './App.css';


function App() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const backgroundImg = stories[currentLine].img;

  const handleNext = () => {
    setCurrentLine((prevLine) => prevLine < stories.length - 1 ? prevLine + 1 : prevLine);
  };

  const handlePrev = () => {
    setCurrentLine((prevLine) => prevLine > 0 ? prevLine - 1 : prevLine);
  };

  const handleStart = () => {
    setShowWelcome(false);
  };


  return (
    <Container img={backgroundImg}>
      {showWelcome ? (
        <WelcomeContainer>
          <Welcome onStart={handleStart} />
        </WelcomeContainer>
      ) : (
        <SceneContainer>
          <Scene
            stories={stories}
            currentLine={currentLine}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </SceneContainer>
      )}
    </Container>
  );
}

export default App;