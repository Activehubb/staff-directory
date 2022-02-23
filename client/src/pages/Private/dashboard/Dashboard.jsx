import React, { Fragment } from 'react';
import Category from '../../../components/category/Category';
import Chart from '../../../components/chart/Chart';
import UserList from '../../../components/userList/UserList';
import './dashboard.css';

export default function Dashboard() {
	return (
		<Fragment>
			<div className='dashboard'>
				<Category />
				<Chart />
				<UserList />
			</div>
		</Fragment>
	);
}
