import ProfileReducer from './profileReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
	profile: null,
	profiles: null,
	unactivateProfile: null,
	getProfile: null,
	getProfileByAdmin: null,
	getCurrentProfile: null,
	updateProfile: null,
	isProfile: false,
	status: null,
	isFetching: false,
	isError: null,
	error: false,
	isDeleted: false,
	del: false,
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
				getProfileByAdmin: state.getProfileByAdmin,
				getCurrentProfile: state.getCurrentProfile,
				isProfile: state.isProfile,
				updateProfile: state.updateProfile,
				status: state.status,
				isFetching: state.isFetching,
				isError: state.isError,
				error: state.error,
				isDeleted: state.isDeleted,
				del: state.del,
				dispatch,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
