import ProfileReducer from './profileReducer';
import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
	profile: JSON.parse(localStorage.getItem('profile')) || null,
	profiles: null,
	isFetching: false,
	isError: null,
	error: false,
};

export const ProfileContext = createContext(INITIAL_STATE);

const ProfileContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProfileReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem('profile', JSON.stringify(state.profile))
	}, [state.profile])

	return (
		<ProfileContext.Provider
			value={{
				profile: state.profile,
				profiles: state.profiles,
				isFetching: state.isFetching,
				isError: state.isError,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
