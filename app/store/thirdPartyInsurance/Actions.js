import {
  ACTION_CHANGE_PROFILE,
  ACTION_CHANGE_WIZARD,
  ACTION_CLOSE_MODAL,
  ACTION_GET_CAR_TYPE,
  ACTION_GET_DRIVER_DISCOUNT,
  ACTION_GET_INSURE_COMPANIES,
  ACTION_GET_THIRD_DISCOUNT, ACTION_SHOW_MODAL,
} from "@Store/ActionTypes";

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

export function getInsureCompanies() {
  return async function(dispatch, getState, { api }) {
    dispatch({
      type: ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_REQUEST,
    });
    const result = await api.getInsureCompanies();
    if (result.status === 200) {
      dispatch({
        type: ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_SUCCESS,
        result: result.data,
      });
    } else {
      dispatch({
        type: ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_FAILED,
      });
    }
    return result;
  };
}
export function getThirdDiscount() {
  return async function(dispatch, getState, { api }) {
    dispatch({
      type: ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_REQUEST,
    });
    const result = await api.getThirdDiscount();
    if (result.status === 200) {
      dispatch({
        type: ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_SUCCESS,
        result: result.data,
      });
    } else {
      dispatch({
        type: ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_FAILED,
      });
    }
    return result;
  };
}
export function getDriverDiscount() {
  return async function(dispatch, getState, { api }) {
    dispatch({
      type: ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_REQUEST,
    });
    const result = await api.getDriverDiscount();
    if (result.status === 200) {
      dispatch({
        type: ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_SUCCESS,
        result: result.data,
      });
    } else {
      dispatch({
        type: ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_FAILED,
      });
    }
    return result;
  };
}
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
      content
    });
  };
}
export function changeWizardLevel(level) {
  return function(dispatch) {
    dispatch({
      type: ACTION_CHANGE_WIZARD,
      level
    });
  };
}
export function changeProfile(data) {
  return function(dispatch) {
    dispatch({
      type: ACTION_CHANGE_PROFILE,
      data
    });
  };
}
