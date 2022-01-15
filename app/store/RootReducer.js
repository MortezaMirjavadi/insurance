import { combineReducers } from "redux";

import GeneralReducer from "./general/Reducer";
import ThirdPartyInsuranceReducer from "./thirdPartyInsurance/Reducer";

export default combineReducers({
    general: GeneralReducer,
    thirdPartyInsurance: ThirdPartyInsuranceReducer,
});
