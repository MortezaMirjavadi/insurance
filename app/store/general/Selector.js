import {createSelector} from "reselect";

const general = (state) => state.general;

const modalContentSelector = createSelector(
    general,
    (state) => state.modalContent
);
const isShowModalSelector = createSelector(
    general,
    (state) => state.isShowModal
);

export {
    isShowModalSelector, modalContentSelector,
}
