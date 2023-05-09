import React from 'react';
import { StoriesTexts, ContainerButtons, ContainerButton } from "../style";

const Scene = ({ stories, currentLine, handlePrev, handleNext }) => {
  return (
    <div>
      <ContainerButtons>
        <ContainerButton onClick={handlePrev} disabled={currentLine === 0}>
          Previous
        </ContainerButton>

        <ContainerButton onClick={handleNext} disabled={currentLine === stories.length - 1}>
          Next
        </ContainerButton>
      </ContainerButtons>

      {stories.map((story, index) => (
        <StoriesTexts key={index} highlighted={index === currentLine}>
          <p>{story.txt}</p>
        </StoriesTexts>
      ))}
    </div>
  );
};

export default Scene;