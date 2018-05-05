import { createSelector } from 'reselect';

const selectCraftDetail = (state) => state.get('craftdetail');

const makeSelectCraft = () => createSelector(
    selectCraftDetail,
    (detailState) => detailState.get('craft')
);

const makeSelectLoadingCraft = () => createSelector(
    selectCraftDetail,
  (detailState) => detailState.get('loadingCraft')
);

const makeSelectError = () => createSelector(
  selectCraftDetail,
  (detailState) => detailState.get('error')
);

export {
    selectCraftDetail,
    makeSelectCraft,
    makeSelectLoadingCraft,
    makeSelectError,
};
