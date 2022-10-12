import React from "react";
import { SvgIcon } from "@mui/material";

const FirefoxIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <defs>
        <radialGradient id="A" cx=".8" cy=".3" r="1">
          <stop offset=".2" stopColor="#fe4" />
          <stop offset=".4" stopColor="#fb0" />
          <stop offset=".7" stopColor="#f23" />
          <stop offset=".9" stopColor="#a07" />
        </radialGradient>
        <radialGradient id="B" cx=".6" cy=".2" r=".9">
          <stop offset="0" stopColor="#0cd" />
          <stop offset=".3" stopColor="#06d" />
          <stop offset=".6" stopColor="#517" />
        </radialGradient>
      </defs>
      <g transform="scale(4)">
        <circle cx="65" cy="65" r="45" fill="url(#B)" />
        <path
          d="M17 65c-3 41 50 62 73 43c-3 2-11 2-11 2s27-7 29-21c-3 4-9 7-9 7s19-17 14-38c0 0 2 3-3 15c5-35-15-39-15-52c0 0-2 4-2 5c-6-5-11-9-12-14c0 0-20 23 3 40c18 26-17 51-37 27c5 2 13 3 21-2c11 1 3-9-7-6c-19 5-19-19-9-10c2-3 1-7 1-7c4-4 7-1 11-8c2-6-8 2-12-7c1-3 3-6 8-9c-7-3-13 4-13 4s-6-3-13-1c-5-4-4-10-4-10s-6 3-7 17c-6 6-8 16-8 16l3-5c0 0-3 9-3 18"
          fill="url(#A)"
        />
      </g>
    </SvgIcon>
  );
};

export default FirefoxIcon;
