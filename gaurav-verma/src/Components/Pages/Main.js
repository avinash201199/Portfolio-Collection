import { useState } from "react";
import { Name } from "../Styled-components/Name";
import classes from "../Styles/Main.module.scss";
import { Card } from "../Card/Card";

const name = ["G", "a", "u", "r", "a", "v", " ", "V", "e", "r", "m", "a"];

const randomColor = () => {
  const code = "01234567ABCDEF";
  const colorCode = ["red", "blue", "black", "purple", "green"];

  let color = "";
  for (let i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 14)];
  }
  color = colorCode[Math.floor(Math.random() * 5)];
  console.log(color);
  return color;
};

export const Main = () => {
  const [mouse, setMouse] = useState(true);

  const innerLetter = name.map((letter, index) => {
    randomColor();
    console.log("index= ", index);
    return (
      <Name time={0.1 * index} color={randomColor()} key={index}>
        {letter}
      </Name>
    );
  });

  const hoverHandler = () => {
    setMouse(innerLetter);
  };

  return (
    // <Card colorOfCard={"rgba(255, 0, 0, .5)"}>Main</Card>
    <Card>
      <section className={classes["flex"]}>
        <div className={classes["flex__one"]}>
          <h1 className={classes["flex__one--logo"]} onMouseOver={hoverHandler}>
            {innerLetter}
          </h1>
          <p className={classes["flex__one--about"]}>
            Hi! I am a web development and open-source enthusiast based in
            India. Pursuing B.tech from IET Lucknow. I'm 19. I love to learn new
            things that interests me and build my skillset.
          </p>
          <p className={classes["flex__one--about"]}>
            Scroll <b>right</b> to know more about me &#8594;
          </p>
        </div>
        <div className={classes["flex__two"]}>
          <div className={classes["flex__two--border"]}></div>
          <div className={classes["flex__two--img"]}></div>
        </div>
      </section>
    </Card>
  );
};
