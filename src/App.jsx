import React, { useState } from 'react';

import Welcome from './components/welcome/Welcome';
import Scene from './components/scene/Scene';
import stories from "./data/storiesdata";
import { Container, WelcomeContainer } from './components/style';
import './App.css';


function App() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const backgroundImg = stories[currentLine].img;


  const handleNext = () => {
    if (currentLine < stories.length - 1) {
      setCurrentLine(currentLine + 1);
    }
  };

  const handlePrev = () => {
    if (currentLine > 0) {
      setCurrentLine(currentLine - 1);
    }
  };

  const handleStart = () => {
    setShowWelcome(false);
  };



  return (

    
    <Container img={backgroundImg} >
     {showWelcome ?  (
        <WelcomeContainer>
          <Welcome onStart={handleStart} />
        </WelcomeContainer>      
      ) : (
        
      <Scene
        stories={stories}
        currentLine={currentLine}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
     )}
    </Container>
  );
}

export default App;