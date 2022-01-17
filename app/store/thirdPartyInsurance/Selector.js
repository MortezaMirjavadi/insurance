import { createSelector } from "reselect";

const thirdPartyInsurance = (state) => state.thirdPartyInsurance;

const carTypesSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.carTypes
);
const insureCompaniesSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.insureCompanies
);
const thirdDiscountSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.thirdDiscount
);
const driverDiscountSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.driverDiscount
);
const loadingsSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.loadings
);
const wizardLevelSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.wizardLevel
);
const profileSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.profile
);
const selectCarSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.selectCar
);
const selectInsureCompanySelector = createSelector(
  thirdPartyInsurance,
  (state) => state.insureCompany
);
const selectDiscountSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.selectDiscount
);

export {
  carTypesSelector,
  insureCompaniesSelector,
  thirdDiscountSelector,
  driverDiscountSelector,
  loadingsSelector,
  wizardLevelSelector,
  profileSelector,
  selectCarSelector,
  selectInsureCompanySelector,
  selectDiscountSelector,
};
