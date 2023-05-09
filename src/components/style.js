import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StoriesTexts = styled.div`
font-weight: ${({ highlighted }) => (highlighted ? 'bold' : 'normal')};
background-color: ${({ highlighted }) => (highlighted ? '#00ff7b' : 'transparent')};
border:2px solid #00ff7b;
border-radius: 50px;
padding: 10px;
margin: 10px auto;
max-width:100%;
text-align: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const ContainerButton = styled.button`
  background-color: red;
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
    background-color: #cff9e3;
  }

  &:disabled {
    background-color: #F5F5F5;
    color:#010B13; 
    cursor: not-allowed;
  }
`;
