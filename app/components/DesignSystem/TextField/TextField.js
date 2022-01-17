import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import createClass from "classnames";
import { createUseStyles } from "react-jss";
import useControlled from "@App/hooks/useControlled";
import { pxToRem } from "@Utils/helper";

const allowedTypes = ["text", "password"];
const allowedDirections = ["rtl", "ltr"];

const componentName = "TextField";

const useStyles = createUseStyles({
  root: {},
  base: { cursor: "text", width: "100%", height: "100%" },
  fieldWrapper: {
    display: "flex",
    position: "relative",
    outline: "none",
    width: "100%",
  },
  label: {
    cursor: "text",
    position: "absolute",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: pxToRem(12),
    top: 0,
    display: "flex",
    background: "white",
    color: "rgb(151, 151, 151)",
    margin: `${pxToRem(8)} ${pxToRem(5)}`,
    lineHeight: pxToRem(22),
    padding: `0 ${pxToRem(10)}`,
    transition: "all .2s linear",
    textTransform: "capitalize",
  },
  labelFocus: {
    transition: "all .2s linear",
    top: pxToRem(-20),
  },
  inp: ({ direction }) => ({
    direction: direction ? direction : "rtl",
    resize: "none",
    fontSize: pxToRem(12),
    color: "black",
    padding: pxToRem(10),
    width: "100%",
    border: `${pxToRem(1.2)} solid rgb(211,211,211)`,
    borderRadius: pxToRem(3),
    "&:focus": {
      borderWidth: pxToRem(1),
      borderRadius: pxToRem(3),
      backgroundColor: "white",
      "&:not($errored)": {
        border: `${pxToRem(1)} solid blue`,
        backgroundColor: "white",
      },
    },
    "&:hover": {
      "&:not($errored)": {
        borderColor: "gray",
      },
    },
  }),
  errored: {},
  errorContainer: {
    width: "100%",
    height: 10,
    fontSize: 12,
    color: "red",
    marginTop: 3,
  },
});

const TextField = React.forwardRef(function TextField(props, ref) {
  const {
    direction,
    type,
    className,
    label,
    onFocus,
    onBlur,
    name: nameProp,
    value: valueProp,
    disabled,
    hasError,
    errorMessage,
    required,
    readOnly,
    onChange,
    defaultValue,
  } = props;

  const localStyle = useStyles(props);
  const [isFocused, setFocused] = useState(false);
  const [isMounted, setMounted] = useState(false);

  const [value, setValue, isControlled] = useControlled(
    valueProp,
    defaultValue,
    componentName
  );

  const refInp = useRef();

  const controlProps = {
    focused: isFocused,
    disabled: disabled,
    hasError: hasError,
    required: required,
    onFocus(e) {
      if (isMounted) {
        e.persist();
        if (onFocus) onFocus(e);
        setFocused(true);
        refInp.current.focus();
      }
    },
    onBlur: (e) => {
      if (isMounted) {
        e.persist();
        if (onBlur) onBlur(e);
        setFocused(false);
      }
    },
    onChange: (e) => {
      if (isMounted) {
        e.persist();
        if (!(controlProps.disabled || readOnly)) {
          if (onChange) onChange(e, e.target.value);
          setValue(e.target.value);
        }
      }
    },
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div
      ref={ref}
      className={createClass(className, localStyle.root, localStyle.base)}
    >
      <div
        className={localStyle.fieldWrapper}
        onFocus={controlProps.onFocus}
        onBlur={controlProps.onBlur}
        onChange={controlProps.onChange}
      >
        <label
          onClick={controlProps.onFocus}
          className={createClass(localStyle.label, {
            [localStyle.labelFocus]: isFocused || value?.length > 0,
          })}
        >
          {label}
        </label>
        <input
          type={type}
          ref={refInp}
          className={localStyle.inp}
          name={nameProp}
          value={value}
          onChange={controlProps.onChange}
        />
      </div>
      <div className={localStyle.errorContainer}>
        {errorMessage && errorMessage[nameProp]}
      </div>
    </div>
  );
});

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(allowedTypes),
  direction: PropTypes.oneOf(allowedDirections),
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errorMessage: PropTypes.object,
};

TextField.displayName = componentName;

export default TextField;
