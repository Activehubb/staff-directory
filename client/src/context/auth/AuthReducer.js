const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'SIGNUP_START':
		case 'SIGNIN_START':
			return {
				user: null,
				isFetching: true,
				isAuthenticated: false,
				error: false,
				isAdmin: false,
			};
		case 'SIGNUP_SUCCESS':
		case 'SIGNIN_SUCCESS':
			return {
				user: action.payload,
				isAuthenticated: true,
				isFetching: false,
				error: false,
				isAdmin: action.payload,
			};
		case 'SIGNUP_FAILURE':
		case 'SIGNIN_FAILURE':
			return {
				user: null,
				isAuthenticated: false,
				isFetching: false,
				error: action.payload,
				isAdmin: null,
			};
		default:
			return { ...state };
	}
};

export default AuthReducer