import { combineReducers, createStore, applyMiddleware } from 'redux';

import shoppinglist from './state/shoppinglist';
import storageMiddleware from './middleware/storage';

export default createStore(combineReducers({ shoppinglist }), applyMiddleware(storageMiddleware));
