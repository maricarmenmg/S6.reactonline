import React, { useState } from 'react';
import Scene from './components/scene/Scene';
import stories from "./data/storiesdata";
import { Container } from './components/style';
import './App.css';

function App() {
  const [currentLine, setCurrentLine] = useState(0);

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

  return (
    <Container>
      <Scene
        stories={stories}
        currentLine={currentLine}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </Container>
  );
}

export default App;