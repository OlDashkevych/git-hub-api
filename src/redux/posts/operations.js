import types from '../types';
import api from '../../services/api';

export const getUsers = query => async dispatch => {
  dispatch({ type: types.GET_POSTS_START });
  try {
    const { data, status } = await api.getUsers(query);

    if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.GET_POSTS_SUCCESS, payload: data.items });
  } catch (e) {
    dispatch({
      type: types.GET_POSTS_FAILURE,
    });
  }
};
export const aaa = {};
