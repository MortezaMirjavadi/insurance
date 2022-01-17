import React from "react";
import { createUseStyles } from "react-jss";
import { Button, TextField } from "@Components/DesignSystem";
import { useInput } from "@App/hooks/useInput";
import createClass from "classnames";
import {useDispatch} from "react-redux";
import {changeWizardLevel} from "@Store/thirdPartyInsurance/Actions";
import {WIZARD_PROCESS} from "@Config/constants";

const useStyles = createUseStyles({
  root: {
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 80,
    "@media (max-width: 650px)": {
      width: "90%",
    }
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    "@media (max-width: 650px)": {
      width: "100%",
      textAlign: "center",
      fontSize: 20,
    }
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
    "@media (max-width: 650px)": {
      width: "100%",
      flexDirection: "column",
      rowGap: 20,
    }
  },
  half: {
    width: 200,
    "@media (max-width: 650px)": {
      width: "100%",
    }
  },
  fullWidth: {
    width: 420,
    "@media (max-width: 650px)": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }
  },
  mt_20: {
    marginTop: 20,
  },
  btn: {
    width: 130,
    height: 40,
    fontSize: 12,
    float: "left",
  },
});

const Register = () => {
  const localStyle = useStyles();
  const dispatch = useDispatch();
  const { values, handleInputChangeWithParam } = useInput({
    name: "",
    family: "",
    mobile: "",
    password: "",
  });
  function onChange(element, value) {
    handleInputChangeWithParam(element.target.name, value);
  }
  function register() {
    dispatch(changeWizardLevel(WIZARD_PROCESS.CAR_TYPE_AND_MODEL));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>
        ثبت نام
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <TextField
            name="name"
            label="نام"
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div className={localStyle.half}>
          <TextField
            name="family"
            label="نام خانوادگی"
            value={values.family}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <TextField
            name="mobile"
            label="شماره موبایل"
            value={values.mobile}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <TextField
            name="password"
            label="رمز عبور"
            value={values.password}
            onChange={onChange}
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
