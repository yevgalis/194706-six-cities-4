import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as app} from './app/app';
import {reducer as user} from './user/user';

export default combineReducers({
  DATA: data,
  APP: app,
  USER: user
});
