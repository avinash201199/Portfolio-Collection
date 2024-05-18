import React from "react";
import {
  widthStyles,
  spaceStyles,
  heightStyles,
  directionStyles,
} from "../assets/lib/data";

interface DividerProps {
  direction:
    | "outer-right-to-inner-left"
    | "outer-left-to-inner-right"
    | "inner-right-to-middle"
    | "inner-left-to-middle"
    | "middle-to-inner-right"
    | "middle-to-inner-left"
    | "middle";
  color: string;
  thickness: string;
  height: "small" | "middle" | "large" | "extraLarge";
  dividerStyle: string;
}

const Divider: React.FC<DividerProps> = ({
  direction,
  color,
  thickness,
  height,
  dividerStyle,
}) => {
  const borderStyle = {
    borderColor: `var(--${color})`,
    borderStyle: `${dividerStyle}`,
  };

  const heightStyle = heightStyles[height];
  const directionStyle = directionStyles[direction];
  const spaceStyle = spaceStyles[direction];
  const widthStyle = widthStyles[direction];

  return (
    <div style={directionStyle} className="relative">
      <div
        className="flex justify-end mb-10 "
        style={{ height: heightStyle?.heights[0], ...spaceStyle }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle,
            borderRightWidth: thickness,
            borderBottomWidth: thickness,
            width: widthStyle?.widths[0],
          }}
        ></div>
      </div>
      <div
        className="flex justify-end -mt-10"
        style={{ height: heightStyle?.heights[1] }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle,
            borderLeftWidth: thickness,
            width: widthStyle?.widths[1],
          }}
        ></div>
      </div>
    </div>
  );
};

export default Divider;
