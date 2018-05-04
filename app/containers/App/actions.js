import {
    CHANGE_CATEGORY,
    LOAD_CATEGORIES,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_ERROR,
    LOAD_CRAFTS,
    LOAD_CRAFTS_SUCCESS,
    LOAD_CRAFTS_ERROR
} from './constants';

export function loadCrafts() {
    return  {
        type: LOAD_CRAFTS
    };
}

export function craftsLoaded(crafts) {
    return {
        type: LOAD_CRAFTS_SUCCESS,
        crafts,
    };
}

export function craftsLoadedError(error) {
    return {
        type: LOAD_CRAFTS_ERROR,
        error
    };
}

export function loadCategories() {
    return {
      type: LOAD_CATEGORIES,
    };
}
  
export function categoriesLoaded(categories) {
    return {
      type: LOAD_CATEGORIES_SUCCESS,
      categories,
    };
}
  
export function categoriesError(error) {
    return {
      type: LOAD_CATEGORIES_ERROR,
      error,
    };
}

export function changeCategory(category) {
    return {
        type: CHANGE_CATEGORY,
        category
    };
}