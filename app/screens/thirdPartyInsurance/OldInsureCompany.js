import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, Select } from "@Components/DesignSystem";
import { useInput } from "@App/hooks/useInput";
import createClass from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeWizardLevel,
  getInsureCompanies, selectOldInsureCompany,
} from "@Store/thirdPartyInsurance/Actions";
import {
  insureCompaniesSelector,
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

const OldInsureCompany = () => {
  const localStyle = useStyles();
  const dispatch = useDispatch();
  const { values, handleInputChangeWithParam } = useInput({
    insureCompany: null,
  });

  const insureCompanies = useSelector(insureCompaniesSelector);
  const loadings = useSelector(loadingsSelector);

  useEffect(() => {
    dispatch(getInsureCompanies());
  }, []);

  function changeInsureCompany(key, value) {
    handleInputChangeWithParam(key, value);
  }
  function nextLevel() {
    dispatch(selectOldInsureCompany(values.insureCompany.title));
    dispatch(changeWizardLevel(WIZARD_PROCESS.DISCOUNT));
  }
  function prevLevel() {
    dispatch(changeWizardLevel(WIZARD_PROCESS.CAR_TYPE_AND_MODEL));
  }

  return (
    <div className={localStyle.root}>
      <div className={localStyle.title}>بیمه شخص ثالث</div>
      <div className={localStyle.description}>
        شرکت بیمه گر قبلی خود را در این بخش وارد کنید.
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.half}>
          <Select
            label="شرکت بیمه گر قبلی"
            name="insureCompany"
            loading={loadings.insureCompaniesLoading}
            onSelect={changeInsureCompany}
            value={values.insureCompany}
            items={insureCompanies}
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

OldInsureCompany.displayName = "SelectCar";
OldInsureCompany.propTypes = {};

export default OldInsureCompany;
