import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import parentReducer from '../reducers'

export default function buildStore(initialState) {
  return createStore(parentReducer, initialState, applyMiddleware(thunk, logger));
}