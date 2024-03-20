/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import makeStyles from "@mui/styles/makeStyles";

import { AppsIcon } from "../../assets/svg/apps";
import DotIcon from "../../assets/svg/DotIcon";
import { AppContext } from "../../context";
import { Slide, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  sidebarBox: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "auto",
    zIndex: 40,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: 3,
    paddingTop: theme.spacing(0.5)
  },
  listItem: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    padding: theme.spacing(1),
    width: "auto",
    borderRadius: theme.spacing(0.5),
    position: "relative",
    margin: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    "& svg": {
      transform: "scale(1.4)"
    }
  }
}));

const SideBar = (props) => {
  const { state, actions } = useContext(AppContext);
  const classes = useStyles();
  const [showTitle, setShowTitle] = useState({});

  return (
    <Slide direction="right" in={!state.appState.hideSideBar}>
      <Box
        className={classes.sidebarBox}
        id="sidebar"
        sx={{ transform: props.isSideBarHidden && "translateX(-100%)" }}
      >
        {state.apps.map(
          (app, i) =>
            app.isFavourite && (
              <Box
                onClick={() => props.openApp(app.id)}
                key={i}
                disablePadding
                className={classes.listItem}
                id={"sidebar-" + app.id}
                sx={{
                  backgroundColor:
                    state.appState.closedWindows?.[app.id] !== undefined &&
                    !state.appState.closedWindows?.[app.id] &&
                    "rgba(255, 255, 255, 0.1)"
                }}
                onMouseEnter={() => setShowTitle({ [app.title]: true })}
                onMouseLeave={() => setShowTitle({ [app.title]: false })}
              >
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {state.appState.closedWindows?.[app.id] !== undefined &&
                    !state.appState.closedWindows?.[app.id] && (
                      <DotIcon style={{ marginLeft: "2px" }} />
                    )}
                  {app.icon}
                </Box>
                <Typography
                  sx={{
                    position: "absolute",
                    p: "2px 6px",
                    color: "rgba(246, 246, 245, 0.9)",
                    background: "#111",
                    border: "1px solid rgba(156,163,175, 0.4)",
                    left: "100%",
                    borderRadius: "6px",
                    width: "max-content",
                    top: "50%",
                    transform: "translateY(-50%)",
                    ml: "1.5ch",
                    visibility: showTitle[app.title] ? "visible" : "hidden"
                  }}
                  variant="body2"
                >
                  {app.title}
                </Typography>
              </Box>
            )
        )}
        <div style={{ flexGrow: 1 }} />
        <Box disablePadding className={classes.listItem} onClick={props.showAllApps}>
          <Box
            sx={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={() => setShowTitle({ ["allApps"]: true })}
            onMouseLeave={() => setShowTitle({ ["allApps"]: false })}
          >
            <AppsIcon />
          </Box>
          <Typography
            sx={{
              position: "absolute",
              p: "2px 6px",
              color: "rgba(246, 246, 245, 0.9)",
              background: "#111",
              border: "1px solid rgba(156,163,175, 0.4)",
              left: "100%",
              borderRadius: "6px",
              width: "max-content",
              top: "50%",
              transform: "translateY(-50%)",
              ml: "1.5ch",
              visibility: showTitle["allApps"] ? "visible" : "hidden"
            }}
            variant="body2"
          >
            {"Show Applications"}
          </Typography>
        </Box>
      </Box>
    </Slide>
  );
};

export default SideBar;
