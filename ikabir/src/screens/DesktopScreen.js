/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";

// @mui/material imports

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";

// project imports

import { AppContext } from "../context";
import ContextMenu from "../components/ContextMenu";
import SideBar from "../components/ToolBar/SideBar";
import ToolBar from "../components/ToolBar";
import AppContainer from "../components/AppContainer";
import apps from "../config/apps";
import { Fade } from "@mui/material";
import ShowAllApps from "./ShowAllApps";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    color: "#eee",
    paddingTop: "3ch",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
  },
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    textAlign: "center",
    padding: ".25rem",
    borderColor: "transparent",
    borderWidth: "1px",
    borderRadius: "0.25rem",
    zIndex: 10,
    width: "6rem",
    height: "5rem",
    margin: "1px",
    backgroundColor: "rgba(255,255,255,0)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)"
    },
    "& > svg": {
      // width: "2.5rem",
      // height: "2.5rem",
      transform: "scale(1.4)",
      display: "block"
    }
  },
  iframeContainer: {
    position: "absolute",
    left: theme.spacing(8),
    top: "24px",
    bottom: 0,
    width: `calc(100% - ${theme.spacing(8)})`,
    height: `calc(100% - 30px)`,
    "& > iframe": {
      width: "100%",
      height: "100%"
    }
  }
}));

