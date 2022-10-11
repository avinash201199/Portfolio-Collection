/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import Draggable from "react-draggable";
import { AppContext } from "../context";
import MinimizeIcon from "../assets/svg/MinimizeIcon";
import MaximizeIcon1 from "../assets/svg/MaximizeIcon1";
import MaximizeIcon2 from "../assets/svg/MaximizeIcon2";
import CloseIcon from "../assets/svg/CloseIcon";
import { displayTerminal } from "./apps/Terminal";
import { Grow, useMediaQuery } from "@mui/material";

const useStyles = makeStyles(() => ({
  windowTopBarContainer: {
    position: "absolute",
    userSelect: "none",
    right: 0,
    top: 0,
    marginRight: "0.375rem",
    marginTop: "0.375rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > span": {
      borderRadius: "100%"
    },
    "& > span:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    "& svg": {
      width: "1rem",
      height: "1rem",
      maxWidth: "100%"
    },
    "& button": {
      borderRadius: "50%",
      backgroundColor: "#E95420",
      color: "#eee",
      border: "none"
    }
  },
  windowEditIcon: {
    width: "1.3rem",
    height: "1.3rem",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "0.375rem",
    marginRight: "0.375rem"
  }
}));

const WindowBorder = (props) => {
  let img = {};
  useEffect(() => {
    img = new Image(0, 0);
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    img.style.opacity = 0;
  }, []);
  return (
    <Box
      className={props.x ? "window-x-border" : "window-y-border"}
      sx={{
        borderColor: "transparent",
        position: "absolute",
        transform: "translate(-50%,-50%)",
        left: "50%",
        top: "50%"
      }}
      onDragStart={(e) => {
        e.dataTransfer.setDragImage(img, 0, 0);
      }}
      onDrag={props.resize}
    />
  );
};

const WindowTopBar = (props) => {
  return (
    <Box
      className={
        " relative bg-ub-window-title border-t-2 border-white border-opacity-5 py-1.5 px-3 text-white w-full select-none rounded-b-none"
      }
      sx={{
        backgroundColor: "#201F1F",
        position: "relative",
        borderColor: "rgba(255, 255, 255, 0.05)",
        borderTopWidth: "2px",
        width: "100%",
        borderTopRightRadius: "1ch",
        borderTopLeftRadius: "1ch",
        userSelect: "none",
        padding: ".375rem .75rem",
        cursor: props?.isDrag ? "move !important" : "default"
      }}
    >
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: 700,
          cursor: props?.isDrag ? "move !important" : "default"
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

const WindowEditButtons = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.windowTopBarContainer}>
      <span onClick={props.minimizeWindow} className={classes.windowEditIcon}>
        <MinimizeIcon />
      </span>
      <span onClick={props.maximizeWindow} className={classes.windowEditIcon}>
        {props.isMaximised ? <MaximizeIcon2 /> : <MaximizeIcon1 />}
      </span>
      <button
        tabIndex="-1"
        id={`close-${props.id}`}
        onClick={props.closeWindow}
        className={classes.windowEditIcon}
      >
        <CloseIcon />
      </button>
    </Box>
  );
};

const WindowBody = (props) => {
  return (
    <Box
      sx={{ width: "100%", zIndex: 20, maxHeight: "100%", overflowY: "auto", flexGrow: 1 }}
      className="windowMainScreen"
    >
      {props.isOpenApp ? displayTerminal(props.openApp) : props.screen}
    </Box>
  );
};

