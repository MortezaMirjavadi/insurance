import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import LeftArrowIcon from "@Components/DesignSystem/Icons/LeftArrowIcon";
import createClass from "classnames";
import Spinner from "@Components/Spinner";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: 38,
    position: "relative",
    userSelect: "none",
  },
  container: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    paddingRight: 10,
    alignItems: "center",
    borderRadius: 3,
    border: "1px solid rgb(211, 211, 211)",
    position: "relative",
  },
  placeholder: {
    fontSize: 12,
    color: "rgb(156,156,156)",
  },
  activeItemLabel: {
    fontSize: 12,
    color: "black",
  },
  itemsContainer: {
    zIndex: 1000,
    fontSize: 12,
    background: "white",
    color: "black",
    width: "100%",
    height: "fit-content",
    maxHeight: 200,
    overflowY: "scroll",
    borderRadius: 3,
    border: "1px solid rgb(211, 211, 211)",
    position: "absolute",
    top: 45,
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    transition:
      "opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  item: {
    userSelect: "none",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    paddingRight: 10,
    color: "black",
    padding: 10,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  activeItem: {
    backgroundColor: "rgb(243, 246, 255)",
    color: "rgb(60, 92, 207)",
  },
  backDrop: {
    width: "100vw",
    height: "100vh",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 999,
    position: "fixed",
    touchAction: "none",
    backgroundColor: "transparent",
    willChange: "opacity",
    transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    webkitFilter: "grayscale(50%)",
    filter: "grayscale(50%)",
    display: "flex",
    justifyContent: "center",
  },
  downArrow: {
    transform: "rotate(-90deg)",
    position: "absolute",
    left: 10,
  },
  upArrow: {
    transform: "rotate(90deg)",
    position: "absolute",
    left: 10,
  },
});

const Select = (props) => {
  const { label, onSelect, items, name, value, loading } = props;
  const localStyle = useStyles();
  const [showList, setShowList] = React.useState(false);

  function handleToggleMenu() {
    if (loading || (!showList && items.length === 0)) {
      return;
    }
    setShowList(!showList);
  }
  function selectItem(item) {
    onSelect(name, item);
    setShowList(false);
  }

  return (
    <div className={localStyle.root}>
      {showList && (
        <div onClick={handleToggleMenu} className={localStyle.backDrop} />
      )}
      <div className={localStyle.container} onClick={handleToggleMenu}>
        <span
          className={createClass({
            [localStyle.activeItemLabel]: value !== null,
            [localStyle.placeholder]: value === null,
          })}
        >
          {value === null ? label : value.title}
        </span>
        <div
          className={createClass({
            [localStyle.downArrow]: !showList,
            [localStyle.upArrow]: showList,
          })}
        >
          {!loading ? <LeftArrowIcon /> : <Spinner />}
        </div>
      </div>
      {showList && (
        <div className={localStyle.itemsContainer}>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <div
                key={item.id}
                className={createClass(localStyle.item, {
                  [localStyle.activeItem]: value && item.id === value.id,
                })}
                onClick={() => selectItem(item)}
              >
                {item.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

Select.displayName = "Select";
Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.object,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  loading: PropTypes.bool,
};

export default Select;
