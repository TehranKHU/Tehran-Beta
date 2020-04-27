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

const initialState = {
	token           : localStorage.getItem('token'),
	isAuthenticated : false,
	isLoading       : false,
	user            : null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isloading : true
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated : true,
				isLoading       : false,
				user            : action.payload
			};
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated : true,
				isLoading       : false
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case SIGNUP_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token           : null,
				isAuthenticated : false,
				isLoading       : false,
				user            : null
			};
		default:
			return state;
	}
}
