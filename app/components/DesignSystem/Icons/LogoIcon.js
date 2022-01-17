import React from "react";
import PropTypes from "prop-types";
import SVG from "./SVGIcon";

const LogoIcon = (props) => {
  return (
    <SVG
      width={props.width}
      height={props.height}
      viewBox="17,17"
      className={props.className}
      color={props.color}
      fill="none"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Group-6"
          transform="translate(-1009.000000, -29.000000)"
          stroke="#25B79B"
          strokeWidth="2"
        >
          <g id="logo" transform="translate(1009.000000, 29.000000)">
            <rect id="Rectangle" x="1" y="1" width="15" height="15" rx="2" />
            <line
              x1="5"
              y1="6"
              x2="5"
              y2="10.4147299"
              id="Path-2"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </SVG>
  );
};

export default React.memo(LogoIcon);

LogoIcon.defaultProps = {
  className: "",
  color: "white",
  width: 17,
  height: 17,
};

LogoIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
