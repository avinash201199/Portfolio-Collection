import classes from "./MasterCard.module.scss";
export const MasterCard = (props) => {
  return <div className={classes["master"]}>{props.children}</div>;
};
