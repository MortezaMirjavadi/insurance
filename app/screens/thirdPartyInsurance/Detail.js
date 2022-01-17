import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

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

const Detail = ({
  name,
  family,
  mobile,
  carType,
  carModel,
  insureCompany,
  discount,
  driverDiscount,
}) => {
  const localStyle = useStyles();
  return (
    <div className={localStyle.root}>
      <div className={localStyle.row}>
        <div className={localStyle.label}>نام:</div>
        <strong className={localStyle.detail}>{name}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>نام خانوادگی:</div>
        <strong className={localStyle.detail}>{family}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>شماره موبایل:</div>
        <strong className={localStyle.detail}>{mobile}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>نوع خودرو:</div>
        <strong className={localStyle.detail}>{carType}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>مدل خودرو:</div>
        <strong className={localStyle.detail}>{carModel}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>شرکت بیمه گر قبل:</div>
        <strong className={localStyle.detail}>{insureCompany}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>درصد تخفیف ثالث:</div>
        <strong className={localStyle.detail}>{discount}</strong>
      </div>
      <div className={localStyle.row}>
        <div className={localStyle.label}>درصد تخفیف حوادث راننده:</div>
        <strong className={localStyle.detail}>{driverDiscount}</strong>
      </div>
    </div>
  );
};
Detail.displayName = "Detail";
Detail.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  mobile: PropTypes.string,
  carType: PropTypes.string,
  carModel: PropTypes.string,
  insureCompany: PropTypes.string,
  discount: PropTypes.string,
  driverDiscount: PropTypes.string,
};

export default Detail;
