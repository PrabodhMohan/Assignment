import { createStore } from 'redux';
import { applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default createStore(rootReducer, applyMiddleware(thunk, logger));
