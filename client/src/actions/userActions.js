import axios from 'axios';

import { returnErrors } from './errorActions';

import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL
} from '../actions/types';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
	// User loading
	dispatch({ type: USER_LOADING });

	axios
		.get('/api/users', tokenConfig(getState))
		.then((res) =>
			dispatch({
				type    : USER_LOADED,
				payload : res.data
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));

			dispatch({
				type : AUTH_ERROR
			});
		});
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
	// Get token from localStorage
	const token = getState().userReducer.token;

	// Headers
	const config = {
		headers : {
			'Content-type' : 'application/json'
		}
	};

	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};
