import { fromJS } from 'immutable';
import {
    CHANGE_CATEGORY,
    LOAD_CATEGORIES,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_ERROR,
    LOAD_CRAFTS,
    LOAD_CRAFTS_SUCCESS,
    LOAD_CRAFTS_ERROR
} from './constants';

const initialState = fromJS({
    loadingCategories: false,
    loadingCrafts: false,
    error: false,
    category: 'All',
    categories: false,
    crafts: [],
});

function appReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_CRAFTS:
        return state
            .set('error', false)
            .set('loadingCrafts', true);
      case LOAD_CRAFTS_SUCCESS:
        return state
            .set('crafts', action.crafts)
            .set('loadingCrafts', false);
      case LOAD_CRAFTS_ERROR:
        return state
            .set('error', error)
            .set('loadingCrafts', false);
      case CHANGE_CATEGORY:
        return state
          .set('category', action.category);
      case LOAD_CATEGORIES:
        return state
          .set('loadingCategories', true)
          .set('error', false);
      case LOAD_CATEGORIES_SUCCESS:
        return state
          .set('loadingCategories', false)
          .set('categories', action.categories);
      case LOAD_CATEGORIES_ERROR:
        return state
          .set('error', action.error)
          .set('loadingCategories', false);
      default:
        return state;
    }
}
  
export default appReducer;