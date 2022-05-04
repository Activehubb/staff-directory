
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

// ADMIN

export const signinSuccessAdmin = (admin) => ({
	type: 'SIGNIN_SUCCESS_ADMIN',
	payload: admin,
});
export const signinFailureAdmin = (error) => ({
	type: 'SIGNIN_FAILURE_ADMIN',
	payload: error,
});

export const signupSuccessAdmin = (admin) => ({
	type: 'SIGNUP_SUCCESS_ADMIN',
	payload: admin,
});
export const signupFailureAdmin = (error) => ({
	type: 'SIGNUP_FAILURE_ADMIN',
	payload: error,
});

export const logout = () => ({
	type: 'LOGOUT',
});
