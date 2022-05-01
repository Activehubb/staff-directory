import React, { useEffect, useContext, useState } from 'react';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Chip,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	ListItem,
	ListItemText,
	Paper,
	Switch,
	Typography,
} from '@material-ui/core';
import { Stack, IconButton } from '@mui/material';
import { Delete, Edit, LocationOn } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import {
	getProfile,
	updateProfileStatus,
} from '../../context/profile/profileApiCall';
import { ProfileContext } from '../../context/profile/profileContext';
import Loader from '../../utils/Loader';
import './user.css';
import UserDelete from './UserDelete';

export default function User() {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const { profile, dispatch } = useContext(ProfileContext);

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		getProfile(path, dispatch);
	}, [path, dispatch]);

	const [status, setStatus] = useState(true);
	const handleStatus = (event) => {
		setStatus(event.target.checked);
	};

	const handleUpdateProfileStatus = (e) => {
		e.preventDefault();
		updateProfileStatus(status, path, dispatch);
	};
	console.log(status);
	if (profile === null) {
		return <Loader />;
	}

	return (
		<>
			<Container maxWidth={'md'}>
				<Card
					style={{
						background: 'rgb(0, 30, 60)',
						border: '1px solid rgb(15, 80, 133)',
						margin: '1rem 0',
					}}
				>
					<Box style={{ display: 'flex', padding: '5px' }}>
						<ListItemText
							className='textColor'
							secondary={
								<Typography
									sx={{ display: 'inline' }}
									component='span'
									variant='body2'
									color='text.primary'
								>
									{profile._id && `ID: ${profile._id}`}
								</Typography>
							}
						/>
						<ListItemText
							className='textColor'
							secondary={
								<Typography
									sx={{ display: 'inline' }}
									component='span'
									variant='body2'
									color='text.primary'
								>
									{profile.createdAt &&
										`Created At: ${new Date(profile.createdAt).toDateString()}`}
								</Typography>
							}
						/>
						<ListItemText
							className='textColor'
							secondary={
								<Typography
									sx={{ display: 'inline' }}
									component='span'
									variant='body2'
									color='text.primary'
								>
									{profile.user.email && `Email: ${profile.user.email}`}
								</Typography>
							}
						/>
					</Box>
				</Card>
				<Card style={{ background: 'rgb(13, 50, 80)' }}>
					<Box
						className={`userstatus ${
							profile.status ? 'Activated' : 'Unactivate'
						}`}
					>
						{profile.status ? 'Activated' : 'Unactivated'}
					</Box>
					<Box>
						<form onSubmit={handleUpdateProfileStatus}>
							<Box>
								<Container maxWidth={'md'} className=' m-2'>
									<Card
										style={{
											background: 'rgb(0, 30, 60)',
											border: '1px solid rgb(15, 80, 133)',
										}}
									>
										<Box style={{ padding: '0 2rem' }}>
											<Box className='card'>
												<Box
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													<Avatar
														src={profile.user.profilePic}
														alt='avatar'
														variant={'rounded'}
														className='avatar'
														style={{ width: '72px', height: '72px' }}
													/>
													<Box
														component={'div'}
														style={{ paddingLeft: '1rem' }}
													>
														<Stack spacing={1}>
															<Typography
																style={{ fontWeight: '700', color: '#fff' }}
															>
																{profile.bio.fname + ' ' + profile.bio.lname}
															</Typography>
															<Typography
																variant='body2'
																style={{ display: 'flex', color: '#fff' }}
															>
																<LocationOn /> {profile.bio.residence}
															</Typography>
														</Stack>
													</Box>
												</Box>
												<Box>
													<IconButton aria-label='' onClick>
														<Edit
															sx={{ fontSize: 14 }}
															style={{
																border: '1px solid rgb(13, 50, 80)',
																borderRadius: '5px',
																color: '#f7f7f7',
																padding: '5px',
																margin: '10px 5px',
																cursor: 'pointer',
															}}
														/>
													</IconButton>
													<IconButton>
														<Delete onClick={handleOpen}
															sx={{ fontSize: 14 }}
															style={{
																border: '1px solid rgb(13, 50, 80)',
																borderRadius: '5px',
																color: '#f7f7f7',
																padding: '5px',
																cursor: 'pointer',
															}}
														/>
													</IconButton>
												</Box>
											</Box>
										</Box>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										<Stack
											direction='row'
											alignItems='center'
											justifyContent='space-between'
											sx={{ px: 2, py: 1 }}
											style={{ background: 'rgb(0, 26, 53)' }}
										>
											<Box>
												<Chip
													label={status ? 'Activated' : 'Unactivate'}
													className={`status ${
														status ? 'Activated' : 'Unactivate'
													}`}
												/>
											</Box>
											<FormGroup>
												<FormControlLabel
													control={
														<Switch
															checked={status}
															onChange={handleStatus}
															value={status}
														/>
													}
												/>
											</FormGroup>
										</Stack>
									</Card>
								</Container>
							</Box>

							{status && (
								<Container maxWidth={'md'}>
									<CardContent
										style={{
											background: 'rgb(0, 30, 60)',
											border: '1px solid rgb(15, 80, 133)',
										}}
									>
										<input
											type='submit'
											value={'Update Status'}
											style={{
												border: '1px solid rgb(15, 80, 133)',
												outline: 'none',
												display: 'block',
												textAlign: 'center',
												color: '#fff',
												background: 'rgb(13, 50, 80)',
												width: '100%',
												padding: '8px 10px',
												borderRadius: '5px',
												boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%)',
												fontSize: '14px',
												fontWeight: 500,
												cursor: 'pointer',
												position: 'relative',
											}}
										/>
									</CardContent>
								</Container>
							)}
						</form>

						<UserDelete
							open={open}
							handleClose={handleClose}
							profile={profile}
						/>

						<Container maxWidth={'md'} className=' m-2'>
							<Card
								style={{
									background: 'rgb(0, 30, 60)',
									border: '1px solid rgb(15, 80, 133)',
								}}
							>
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Directory'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{profile.faculty
													? `Faculty — ${profile.faculty}`
													: profile.college
													? `College — ${profile.college}`
													: profile.center
													? `Center — ${profile.center}`
													: profile.unit
													? `Unit — ${profile.unit}`
													: ''}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Rank'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{profile.bio.rank}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Rank'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{profile.bio.qualification}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Contact'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{profile.bio.phoneNumber}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Gender'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{profile.bio.gender}
											</Typography>
										}
									/>
								</ListItem>
							</Card>
						</Container>

						<Container maxWidth={'md'} className=' m-2'>
							<Card
								elevation={3}
								style={{
									background: 'rgb(0, 30, 60)',
									border: '1px solid rgb(15, 80, 133)',
								}}
							>
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Description'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{profile.bio.desc}
											</Typography>
										}
									/>
								</ListItem>
							</Card>
						</Container>
						{profile.bio.research && (
							<Container maxWidth={'md'} className=' m-2'>
								<Paper
									elevation={3}
									style={{
										background: 'rgb(0, 30, 60)',
										border: '1px solid rgb(15, 80, 133)',
										padding: '5px',
									}}
								>
									{profile.bio.research.map((item, idx) => (
										<Chip
											label={item}
											key={idx}
											style={{ margin: ' 0 10px' }}
										/>
									))}
								</Paper>
							</Container>
						)}
					</Box>
				</Card>
			</Container>
		</>
	);
}