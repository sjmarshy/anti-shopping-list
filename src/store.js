import { combineReducers, createStore } from 'redux';

import shoppinglist from './state/shoppinglist';

export default createStore(combineReducers({ shoppinglist }));
