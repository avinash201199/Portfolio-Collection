/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "../assets/svg/SearchIcon";
import Zoom from "@mui/material/Zoom";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
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
  }
}));

const Search = styled("div")(({ theme }) => ({
  cursor: "text",
  position: "relative",
  borderRadius: theme.spacing(3),
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95)
  },
  width: "auto",
  color: "#333",
  "&:focus": {
    outline: "2px solid #E95420"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0.5, 0.5, 0.1, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "auto !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > svg": {
    transform: "scale(0.8)"
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "14px",
    fontWeight: 300,
    [theme.breakpoints.up("xs")]: {
      width: "20ch"
    }
  }
}));

const ShowAllApps = (props) => {
  const [obj, setObj] = useState({ q: "", apps: [], isAll: true });
  const classes = useStyles();

  const getFreqApps = () => {
    const freqApps = [];
    const savedApps = JSON.parse(localStorage.getItem("freqApps"));
    if (savedApps) {
      savedApps.forEach((app) => {
        const foundApp = props.apps.find((a) => a.id == app.id);
        if (foundApp) freqApps.push(foundApp);
      });
    }
    return freqApps;
  };
  const apps = obj.isAll ? [...props.apps] : getFreqApps();

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 20,
        backgroundColor: "rgba(0, 0, 0, 0.6)"
      }}
    >
      <Box
        sx={{
          display: "flex",
          pt: "20px",
          justifyContent: "center",
          pr: { md: "10ch", xs: "6ch" }
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Type to search…"
            inputProps={{ "aria-label": "search" }}
            value={obj.q}
            onChange={(e) => setObj((state) => ({ ...state, q: e.target.value }))}
          />
        </Search>
      </Box>
      <Zoom style={{ transitionDelay: "500ms" }} in={true}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 0.5, md: 2 },
            px: { xs: 2.5, md: 10 },
            width: { xs: "100%", md: "80%" },
            mx: "auto",
            pt: 5,
            justifyContent: "space-between",
            // gridTemplateRows: { xs: "repeat(6,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" },
            gridTemplateColumns: {
              xs: "repeat(2,minmax(0,1fr))",
              sm: "repeat(3,minmax(0,1fr))",
              md: "repeat(6,minmax(0,1fr))"
            }
          }}
        >
          {apps.map((app, i) => (
            <Box
              key={i}
              onClick={() => props.openApp(app.id)}
              className={classes.app}
              sx={{ width: "6rem", height: "5rem" }}
            >
              {app.icon}
              <Typography sx={{ mt: 0.5 }} variant="body2" align="center">
                {app.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Zoom>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: 0,
          pr: 8,
          mb: 4
        }}
      >
        <Box
          onClick={() => setObj((state) => ({ ...state, isAll: false }))}
          textAlign="center"
          width={{ xs: "25%", md: "7%" }}
          mx={0.5}
          backgroundColor="transparent"
          sx={{
            cursor: "pointer",
            "&:hover div": {
              backgroundColor: obj.isAll && "#fff"
            },
            "&:hover p": {
              color: obj.isAll && "#fff"
            }
          }}
        >
          <Typography
            component={"p"}
            variant="body2"
            sx={{ color: !obj.isAll ? "#fff" : "#ababab" }}
          >
            Frequent
          </Typography>
          <Box
            sx={{
              backgroundColor: !obj.isAll ? "#E95420" : "transparent",
              height: "1px",
              mt: 0.5
            }}
          />
        </Box>
        <Box
          onClick={() => setObj((state) => ({ ...state, isAll: true }))}
          textAlign="center"
          cursor="pointer"
          width={{ xs: "25%", md: "7%" }}
          mx={0.5}
          backgroundColor="transparent"
          sx={{
            cursor: "pointer",
            "&:hover div": {
              backgroundColor: !obj.isAll && "#fff"
            },
            "&:hover p": {
              color: !obj.isAll && "#fff"
            }
          }}
        >
          <Typography
            component={"p"}
            variant="body2"
            sx={{ color: obj.isAll ? "#fff" : "#ababab" }}
          >
            All
          </Typography>
          <Box
            sx={{
              backgroundColor: obj.isAll ? "#E95420" : "transparent",
              height: "1px",
              mt: 0.5
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ShowAllApps;
