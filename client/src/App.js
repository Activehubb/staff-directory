import { Navigate, Route, Routes } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import Login from './pages/public/auth/Login';
import LoginAdm from './pages/public/auth/LoginAdm';
import Register from './pages/public/auth/Register';
import SignupAdm from './pages/public/auth/SignupAdm';
import PrimarySearchAppBar from './components/appbar/AppBar';
import NewMember from './components/newMember/NewMember';
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
import { getProfiles } from './context/profile/profileApiCall';

function App() {
	const { user, admin, isAuthenticated } = useContext(AuthContext);
	const { profiles, dispatch } = useContext(ProfileContext);

	const [query, setQuery] = useState('');
	const HandleQuery = (e) => setQuery(e.target.value);
	const [userAvatar, setUserAvatar] = useState(false);
	const handleAvatar = (e) => {
		setUserAvatar(e.target.files[0]);
	};

	useEffect(() => {
		getProfiles(dispatch);
	}, [dispatch]);

	return (
		<Fragment>
			<PrimarySearchAppBar HandleQuery={HandleQuery} avatar={userAvatar} />
			<Routes>
				<>
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
					<Route
						path='/users/profiles'
						element={
							query ? (
								<Query query={query} profiles={profiles} />
							) : (
								<NewMember profiles={profiles} />
							)
						}
					/>
					<Route
						path='/signup'
						element={
							<Register handleAvatar={handleAvatar} userAvatar={userAvatar} />
						}
					/>
					<Route
						path='/signup/admin'
						element={
							<SignupAdm handleAvatar={handleAvatar} userAvatar={userAvatar} />
						}
					/>
					<Route path='/signin' element={<Login />} />
					<Route path='/signin/admin' element={<LoginAdm />} />
				</>
				{user && (
					<>
						<Route path='/create/profile' element={<Profile />} />
						<Route path='/users/:id' element={<SingleUser />} />
						<Route path='/profile' element={<User />} />
					</>
				)}
				{admin && (
					<>
						<Route path='/create/profile' element={<Profile />} />
						<Route path='/users/:id' element={<SingleUser />} />
						<Route path='/profile' element={<User />} />
						<Route
							path='/dashboard'
							element={<Dashboard profiles={profiles} />}
						/>
						<Route path='/users' element={<Users profiles={profiles} />} />
					</>
				)}
				<Route
					path='*'
					element={<Navigate to={isAuthenticated ? '/' : 'signin'} />}
				/>
			</Routes>
		</Fragment>
	);
}

export default App;
