import styled from "styled-components";

export const Name = styled.span`
  color: ${(props) => {
    let c = props.color;
    return c;
  }};
  -webkit-animation: upDown
    ${(props) => {
      let time = props.time + "s";
      return time;
    }};
  animation: upDown
    ${(props) => {
      let time = props.time + "s";
      return time;
    }};
`;
