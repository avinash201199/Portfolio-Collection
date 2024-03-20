import { SvgIcon } from "@mui/material";
import React from "react";

const DiscordIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <rect width="512" height="512" rx="50%" fill="#5869E9" />
      <path
        d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
        fill="#fff"
      />
      <ellipse cx="196" cy="279" rx="33" ry="35" fill="#5869E9" />
      <ellipse cx="312" cy="279" rx="33" ry="35" fill="#5869E9" />
    </SvgIcon>
  );
};

export default DiscordIcon;
