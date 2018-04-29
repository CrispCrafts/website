/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCategory = () => createSelector(
  selectHome,
  (homeState) => homeState.get('category')
);

export {
  selectHome,
  makeSelectCategory,
};
