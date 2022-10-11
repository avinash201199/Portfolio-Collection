import { SvgIcon } from "@mui/material";
import React from "react";

const BackIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 50 50">
      <path
        style={{ color: "#eee" }}
        d="M25,1C11.767,1,1,11.767,1,25s10.767,24,24,24s24-10.767,24-24S38.233,1,25,1z M25,47C12.869,47,3,37.131,3,25
      S12.869,3,25,3s22,9.869,22,22S37.131,47,25,47z"
      />
      <polygon points="29.293,10.293 14.586,25 29.293,39.707 30.707,38.293 17.414,25 30.707,11.707 	" />
    </SvgIcon>
  );
};

export default BackIcon;
