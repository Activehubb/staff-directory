import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Avatar, Box, Paper } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { getProfile } from '../../context/profile/profileApiCall';
import { ProfileContext } from '../../context/profile/profileContext';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function UserDelete({ profiles, open, handleClose }) {
	const { profile, dispatch } = useContext(ProfileContext);

	const location = useLocation();
	const path = location.pathname.split('/')[1];

	useEffect(() => {
		getProfile(path, dispatch);
	}, [path, dispatch]);

	return (
		<Paper elevation={3}>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
                <Box
                style={{display: 'flex', flexDirection: 'column'}}>
					<Avatar
						src={profile.user.profilePic}
						variant='round'
						style={{ width: 64, height: 64 }}
					/>

					<DialogTitle>{`Are you Sure you want to delete ${profile.user.username}, Id ${profile.user._id} with profile details ${profile._id} ${profile.email} ${profile.fname} ${profile.lname}`}</DialogTitle>
				</Box>
				<DialogContent>
					<DialogContentText id='alert-dialog-slide-description'>
						{`Note:  this user is ${
							profile.status ? 'Activated' : 'Unactivate yet'
						} by deleting this profile it can't be reverse`}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose}>Agree</Button>
				</DialogActions>
			</Dialog>
		</Paper>
	);
}
