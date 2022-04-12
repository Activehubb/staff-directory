const ProfileReducer = (state, action) => {
	switch (action.type) {
		case 'CREATE_PROFILE_START':
		case 'UPDATE_STATUS_START':
		case 'GET_PROFILE_START':
		case 'GET_CURRENT_PROFILE_START':
		case 'GET_ALL_PROFILES_START':
		case 'DELETE_PROFILE_START':
			return {
				profile: null,
				profiles: null,
				getCurrentProfile: null,
				isProfile: false,
				isFetching: true,
				isError: null,
				error: false,
				status: false,
				isDeleted: false,
			};
		case 'GET_ALL_PROFILES_SUCCESS':
			return {
				profile: null,
				profiles: action.payload,
				getCurrentProfile: null,
				isProfile: false,
				isFetching: false,
				isError: null,
				error: false,
				isDeleted: false,
			};
		case 'CREATE_PROFILE_SUCCESS':
		case 'UPDATE_STATUS_SUCCESS':
		case 'GET_PROFILE_SUCCESS':
		case 'GET_CURRENT_PROFILE_SUCCESS':
		case 'DELETE_PROFILE_SUCCESS':
			return {
				profile: action.payload,
				getProfile: action.payload,
				getCurrentProfile: action.payload,
				status: action.payload,
				isProfile: true,
				isFetching: false,
				isError: null,
				error: false,
				isDeleted: action.payload,
			};
		case 'CREATE_PROFILE_FAILURE':
		case 'UPDATE_STATUS_FAILURE':
		case 'GET_PROFILE_FAILURE':
		case 'GET_CURRENT_PROFILE_FAILURE':
		case 'GET_ALL_PROFILES_FAILURE':
			return {
				profile: null,
				profiles: null,
				getProfile: null,
				getCurrentProfile: null,
				isFetching: false,
				isProfile: false,
				isError: action.payload,
				error: true,
				isDeleted: false,
			};
		default:
			return {
				...state,
			};
	}
};

export default ProfileReducer;
