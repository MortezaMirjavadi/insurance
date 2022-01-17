import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Button, Select } from "@Components/DesignSystem";
import { useInput } from "@App/hooks/useInput";
import createClass from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeWizardLevel,
  getCarType,
  selectCarTypeAndModel,
} from "@Store/thirdPartyInsurance/Actions";
import {
  carTypesSelector,
  loadingsSelector,
} from "@Store/thirdPartyInsurance/Selector";
import { WIZARD_PROCESS } from "@Config/constants";

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
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
    "@media (max-width: 650px)": {
      width: "100%",
      flexDirection: "column",
      rowGap: 20,
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
  const [errors, setErrors] = useState({
    carType: "",
    carModel: "",
  });
  const { values, setValues, handleInputChangeWithParam } = useInput({
    carType: null,
    carModel: null,
  });

  const carTypes = useSelector(carTypesSelector);
  const loadings = useSelector(loadingsSelector);
  const [carModels, setCarModels] = useState([]);

  useEffect(() => {
    dispatch(getCarType());
  }, []);

  function changeCarType(key, value) {
    setValues({
      carType: value,
      carModel: null,
    });
    const _find = carTypes[0].brands.find((x) => x.id === value.id);
    setCarModels(_find.models);
  }

  function nextLevel() {
    if (values.carType === null || values.carModel === null) {
      const _required = "اجباری";
      setErrors({
        ...errors,
        carType: values.carType === null ? _required : "",
        carModel: values.carModel === null ? _required : "",
      });
      return;
    }
    setErrors({ carType: "", carModel: "" });
    dispatch(
      selectCarTypeAndModel({
        carType: values.carType.title,
        carModel: values.carModel.title,
      })
    );
    dispatch(changeWizardLevel(WIZARD_PROCESS.OLD_INSURE_COMPANY));
  }
  function prevLevel() {
    dispatch(changeWizardLevel(WIZARD_PROCESS.REGISTER));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>بیمه شخص ثالث</div>
      <div className={localStyle.description}>
        نوع و مدل خودروی خود را انتخاب کنید.
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <Select
            label="نوع خودرو"
            name="carType"
            loading={loadings.carTypesLoading}
            onSelect={changeCarType}
            value={values.carType}
            items={carTypes.length > 0 && carTypes[0].brands}
            errorMessage={errors}
          />
        </div>
        <div className={localStyle.half}>
          <Select
            label="مدل خودرو"
            name="carModel"
            loading={loadings.carTypesLoading}
            onSelect={handleInputChangeWithParam}
            value={values.carModel}
            items={carModels}
            errorMessage={errors}
          />
        </div>
      </div>
      <div className={createClass(localStyle.row, localStyle.mt_20)}>
        <div className={localStyle.fullWidth}>
          <div className={localStyle.btn}>
            <Button
              label="مرحله بعد"
              variant="outlined"
              rounded
              arrow="left"
              onClick={nextLevel}
            />
          </div>
          <div className={localStyle.btnReturn}>
            <Button
              label="بازگشت"
              variant="outlined"
              rounded
              arrow="right"
              onClick={prevLevel}
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
