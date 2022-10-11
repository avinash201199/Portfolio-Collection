import styled from "styled-components";
export const ProjectSection = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => {
      console.log(props.img);
      return props.img;
    }});
  -webkit-filter: blur(7px);
  filter: blur(7px);
  text-decoration: none;
  background-size: cover;
  background-position: center;
`;