const AppContainer = (props) => {
  const [obj, setObj] = useState({
    x: 60,
    y: 10,
    isDrag: false,
    width: 60,
    height: 85,
    closed: false,
    maximized: false,
    parentSize: {
      height: 100,
      width: 100
    }
  });

  const { state, actions } = useContext(AppContext);
  const matchesXs = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    setDefaultWindowDimenstion();
    window.addEventListener("resize", resizeBoundries);
  }, []);

  const restoreWindow = () => {
    const r = document.querySelector("#" + props.id);
    setDefaultWindowDimenstion();
    // get previous position
    const posx = r.style.getPropertyValue("--window-transform-x");
    const posy = r.style.getPropertyValue("--window-transform-y");

    r.style.transform = `translate(${posx},${posy})`;
    setTimeout(() => {
      setObj((state) => ({ ...state, maximized: false }));
      checkOverlap();
    }, 300);
  };

  const setDefaultWindowDimenstion = () => {
    if (window.innerWidth < 640) {
      setObj((state) => ({ ...state, height: 60, width: 85 }));
      resizeBoundries();
    } else {
      setObj((state) => ({ ...state, height: 85, width: 60 }));
      resizeBoundries();
    }
  };

  const checkOverlap = () => {
    const r = document.querySelector("#" + props.id);
    const rect = r.getBoundingClientRect();
    if (rect.x.toFixed(1) < 65) {
      console.log(props.id);
      // if this window overlapps with SideBar
      props.hideSideBar(props.id, true);
    } else {
      props.hideSideBar(props.id, false);
    }
  };

  const resizeBoundries = () => {
    setObj((state) => ({
      ...state,
      parentSize: {
        height: window.innerHeight - window.innerHeight * (state.height / 100.0),
        width: window.innerWidth - window.innerWidth * (state.width / 100.0)
      }
    }));
  };

  const resizeX = () => {
    console.log("object2");
    setObj((state) => ({ ...state, width: obj.width + 0.1 }));
    resizeBoundries();
  };
  const resizeY = () => {
    console.log("object1");
    setObj((state) => ({ ...state, width: obj.height + 0.1 }));
    resizeBoundries();
  };

  const maximizeWindow = () => {
    if (obj.maximized) {
      restoreWindow();
    } else {
      props.focusApp(props.id);
      var r = document.querySelector("#" + props.id);
      setWinowsPosition();
      // translate window to maximize position
      r.style.transform = `translate(-1pt,-2pt)`;
      setObj((state) => ({ ...state, maximized: true, height: 100, width: 100 }));
      props.hideSideBar(props.id, true);
    }
  };

  const minimizeWindow = () => {
    const posX = -700;
    setWinowsPosition();

    let r = document.querySelector("#sidebar-" + props.id);
    const sidebBarApp = r.getBoundingClientRect();

    r = document.querySelector("#" + props.id);
    r.style.transform = `translate(${posX}px,${sidebBarApp.y - 240}px) scale(0.2)`;
    props.minimizeWindow(props.id);
  };

  const closeWindow = () => {
    setWinowsPosition();
    props.hideSideBar(props.id, false);
    setObj({ closed: true });
    setTimeout(() => {
      props.closeWindow(props.id);
    }, 300);
  };

  const setWinowsPosition = () => {
    const r = document.querySelector("#" + props.id);
    const rect = r.getBoundingClientRect();
    r.style.setProperty("--window-transform-x", rect.x.toFixed(1).toString() + "px");
    r.style.setProperty("--window-transform-y", (rect.y.toFixed(1) - 32).toString() + "px");
  };

  const handleStart = () => {
    props.focusApp(props.id);
    setObj((state) => ({ ...state, isDrag: true }));
  };
  const handleStop = () => setObj((state) => ({ ...state, isDrag: false }));
  return (
    <Draggable
      axis="both"
      grid={[1, 1]}
      scale={1}
      onDrag={() => {
        obj.maximized && restoreWindow();
        checkOverlap();
      }}
      onStart={handleStart}
      onStop={handleStop}
      allowAnyClick={false}
      defaultPosition={{ x: obj.x, y: obj.y }}
      bounds={{
        left: 0,
        top: 0,
        right: obj?.parentSize?.width,
        bottom: obj?.parentSize?.height
      }}
    >
      {/* <Grow in={true}> */}
      <div
        style={{
          width: `${obj.width}%`,
          height: `${obj.height}%`,
          backgroundColor: "#333",
          position: "absolute",
          zIndex: state.appState.focusedWindows[props.id] ? 1000 : 30,
          borderTopRightRadius: "1ch",
          borderTopLeftRadius: "1ch",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          cursor: props?.isDrag ? "move !important" : "default"
        }}
        id={props.id}
      >
        <WindowBorder x={false} resize={resizeY} />
        <WindowBorder x={true} resize={resizeX} />
        <WindowTopBar isDrag={obj.isDrag} title={props.title} />
        <WindowEditButtons
          minimizeWindow={minimizeWindow}
          maximizeWindow={maximizeWindow}
          isMaximised={obj.maximized}
          closeWindow={closeWindow}
          id={props.id}
        />
        {/* {props.id === "settings" ? (
          <Settings
            changeBackgroundImage={props.changeBackgroundImage}
            currBgImgName={props.bg_image_name}
          />
        ) : (
          <WindowMainScreen
            screen={props.screen}
            title={props.title}
            addFolder={props.id === "terminal" ? props.addFolder : null}
            openApp={props.openApp}
          />
        )} */}
        <WindowBody
          isOpenApp={props.id === "terminal"}
          openApp={props.openApp}
          screen={props.screen}
        />
      </div>
      {/* </Grow> */}
    </Draggable>
  );
};

export default AppContainer;
