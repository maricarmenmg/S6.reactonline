import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 55vh;
  border-radius: 18px;
  padding: 15px;
  background-color: #2828287f;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StoriesTexts = styled.div`
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
    color:#ffffff; 
    cursor: not-allowed;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 width: 100%;
  color:#ffffff;

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
  background-color:#304faa;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 20px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;


  &:hover {
    background-color: #304faa;
    border: 1px solid #232e4f;

  }
`;