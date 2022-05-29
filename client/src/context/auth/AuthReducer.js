const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'SIGNUP_SUCCESS':
		case 'ALL_USERS_SUCCESS':
		case 'SIGNIN_SUCCESS':
			return {
				...state,
				users: action.payload,
				user: action.payload,
				isAuthenticated: true,
			};
		case 'SIGNUP_FAILURE':
		case 'ALL_USERS_FAILURE':
		case 'SIGNIN_FAILURE':
			return {
				...state,
				error: action.payload,
			};
		case 'SIGNUP_SUCCESS_ADMIN':
		case 'SIGNIN_SUCCESS_ADMIN':
			return {
				...state,
				admin: action.payload,
				isAuthenticated: true,
			};
		case 'SIGNUP_FAILURE_ADMIN':
		case 'SIGNIN_FAILURE_ADMIN':
			return {
				...state,
				error: action.payload,
			};
		case 'LOGOUT':
			sessionStorage.clear();
			return {
				...state,
			};
		default:
			return { ...state };
	}
};

export default AuthReducer;
