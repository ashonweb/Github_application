import {combineReducers} from 'redux';
import {loginReducer} from './login';
import {searchReducer} from './search'


export const reducers = combineReducers ({
  loginReducer : loginReducer,
  searchReducer : searchReducer,
})