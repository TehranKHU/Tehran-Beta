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
} from './types';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
	// User loading
	dispatch({ type: USER_LOADING });

	axios
		.get('/api/auth/user', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type    : USER_LOADED,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data.msg, err.response.status));

			dispatch({
				type : AUTH_ERROR
			});
		});
};

// Signup user
export const signupUser = ({ username, email, password }) => (dispatch) => {
	// Headers
	const config = {
		headers : { 'Content-type': 'application/json' }
	};

	// Request body
	const body = JSON.stringify({ username, email, password });

	axios
		.post('/api/users', body, config)
		.then((res) =>
			dispatch({
				type    : SIGNUP_SUCCESS,
				payload : res.data
			})
		)
		.catch((err) => {
			dispatch(
				returnErrors(
					err.response.data.msg,
					err.response.status,
					'SIGNUP_FAIL'
				)
			);

			dispatch({
				type : SIGNUP_FAIL
			});
		});
};

// Login user
export const loginUser = ({ username, password }) => (dispatch) => {
	// Headers
	const config = {
		headers : { 'Content-type': 'application/json' }
	};

	// Request body
	const body = JSON.stringify({ username, password });

	axios
		.post('/api/auth', body, config)
		.then((res) =>
			dispatch({
				type    : LOGIN_SUCCESS,
				payload : res.data
			})
		)
		.catch((err) => {
			dispatch(
				returnErrors(
					err.response.data.msg,
					err.response.status,
					'LOGIN_FAIL'
				)
			);

			dispatch({
				type : LOGIN_FAIL
			});
		});
};

// Logout User
export const logoutUser = () => {
	return {
		type : LOGOUT_SUCCESS
	};
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
	// Get token from localStorage
	const token = getState().authReducer.token;

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
