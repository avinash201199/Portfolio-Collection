import Modal from "../UI/Modal";
import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <Modal className={classes.holder} onClose={props.onClose}>
      <h1>Projects</h1>
      <div className={classes.container}>
        <div className={classes.project}>
          <ul>
            <li>
              Resturant Meal :
              <a href="https://github.com/vermaanurag1532/Resturant_Meal">
                Click
              </a>
            </li>
            <li>
              Eduaction Website :
              <a href="https://vermaanurag1532.github.io/education/">Click</a>
            </li>
            <li>
              Expense Keeper :
              <a href="https://github.com/vermaanurag1532/reactDemo">Click</a>
            </li>
          </ul>
        </div>
        <div>
          <button className={classes.button} onClick={props.onConfirm}>
            close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Project;
