import ProfileReducer from './profileReducer';
import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
	profile: null,
	profiles: null,
	unactivateProfile: null,
	getProfile: null,
	getCurrentProfile: null,
	isProfile: false,
	status: null,
	isFetching: false,
	isError: null,
	error: false,
	isDeleted: false,
};

export const ProfileContext = createContext(INITIAL_STATE);

const ProfileContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProfileReducer, INITIAL_STATE);

	return (
		<ProfileContext.Provider
			value={{
				profile: state.profile,
				profiles: state.profiles,
				unactivateProfile: state.unactivateProfile,
				getProfile: state.getProfile,
				getCurrentProfile: state.getCurrentProfile,
				isProfile: state.isProfile,
				status: state.status,
				isFetching: state.isFetching,
				isError: state.isError,
				error: state.error,
				isDeleted: state.isDeleted,
				dispatch,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
