export const createProfileSuccess = (profile) => ({
	type: 'CREATE_PROFILE_SUCCESS',
	payload: profile,
});

export const createProfileFailure = (isError) => ({
	type: 'CREATE_PROFILE_FAILURE',
	payload: isError,
});

export const getProfileSuccess = (getProfile) => ({
	type: 'GET_PROFILE_SUCCESS',
	payload: getProfile,
});

export const getProfileFailure = (isError) => ({
	type: 'GET_PROFILE_FAILURE',
	payload: isError,
});

export const getProfileByAdminSuccess = (getProfileByAdmin) => ({
	type: 'GET_PROFILE_BY_ADMIN_SUCCESS',
	payload: getProfileByAdmin,
});

export const getProfileByAdminFailure = (isError) => ({
	type: 'GET_PROFILE_BY_ADMIN_FAILURE',
	payload: isError,
});

export const getUnactivatedProfileSuccess = (unactivateProfile) => ({
	type: 'GET_UNACTIVATE_PROFILES_SUCCESS',
	payload: unactivateProfile,
});

export const getUnactivatedProfileFailure = (isError) => ({
	type: 'GET_UNACTIVATE_PROFILES_FAILURE',
	payload: isError,
});

export const getCurrentProfileSuccess = (getCurrentProfile) => ({
	type: 'GET_CURRENT_PROFILE_SUCCESS',
	payload: getCurrentProfile,
});

export const getCurrentProfileFailure = (isError) => ({
	type: 'GET_CURRENT_PROFILE_FAILURE',
	payload: isError,
});

export const getAllProfileSuccess = (profiles) => ({
	type: 'GET_ALL_PROFILES_SUCCESS',
	payload: profiles,
});

export const getAllProfileFailure = (isError) => ({
	type: 'GET_ALL_PROFILES_FAILURE',
	payload: isError,
});

export const updateStatusSuccess = (status) => ({
	type: 'UPDATE_STATUS_SUCCESS',
	payload: status,
});
export const updateStatusFailure = (isError) => ({
	type: 'UPDATE_STATUS_FAILURE',
	payload: isError,
});

export const updateProfileSuccess = (updateProfile) => ({
	type: 'UPDATE_PROFILE_SUCCESS',
	payload: updateProfile,
});
export const updateProfileFailure = (isError) => ({
	type: 'UPDATE_PROFILE_FAILURE',
	payload: isError,
});

export const deleteProfileSuccess = (isDeleted) => ({
	type: 'DELETE_PROFILE_SUCCESS',
	payload: isDeleted,
});
export const deleteProfileFailure = (isError) => ({
	type: 'DELETE_PROFILE_FAILURE',
	payload: isError,
});
