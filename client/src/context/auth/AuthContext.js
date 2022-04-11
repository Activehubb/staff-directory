import AuthReducer from './AuthReducer';
import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	isAuthenticated: false,
	isFetching: false,
	error: false,
	isDeleted: false,
	isUpdated: false,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));
	}, [state.user]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
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
