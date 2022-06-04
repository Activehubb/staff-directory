import axios from 'axios';
// import { axiosInstance } from '../../utils/AxiosInstance';
import {
	createProfileFailure,
	createProfileSuccess,
	deleteProfileFailure,
	deleteProfileSuccess,
	getAllProfileFailure,
	getAllProfileSuccess,
	getAllUsersProfileFailure,
	getAllUsersProfileSuccess,
	getCurrentProfileFailure,
	getCurrentProfileSuccess,
	getProfileByAdminFailure,
	getProfileByAdminSuccess,
	getProfileFailure,
	getProfileSuccess,
	getUnactivatedProfileFailure,
	getUnactivatedProfileSuccess,
	updateProfileFailure,
	updateProfileSuccess,
	updateStatusFailure,
	updateStatusSuccess,
} from './profileAction';

export const createProfile = async (profile, dispatch) => {
	try {
		const res = await axios.post('/api/profile/create', profile, {
			headers: {
				token: `Bearer ${JSON.parse(sessionStorage.getItem('user')).userToken}`,
			},
		});
		dispatch(createProfileSuccess(res.data));
	} catch (error) {
		dispatch(createProfileFailure(error.response));
	}
};

export const getProfiles = async (dispatch) => {
	try {
		const res = await axios.get('/api/profile/profiles');
		dispatch(getAllProfileSuccess(res.data.profile));
	} catch (error) {
		dispatch(getAllProfileFailure(error.response));
	}
};

export const getUnactivatedProfiles = async (dispatch) => {
	try {
		const res = await axios.get('/api/profile/profiles/unactivate');
		dispatch(getUnactivatedProfileSuccess(res.data.profile));
	} catch (error) {
		dispatch(getUnactivatedProfileFailure(error.response));
	}
};

export const getCurrentUserProfile = async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile`, {
			headers: {
				token: `Bearer ${JSON.parse(sessionStorage.getItem('user')).userToken}`,
			},
		});

		dispatch(getCurrentProfileSuccess(res.data));
	} catch (error) {
		dispatch(getCurrentProfileFailure(error.response));
	}
};

export const getUserProfile = async (path, dispatch) => {
	try {
		const res = await axios.get(`/api/profile/user/${path}`);

		dispatch(getProfileSuccess(res.data));
	} catch (error) {
		dispatch(getProfileFailure(error.response));
	}
};
export const getAllProfile = async ( dispatch) => {
	try {
		const res = await axios.get(`/api/profile/users/`);

		dispatch(getAllUsersProfileSuccess(res.data));
	} catch (error) {
		dispatch(getAllUsersProfileFailure(error.response));
	}
};

export const getUserProfileByAdmin = async (path, dispatch) => {
	try {
		const res = await axios.get(`/api/profile/admin/${path}`);

		dispatch(getProfileByAdminSuccess(res.data));
	} catch (error) {
		dispatch(getProfileByAdminFailure(error.response));
	}
};

export const updateProfile = async (profile, path, dispatch) => {
	try {
		const res = await axios.put(`/api/profile/update/${path}`, profile, {
			headers: {
				token: `Bearer ${JSON.parse(sessionStorage.getItem('user')).userToken}`,
			},
		});
		dispatch(updateProfileSuccess(res.data));
	} catch (error) {
		dispatch(updateProfileFailure(error.response));
	}
};

export const updateProfileStatus = async (status, path, dispatch) => {
	try {
		const res = await axios.put(`/api/profile/status/${path}`, status);
		dispatch(updateStatusSuccess(res.data));
	} catch (error) {
		dispatch(updateStatusFailure(error.response));
	}
};

export const deleteProfile = async (path, dispatch) => {
	try {
		const res = await axios.delete(`/api/profile/delete/${path}`);
		dispatch(deleteProfileSuccess(res.data));
	} catch (error) {
		dispatch(deleteProfileFailure(error.response));
	}
};
