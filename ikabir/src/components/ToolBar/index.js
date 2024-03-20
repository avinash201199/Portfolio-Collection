/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

// @mui/material imports

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";
import styled from "@mui/styles/styled";

import moment from "moment";

// project imports assets
import Stack from "@mui/material/Stack";
import ArrowDownIcon from "../../assets/svg/ArrowDownIcon";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
import BatteryIcon from "../../assets/svg/BatteryIcon";
import SpeakerIcon from "../../assets/svg/SpeakerIcon";
import BlueToothIcon from "../../assets/svg/BlueToothIcon";
import WifiIcon from "../../assets/svg/WifiIcon";
import NightModeIcon from "../../assets/svg/NightModeIcon";
import UpIcon from "../../assets/svg/UpIcon";
import Calendar from "./Calendar";
import PropTypes from "prop-types";
import NotificationsIcon from "../../assets/svg/NotificationsIcon";
import { Collapse, List, ListItemButton, Slider } from "@mui/material";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import LockIcon from "../../assets/svg/LockIcon";
import PowerOffIcon from "../../assets/svg/PowerOffIcon";
import BrightnessIcon from "../../assets/svg/BrightnessIcon";

const useStyles = makeStyles({
  toolBar: {
    minHeight: "100% !important",
    justifyContent: "space-between",
    cursor: "default"
  },
  list: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    // padding: "0.25rem 0.75rem",
    borderBottom: "2px solid transparent"
  },
  up: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "90%"
  },
  textField: {
    borderRadius: "4px",
    "& input": {
      fontSize: "14px",
      p: "1ch",
      maxWidth: "180px",
      color: "#333"
    },
    "& fieldset": {
      border: "2px solid #E95420 !important"
    },

    "& .MuiOutlinedInput-root": {
      background: "#eee",
      pr: "0.5ch"
    },
    "& .MuiFormHelperText-root": {
      color: "#eee",
      position: "absolute",
      bottom: "-25px",
      left: "-10px"
    }
  }
});

const CustomSwitch = styled(Switch)(() => ({
  height: "auto !important",
  paddingTop: "0 !important",
  paddingBottom: "0 !important",
  marginLeft: "-5px !important",
  "& .MuiSwitch-switchBase": {
    "&:hover": {
      backgroundColor: "transparent !important"
    },
    padding: 0,
    left: 12.5,
    top: 1,
    "&.Mui-checked": {
      transform: "translateX(20px)"
    }
  },
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    backgroundColor: "#fff !important"
  },
  "& .MuiSwitch-track": {
    height: 17.5,
    minWidth: 37,
    borderRadius: 12,
    backgroundColor: "#CECAC5",
    opacity: "0.8 !important"
  }
}));

