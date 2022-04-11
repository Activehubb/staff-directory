import axios from 'axios';
import {
	createProfileFailure,
	createProfileStart,
	createProfileSuccess,
	deleteProfileFailure,
	deleteProfileStart,
	deleteProfileSuccess,
	getAllProfileFailure,
	getAllProfileStart,
	getAllProfileSuccess,
	getProfileFailure,
	getProfileStart,
	getProfileSuccess,
	updateStatusFailure,
	updateStatusStart,
	updateStatusSuccess,
} from './profileAction';

export const createProfile = async (profile, dispatch) => {
	dispatch(createProfileStart());
	try {
		const res = await axios.post('/api/profile/create', profile, {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).userToken}`,
			},
		});
		dispatch(createProfileSuccess(res.data));
	} catch (error) {
		dispatch(createProfileFailure(error.message));
	}
};

export const getProfiles = async (dispatch) => {
	dispatch(getAllProfileStart());
	try {
		const res = await axios.get('/api/profile/profiles');
		dispatch(getAllProfileSuccess(res.data));
	} catch (error) {
		dispatch(getAllProfileFailure(error.message));
	}
};

export const getCurrentUserProfile = async (dispatch) => {
	dispatch(getProfileStart());
	try {
		const config = {
			Headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).userToken}`,
			},
		};
		const res = await axios.get(`/api/profile/`, config);

		dispatch(getProfileSuccess(res.data));
	} catch (error) {
		dispatch(getProfileFailure(error.message));
	}
};

export const getProfile = async (path,  dispatch) => {
	dispatch(getProfileStart());
	try {
		const res = await axios.get(`/api/profile/user/${path}`);

		dispatch(getProfileSuccess(res.data));
	} catch (error) {
		dispatch(getProfileFailure(error.message));
	}
};

export const updateProfileStatus = async (status, path, dispatch) => {
	dispatch(updateStatusStart());
	try {
		const res = await axios.post(`/api/profile/status/${path}`, status);
		dispatch(updateStatusSuccess(res.data));
	} catch (error) {
		dispatch(updateStatusFailure());
	}
};

export const deletProfile = async (path, dispatch) => {
	dispatch(deleteProfileStart())
	try {
		const res = await axios.delete(`/api/profile/delete/${path}`)
		dispatch(deleteProfileSuccess(res.data))
	} catch (error) {
		dispatch(deleteProfileFailure())
	}

}
