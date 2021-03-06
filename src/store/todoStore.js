import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default createStore(combineReducers({ todo: todoReducer }));