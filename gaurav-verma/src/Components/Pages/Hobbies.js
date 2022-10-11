import classes from "../Styles/Hobbies.module.scss";

import { Card } from "../Card/Card";
export const Hobbies = () => {
  return (
    <Card>
      <section className={classes["flex"]}>
        <h1 className={classes["flex__heading"]}>Hobbies</h1>
        <div className={classes["flex__list"]}>
          <ul>
            <li>Cycling (10km is my normal)</li>
            <li>Reading (Not much)</li>
            <li>Travelling </li>
            <li>Cooking (learing . . . )</li>
            <p>More coming soon :)</p>
          </ul>
        </div>
      </section>
    </Card>
  );
};
