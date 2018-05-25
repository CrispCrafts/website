import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectLoadingCategories = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadingCategories')
);

const makeSelectLoadingCrafts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadingCrafts')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectCategories = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('categories')
);

const makeSelectCategory = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('category')
);

const makeSelectCrafts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('crafts')
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectLoadingCategories,
  makeSelectLoadingCrafts,
  makeSelectCategories,
  makeSelectCategory,
  makeSelectCrafts,
  makeSelectError,
};
