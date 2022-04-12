import React, { Fragment } from 'react';
import Category from '../../../components/category/Category';
import Chart from '../../../components/chart/Chart';
import SideBar from '../../../components/sidebar/SideBar';
import UserList from '../../../components/userList/UserList';
import './dashboard.css';

const Dashboard = ({ profiles }) => {
	return (
		<Fragment>
			<div className='flex'>
				<SideBar />
				<div className='dashboard'>
					<Category />
					<Chart />
					<UserList profiles={profiles} />
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
