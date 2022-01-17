import React from "react";
import { createUseStyles } from "react-jss";
import AppBar from "@Components/AppBar";
import CarGreenIcon from "@Components/DesignSystem/Icons/CarGreenIcon";
import Register from "@Screens/register/Register";
import SelectCar from "@Screens/thirdPartyInsurance/SelectCar";
import OldInsureCompany from "@Screens/thirdPartyInsurance/OldInsureCompany";
import SelectDiscount from "@Screens/thirdPartyInsurance/SelectDiscount";
import Modal from "@Components/Modal";
import { useSelector } from "react-redux";
import { wizardLevelSelector } from "@Store/thirdPartyInsurance/Selector";
import { WIZARD_PROCESS } from "@Config/constants";
import { isShowModalSelector } from "@Store/general/Selector";

const useStyles = createUseStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 960px)": {
      flexDirection: "column",
    },
  },
  leftContainer: {
    height: "100%",
    width: "30%",
    backgroundColor: "rgb(255,250,233)",
    "@media (max-width: 960px)": {
      width: "100%",
      height: "25%",
    },
  },
  rightContainer: {
    width: "70%",
    height: "100%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 960px)": {
      width: "100%",
    },
  },
  carImage: {
    position: "fixed",
    left: 0,
    bottom: 35,
    marginLeft: 30,
    "@media (max-width: 650px)": {
      width: 350,
    },
    "@media (max-width: 960px)": {
      "& svg": {
        width: 400,
      },
    },
  },
});

const Layout = () => {
  const localStyle = useStyles();

  const isShowModal = useSelector(isShowModalSelector);
  const wizardLevel = useSelector(wizardLevelSelector);

  function selectWizardLevel() {
    switch (wizardLevel) {
      case WIZARD_PROCESS.REGISTER:
        return <Register />;
      case WIZARD_PROCESS.CAR_TYPE_AND_MODEL:
        return <SelectCar />;
      case WIZARD_PROCESS.OLD_INSURE_COMPANY:
        return <OldInsureCompany />;
      case WIZARD_PROCESS.DISCOUNT:
        return <SelectDiscount />;
    }
  }

  return (
    <div className={localStyle.mainContainer}>
      <AppBar />
      {isShowModal && <Modal />}
      <div className={localStyle.container}>
        <div className={localStyle.rightContainer}>{selectWizardLevel()}</div>
        <div className={localStyle.leftContainer} />
        <div className={localStyle.carImage}>
          <CarGreenIcon />
        </div>
      </div>
    </div>
  );
};

Layout.displayName = "Layout";

Layout.propTypes = {};

export default Layout;
