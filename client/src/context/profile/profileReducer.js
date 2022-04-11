const ProfileReducer = (state, action) => {
	switch (action.type) {
		case 'CREATE_PROFILE_START':
		case 'UPDATE_STATUS_START':
		case 'GET_PROFILE_START':
		case 'GET_ALL_PROFILES_START':
			return {
				profile: null,
				profiles: null,
				isFetching: true,
				isError: null,
				error: false,
				isDeleted: false,
			};
		case 'GET_ALL_PROFILES_SUCCESS':
			return {
				profile: action.payload,
				profiles: action.payload,
				isFetching: false,
				isError: null,
				error: false,
				isDeleted: false,
			};
		case 'CREATE_PROFILE_SUCCESS':
		case 'UPDATE_STATUS_SUCCESS':
		case 'GET_PROFILE_SUCCESS':
		case 'DELETE_PROFILE_SUCCESS':
			return {
				profile: action.payload,
				profiles: action.payload,
				isFetching: false,
				isError: null,
				error: false,
				isDeleted: action.payload,
			};
		case 'CREATE_PROFILE_FAILURE':
		case 'UPDATE_STATUS_FAILURE':
		case 'GET_PROFILE_FAILURE':
		case 'GET_ALL_PROFILES_FAILURE':
			return {
				profile: null,
				profiles: null,
				isFetching: false,
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
