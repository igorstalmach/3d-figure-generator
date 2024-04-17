import styled from "styled-components";

export const InstructionContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 10px;
  z-index: 1000;

  font-family: "Roboto", "Arial", sans-serif;
  font-size: 12px;
  text-align: left;
  color: rgb(42, 42, 42);

  opacity: 0.25;

  &:hover {
    opacity: 1;
  }
`;
