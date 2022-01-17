import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import createClass from "classnames";
import ArrowIcon from "@Components/DesignSystem/Icons/ArrowIcon";

const allowedVariants = ["filled", "outlined"];
const allowArrow = ["left", "right"];

const useStyles = createUseStyles({
  root: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    userSelect: "none",
  },
  rounded: {
    borderRadius: 24,
  },
  filled: {
    color: "white",
    backgroundColor: "rgb(88,180,156)",
    "&:hover": {
      opacity: 0.8,
    },
  },
  outlined: {
    backgroundColor: "transparent",
    border: "1px solid rgb(88,180,156)",
    color: "rgb(88,180,156)",
    "&:hover": {
      backgroundColor: "rgb(88,180,156)",
      color: "white",
      "& svg": {
        fill: "white",
      },
    },
  },
  disabled: {
    cursor: "not-allowed",
    backgroundColor: "lightgray",
  },
  first: {
    transform: "rotate(180deg)",
  },
});

const Button = React.forwardRef(function Button(props, ref) {
  const { disabled, label, onClick, color, variant, rounded, arrow } = props;
  const localStyle = useStyles();

  function handleClick() {
    if (onClick && !disabled) {
      onClick();
    }
  }

  return (
    <div
      className={createClass(localStyle.root, {
        [localStyle[variant]]: variant,
        [localStyle.rounded]: rounded,
        [localStyle.disabled]: disabled,
      })}
      onClick={handleClick}
    >
      <div className={localStyle.first}>
        {arrow === "right" && <ArrowIcon />}
      </div>
      <div>{label}</div>
      <div>{arrow === "left" && <ArrowIcon />}</div>
    </div>
  );
});
Button.displayName = "Button";

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(allowedVariants),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  arrow: PropTypes.oneOf(allowArrow),
};

export default Button;
