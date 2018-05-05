import {
  LOAD_CRAFT,
  LOAD_CRAFT_SUCCESS,
  LOAD_CRAFT_ERROR,
} from './constants';

export function loadCraft() {
  // console.log("GET CRAFTS");
  return {
    type: LOAD_CRAFT,
  };
}

export function craftLoaded(crafts) {
  // console.log("LOADED");
  // console.log(crafts);
  return {
    type: LOAD_CRAFT_SUCCESS,
    crafts,
  };
}

export function craftLoadedError(error) {
  return {
    type: LOAD_CRAFT_ERROR,
    error,
  };
}
