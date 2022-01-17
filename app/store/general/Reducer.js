import { MESSAGE_TYPE } from "@Config/constants";
import {ACTION_CLOSE_MODAL, ACTION_SHOW_MODAL, CLOSE_SNACK_BAR, SHOW_SNACK_BAR} from "@Store/ActionTypes";
import produce from "immer";

const initialState = {
  isShowModal: false,
  modalContent: null,
  isShowSnackbar: false,
  snackbarMessage: {
    message: "",
    messageType: MESSAGE_TYPE.SUCCESS, // default
  },
};

const handleStates = {
  [ACTION_CLOSE_MODAL]: (state) => {
    return produce(state, (draftState) => {
      draftState.isShowModal = false;
      draftState.modalContent = null;
    });
  },
  [ACTION_SHOW_MODAL]: (state, action) => {
    return produce(state, (draftState) => {
      draftState.modalContent = action.content;
      draftState.isShowModal = true;
    });
  },
  [SHOW_SNACK_BAR]: (state, action) => {
    const { message, messageType } = action;
    return produce(state, (draftState) => {
      draftState.isShowSnackbar = true;
      draftState.message = message;
      draftState.messageType = messageType ? messageType : MESSAGE_TYPE.SUCCESS;
    });
  },
  [CLOSE_SNACK_BAR]: (state) => {
    return produce(state, (draftState) => {
      draftState.isShowSnackbar = false;
    });
  },
};

export default function reducer(state = initialState, action) {
  if (typeof handleStates[action.type] === "function") {
    return handleStates[action.type](state, action);
  }
  return state;
}
