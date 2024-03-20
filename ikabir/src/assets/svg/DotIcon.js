/* eslint-disable react/prop-types */
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const DotIcon = (props) => {
  return (
    <SvgIcon
      sx={{
        width: "4px",
        height: "4px",
        position: "absolute",
        left: 0
      }}
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        fill="#E95420"
        d="M 12 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 z"
      ></path>
    </SvgIcon>
  );
};

export default DotIcon;
