import { SvgIcon } from "@mui/material";
import React from "react";

const MaximizeIcon2 = (props) => {
  return (
    <SvgIcon {...props} style={{ width: "10px" }} viewBox="0 0 24 24">
      <path
        fill="#fff"
        d="M0.5,24h19c0.276,0,0.5-0.224,0.5-0.5V22h2.5c0.276,0,0.5-0.224,0.5-0.5v-20C23,1.224,22.776,1,22.5,1h-20	C2.224,1,2,1.224,2,1.5V4H0.5C0.224,4,0,4.224,0,4.5v19C0,23.776,0.224,24,0.5,24z M3,2h19v19h-2V4.5C20,4.224,19.776,4,19.5,4H3V2z M1,5h1.5H19v16.5V23H1V5z"
      />
    </SvgIcon>
  );
};

export default MaximizeIcon2;
