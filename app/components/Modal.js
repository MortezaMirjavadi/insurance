import React from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { modalContentSelector } from "@Store/general/Selector";
import { closeModal } from "@Store/general/Actions";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 1000,
  },
  backdrop: {
    zIndex: 1001,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    willChange: "opacity",
    transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    webkitFilter: "grayscale(50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "grayscale(50%)",
    backdropFilter: "blur(4px)",
  },
  modal: {
    padding: 20,
    position: "fixed",
    zIndex: 1002,
    width: 500,
    height: 500,
    background: "white",
    borderRadius: 20,
    "@media (max-width: 650px)": {
      width: "100%",
      height: "100%",
      borderRadius: "unset",
    },
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgb(37, 65, 208)",
    color: "white",
    margin: "-20px -20px 0px",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 650px)": {
      borderTopLeftRadius: "unset",
      borderTopRightRadius: "unset",
    },
  },
});

const Modal = () => {
  const localStyle = useStyles();
  const dispatch = useDispatch();

  const modalContent = useSelector(modalContentSelector);

  function backdrop() {
    dispatch(closeModal());
  }
  return (
    <div className={localStyle.root}>
      <div className={localStyle.backdrop} onClick={backdrop} />
      <div className={localStyle.modal}>
        <div className={localStyle.header}>جزییات</div>
        {modalContent}
      </div>
    </div>
  );
};

Modal.displayName = "Modal";
Modal.propTypes = {};

export default Modal;
