import { ACTION_CLOSE_MODAL, ACTION_SHOW_MODAL } from "@Store/ActionTypes";

export function closeModal() {
  return function(dispatch) {
    dispatch({
      type: ACTION_CLOSE_MODAL,
    });
  };
}
export function showModal(content) {
  return function(dispatch) {
    dispatch({
      type: ACTION_SHOW_MODAL,
      content,
    });
  };
}
