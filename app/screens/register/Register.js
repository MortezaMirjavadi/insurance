import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Button, TextField } from "@Components/DesignSystem";
import { useInput } from "@App/hooks/useInput";
import createClass from "classnames";
import { useDispatch } from "react-redux";
import {changeProfile, changeWizardLevel} from "@Store/thirdPartyInsurance/Actions";
import { WIZARD_PROCESS } from "@Config/constants";

const useStyles = createUseStyles({
  root: {
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 70,
    "@media (max-width: 650px)": {
      width: "90%",
    },
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    "@media (max-width: 650px)": {
      width: "100%",
      textAlign: "center",
      fontSize: 20,
    },
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
    "@media (max-width: 650px)": {
      width: "100%",
      flexDirection: "column",
      rowGap: 10,
    },
  },
  half: {
    width: 200,
    "@media (max-width: 650px)": {
      width: "100%",
    },
  },
  fullWidth: {
    width: 420,
    "@media (max-width: 650px)": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
  mt_20: {
    marginTop: 20,
  },
  btn: {
    zIndex: 100,
    width: 130,
    height: 40,
    fontSize: 12,
    float: "left",
  },
});

const Register = () => {
  const localStyle = useStyles();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    name: "",
    family: "",
    mobile: "",
    password: "",
  });
  const { values, handleInputChangeWithParam } = useInput({
    name: "",
    family: "",
    mobile: "",
    password: "",
  });
  function just_persian(str) {
    const p = /^[\u0600-\u06FF\u0698\u067E\u0686\u06AF\s]+$/;
    return p.test(str);

  }
  function onChange(element, value) {
    const _fieldName = element.target.name;
    if (_fieldName === "name" || _fieldName === "family") {
      if (!just_persian(value) && value.length > 0) {
        return;
      }
    }
    handleInputChangeWithParam(_fieldName, value);
  }
  function checkPassword(pass) {
    if (pass.length < 4) {
      return { isValid: false, message: "?????? ???????? ?????????? ???????? 4 ?????????????? ????????." };
    } else if (pass.length > 10) {
      return {
        isValid: false,
        message: "?????? ???????? ???????????? ???????? 10 ?????????????? ????????.",
      };
    }
    return { isValid: true, message: "" };
  }
  function checkMobileNumber(mobile) {
    const hasZero = /^0/.test(mobile);
    const hasPrefix = (hasZero ? /^00989/ : /^989/).test(mobile);
    const isValid = (hasZero
      ? /^(09|00989)?(09|00989)\d{9}$/
      : /^(9|989)?(9|989)\d{9}$/
    ).test(mobile);
    return { isValid, hasPrefix, hasZero };
  }
  function register() {
    // check required
    if (
      values.name === "" ||
      values.family === "" ||
      values.mobile === "" ||
      values.password === ""
    ) {
      const _required = "????????????";
      setErrors({
        ...errors,
        name: values.name === "" ? _required : "",
        family: values.family === "" ? _required : "",
        mobile: values.mobile === "" ? _required : "",
        password: values.password === "" ? _required : "",
      });
      return;
    }
    // check mobile
    if (!checkMobileNumber(values.mobile).isValid) {
      setErrors({
        name: "",
        family: "",
        password: "",
        mobile: "?????????? ???????????? ???? ?????????? ???????? ????????",
      });
      return;
    }
    // check password
    const _password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,10}$/.test(
      values.password
    );
    if (!_password) {
      setErrors({
        name: "",
        family: "",
        mobile: "",
        password:
          "?????????? 4 ?????????????? ?? ???????????? 10 ?????????????? -?????????? ???? ?????? ???????? ?? ???????? ?? ?????????? ???? ??????",
      });
      return;
    }
    setErrors({ ...errors, name: "", family: "", password: "", mobile: "" });
    dispatch(changeProfile(values));
    dispatch(changeWizardLevel(WIZARD_PROCESS.CAR_TYPE_AND_MODEL));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>?????? ??????</div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <TextField
            name="name"
            label="??????"
            type="text"
            value={values.name}
            onChange={onChange}
            errorMessage={errors}
          />
        </div>
        <div className={localStyle.half}>
          <TextField
            name="family"
            label="?????? ????????????????"
            type="text"
            value={values.family}
            onChange={onChange}
            errorMessage={errors}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <TextField
            name="mobile"
            label="?????????? ????????????"
            type="text"
            value={values.mobile}
            onChange={onChange}
            errorMessage={errors}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <TextField
            name="password"
            label="?????? ????????"
            type="password"
            value={values.password}
            onChange={onChange}
            errorMessage={errors}
            direction="ltr"
          />
        </div>
      </div>
      <div className={createClass(localStyle.fullWidth, localStyle.mt_20)}>
        <div className={localStyle.btn}>
          <Button label="?????? ??????" variant="filled" rounded onClick={register} />
        </div>
      </div>
    </div>
  );
};

export default Register;
