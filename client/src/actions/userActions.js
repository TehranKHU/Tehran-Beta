import axios from 'axios';
import { SIGNUP_USER, LOGIN_USER } from '../actions/types';

export const signupUser = (user) => (dispatch) => {
	axios.post('/api/users', user).then((res) =>
		dispatch({
			type    : SIGNUP_USER,
			payload : res.data
		})
	);
};
