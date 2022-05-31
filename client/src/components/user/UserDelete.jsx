import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { Avatar, Box, Paper, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import {
	deleteProfile,
	getUserProfileByAdmin,
} from '../../context/profile/profileApiCall';
import { ProfileContext } from '../../context/profile/profileContext';
import { Stack } from '@mui/material';
import { LocationOn } from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function UserDelete({ open, handleClose }) {
	const { getProfileByAdmin, dispatch, del, isDeleted } =
		useContext(ProfileContext);

	const location = useLocation();
	const path = location.pathname.split('/')[3];

	useEffect(() => {
		getUserProfileByAdmin(path, dispatch);
	}, [path, dispatch]);

	const handleDelete = () => {
		deleteProfile(path, dispatch);
	};

	return (
		<Paper elevation={3}>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
			>
				<Box
					style={{
						background: 'rgb(0, 30, 60)',
						border: '1px solid rgb(15, 80, 133)',
						color: '#fff',
					}}
				>
					<DialogContent>
						<Box
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Avatar
								src={getProfileByAdmin.user.profilePic}
								alt='avatar'
								variant={'rounded'}
								className='avatar'
								style={{ width: '72px', height: '72px' }}
							/>
							<Box component={'div'} style={{ paddingLeft: '1rem' }}>
								<Stack spacing={1}>
									<Typography style={{ fontWeight: '700', color: '#fff' }}>
										{getProfileByAdmin.bio.fname +
											' ' +
											getProfileByAdmin.bio.lname}
									</Typography>
									<Typography
										variant='body2'
										style={{ display: 'flex', color: '#fff' }}
									>
										<LocationOn /> {getProfileByAdmin.bio.residence}
									</Typography>
								</Stack>
							</Box>
						</Box>

						<DialogContentText
							style={{
								color: '#fff',
								padding: '1rem 0',
							}}
						>
							{`Note:  this user is ${
								getProfileByAdmin.status ? 'activated' : 'unactivate yet'
							} by deleting this profile it can't be reverse`}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Back</Button>
						<Button onClick={handleDelete}>Delete</Button>
					</DialogActions>
				</Box>
			</Dialog>
			{isDeleted && (
				<Dialog
					open={del}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
				>
					<Box
						style={{
							background: 'rgb(0, 30, 60)',
							border: '1px solid rgb(15, 80, 133)',
							color: '#fff',
						}}
					>
						<DialogContent>
							<DialogContentText
								style={{
									color: '#fff',
									padding: '1rem 0',
								}}
							>
								{isDeleted.msg}
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} component={'a'} href={'/dashboard'}>
								Back
							</Button>
						</DialogActions>
					</Box>
				</Dialog>
			)}
		</Paper>
	);
}
