import {
  LOAD_CRAFT,
  REMOVE_CRAFT,
  LOAD_CRAFT_SUCCESS,
  LOAD_CRAFT_ERROR,
} from './constants';

export function loadCraft(craftId) {
  // console.log("GET CRAFTS");
  return {
    type: LOAD_CRAFT,
    craftId
  };
}

export function removeCraft() {
  return {
    type: REMOVE_CRAFT,
  };
}

export function craftLoaded(craft) {
  // console.log("LOADED");
  // console.log(crafts);
  return {
    type: LOAD_CRAFT_SUCCESS,
    craft,
  };
}

export function craftLoadedError(error) {
  return {
    type: LOAD_CRAFT_ERROR,
    error,
  };
}
