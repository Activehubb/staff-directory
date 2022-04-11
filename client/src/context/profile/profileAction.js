export const createProfileStart = () => ({
	type: 'CREATE_PROFILE_START',
});

export const createProfileSuccess = (profile) => ({
	type: 'CREATE_PROFILE_SUCCESS',
	payload: profile,
});

export const createProfileFailure = (isError) => ({
	type: 'CREATE_PROFILE_FAILURE',
	payload: isError,
});
export const getProfileStart = () => ({
	type: 'GET_PROFILE_START',
});

export const getProfileSuccess = (profile) => ({
	type: 'GET_PROFILE_SUCCESS',
	payload: profile,
});

export const getProfileFailure = (isError) => ({
	type: 'GET_PROFILE_FAILURE',
	payload: isError,
});

export const getAllProfileStart = () => ({
	type: 'GET_ALL_PROFILES_START',
});

export const getAllProfileSuccess = (profiles) => ({
	type: 'GET_ALL_PROFILES_SUCCESS',
	payload: profiles,
});

export const getAllProfileFailure = (isError) => ({
	type: 'GET_ALL_PROFILES_FAILURE',
	payload: isError,
});

export const updateStatusStart = () => ({
	type: 'UPDATE_STATUS_START',
});
export const updateStatusSuccess = (status) => ({
	type: 'UPDATE_STATUS_SUCCESS',
	payload: status,
});
export const updateStatusFailure = (isError) => ({
	type: 'UPDATE_STATUS_FAILURE',
	payload: isError,
});

export const deleteProfileStart = () => ({
	type: 'DELETE_PROFILE_START',
});
export const deleteProfileSuccess = (status) => ({
	type: 'DELETE_PROFILE_SUCCESS',
	payload: status,
});
export const deleteProfileFailure = (isError) => ({
	type: 'DELETE_PROFILE_FAILURE',
	payload: isError,
});
