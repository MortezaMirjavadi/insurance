import {
    ACTION_GET_CAR_TYPE,
    ACTION_GET_DRIVER_DISCOUNT,
    ACTION_GET_INSURE_COMPANIES,
    ACTION_GET_THIRD_DISCOUNT
} from "@Store/ActionTypes";
import produce, {castDraft} from "immer";

const initialState = {
    carTypes: [],
    insureCompanies: [],
    thirdDiscount: [],
    driverDiscount: [],
    loadings: {
        carTypesLoading: false,
        insureCompaniesLoading: false,
        thirdDiscountLoading: false,
        driverDiscountLoading: false,
    }
};

const handleStates = {
    [ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_REQUEST]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.carTypesLoading = true;
        });
    },
    [ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_FAILED]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.carTypesLoading = false;
        });
    },
    [ACTION_GET_CAR_TYPE.ACTION_GET_CAR_TYPE_SUCCESS]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.carTypesLoading = false;
        });
    },
    [ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_REQUEST]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.insureCompaniesLoading = true;
        });
    },
    [ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_FAILED]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.insureCompaniesLoading = false;
        });
    },
    [ACTION_GET_INSURE_COMPANIES.ACTION_GET_INSURE_COMPANIES_SUCCESS]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.insureCompaniesLoading = false;
        });
    },
    [ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_REQUEST]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.thirdDiscountLoading = true;
        });
    },
    [ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_FAILED]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.thirdDiscountLoading = false;
        });
    },
    [ACTION_GET_THIRD_DISCOUNT.ACTION_GET_THIRD_DISCOUNT_SUCCESS]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.thirdDiscountLoading = false;
        });
    },
    [ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_REQUEST]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.driverDiscountLoading = true;
        });
    },
    [ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_FAILED]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.driverDiscountLoading = false;
        });
    },
    [ACTION_GET_DRIVER_DISCOUNT.ACTION_GET_DRIVER_DISCOUNT_SUCCESS]: (state, action) => {
        return produce(state, (draftState) => {
            draftState.loadings.driverDiscountLoading = false;
        });
    },
}

export default function reducer(state = initialState, action) {
    if (typeof handleStates[action.type] === "function") {
        return handleStates[action.type](state, action);
    }
    return state;
}
