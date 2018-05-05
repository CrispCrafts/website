import { fromJS } from 'immutable';
import {
  LOAD_CRAFT,
  LOAD_CRAFT_SUCCESS,
  LOAD_CRAFT_ERROR,
} from './constants';

const initialState = fromJS({
  loadingCraft: false,
  error: false,
  craft: {},
});

function craftdetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CRAFT:
      return state
          .set('error', false)
          .set('loadingCraft', true);
    case LOAD_CRAFT_SUCCESS:
      return state
          .set('crafts', [...action.crafts])
          .set('loadingCraft', false);
    case LOAD_CRAFT_ERROR:
      return state
          .set('error', action.error)
          .set('loadingCraft', false);
    default:
      return state;
  }
}

export default craftdetailReducer;
