import styled, { keyframes } from "styled-components";

const Appear = keyframes`
 0% {
        opacity: 0;
        margin-right: 100px;
    } 100% {
        opacity: 1;
        margin-right:  0px;
    }`;

export const LnbWrapper = styled.section`
  width: 100%;
  display: none;
`;

export const Whole = styled.div`
  width: 100%;
  padding: ${(props) => props.padding || ""};
  background-color: ${(props) => props.bg || ""};
  color: ${(props) => props.color || ""};
  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.radius || ""};

  display: flex;
  flex-direction: ${(props) => props.flex || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};

  transition: 0.7s;

  &:hover {
    & ${LnbWrapper} {
      display: flex;
      animation: ${Appear} 1s forwards;
    }
  }
`;
