import React from 'react';
import SideBar from '../../../components/sidebar/SideBar';
import User from '../../../components/user/User';
import { Box } from '@material-ui/core';
import './user.css';

export default function Users({ status, handleStatus, handleUpdateProfileStatus }) {
	return (
		<div style={{ display: 'flex', flex: '4' }}>
			<SideBar style={{ flex: '1.5' }} />

			<Box component={'div'} style={{ flex: 2.5, margin: '1rem' }}>
				<User
					status={status}
					handleStatus={handleStatus}
					handleUpdateProfileStatus={handleUpdateProfileStatus}
				/>
			</Box>
		</div>
	);
}
