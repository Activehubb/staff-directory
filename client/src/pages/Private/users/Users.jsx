import React from 'react';
import SideBar from '../../../components/sidebar/SideBar';
import UserData from '../../../components/userData/UserData';
import './user.css';

export default function Users({ status, profiles }) {
	
	return (
		<div className='main'>
			<SideBar className='bar' />
			<div className='user'>
				<UserData profiles={profiles}/>
			</div>
		</div>
	);
}
