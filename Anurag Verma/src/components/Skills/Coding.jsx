import { useState } from "react";
import "./Coding.css";
import CP from "../CP/CP";

const Coding = (props) => {
  const [participation, setParticipartions] = useState(false);

  const setParticipationHandler = () => {
    setParticipartions(true);
  };

  const participationHandler = () => {
    setParticipartions(null);
  };

  return (
    <div className="code">
      {participation && <CP onConfirm={participationHandler} />}
      <h1>Competitive Codiing</h1>
      <h2>Languages: {props.languages}</h2>
      <div className="coding">
        <button
          className="coding-button"
          onClick={() => setParticipationHandler()}
        >
          Participation
        </button>
      </div>
    </div>
  );
};

export default Coding;
