import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const middleware = [ thunk ];

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancer(applyMiddleware(...middleware))
);

export default store;
