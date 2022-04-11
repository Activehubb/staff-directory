import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import Login from './pages/public/auth/Login';
import Register from './pages/public/auth/Register';
import PrimarySearchAppBar from './components/appbar/AppBar';
import './app.css';
import Dashboard from './pages/Private/dashboard/Dashboard';
import Profile from './pages/public/profile/Profile';
import Home from './pages/public/home/Home';
import User from './pages/public/user/User';
import SingleUser from './pages/Private/user/User';
import Users from './pages/Private/users/Users';
import { AuthContext } from './context/auth/AuthContext';
import Query from './components/query/Query';
import { ProfileContext } from './context/profile/profileContext';
import {
	getProfiles,
	updateProfileStatus,
} from './context/profile/profileApiCall';

function App() {
	const { user } = useContext(AuthContext);
	const { profiles, dispatch } = useContext(ProfileContext);
	const location = useLocation();
	const path = location.pathname.split('/')[1];

	const [query, setQuery] = useState('');
	const HandleQuery = (e) => setQuery(e.target.value);
	const [status, setStatus] = useState(true);
	const [userAvatar, setUserAvatar] = useState('');
	const handleAvatar = (e) => {
		setUserAvatar(e.target.files[0]);
	};
	const handleUpdateProfileStatus = (e) => {
		e.preventDefault();
		updateProfileStatus(status, path, dispatch);
	};
	const handleStatus = (event) => {
		setStatus(event.target.checked);
	};

	useEffect(() => {
		getProfiles(dispatch);
	}, [dispatch]);

	return (
		<Fragment>
			<PrimarySearchAppBar HandleQuery={HandleQuery} avatar={userAvatar} />
			<Routes>
				<Route
					path='/'
					element={
						query ? (
							<Query query={query} profiles={profiles} />
						) : (
							<Home profiles={profiles} />
						)
					}
				/>
				{!user ? (
					<>
						<Route path='/signin' element={<Login />} />
						<Route
							path='/signup'
							element={
								<Register handleAvatar={handleAvatar} userAvatar={userAvatar} />
							}
						/>
						<Route
							path='/signup/admin'
							element={<Register handleAvatar={handleAvatar} />}
						/>
					</>
				) : (
					<>
					<Route path='/create/profile' element={<Profile />} />
						<Route
							path='/users/:id'
							element={
								<SingleUser
									status={status}
									handleStatus={handleStatus}
									handleUpdateProfileStatus={handleUpdateProfileStatus}
								/>
							}
						/>
						<Route path='/user/:id' element={<User status={status} />} />
						<Route
							path='/dashboard'
							element={<Dashboard status={status} profiles={profiles} />}
						/>
						<Route
							path='/users'
							element={<Users status={status} profiles={profiles} />}
						/>
					</>
				)}
				<Route path='*' element={<Navigate to={user ? '/' : 'signin'} />} />
			</Routes>
		</Fragment>
	);
}

export default App;
