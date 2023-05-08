import styled from "styled-components";

const PrettyButton = styled.button`
  background-color: pink;
  border: 2px solid pink;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
`;

const Button = () => {
  return <PrettyButton>¡Botón con estilo!</PrettyButton>;
};

export default Button;