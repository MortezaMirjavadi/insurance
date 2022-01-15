import { ACTION_GET_CAR_TYPE } from "@Store/ActionTypes";

export function getCarType() {
  return async function(dispatch, getState, { api }) {
    dispatch({
      type: ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_REQUEST,
    });
    const result = await api.getCarType();
    if (result.status === 200) {
      dispatch({
        type: ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_SUCCESS,
        result: result.data,
      });
    } else {
      dispatch({
        type: ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_FAILED,
      });
    }
    return result;
  };
}
