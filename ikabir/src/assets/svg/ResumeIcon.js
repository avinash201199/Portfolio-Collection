import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const ResumeIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
    </SvgIcon>
  );
};

export default ResumeIcon;
