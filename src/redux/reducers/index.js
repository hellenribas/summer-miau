import { combineReducers } from 'redux';
import cats from './cats';
import user from './user';

const rootReducer = combineReducers({ user, cats });

export default rootReducer;
