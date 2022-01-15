import { MESSAGE_TYPE } from "@Config/constants";
import { CLOSE_SNACK_BAR, SHOW_SNACK_BAR } from "@Store/ActionTypes";
import produce from "immer";

const initialState = {
  isShowSnackbar: false,
  snackbarMessage: {
    message: "",
    messageType: MESSAGE_TYPE.SUCCESS, // default
  },
};

const handleStates = {
  [SHOW_SNACK_BAR]: (state, action) => {
    const { message, messageType } = action;
    return produce(state, (draftState) => {
      draftState.isShowSnackbar = true;
      draftState.message = message;
      draftState.messageType = messageType ? messageType : MESSAGE_TYPE.SUCCESS;
    });
  },
  [CLOSE_SNACK_BAR]: (state, action) => {
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