const ToolBar = (props) => {
  const [date, setDate] = useState(moment().format("ddd MMM D HH:mm:ss"));
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const classes = useStyles();
  const [option, setOption] = useState({ one: false, two: false, three: false });
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState({
    sound: localStorage.getItem("sound") || 75,
    brightness: localStorage.getItem("brightness") || 100
  });

  useEffect(() => {
    const interval = setInterval(() => setDate(moment().format("ddd MMM D HH:mm:ss")), 1000);

    return () => clearInterval(interval);
  }, []);

  const curMonth = moment().format("MMMM");
  const curDate = moment().format("D");
  const curDay = moment().format("dddd");
  const curYear = moment().format("YYYY");

  const onChange = (e) => {
    setObj((state) => ({ ...state, [e.target.name]: e.target.value }));
    localStorage.setItem(e.target.name, e.target.value);
    if (e.target.name === "brightness") {
      document.getElementById("root").style.filter = `brightness(${
        (3 / 400) * obj.brightness + 0.25
      })`;
    }
  };

  const NotificationAndCalendarMenu = (
    <Menu
      id="notification-menu"
      anchorEl={anchorEl1}
      keepMounted
      open={Boolean(anchorEl1)}
      onClose={() => setAnchorEl1(null)}
      variant="selectedMenu"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      sx={{
        maxWidth: { xs: "calc(100% - 10ch)", md: "calc(100% - 32px)" },
        mt: "1.8ch",
        "& ul": {
          padding: "12px 0 !important",
          border: "1px solid #cdcdcd",
          boxShadow:
            "0px 2px 1px -1px rgba(255, 255, 255, 0.2),0px 1px 1px 0px rgba(255, 255, 255, 0.14),0px 1px 3px 0px rgba(255, 255, 255, 0.12)"
        }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 770,
          maxWidth: "100%",
          minHeight: 360,
          p: 0,
          "& .MuiList-root": {
            padding: 0
          }
        }}
      >
        <Stack direction="row" sx={{ justifyContent: { xs: "center" } }}>
          <Stack flex={0.62} px={3.1} pt={1} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack flex={1} sx={{ justifyContent: "center", alignItems: "center" }}>
              <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                <NotificationsIcon fontSize="large" />
                <Typography variant="body2">No Notifications</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center">
                <Typography
                  sx={{
                    letterSpacing: "-0.3px"
                  }}
                  variant="body2"
                >
                  Do Not Disturb
                </Typography>
                <CustomSwitch color="secondary" disableRipple />
              </Stack>
              <Button
                disableRipple
                sx={{
                  color: "#333",
                  border: "1px solid #CECAC5",
                  padding: "4px 18px"
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 1,
                    color: "#444"
                  }}
                  variant="body2"
                >
                  Clear
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Divider
            sx={{ display: { xs: "none", sm: "block" }, height: "360px" }}
            orientation="vertical"
          />
          <Stack flex={{ xs: 1, sm: 0.38 }} px={1.5} pt={1}>
            <Typography
              variant="subtitle1"
              style={{
                lineHeight: 1
              }}
            >
              {curDay}
            </Typography>
            <Typography variant="h5" mb={2.5}>
              {curMonth}
              {curDate}
              {curYear}
            </Typography>
            <Calendar />
          </Stack>
        </Stack>
      </Paper>
    </Menu>
  );

  const RightMenu = (
    <Menu
      id="menu-2"
      anchorEl={anchorEl2}
      keepMounted
      open={Boolean(anchorEl2)}
      onClose={() => setAnchorEl2(null)}
      variant="selectedMenu"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      sx={{
        marginTop: "1.5ch"
      }}
    >
      <Paper
        elevation={0}
        sx={{
          // width: 200,
          maxWidth: 250,
          p: 0,
          "& .MuiList-root": {
            padding: 0
          },
          "& li:hover": {
            backgroundColor: "#eee"
          },
          "& li": {
            minHeight: "auto !important"
          },
          "& .MuiListItemIcon-root": {
            minWidth: "auto !important",
            mr: 0.5
          }
        }}
      >
        <MenuList dense>
          <MenuItem disableRipple sx={{ height: "3.2ch" }}>
            <ListItemIcon>
              <SpeakerIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText variant="caption">
              <Slider
                size="small"
                aria-label="Small"
                onChange={onChange}
                value={obj.sound}
                name="sound"
                sx={{
                  color: "#9A2040",
                  display: "flex",
                  "& .MuiSlider-thumb": {
                    boxShadow: "0px 0px 0px 5px transparent"
                  },
                  "& .MuiSlider-thumb:hover": {
                    boxShadow: "0px 0px 0px 5px rgba(25, 118, 210, 0.16)"
                  },
                  "& .MuiSlider-thumb:active": {
                    boxShadow: "0px 0px 0px 5px rgba(25, 118, 210, 0.16)"
                  }
                }}
              />
            </ListItemText>
          </MenuItem>
          <MenuItem disableRipple sx={{ height: "3.2ch" }}>
            <ListItemIcon>
              <BrightnessIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText variant="caption">
              <Slider
                size="small"
                aria-label="Small"
                onChange={onChange}
                name="brightness"
                value={obj.brightness}
                sx={{
                  color: "#9A2040",
                  display: "flex",
                  "& .MuiSlider-thumb": {
                    boxShadow: "0px 0px 0px 5px transparent"
                  },
                  "& .MuiSlider-thumb:hover": {
                    boxShadow: "0px 0px 0px 5px rgba(25, 118, 210, 0.16)"
                  },
                  "& .MuiSlider-thumb:active": {
                    boxShadow: "0px 0px 0px 5px rgba(25, 118, 210, 0.16)"
                  }
                }}
              />
            </ListItemText>
          </MenuItem>
          <Divider sx={{ width: "40%", m: "0 auto" }} />
          <MenuItem sx={{ height: "3.2ch" }}>
            <ListItemIcon>
              <WifiIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="caption">Wifi Connected</Typography>
            </ListItemText>
            <ArrowRightIcon sx={{ ml: 5 }} />
          </MenuItem>
          <MenuItem sx={{ height: "3.2ch" }}>
            <ListItemIcon>
              <BatteryIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="caption">Fully Charged</Typography>
            </ListItemText>
            <ArrowRightIcon sx={{ ml: 5 }} />
          </MenuItem>
          <Divider sx={{ width: "40%", m: "0 auto" }} />
          <MenuItem sx={{ height: "3.2ch" }}>
            <ListItemIcon>
              <SettingsIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="caption">Settings</Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem sx={{ height: "3.2ch" }} onClick={props.lock}>
            <ListItemIcon>
              <LockIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="caption">Lock</Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => setOpen((state) => !state)}
            sx={{ borderBottom: open && "1px solid #ddd", height: "3.2ch" }}
          >
            <ListItemIcon>
              <PowerOffIcon
                sx={{
                  transform: "scale(0.7)",
                  color: "#333"
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="caption">Power Off / Log Out</Typography>
            </ListItemText>
            {open ? <ArrowDownIcon sx={{ ml: 5 }} /> : <ArrowRightIcon sx={{ ml: 5 }} />}
          </MenuItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MenuItem sx={{ pl: 7, height: "3.2ch" }}>
              <Typography variant="caption" onClick={props.logout}>
                Log Out
              </Typography>
            </MenuItem>
            <MenuItem sx={{ pl: 7, height: "3.2ch" }}>
              <Typography variant="caption" onClick={props.reset}>
                Reset Ubuntu
              </Typography>
            </MenuItem>
            <Divider sx={{ width: "40%", m: "0 auto" }} />
            <MenuItem onClick={props.shutDown} sx={{ pl: 7, height: "3.2ch" }}>
              <Typography variant="caption">Power Off...</Typography>
            </MenuItem>
          </Collapse>
        </MenuList>
      </Paper>
    </Menu>
  );

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "#111",
        zIndex: 30
      }}
      position="absolute"
    >
      <Toolbar
        variant="dense"
        className={classes.toolBar}
        sx={{
          px: "1ch !important"
        }}
      >
        <ClickAwayListener
          onClickAway={() =>
            setOption((state) => ({
              ...state,
              one: false
            }))
          }
        >
          <Typography
            variant="body2"
            sx={{
              borderColor: option.one && "#E95420"
            }}
            className={classes.list}
            onClick={() =>
              setOption((state) => ({
                ...state,
                one: true
              }))
            }
          >
            Activities
          </Typography>
        </ClickAwayListener>

        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <Fade in={option.two}>
            <Box>
              <UpIcon className={classes.up} />
            </Box>
          </Fade>
          <ClickAwayListener
            onClickAway={() =>
              setOption((state) => ({
                ...state,
                two: false
              }))
            }
          >
            <Typography
              aria-controls="notification-menu"
              aria-haspopup="true"
              variant="body2"
              onClick={(e) => {
                setAnchorEl1(e.currentTarget);
                setOption((state) => ({
                  ...state,
                  two: true
                }));
              }}
              className={classes.list}
              sx={{
                borderColor: option.two && "#E95420"
              }}
            >
              {date}
            </Typography>
          </ClickAwayListener>
        </div>
        {/* <Zoom in={option.two} easing="ease-in-out" timeout={400}> */}
        {NotificationAndCalendarMenu}
        {/* </Zoom> */}

        <ClickAwayListener
          onClickAway={() =>
            setOption((state) => ({
              ...state,
              three: false
            }))
          }
        >
          <Stack
            aria-controls="menu-2"
            aria-haspopup="true"
            onClick={(e) => {
              setAnchorEl2(e.currentTarget);
              setOption((state) => ({
                ...state,
                three: true
              }));
            }}
            direction="row"
            alignItems="center"
            className={classes.list}
            sx={{
              position: "relative",
              borderColor: option.three && "#E95420"
            }}
          >
            <WifiIcon
              sx={{
                transform: "scale(0.7)"
              }}
            />
            <SpeakerIcon
              sx={{
                transform: "scale(0.7)"
              }}
            />
            <BatteryIcon
              sx={{
                height: "18px",
                transform: "scale(0.7)"
              }}
            />
            <ArrowDownIcon
              sx={{
                ml: -1
              }}
            />
            <UpIcon
              sx={{
                opacity: anchorEl2 ? 1 : 0,
                transition: "opacity 260ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
              }}
              className={classes.up}
            />
          </Stack>
        </ClickAwayListener>
        {RightMenu}
      </Toolbar>
    </AppBar>
  );
};

ToolBar.propTypes = {
  color: PropTypes.string
};

export default ToolBar;
