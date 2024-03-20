import React, { lazy, Suspense, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import theme from "./assets/theme";

const BootScreen = lazy(() => import("./screens/BootScreen"));
const Desktop = lazy(() => import("./screens/DesktopScreen"));
const ResumeViewer = lazy(() => import("./components/apps/ResumeViewer"));

import { AppContext } from "./context";
import { Typography } from "@mui/material";

const App = () => {
  const { state, actions } = useContext(AppContext);
  const [isReset, setReset] = useState(false);

  const shutDown = () => {
    setTimeout(() => {
      actions.setShutDown(true);
    }, 100);
    actions.login(false);
  };
  const lock = () => {
    setTimeout(() => {
      actions.setLock(true);
    }, 100);
    actions.login(false);
  };
  const logout = () => {
    actions.login(false);
  };

  const reset = () => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isLock");
      localStorage.removeItem("isShutDown");
      localStorage.removeItem("newFolders");
      localStorage.removeItem("freqApps");
      localStorage.removeItem("brightness");
      localStorage.removeItem("sound");
      actions.login(false);
      actions.setShutDown(true);
      actions.setLock(true);
    }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <React.Fragment>
                  {" "}
                  {!state.isAuth ? (
                    <BootScreen />
                  ) : (
                    <Desktop lock={lock} shutDown={shutDown} logout={logout} reset={reset} />
                  )}
                  {isReset && (
                    <Box
                      position="absolute"
                      left="50%"
                      top="50%"
                      display="flex"
                      flexDirection="column"
                      width="100%"
                      sx={{ transform: "translate(-50%,-50%)" }}
                    >
                      <Loader bgColor="transparent" />
                      <Typography
                        variant="h6"
                        sx={{
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%,-50%)",
                          mt: 6,
                          color: "#A52430"
                        }}
                      >
                        Resetting Ubuntu...
                      </Typography>
                    </Box>
                  )}
                </React.Fragment>
              }
            ></Route>
            <Route
              path="/resume"
              exact
              element={
                <React.Fragment>
                  <Box sx={{ width: "100%", height: "100vh" }}>
                    <ResumeViewer />
                  </Box>
                </React.Fragment>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
