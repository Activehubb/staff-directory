const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'SIGNUP_SUCCESS':
		case 'SIGNIN_SUCCESS':
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			};
		case 'SIGNUP_FAILURE':
		case 'SIGNIN_FAILURE':
			return {
				...state,
				error: action.payload,
			};
		case 'LOGOUT':
			localStorage.clear();
			return {
				...state,
				user: false,
				isAuthenticated: false,
				error: false,
			};
		default:
			return { ...state };
	}
};

export default AuthReducer;
