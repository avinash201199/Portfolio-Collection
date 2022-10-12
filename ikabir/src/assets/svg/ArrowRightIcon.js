import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const ArrowRightIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 48 48" style={{ transform: "rotate(-90deg)" }}>
      <path d="M14 20l10 10 10-10z" />
      <path d="M0 0h48v48h-48z" fill="none" />
    </SvgIcon>
  );
};

export default ArrowRightIcon;
