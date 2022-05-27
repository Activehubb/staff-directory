const ProfileReducer = (state, action) => {
	switch (action.type) {
		case 'GET_ALL_PROFILES_SUCCESS':
		case 'GET_UNACTIVATE_PROFILES_SUCCESS':
			return {
				...state,
				profiles: action.payload,
				unactivateProfile: action.payload,
			};
		case 'CREATE_PROFILE_SUCCESS':
		case 'UPDATE_STATUS_SUCCESS':
		case 'GET_PROFILE_SUCCESS':
		case 'GET_CURRENT_PROFILE_SUCCESS':
		case 'DELETE_PROFILE_SUCCESS':
			return {
				...state,
				profile: action.payload,
				getProfile: action.payload,
				getCurrentProfile: action.payload,
				status: action.payload,
				isProfile: true,
				isDeleted: action.payload,
			};
		case 'CREATE_PROFILE_FAILURE':
		case 'UPDATE_STATUS_FAILURE':
		case 'GET_PROFILE_FAILURE':
		case 'GET_CURRENT_PROFILE_FAILURE':
		case 'GET_ALL_PROFILES_FAILURE':
			return {
				...state,
				isError: action.payload,
				error: true,
			};
		default:
			return {
				...state,
			};
	}
};

export default ProfileReducer;
