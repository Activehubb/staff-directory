import axios from 'axios';
import {
	signinFailure,
	signinSuccess,
	signupFailure,
	signupSuccess,
	logout,
	signupSuccessAdmin,
	signupFailureAdmin,
	signinSuccessAdmin,
	signinFailureAdmin,
	getAllUserSuccess,
	getAllUserFailure,
} from './AuthAction';

// USER
export const signup = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/user/signup', user);
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
		dispatch(signinFailure(error.response));
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

export const users = async (dispatch) => {
	try {
		const res = await axios.get('/api/user')

		dispatch(getAllUserSuccess(res.data))
	} catch (error) {
		dispatch(getAllUserFailure(error.response))
	}
}

// USER END

// ADMIN

export const signupAdmin = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/admin/admin/signup', user);
		dispatch(signupSuccessAdmin(res.data));
	} catch (error) {
		dispatch(signupFailureAdmin(error.response));
	}
};

export const emailSigninAdmin = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/admin/auth/email', user);
		dispatch(signinSuccessAdmin(res.data));
	} catch (error) {
		dispatch(signinFailureAdmin(error.response));
	}
};

export const usernameSigninAdmin = async (user, dispatch) => {
	try {
		const res = await axios.post('/api/admin/auth/username', user);
		dispatch(signinSuccessAdmin(res.data));
	} catch (error) {
		dispatch(signinFailureAdmin(error.response));
	}
};

// ADMIN END

// LOGOUT

export const userLogout = (dispatch) => {
	dispatch(logout());
};
