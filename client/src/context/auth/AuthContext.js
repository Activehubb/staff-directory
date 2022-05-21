import AuthReducer from './AuthReducer';
import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
	user: JSON.parse(sessionStorage.getItem('user')) || null,
	admin: JSON.parse(sessionStorage.getItem('admin')) || null,
	isAdm: false,
	isAuthenticated: false,
	isFetching: false,
	error: false,
	isDeleted: false,
	isUpdated: false,
	logout: false,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
		sessionStorage.setItem('user', JSON.stringify(state.user));
		sessionStorage.setItem('admin', JSON.stringify(state.admin));
	}, [state.user, state.admin]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				admin: state.admin,
				isAdm: state.isAdm,
				isAuthenticated: state.isAuthenticated,
				isFetching: state.isFetching,
				error: state.error,
				isDeleted: state.isDeleted,
				isUpdated: state.isUpdated,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
