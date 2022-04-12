import React, { useEffect, useContext } from 'react';
import {
	Avatar,
	Box,
	Button,
	Card,
	Chip,
	Container,
	Divider,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from '@material-ui/core';
import { Stack, IconButton, Alert, AlertTitle } from '@mui/material';
import { Edit, LocationOn } from '@material-ui/icons';
import { getCurrentUserProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import Loader from '../../../utils/Loader';
import { Link } from 'react-router-dom';

export default function User() {
	const { getCurrentProfile, dispatch, error, isError } =
		useContext(ProfileContext);

	useEffect(() => {
		getCurrentUserProfile(dispatch);
	}, [dispatch]);

	if (error) {
		return (
			<Container maxWidth={'sm'}>
				<Card
					elevation={3}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
						width: '100%',
					}}
				>
					<Alert severity='error'>
						<AlertTitle>Unauthorized</AlertTitle>
						You are not Authenticated —{' '}
						<Button>
							<Link to='/signin' style={{textDecoration: 'none'}}>Sign In</Link>
						</Button>
					</Alert>
				</Card>
			</Container>
		);
	} else if (getCurrentProfile === null) {
		return <Loader />;
	}

	console.log(getCurrentProfile, error, isError);

	let profile = getCurrentProfile;
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
				<Box>
					<Box>
						<Box>
							<Container maxWidth={'md'} className=' m-2'>
								<Card
									style={{
										background: 'rgb(0, 30, 60)',
										border: '1px solid rgb(15, 80, 133)',
									}}
									elevation={3}
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
												<Box component={'div'} style={{ paddingLeft: '1rem' }}>
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
												<IconButton aria-label=''>
													<Edit
														sx={{ fontSize: 14 }}
														style={{
															border: '1px solid rgb(13, 50, 80)',
															borderRadius: '5px',
															color: '#f7f7f7',
															padding: '5px',
															marginRight: '.5rem',
														}}
													/>
												</IconButton>
											</Box>
										</Box>
									</Box>
								</Card>
							</Container>
						</Box>

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
				</Box>
			</Container>
		</>
	);
}
