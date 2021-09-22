import { combineReducers } from 'redux';
import types from '../types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_POSTS_SUCCESS:
      return payload;

    case types.CLEAR_LIST:
      return [];

    default:
      return state;
  }
};

const loading = (state = '', { type }) => {
  switch (type) {
    case types.GET_POSTS_START:
      return true;
    case types.GET_POSTS_FAILURE:
      return false;
    case types.GET_POSTS_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  loading,
});
