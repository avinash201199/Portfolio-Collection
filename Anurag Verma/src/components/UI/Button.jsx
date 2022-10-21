import { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonClickHandler = () => {
    setIsClicked(true);
    console.log({ isClicked });
    props.buttonClicked(isClicked);
  };
  return (
    <button
      onClick={() => {
        buttonClickHandler();
      }}
    >
      {props.name}
    </button>
  );
};

export default Button;
