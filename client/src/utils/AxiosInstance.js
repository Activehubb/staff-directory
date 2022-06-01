import axios from 'axios'
export const axiosInstance = axios.create({
	baseURL: 'https://staffdirectory.herokuapp.com/',
});