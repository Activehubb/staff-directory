import axios from 'axios';
import {
	signinFailure,
	signinSuccess,
	signupFailure,
	signupSuccess,
	logout
} from './AuthAction';

export const signup = async (user, dispatch) => {
	const config = {
		Headers: {
			'content-type': 'application/json',
		},
	};
	try {
		const res = await axios.post('/api/user/signup', user, config);
		dispatch(signupSuccess(res.data));
	} catch (error) {
		dispatch(signupFailure(error.response));
	}
};

export const usernameSignin = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/auth/username/signin', user);
		dispatch(signinSuccess(res.data));
	} catch (error) {
		dispatch(
			signinFailure(error.response)
		);
	}
};

export const emailSignin = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/auth/email/signin', user);
		dispatch(signinSuccess(res.data));
	} catch (error) {
		dispatch(signinFailure(error.response));
	}
};

export const userLogout = (dispatch) => {
	dispatch(logout())
}
