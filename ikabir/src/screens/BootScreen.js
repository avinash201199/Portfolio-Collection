import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";

// @mui/material imports

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UserIcon from "../assets/svg/UserIcon";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";

// project imports

import Logo from "../assets/svg/Logo";
import BackIcon from "../assets/svg/BackIcon";
import EyeOffIcon from "../assets/svg/EyeOffIcon";
import EyeOnIcon from "../assets/svg/EyeOnIcon";
import Spinner from "../assets/svg/Spinner";
import GoIcon from "../assets/svg/GoIcon";
import ToolBar from "../components/ToolBar";

import { AppContext } from "../context";

// JSS for LockScreen

const useStyles = makeStyles({
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

// Custom User component

const CutsomUser = withStyles({
  btn: {
    cursor: "default !important",
    width: "250px",
    textTransform: "inherit",
    justifyContent: "start !important",
    color: "inherit !important",
    align: "left",
    padding: "0.5ch 1ch",
    // backgroundColor: "rgba(255, 255, 255, 0.04) !important"
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.04) !important"
    }
  },
  user: {
    width: "48px !important",
    height: "48px !important",
    backgroundColor: "rgba(255, 255, 255, 0.05) !important"
  }
})((props) => {
  const { children, classes, forwardedref } = props;
  return (
    <Button
      {...props}
      ref={forwardedref}
      className={classes.btn}
      startIcon={
        <Avatar className={classes.user}>
          <UserIcon />
        </Avatar>
      }
    >
      {children}
    </Button>
  );
});

// Login UI

const Login = ({ isSaved, setIsSaved, showLogin, setShowLogin }) => {
  const { state, actions } = useContext(AppContext);
  const { login } = actions;

  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState("password");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const classes = useStyles();
  const authButton = useRef(null);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
        if (password === "password") {
          login(true);
        } else setError(true);
      }, 300);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(!isLoading);
    }, 700);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!state.isLock && !state.isShutDown) authButton.current.click();
    }, 1000);
  }, [state.isLock, state.isShutDown]);

  return (
    <Fade in={showLogin} {...(showLogin ? { timeout: 1000 } : {})}>
      <Stack spacing={1} alignItems="center">
        <Avatar sx={{ width: 72, height: 72, background: "rgba(255, 255, 255, 0.05)" }}>
          <UserIcon sx={{ width: "48px", height: "48px" }} />
        </Avatar>
        <Typography>{isSaved && "Ichan Kabir"}</Typography>
        <Stack alignItems="center" spacing={1} direction="row">
          <IconButton
            onClick={() => {
              setShowLogin(!showLogin);
              setIsSaved(true);
            }}
            sx={{
              background: "#eee",
              p: 0.3,
              "&:hover": { background: "#eee" }
            }}
            size="small"
          >
            <BackIcon sx={{ fontSize: "1.4rem" }} />
          </IconButton>
          <form onSubmit={handleSubmit}>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              className={classes.textField}
              placeholder="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ cursor: "pointer" }}
                      onClick={() => setIsPassword(!isPassword)}
                      size="small"
                    >
                      {isPassword ? (
                        <EyeOffIcon sx={{ fontSize: "18px" }} />
                      ) : (
                        <EyeOnIcon sx={{ fontSize: "18px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              type={isPassword ? "password" : "text"}
              helperText={isError && "Sorry, that didn't work. Please try again."}
            />
          </form>
          {isLoading ? (
            <IconButton disableRipple sx={{ backgroundColor: "#4F194D", marginLeft: "4px" }}>
              <Spinner sx={{ fontSize: "1rem", color: "#eee" }} />
            </IconButton>
          ) : (
            <IconButton
              ref={authButton}
              type="submit"
              disableRipple
              sx={{ backgroundColor: "rgba(255, 255, 255, 0.04)", marginLeft: "4px" }}
              onClick={() => setLoading(!isLoading)}
            >
              <GoIcon sx={{ fontSize: "1rem", color: "#eee" }} />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Fade>
  );
};

Login.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  setShowLogin: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  setIsSaved: PropTypes.func.isRequired
};

const BootScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const showLoginRef = useRef(null);
  const { state, actions } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (!state.isLock && !state.isShutDown) showLoginRef.current.click();
    }, 500);
  }, [state.isLock, state.isShutDown]);

  const handleShowLogin = () => setShowLogin((state) => !state);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      bgcolor="#4F194D"
      color="grey.50"
      flexDirection="column"
    >
      {/* Users */}

      <ToolBar />

      <Box>
        {!showLogin ? (
          <>
            <Box mb={1} align="start">
              <CutsomUser forwardedref={showLoginRef} onClick={handleShowLogin} disableRipple>
                Ichan Kabir
              </CutsomUser>
            </Box>
            <Box align="start">
              <Typography
                onClick={() => {
                  setShowLogin(!showLogin);
                  setIsSaved(false);
                }}
                component="p"
                align="left"
                variant="caption"
              >
                Not listed?
              </Typography>
            </Box>
          </>
        ) : (
          <Login
            isSaved={isSaved}
            setIsSaved={setIsSaved}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
          />
        )}
      </Box>

      {/* Logo */}
      <Box position="absolute" bottom={0}>
        <Typography
          gutterBottom
          sx={{
            fontSize: "3rem",
            letterSpacing: "-2px",
            fontWeight: 500,
            textTransform: "lowercase"
          }}
          variant="h1"
        >
          Ichan Kabir
        </Typography>
        <div style={{ position: "absolute", top: "-10px", right: "-40px" }}>
          <Logo />
        </div>
      </Box>
    </Box>
  );
};

export default BootScreen;
