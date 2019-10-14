import {createStore} from 'redux';
import {reducers} from './reducers';
export const store = createStore(reducers,undefined);
window.store=store;
