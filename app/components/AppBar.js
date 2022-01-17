import React from "react";
import { createUseStyles } from "react-jss";
import Logo from "@Components/DesignSystem/Icons/LogoIcon";
import UserIcon from "@Components/DesignSystem/Icons/UserIcon";
import { useSelector } from "react-redux";
import { profileSelector } from "@Store/thirdPartyInsurance/Selector";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 60,
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "95%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 960px)": {
      width: "85%",
    },
  },
  title: {
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  pl_55: {
    paddingLeft: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 5,
    "@media (max-width: 960px)": {
      paddingLeft: 0,
      fontSize: 12,
    },
  },
});

const AppBar = () => {
  const localStyle = useStyles();

  const profile = useSelector(profileSelector);

  return (
    <div className={localStyle.container}>
      <div className={localStyle.innerContainer}>
        <div>
          <Logo />
        </div>
        <div className={localStyle.title}>
          <h4>سامانه مقایسه و خرید آنلاین بیمه</h4>
        </div>
        <div className={localStyle.pl_55}>
          {profile !== null && <UserIcon />}
          <span>
            {profile !== null && profile.name && profile.family
              ? `${profile.name} ${profile.family}`
              : "ثبت نام"}
          </span>
        </div>
      </div>
    </div>
  );
};
AppBar.displayName = "AppBar";

AppBar.propTypes = {};

export default AppBar;
