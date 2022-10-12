import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";
import RefreshIcon from "../../assets/svg/RefreshIcon";
import HomeIcon from "../../assets/svg/HomeIcon";

const useStyles = makeStyles(() => ({
  icon: {
    width: "3.5ch",
    height: "3.6ch",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5ch",
    marginLeft: "0.5ch",
    "&:hover": {
      backgroundColor: "#666"
    }
  },
  urlInput: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    color: "#eee",
    borderRadius: "9999px",
    padding: "0.125rem 0.75rem",
    flexGrow: 1,
    lineHeight: "inherit",
    border: "none",
    backgroundColor: "#111111",
    cursor: "text",
    marginLeft: "0.75ch",
    marginRight: "3ch",
    "&:focus": {
      color: "#fff"
    }
  }
}));

const Firefox = () => {
  const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");
  const [displayUrl, setDisplayUrl] = useState("https://www.google.com");

  const classes = useStyles();
  const elm = useRef(null);

  const goToHome = () => {
    setUrl("https://www.google.com/webhp?igu=1");
    setDisplayUrl("https://www.google.com");
    refresh();
  };

  const refresh = () => {
    console.log(elm.current.src);
    if (elm.current.src) elm.current.src += "";
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let url = e.target.value.trim();
      let displayUrl = "";

      if (url.length === 0) return;

      if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
        url = "https://" + url;
      }

      url = encodeURI(url);
      displayUrl = url;
      if (url.includes("google.com")) {
        url = "https://www.google.com/webhp?igu=1";
        displayUrl = "https://www.google.com";
      }
      setUrl(url);
      setDisplayUrl(displayUrl);
      // this.storeVisitedUrl(url, display_url);
      // document.getElementById("chrome-url-bar").blur();
    }
  };

  // useEffect(() => {
  //   console.log(elm.current);
  // }, [elm]);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(51, 51, 51, 1)"
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingTop: "0.5ch",
          paddingBottom: "0.5ch",
          display: "flex",
          justifyContent: "start",
          alignItems: "center"
        }}
        className="text-white text-sm border-b border-gray-900"
      >
        <div onClick={refresh} className={classes.icon}>
          <RefreshIcon />
        </div>
        <div onClick={goToHome} className={classes.icon}>
          <HomeIcon />
        </div>
        <input
          className={classes.urlInput}
          onKeyDown={onKeyDown}
          onChange={(e) => setDisplayUrl(e.target.value)}
          onFocus={(e) => e.target.select()}
          value={displayUrl}
          type="url"
          spellCheck={false}
          autoComplete="off"
        />
      </Box>
      <iframe ref={elm} style={{ flexGrow: 1 }} src={url} frameBorder="0" />
    </Box>
  );
};

export default Firefox;
