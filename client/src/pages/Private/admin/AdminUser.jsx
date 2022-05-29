import React from 'react';
import PrivateUser from '../../../components/user/PrivateUser';
import { Box } from '@material-ui/core';
import './user.css';

export default function Users() {
	return (
		<div style={{ display: 'flex', flex: '4' }}>
			<Box component={'div'} style={{ flex: 2, margin: '1rem' }}>
				<PrivateUser />
			</Box>
		</div>
	);
}
