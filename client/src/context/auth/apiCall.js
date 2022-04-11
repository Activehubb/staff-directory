import axios from 'axios';
import {
	signinFailure,
	signinSuccess,
	signupFailure,
	signupSuccess,
	signupStart,
	signinStart,
} from './AuthAction';

export const signup = async (user, dispatch) => {
	const config = {
		Headers: {
			'content-type': 'application/json',
		},
	};
	dispatch(signupStart())
	try {
		const res = await axios.post('/api/user/signup', user, config);
		dispatch(signupSuccess(res.data));
	} catch (error) {
		dispatch(signupFailure(error.message));
	}
};

export const usernameSignin = async (user, dispatch) => {
	dispatch(signinStart())
	try {
		const res = await axios.post('/api/auth/username/signin', user);
		dispatch(signinSuccess(res.data));
	} catch (error) {
		dispatch(signinFailure(error.message));
	}
};

export const emailSignin = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/auth/email/signin', user);
		dispatch(signinSuccess(res.data));
	} catch (error) {
		dispatch(signinFailure(error.message));
	}
};
