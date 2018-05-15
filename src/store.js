import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';


const mainReducer = combineReducers(reducers);

const middlewares = [promiseMiddleware, thunkMiddleware];

const store = createStore(mainReducer, applyMiddleware(...middlewares));

export default store;
