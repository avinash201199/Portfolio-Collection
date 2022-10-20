import Modal from "../UI/Modal";
import classes from "./CP.module.css";

const CP = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.participation}>
        <h2>Participations</h2>
        <ul>
          <li>
            SIH 2022 Internal Hackathon :
            <a href="https://github.com/vermaanurag1532/Resturant_Meal">
              Click
            </a>
          </li>
          <li>
            Competitive Programming Hackathon :
            <a href="https://github.com/vermaanurag1532/Resturant_Meal">
              Click
            </a>
          </li>
        </ul>
      </div>
      <button className={classes.button} onClick={props.onConfirm}>
        close
      </button>
    </Modal>
  );
};

export default CP;
