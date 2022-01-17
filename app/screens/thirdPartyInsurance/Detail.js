import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import {
  profileSelector,
  selectCarSelector,
  selectDiscountSelector,
  selectInsureCompanySelector,
} from "@Store/thirdPartyInsurance/Selector";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0px",
    borderBottom: "1px solid rgb(241, 241, 241)",
  },
  label: {
    color: "rgb(150, 150, 150)",
    fontSize: 12,
  },
  detail: {
    fontSize: 14,
  },
});

const Detail = () => {
  const localStyle = useStyles();

  const profile = useSelector(profileSelector);
  const selectCar = useSelector(selectCarSelector);
  const selectInsureCompany = useSelector(selectInsureCompanySelector);
  const selectDiscount = useSelector(selectDiscountSelector);

  return (
    <div className={localStyle.root}>
      <div className={localStyle.row}>
        <div className={localStyle.label}>نام:</div>
        <strong className={localStyle.detail}>{profile.name}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>نام خانوادگی:</div>
        <strong className={localStyle.detail}>{profile.family}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>شماره موبایل:</div>
        <strong className={localStyle.detail}>{profile.mobile}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>نوع خودرو:</div>
        <strong className={localStyle.detail}>
          {selectCar && selectCar.carType}
        </strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>مدل خودرو:</div>
        <strong className={localStyle.detail}>
          {selectCar && selectCar.carModel}
        </strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>شرکت بیمه گر قبل:</div>
        <strong className={localStyle.detail}>
          {selectInsureCompany ? selectInsureCompany : ""}
        </strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>درصد تخفیف ثالث:</div>
        <strong className={localStyle.detail}>
          {selectDiscount && selectDiscount.discount}
        </strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>درصد تخفیف حوادث راننده:</div>
        <strong className={localStyle.detail}>
          {selectDiscount && selectDiscount.driver}
        </strong>
      </div>
    </div>
  );
};
Detail.displayName = "Detail";
Detail.propTypes = {};

export default Detail;
