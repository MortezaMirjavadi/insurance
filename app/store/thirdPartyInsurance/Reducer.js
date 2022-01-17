import {
  ACTION_CHANGE_PROFILE,
  ACTION_CHANGE_WIZARD,
  ACTION_GET_CAR_TYPE,
  ACTION_GET_DRIVER_DISCOUNT,
  ACTION_GET_INSURE_COMPANIES,
  ACTION_GET_THIRD_DISCOUNT,
  ACTION_SELECT_CAR,
  ACTION_SELECT_DISCOUNT,
  ACTION_SELECT_OLD_INSURE_COMPANY,
} from "@Store/ActionTypes";
import produce from "immer";
import { WIZARD_PROCESS } from "@Config/constants";

const initialState = {
  wizardLevel: WIZARD_PROCESS.REGISTER,
  profile: null,
  selectCar: {
    carType: "",
    carModel: "",
  },
  insureCompany: "",
  selectDiscount: {
    discount: "",
    driver: "",
  },
  carTypes: [],
  insureCompanies: [],
  thirdDiscount: [],
  driverDiscount: [],
  loadings: {
    carTypesLoading: false,
    insureCompaniesLoading: false,
    thirdDiscountLoading: false,
    driverDiscountLoading: false,
  },
};

const handleStates = {
  [ACTION_SELECT_DISCOUNT]: (state, action) => {
    const { data } = action;
    return produce(state, (draftState) => {
      draftState.selectDiscount = data;
    });
  },
  [ACTION_SELECT_OLD_INSURE_COMPANY]: (state, action) => {
    const { data } = action;
    return produce(state, (draftState) => {
      draftState.insureCompany = data;
    });
  },
  [ACTION_SELECT_CAR]: (state, action) => {
    const { data } = action;
    return produce(state, (draftState) => {
      draftState.selectCar = data;
    });
  },
  [ACTION_CHANGE_PROFILE]: (state, action) => {
    const { data } = action;
    return produce(state, (draftState) => {
      draftState.profile = { ...data };
    });
  },
  [ACTION_CHANGE_WIZARD]: (state, action) => {
    const { level } = action;
    return produce(state, (draftState) => {
      draftState.wizardLevel = level;
    });
  },
  [ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_REQUEST]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.carTypesLoading = true;
    });
  },
  [ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_FAILED]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.carTypesLoading = false;
    });
  },
  [ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_SUCCESS]: (state, action) => {
    return produce(state, (draftState) => {
      draftState.loadings.carTypesLoading = false;
      draftState.carTypes = action.result;
    });
  },
  [ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_REQUEST]: (
    state
  ) => {
    return produce(state, (draftState) => {
      draftState.loadings.insureCompaniesLoading = true;
    });
  },
  [ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_FAILED]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.insureCompaniesLoading = false;
    });
  },
  [ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_SUCCESS]: (
    state,
    action
  ) => {
    return produce(state, (draftState) => {
      draftState.loadings.insureCompaniesLoading = false;
      draftState.insureCompanies = action.result;
    });
  },
  [ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_REQUEST]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.thirdDiscountLoading = true;
    });
  },
  [ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_FAILED]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.thirdDiscountLoading = false;
    });
  },
  [ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_SUCCESS]: (
    state,
    action
  ) => {
    return produce(state, (draftState) => {
      draftState.loadings.thirdDiscountLoading = false;
      draftState.thirdDiscount = action.result;
    });
  },
  [ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_REQUEST]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.driverDiscountLoading = true;
    });
  },
  [ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_FAILED]: (state) => {
    return produce(state, (draftState) => {
      draftState.loadings.driverDiscountLoading = false;
    });
  },
  [ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_SUCCESS]: (
    state,
    action
  ) => {
    return produce(state, (draftState) => {
      draftState.loadings.driverDiscountLoading = false;
      draftState.driverDiscount = action.result;
    });
  },
};

export default function reducer(state = initialState, action) {
  if (typeof handleStates[action.type] === "function") {
    return handleStates[action.type](state, action);
  }
  return state;
}
