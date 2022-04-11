import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyD-NoV535CJJCeI6sGMbJ96mt6Z4Qm0KdY',
	authDomain: 'blog-f93fe.firebaseapp.com',
	projectId: 'blog-f93fe',
	storageBucket: 'blog-f93fe.appspot.com',
	messagingSenderId: '996696698937',
	appId: '1:996696698937:web:2ace5024bac22571e71de8',
	measurementId: 'G-PG2C25PRY2',
};
const firebaseApp = initializeApp(firebaseConfig)

const storage = getStorage(firebaseApp)

export default storage