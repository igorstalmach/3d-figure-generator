import styled from "styled-components";

export const InputFieldStyled = styled.input`
  all: unset;

  position: absolute;
  top: 85%;
  left: 30%;

  width: 40%;
  height: 60px;

  font-family: "Roboto", "Arial", sans-serif;
  font-size: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 1);

  background: rgba(97, 101, 104, 0.75);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(202, 202, 202, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
