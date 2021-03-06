import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Button, Select } from "@Components/DesignSystem";
import { useInput } from "@App/hooks/useInput";
import createClass from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getDriverDiscount,
  getThirdDiscount,
  selectDiscount,
} from "@Store/thirdPartyInsurance/Actions";
import {
  driverDiscountSelector,
  loadingsSelector,
  thirdDiscountSelector,
} from "@Store/thirdPartyInsurance/Selector";
import Detail from "@Screens/thirdPartyInsurance/Detail";
import { showModal } from "@Store/general/Actions";

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
    },
  },
  title: {
    marginBottom: 20,
    fontSize: 23,
    fontWeight: "bold",
    "@media (max-width: 650px)": {
      width: "100%",
      textAlign: "center",
      fontSize: 20,
    },
  },
  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
    "@media (max-width: 650px)": {
      width: "100%",
      flexDirection: "column",
    },
  },
  half: {
    width: 420,
    "@media (max-width: 650px)": {
      width: "100%",
    },
  },
  fullWidth: {
    width: 420,
    "@media (max-width: 650px)": {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
    },
  },
  mt_20: {
    marginTop: 20,
  },
  btn: {
    width: 130,
    height: 40,
    fontSize: 12,
    float: "left",
    order: 1,
  },
  btnReturn: {
    width: 130,
    height: 40,
    fontSize: 12,
    float: "right",
    order: 0,
  },
  description: {
    color: "rgb(156,156,156)",
    marginTop: 20,
    marginBottom: 40,
    fontSize: 12,
    fontWeight: "bold",
  },
});

const SelectDiscount = () => {
  const localStyle = useStyles();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    thirdDiscount: "",
    driverDiscount: "",
  });
  const { values, handleInputChangeWithParam } = useInput({
    thirdDiscount: null,
    driverDiscount: null,
  });

  const thirdDiscount = useSelector(thirdDiscountSelector);
  const driverDiscount = useSelector(driverDiscountSelector);
  const loadings = useSelector(loadingsSelector);

  useEffect(() => {
    dispatch(getThirdDiscount());
    dispatch(getDriverDiscount());
  }, []);

  function nextLevel() {
    if (values.thirdDiscount === null || values.driverDiscount === null) {
      const _required = "????????????";
      setErrors({
        ...errors,
        thirdDiscount: values.thirdDiscount === null ? _required : "",
        driverDiscount: values.driverDiscount === null ? _required : "",
      });
      return;
    }
    setErrors({ thirdDiscount: "", driverDiscount: "" });
    dispatch(
      selectDiscount({
        discount: values.thirdDiscount.title,
        driver: values.driverDiscount.title,
      })
    );
    dispatch(showModal(<Detail />));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>???????? ?????? ????????</div>
      <div className={localStyle.description}>
        ???????? ?????????? ???????? ?????? ???????? ?? ?????????? ???????????? ???? ???????? ????????.
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <Select
            label="???????? ?????????? ????????"
            name="thirdDiscount"
            loading={loadings.thirdDiscountLoading}
            onSelect={handleInputChangeWithParam}
            value={values.thirdDiscount}
            items={thirdDiscount}
            errorMessage={errors}
          />
        </div>
        <div className={localStyle.half}>
          <Select
            label="???????? ?????????? ?????????? ????????????"
            name="driverDiscount"
            loading={loadings.driverDiscountLoading}
            onSelect={handleInputChangeWithParam}
            value={values.driverDiscount}
            items={driverDiscount}
            errorMessage={errors}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <div className={localStyle.btn}>
            <Button
              label="?????????????? ????????"
              variant="filled"
              rounded
              arrow="left"
              onClick={nextLevel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SelectDiscount.displayName = "SelectCar";
SelectDiscount.propTypes = {};

export default SelectDiscount;
