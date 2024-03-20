/* eslint-disable react/prop-types */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const LENGTH = 537.1456909179688;
const SECTION_LENGTH = LENGTH / 2;
const GAP = LENGTH / 12;
const GAP2 = GAP * 2;

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  wrapper: {
    width: "80px",
    height: "80px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans",
    "& svg": {
      width: "80px",
      height: "auto",
      display: "block",
      position: "absolute"
    },
    "& path": {
      fill: "none",
      strokeWidth: "10px",
      "&:nth-of-type(1)": {
        animation: `$strokeSpin1 1.5s infinite ease-in-out`,
        stroke: "#009fe3",
        strokeDasharray: `${SECTION_LENGTH + 100}, ${LENGTH - SECTION_LENGTH - 100}`
      },
      "&:nth-of-type(2)": {
        animation: `$strokeSpin2 1.5s infinite ease-in-out`,
        stroke: "#fff",
        strokeDasharray: `${LENGTH - SECTION_LENGTH - GAP2 + 100}, ${SECTION_LENGTH + GAP2 - 100}`
      }
    },
    "& h2": {
      color: "#fff",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      margin: "0 auto",
      fontSize: "32px",
      lineHeight: "32px"
    }
  },
  "@keyframes strokeSpin1": {
    from: {
      strokeDashoffset: -GAP
    },
    to: {
      strokeDashoffset: -LENGTH - GAP
    }
  },
  "@keyframes strokeSpin2": {
    from: {
      strokeDashoffset: -SECTION_LENGTH - GAP2
    },
    to: {
      strokeDashoffset: -LENGTH - SECTION_LENGTH - GAP2
    }
  }
});

const Loader = ({ bgColor = "#0c1920" }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ background: bgColor }}>
      <div className={classes.wrapper}>
        <svg viewBox="0 0 200 180">
          <path d="M11.4 90.3q-1.4-2.4 0-4.7l42.3-73.3q1.3-2.3 4-2.3h84.6q2.7 0 4 2.3l42.4 73.3q1.3 2.3 0 4.7l-42.3 73.2q-1.4 2.4-4.1 2.4H57.7q-2.7 0-4-2.4z" />
          <path d="M11.4 90.3q-1.4-2.4 0-4.7l42.3-73.3q1.3-2.3 4-2.3h84.6q2.7 0 4 2.3l42.4 73.3q1.3 2.3 0 4.7l-42.3 73.2q-1.4 2.4-4.1 2.4H57.7q-2.7 0-4-2.4z" />
        </svg>
        <h2>I</h2>
      </div>
    </div>
  );
};

export default Loader;
