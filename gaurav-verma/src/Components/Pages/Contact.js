import classes from "../Styles/Contact.module.scss";
import git from "../Images/git.png";
import gmail from "../Images/gmail.png";
import linkedin from "../Images/linkedin.png";
import { Card } from "../Card/Card";
export const Contact = () => {
  return (
    <Card>
      <section className={classes["flex"]}>
        <h1 className={classes["flex__heading"]}>Profiles</h1>
        <div className={classes["flex__list"]}>
          <p>
            So if you're interested in my work and would like to work together,
            reach out to me to through my social profiles...
          </p>
          <ul>
            <li>
              <a href="https://github.com/Gaurav-Verma07">
                <img src={git} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gaurav-verma-933a48198/">
                <img src={linkedin} />
              </a>
            </li>
            <li>
              <a href="mailto: cosmosian07@gmail.com">
                <img src={gmail} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Card>
  );
};
