import { combineReducers } from 'redux';
import user from './user';
import artist from './artist';

const rootReducer = combineReducers({
  user,
  artist,
})

export default rootReducer;
