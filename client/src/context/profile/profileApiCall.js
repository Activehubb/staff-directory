import axios from 'axios';
import {
	createProfileFailure,
	createProfileSuccess,
	deleteProfileFailure,
	deleteProfileSuccess,
	getAllProfileFailure,
	getAllProfileSuccess,
	getCurrentProfileFailure,
	getCurrentProfileSuccess,
	getProfileFailure,
	getProfileSuccess,
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
		dispatch(getAllProfileSuccess(res.data));
	} catch (error) {
		dispatch(getAllProfileFailure(error.response));
	}
};

export const getCurrentUserProfile = async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile/`, {
			headers: {
				token: `Bearer ${JSON.parse(sessionStorage.getItem('user')).userToken}`,
			},
		});

		dispatch(getCurrentProfileSuccess(res.data));
	} catch (error) {
		dispatch(getCurrentProfileFailure(error.response));
	}
};

export const getProfile = async (path, dispatch) => {
	try {
		const res = await axios.get(`/api/profile/user/${path}`);

		dispatch(getProfileSuccess(res.data));
	} catch (error) {
		dispatch(getProfileFailure(error.response));
	}
};

export const updateProfileStatus = async (status, path, dispatch) => {
	try {
		const res = await axios.put(`/api/profile/status/${path}`, status);
		dispatch(updateStatusSuccess(res.data));
	} catch (error) {
		dispatch(updateStatusFailure(error.response.data));
	}
};

export const deletProfile = async (path, dispatch) => {
	try {
		const res = await axios.delete(`/api/profile/delete/${path}`);
		dispatch(deleteProfileSuccess(res.data));
	} catch (error) {
		dispatch(deleteProfileFailure(error.response.data));
	}
};
