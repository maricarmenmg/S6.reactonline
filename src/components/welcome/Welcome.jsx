import React from 'react';
import { WelcomeContainer, WelcomeTitle, Description, StartButton } from '../style';

const Welcome = ({ onStart }) => {
  return (
    <WelcomeContainer>
      <WelcomeTitle>¡Bienvenidos a la aventura!</WelcomeTitle>
      <Description>
        Explora nuestra aplicación y ayúda a nuestro héroe 🦸🏻 a volver a casa. <br/> ¿Listo para comenzar? 
      </Description>
      <StartButton onClick={onStart}> ¡Adelante! 🚀 </StartButton>
    </WelcomeContainer>
  );
};

export default Welcome;