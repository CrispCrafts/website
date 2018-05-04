/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_CATEGORY = 'crispcrafts/App/CHANGE_CATEGORY';
export const LOAD_CATEGORIES = 'crispcrafts/App/LOAD_CATEGORIES';
export const LOAD_CATEGORIES_SUCCESS = 'crispcrafts/App/LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'crispcrafts/App/LOAD_CATEGORIES_ERROR';
export const LOAD_CRAFTS = 'crispcrafts/App/LOAD_CRAFTS';
export const LOAD_CRAFTS_SUCCESS = 'crispcrafts/App/LOAD_CRAFTS_SUCCESS';
export const LOAD_CRAFTS_ERROR = 'crispcrafts/App/LOAD_CRAFTS_ERROR';
export const DEFAULT_LOCALE = 'en';
