import React, { Fragment, useEffect, useContext } from 'react';
import Category from '../../../components/category/Category';
import Chart from '../../../components/chart/Chart';
import SideBar from '../../../components/sidebar/SideBar';
import UserList from '../../../components/userList/UserList';
import { getAllProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import './dashboard.css';

const Dashboard = () => {
	const { dispatch, getAllProfileUsers } = useContext(ProfileContext);

	useEffect(() => {
		getAllProfile(dispatch);
	}, [dispatch]);
	return (
		<Fragment>
			<div className='flex'>
				<SideBar />
				<div className='dashboard'>
					<Category />
					<Chart />
					<UserList profiles={getAllProfileUsers} />
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
