import { combineReducers } from 'redux';
import postsReducers from './posts/reducer';

const rootReducer = combineReducers({
  posts: postsReducers,
});

export default rootReducer;
