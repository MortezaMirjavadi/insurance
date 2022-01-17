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
  function onChange(element, value) {
    handleInputChangeWithParam(element.target.name, value);
  }
  function checkPassword(pass) {
    if (pass.length < 4) {
      return { isValid: false, message: "رمز عبور حداقل باید 4 کاراکتر باشد." };
    } else if (pass.length > 10) {
      return {
        isValid: false,
        message: "رمز عبور حداکثر باید 10 کاراکتر باشد.",
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
      const _required = "اجباری";
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
        mobile: "شماره موبایل به درستی وارد نشده",
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
          "حداقل 4 کاراکتر و حداکثر 10 کاراکتر -حداقل یک حرف کوچک و بزرگ و حداقل یک عدد",
      });
      return;
    }
    setErrors({ ...errors, name: "", family: "", password: "", mobile: "" });
    dispatch(changeProfile(values));
    dispatch(changeWizardLevel(WIZARD_PROCESS.CAR_TYPE_AND_MODEL));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>ثبت نام</div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <TextField
            name="name"
            label="نام"
            type="text"
            value={values.name}
            onChange={onChange}
            errorMessage={errors}
          />
        </div>
        <div className={localStyle.half}>
          <TextField
            name="family"
            label="نام خانوادگی"
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
            label="شماره موبایل"
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
            label="رمز عبور"
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
          <Button label="ثبت نام" variant="filled" rounded onClick={register} />
        </div>
      </div>
    </div>
  );
};

export default Register;
