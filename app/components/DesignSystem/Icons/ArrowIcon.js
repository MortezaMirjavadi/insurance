import React from "react";
import PropTypes from "prop-types";
import SVG from "./SVGIcon";

const LogoIcon = (props) => {
  return (
    <SVG
      width={props.width}
      height={props.height}
      viewBox="444.5,444.5"
      className={props.className}
      color={props.color}
      fill="#25B79B"
    >
      <g>
        <path
          className="st0"
          d="M213.1,222.4L351.9,83.7c7-7,10.6-15.7,10.6-25.8c0-10.2-3.5-18.8-10.6-25.8l-21.4-21.4
		c-7-7-15.7-10.6-25.8-10.6s-18.8,3.5-25.8,10.6L92.6,196.4c-7,7-10.6,15.7-10.6,25.8s3.5,18.8,10.6,25.8L278.8,434
		c7,7,15.7,10.6,25.8,10.6s18.8-3.5,25.8-10.6l21.4-21.4c7-7,10.6-15.6,10.6-25.7c0-10.1-3.5-18.7-10.6-26L213.1,222.4z"
        />
      </g>
    </SVG>
  );
};

export default React.memo(LogoIcon);

LogoIcon.defaultProps = {
  className: "",
  color: "white",
  width: 10,
  height: 10,
};

LogoIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
