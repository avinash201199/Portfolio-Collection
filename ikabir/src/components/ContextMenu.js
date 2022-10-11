/* eslint-disable react/prop-types */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  menu: {
    position: "absolute",
    background: "#fafafa",
    color: "#222",
    display: "inline-block",
    borderRadius: "4px",
    left: (coordinate) => `${coordinate.x}px`,
    top: (coordinate) => `${coordinate.y}px`,
    "& > li": {
      padding: "5px 20px",
      fontSize: "13px",
      "&:first-child": {
        marginTop: "10px"
      },
      "&:last-child": {
        marginBottom: "10px"
      },
      "&:hover": {
        background: "#eee"
      }
    },
    "& hr": {
      border: "none",
      borderBottom: "0.5px solid #999",
      width: "25%",
      margin: "0.7ch auto"
    },
    "& li.disabled": {
      backgroundColor: "#fafafa !important",
      color: "#999 !important"
    }
  }
}));

const ContextMenu = ({ isFullScreen, coordinate, setFullScreen, openApp }) => {
  console.log(coordinate);
  const classes = useStyles(coordinate);

  const toggleFullScreen = (ele) => {
    if (!isFullScreen && ele.requestFullscreen) {
      ele.requestFullscreen();
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  return (
    <ul className={classes.menu}>
      <li>New Folder</li>
      <hr />
      <li className="disabled">Paste</li>
      <hr />
      <li>Show Desktop in Files</li>
      <li onClick={() => openApp("terminal")}>Open in Terminal</li>
      <hr />
      <li>Change Background...</li>
      <hr />
      <li onClick={() => toggleFullScreen(document.documentElement)}>
        {!isFullScreen ? "Enter Full Screen Mode" : "Exit Full Screen Mode"}
      </li>
      <li>Settings</li>
    </ul>
  );
};

ContextMenu.propTypes = {
  coordinate: PropTypes.object.isRequired
};

export default ContextMenu;