const DesktopScreen = (props) => {
  const { state, actions } = useContext(AppContext);

  const [showContextMenu, setContextMenu] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const classes = useStyles();

  const handleClick = () => {
    showContextMenu && setContextMenu(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    !showContextMenu ? setContextMenu(true) : setContextMenu(false);
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    let _coordinate = { x, y };
    if (x + 180 > window.innerWidth) _coordinate = { x: x - 180, y };
    if (y + 180 > window.innerHeight) _coordinate = { x, y: y - 180 };
    if (x + 180 > window.innerWidth && y + 180 > window.innerHeight)
      _coordinate = { x: x - 180, y: y - 180 };
    setCoordinate(_coordinate);
  };

  const minimizeWindow = (appId) => {
    const { minimizedWindows, focusedWindows } = state.appState;
    minimizedWindows[appId] = true;
    focusedWindows[appId] = false;
    actions.setAppState({ minimizedWindows, focusedWindows });
    // console.log(state);
    focusLastApp();
  };

  useEffect(() => {
    loadApps();
    checkNewFolders();
  }, []);

  const loadApps = () => {
    let focusedWindows = {},
      closedWindows = {},
      favouriteApps = {},
      minimizedWindows = {};
    const desktopApps = [];
    apps.forEach((app) => {
      focusedWindows = {
        ...focusedWindows,
        [app.id]: false
      };
      closedWindows = {
        ...closedWindows,
        [app.id]: true
      };
      favouriteApps = {
        ...favouriteApps,
        [app.id]: app.favourite
      };
      minimizedWindows = {
        ...minimizedWindows,
        [app.id]: false
      };
      if (app.desktopShortcut) desktopApps.push(app.id);
    });
    actions.setAppState({
      focusedWindows,
      closedWindows,
      favouriteApps,
      minimizedWindows,
      desktopApps
    });
  };

  const checkNewFolders = () => {
    let newFolders = localStorage.getItem("newFolders");
    if (newFolders === null && newFolders !== undefined) {
      localStorage.setItem("newFolders", JSON.stringify([]));
    } else {
      newFolders = JSON.parse(newFolders);
      newFolders.forEach((folder) => {
        apps.push({
          id: `new-folder-${folder.id}`,
          title: folder.name,
          icon: "./themes/Yaru/system/folder.png",
          favourite: false,
          desktopShortcut: true,
          screen: () => {}
        });
      });
      updateAppsData();
    }
  };

  const updateAppsData = () => {
    let focusedWindows = {},
      closedWindows = {},
      favouriteApps = {},
      minimizedWindows = {},
      disabledApps = {};
    let desktopApps = [];
    apps.forEach((app) => {
      focusedWindows = {
        ...focusedWindows,
        [app.id]:
          focusedWindows[app.id] !== undefined || focusedWindows[app.id] !== null
            ? focusedWindows[app.id]
            : false
      };
      minimizedWindows = {
        ...minimizedWindows,
        [app.id]:
          minimizedWindows[app.id] !== undefined || minimizedWindows[app.id] !== null
            ? minimizedWindows[app.id]
            : false
      };
      disabledApps = {
        ...disabledApps,
        [app.id]: app.disabled
      };
      closedWindows = {
        ...closedWindows,
        [app.id]:
          closedWindows[app.id] !== undefined || closedWindows[app.id] !== null
            ? closedWindows[app.id]
            : true
      };
      favouriteApps = {
        ...favouriteApps,
        [app.id]: app.favourite
      };
      if (app.desktopShortcut) desktopApps.push(app.id);
    });
    actions.setAppState({
      focusedWindows,
      closedWindows,
      disabledApps,
      minimizedWindows,
      favouriteApps,
      desktopApps
    });
  };

  const openApp = (appId) => {
    if (state.appState.minimizedWindows?.[appId]) {
      focusApp(appId);

      var r = document.querySelector("#" + appId);
      r.style.transform = `translate(${r.style.getPropertyValue(
        "--window-transform-x"
      )},${r.style.getPropertyValue("--window-transform-y")}) scale(1)`;

      const minimizedWindows = state.appState.minimizedWindows;
      minimizedWindows[appId] = false;
      actions.setAppState({ minimizedWindows });
      return;
    }

    // Already opened
    if (state.alreadyOpenedApps.includes(appId)) focusApp(appId);
    else {
      const { closedWindows, favouriteApps } = state.appState;
      const freqApps = localStorage.getItem("freqApps")
        ? JSON.parse(localStorage.getItem("freqApps"))
        : [];
      const currentApp = freqApps.find((app) => app.id === appId);
      if (currentApp) {
        freqApps.forEach((app) => {
          if (app.id === currentApp.id) {
            app.frequency += 1;
          }
        });
      } else {
        freqApps.push({ id: appId, frequency: 1 });
      }

      freqApps.sort((a, b) => {
        if (a.frequency < b.frequency) {
          return 1;
        }
        if (a.frequency > b.frequency) {
          return -1;
        }
        return 0;
      });

      localStorage.setItem("freqApps", JSON.stringify(freqApps));

      setTimeout(() => {
        favouriteApps[appId] = true;
        closedWindows[appId] = false;
        actions.setAppState({ closedWindows, favouriteApps, allApps: false });
        focusApp(appId);
        actions.setAlreadyOpenedApps(appId);
      }, 200);
    }
  };

  const closeApp = (appId) => {
    state.alreadyOpenedApps.splice(state.alreadyOpenedApps.indexOf(appId));
    focusLastApp();

    hideSideBar(null, false);

    // close window
    const { closedWindows, favouriteApps, minimizedWindows } = state.appState;

    // if (initFavourite[appId] === false) favouriteApps[appId] = false; // if user default app is not favourite, remove from sidebar
    minimizedWindows[appId] = false;
    closedWindows[appId] = true;

    actions.setAppState({ closedWindows, favouriteApps, minimizeWindow });
  };

  const focusLastApp = () => {
    // if there is atleast one app opened, give it focus
    if (!isAllMinimised()) {
      for (const index in state.alreadyOpenedApps) {
        if (!state.appState.minimizedWindows[state.alreadyOpenedApps[index]]) {
          focusApp(state.alreadyOpenedApps[index]);
          break;
        }
      }
    }
  };

  const isAllMinimised = () => {
    let result = true;
    for (const key in state.appState.minimizedWindows) {
      if (!state.appState.closedWindows[key]) {
        // if app is opened
        result = result & state.appState.minimizedWindows[key];
      }
    }
    return result;
  };

  const focusApp = (appId) => {
    var focusedWindows = state.appState.focusedWindows;
    focusedWindows[appId] = true;
    for (let key in focusedWindows) {
      // eslint-disable-next-line no-prototype-builtins
      if (focusedWindows.hasOwnProperty(key)) {
        if (key !== appId) {
          focusedWindows[key] = false;
        }
      }
    }
    actions.setAppState({ focusedWindows });
  };

  const hideSideBar = (objId, hide) => {
    if (hide === state.appState.hideSideBar) return;

    if (!objId) {
      if (!hide) {
        actions.setAppState({ hideSideBar: false });
      } else {
        for (const key in state.appState.overlappedWindows) {
          if (state.appState.overlappedWindows[key]) {
            actions.setAppState({ hideSideBar: true });
          }
        }
      }
    } else {
      if (!hide) {
        for (const key in state.appState.overlappedWindows) {
          if (state.appState.overlappedWindows[key] && key !== objId) return;
        }
      }
    }

    let overlappedWindows = state.appState.overlappedWindows;
    overlappedWindows[objId] = hide;
    actions.setAppState({ hideSideBar: hide, overlappedWindows });
  };

  const showAllApps = () => actions.setAllApps(!state.allApps);

  return (
    <Fade in={Boolean(state?.isAuth)} {...(state?.isAuth ? { timeout: 1000 } : {})}>
      <Box
        onClick={handleClick}
        onContextMenu={handleContextMenu}
        height="100vh"
        sx={{
          // backgroundImage: `url(${state?.bgImage})`,
          position: "relative",
          minHeight: "100%",
          minWidth: "100%"
        }}
        className={classes.container}
      >
        <ToolBar
          lock={props.lock}
          shutDown={props.shutDown}
          logout={props.logout}
          reset={props.reset}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            // alignContent: "flex-end",
            flexWrap: "wrap-reverse",
            overflow: "hidden",
            pl: "7ch"
          }}
        >
          {/* Desktop Area */}

          <div
            style={{ height: "100%", width: "100%", position: "absolute", left: 0, top: 0 }}
            data-context="desktop-area"
          >
            {apps.map(
              (app, i) =>
                state.appState.closedWindows[app.id] !== undefined &&
                !state.appState.closedWindows?.[app.id] && (
                  <AppContainer
                    key={i}
                    id={app.id}
                    title={app.title}
                    screen={app.screen}
                    minimizeWindow={minimizeWindow}
                    hideSideBar={hideSideBar}
                    closeWindow={closeApp}
                    focusApp={focusApp}
                    openApp={openApp}
                    minimized={state.appState.minimizedWindows[app.id]}
                  />
                )
            )}
          </div>

          {/* Background Image Here */}

          <Box
            sx={{
              backgroundImage: `url(${state?.bgImage})`,
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              zIndex: -10,
              top: 0,
              right: 0
            }}
          />

          <SideBar
            hideSideBar={hideSideBar}
            isSideBarHidden={state.appState.hideSideBar}
            openApp={openApp}
            showAllApps={showAllApps}
            allApps={state.allApps}
          />
          <Box sx={{ width: ".25rem", height: "100%", position: "absolute", left: 0, top: 0 }} />
          {state.apps.map(
            (app, i) =>
              app.isDesktopShortcut && (
                <Box key={i} onDoubleClick={() => openApp(app.id)} className={classes.app}>
                  {app.icon}
                  <Typography sx={{ mt: 0.5 }} variant="body2" align="center">
                    {app.title}
                  </Typography>
                </Box>
              )
          )}
          {state.allApps && (
            <ShowAllApps apps={apps} recentApps={state.alreadyOpenedApps} openApp={openApp} />
          )}
        </Box>
        {showContextMenu && (
          <ContextMenu
            isFullScreen={isFullScreen}
            setFullScreen={setFullScreen}
            coordinate={coordinate}
            openApp={openApp}
          />
        )}
      </Box>
    </Fade>
  );
};

export default DesktopScreen;
