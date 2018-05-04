const selectCraft = (state) => state.get('craftpage');

const makeSelectCurrentCategory = () => createSelector(
    selectCraft,
    (craftState) => craftState.get('craft')
);
