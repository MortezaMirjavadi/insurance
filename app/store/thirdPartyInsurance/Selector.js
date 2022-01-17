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
const modalContentSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.modalContent
);
const isShowModalSelector = createSelector(
  thirdPartyInsurance,
  (state) => state.isShowModal
);
const wizardLevelSelector = createSelector(
    thirdPartyInsurance,
    (state) => state.wizardLevel
);
const profileSelector = createSelector(
    thirdPartyInsurance,
    (state) => state.profile
);

export {
  carTypesSelector,
  insureCompaniesSelector,
  thirdDiscountSelector,
  driverDiscountSelector,
  loadingsSelector,
  modalContentSelector,
  isShowModalSelector,
  wizardLevelSelector,
  profileSelector,
};
