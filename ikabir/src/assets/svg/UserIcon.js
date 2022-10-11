import { SvgIcon } from "@mui/material";
import React from "react";

const UserIcon = (props) => {
  return (
    <SvgIcon sx={{ width: "36px", height: "36px" }} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-user"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </SvgIcon>
  );
};

export default UserIcon;
