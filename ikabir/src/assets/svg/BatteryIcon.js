import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const BatteryIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 64 64">
      <path fill="#02905d" d="M22,9V3a2.002,2.002,0,0,1,2-2H40a2.0023,2.0023,0,0,1,2,2V9Z" />
      <rect
        stroke="#eee"
        strokeWidth="5px"
        width="34"
        height="54"
        x="15"
        y="9"
        fill="#02905d"
        rx="4"
        ry="4"
      />
      <polygon fill="#fff" points="30 40 20 40 34 20 34 32 44 32 30 52 30 52 30 40" />
      <path
        fill="#322b33"
        d="M44,31H35V20a1,1,0,0,0-1.8193-.5732l-14,20A1,1,0,0,0,20,41h9V52a1,1,0,0,0,1.8193.5732l14-20A1,1,0,0,0,44,31ZM31,48.8276V40a1,1,0,0,0-1-1H21.92L33,23.1724V32a1,1,0,0,0,1,1h8.0791Z"
      />
      <path
        fill="#322b33"
        stroke="#eee"
        strokeWidth="3px"
        d="M45,8H43V3a3.0033,3.0033,0,0,0-3-3H24a3.0033,3.0033,0,0,0-3,3V8H19a5.0059,5.0059,0,0,0-5,5V59a5.0059,5.0059,0,0,0,5,5H45a5.0059,5.0059,0,0,0,5-5V13A5.0059,5.0059,0,0,0,45,8ZM23,3a1.0013,1.0013,0,0,1,1-1H40a1.0009,1.0009,0,0,1,1,1V8H23ZM48,59a3.0033,3.0033,0,0,1-3,3H19a3.0033,3.0033,0,0,1-3-3V13a3.0033,3.0033,0,0,1,3-3H45a3.0033,3.0033,0,0,1,3,3Z"
      />
    </SvgIcon>
  );
};

export default BatteryIcon;
