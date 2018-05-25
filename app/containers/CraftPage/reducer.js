import { fromJS } from 'immutable';
import {
  LOAD_CRAFT,
  REMOVE_CRAFT,
  LOAD_CRAFT_SUCCESS,
  LOAD_CRAFT_ERROR,
} from './constants';

const initialState = fromJS({
  craftId: '',
  loadingCraft: false,
  error: false,
  craft: {},
});

function craftdetailReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_CRAFT:
      return state
        .set('craft', {});
    case LOAD_CRAFT:
      return state
          .set('craftId', action.craftId)
          .set('error', false)
          .set('loadingCraft', true);
    case LOAD_CRAFT_SUCCESS:
      return state
          .set('craft', { ...action.craft })
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
