import React, { Fragment } from 'react';
import Category from '../../../components/category/Category';
import Chart from '../../../components/chart/Chart';
import SideBar from '../../../components/sidebar/SideBar';


const Dashboard = () => {
	return (
		<Fragment>
			<div className='flex'>
				<SideBar />
				<div className='dashboard'>
					<Category />
					<Chart />
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
