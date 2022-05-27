import React from 'react';
import SideBar from '../../../components/sidebar/SideBar';
import UnactivatedUser from '../../../components/unactivatedUser/UnactivateUser';
import './user.css';

export default function Users() {
	
	return (
		<div className='main'>
			<SideBar className='bar' />
			<div className='user'>
				<UnactivatedUser/>
			</div>
		</div>
	);
}
