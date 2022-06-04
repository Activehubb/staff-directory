import React from 'react';
import SideBar from '../../../components/sidebar/SideBar';
import UnactivatedUser from '../../../components/unactivatedUser/UnactivateUser';
import { Typography, makeStyles } from '@material-ui/core';
import './user.css';

const useStyles = makeStyles({
	Box: {
		boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.4)',
		padding: '.5rem',
		margin: '1rem 0 ',
		borderRadius: '.5rem',
	},
	Typo: {
		fontSize: '1.5rem',
		fontFamily: 'Quicksand',
		fontWeight: '500',
		padding: '.5rem',
	},
});

export default function Users() {
	const classes = useStyles();
	return (
		<div className='main'>
			<SideBar className='bar' />
			<div className='user'>
				<div className='box'>
					<Typography variant='h3' className={classes.Typo}>
						Pending Users
					</Typography>
					<UnactivatedUser />
				</div>
			</div>
		</div>
	);
}
