import css from "../Images/css.png";
import html from "../Images/html.png";
import java from "../Images/java.png";
import python from "../Images/python.png";
import js from "../Images/js.png";
import react from "../Images/react.png";
import github from "../Images/github.png";
import sass from "../Images/sass.png";

import classes from "../Styles/Skills.module.scss";
import { Card } from "../Card/Card";
export const Skills = () => {
  return (
    <Card>
      <section className={classes["flex"]}>
        <h1 className={classes["flex__heading"]}>Skills</h1>
        <div className={classes["flex__content"]}>
          <img src={css} alt="css logo" />
          <img src={html} alt="html logo" />
          <img src={java} alt="java logo" />
          <img src={python} alt="python logo" />
          <img src={js} alt="js logo" />
          <img src={react} alt="react logo" />
          <img src={github} alt="github logo" />
          <img src={sass} alt="sass logo" />
        </div>
      </section>
    </Card>
  );
};
