import styled from 'styled-components';


/* Scene */


export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SceneContainer= styled.div`
background-color:#0c1965cf;
border-radius: 18px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50vw;
height: 50vh;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StoriesTexts = styled.p`
font-weight: ${({ highlighted }) => (highlighted ? 'bold' : 'normal')};
background-color: ${({ highlighted }) => (highlighted ? '#304faa' : 'transparent')};
color:#ffffff;
border:2px solid #284495;
border-radius: 50px;
padding: 10px;
margin: 10px auto;
max-width:100%;
text-align: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`;

export const ContainerButton = styled.button`
  background-color: #304faa;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  height: 75px;
  padding: 5px 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  width: 40%; 

  &:hover {
    background-color: #7b94de;
  }

  &:disabled {
    background-color: rgb(48 79 170 / 31%);
    color:#ffffff6b ;
    cursor: not-allowed;
  }
`;



/* Welcome */

export const WelcomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#ffffff;
  background-color:#304faa;
`;

export const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export const StartButton = styled.button`
background-color: #2b4695;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 20px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;


  &:hover {
    background-color: #2b4695;
    border: 1px solid #232e4f;

  }
`;