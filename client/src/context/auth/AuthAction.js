
export const signinSuccess = (user) => ({
	type: 'SIGNIN_SUCCESS',
	payload: user,
});
export const signinFailure = (error) => ({
	type: 'SIGNIN_FAILURE',
	payload: error
});

export const signupSuccess = (user) => ({
	type: 'SIGNUP_SUCCESS',
	payload: user,
});
export const signupFailure = (error) => ({
	type: 'SIGNUP_FAILURE',
	payload: error
});

export const logout = () => ({
	type: 'LOGOUT',
});
