import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, Select } from "@Components/DesignSystem";
import { useInput } from "@App/hooks/useInput";
import createClass from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getDriverDiscount,
  getThirdDiscount,
  showModal,
} from "@Store/thirdPartyInsurance/Actions";
import {
  driverDiscountSelector,
  loadingsSelector,
  thirdDiscountSelector,
} from "@Store/thirdPartyInsurance/Selector";
import Detail from "@Screens/thirdPartyInsurance/Detail";

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

const SelectCar = () => {
  const localStyle = useStyles();
  const dispatch = useDispatch();
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
    // console.log(values);
    dispatch(showModal(<Detail name="test" />));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>بیمه شخص ثالث</div>
      <div className={localStyle.description}>
        درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <Select
            label="درصد تخفیف ثالث"
            name="thirdDiscount"
            loading={loadings.thirdDiscountLoading}
            onSelect={handleInputChangeWithParam}
            value={values.thirdDiscount}
            items={thirdDiscount}
          />
        </div>
        <div className={localStyle.half}>
          <Select
            label="درصد تخفیف حوادث راننده"
            name="driverDiscount"
            loading={loadings.driverDiscountLoading}
            onSelect={handleInputChangeWithParam}
            value={values.driverDiscount}
            items={driverDiscount}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <div className={localStyle.btn}>
            <Button
              label="استعلام قیمت"
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

SelectCar.displayName = "SelectCar";
SelectCar.propTypes = {};

export default SelectCar;
