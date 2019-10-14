import {combineReducers} from 'redux';
import {loginReducer} from './login';


export const reducers = combineReducers ({
  loginReducer : loginReducer,
})