import React, { useEffect, useContext } from 'react';
import {
	Avatar,
	Box,
	Button,
	Card,
	Chip,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	ListItem,
	ListItemText,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import { Stack, IconButton } from '@mui/material';
import { Edit, LocationOn } from '@material-ui/icons';
import { getCurrentUserProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import Loader from '../../../utils/Loader';

export default function User() {
	const { getCurrentProfile, dispatch, error, isError } =
		useContext(ProfileContext);

	useEffect(() => {
		getCurrentUserProfile(dispatch);
	}, [dispatch]);

	console.log(getCurrentProfile, error, isError);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	// const { profile } = getCurrentProfile;

	if (getCurrentProfile === null && isError === null) {
		return <Loader />;
	}


	return (
		<>
			<Container maxWidth={'md'}>
				{!isError && (
					<>
						<Card
							style={{
								background: 'rgb(0, 30, 60)',
								border: '1px solid rgb(15, 80, 133)',
								margin: '1rem 2rem',
							}}
						>
							<Box style={{ display: 'flex', padding: '5px 10px' }}>
								<ListItemText
									className='textColor'
									secondary={
										<Typography
											sx={{ display: 'inline' }}
											component='span'
											variant='body2'
											color='text.primary'
										>
											{getCurrentProfile.profile.createdAt &&
												`Created At: ${new Date(
													getCurrentProfile.profile.createdAt
												).toDateString()}`}
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
											{getCurrentProfile.profile.user.email && `Email: ${getCurrentProfile.profile.user.email}`}
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
															src={getCurrentProfile.profile.user.profilePic}
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
																	{getCurrentProfile.profile.bio.fname + ' ' + getCurrentProfile.profile.bio.lname}
																</Typography>
																<Typography
																	variant='body2'
																	style={{ display: 'flex', color: '#fff' }}
																>
																	<LocationOn /> {getCurrentProfile.profile.bio.residence}
																</Typography>
															</Stack>
														</Box>
													</Box>
													<Box>
														<IconButton
															component={'a'}
															href={`/update/profile/${getCurrentProfile.profile._id}`}
														>
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
										style={{
											background: 'rgb(0, 30, 60)',
											border: '1px solid rgb(15, 80, 133)',
										}}
									>
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Entry'
												secondary={
													<Typography
														style={{
															display: 'inline',
															textTransform: 'capitalize',
														}}
														component='span'
													>
														{getCurrentProfile.profile.dir.entry}
													</Typography>
												}
											/>
										</ListItem>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Directory'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
													>
														{getCurrentProfile.profile.dir.directory}
													</Typography>
												}
											/>
										</ListItem>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										{getCurrentProfile.profile.dir.mainEntry && (
											<ListItem
												alignItems='flex-start'
												className='p-2 textColor'
											>
												<ListItemText
													primary='Category'
													secondary={
														<Typography
															sx={{ display: 'inline' }}
															component='span'
														>
															{getCurrentProfile.profile.dir.mainEntry}
														</Typography>
													}
												/>
											</ListItem>
										)}
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										{getCurrentProfile.profile.dir.subEntry && (
											<ListItem
												alignItems='flex-start'
												className='p-2 textColor'
											>
												<ListItemText
													primary='Sub Category'
													secondary={
														<Typography
															sx={{ display: 'inline' }}
															component='span'
														>
															{getCurrentProfile.profile.dir.subEntry}
														</Typography>
													}
												/>
											</ListItem>
										)}
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
														{getCurrentProfile.profile.bio.rank}
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
													>
														{getCurrentProfile.profile.bio.phoneNumber}
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
													>
														{getCurrentProfile.profile.bio.gender}
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
														{getCurrentProfile.profile.bio.desc}
													</Typography>
												}
											/>
										</ListItem>
									</Card>
								</Container>

								{getCurrentProfile.profile.bio.qualification && (
									<Container maxWidth={'md'} className=' m-2'>
										<Typography
											className='p-2 textColor'
											style={{
												color: 'rgb(0, 30, 60)',
											}}
											component='span'
										>
											Qualifications
										</Typography>
										<Paper
											elevation={3}
											style={{
												background: 'rgb(0, 30, 60)',
												border: '1px solid rgb(15, 80, 133)',
												padding: '5px',
											}}
										>
											{getCurrentProfile.profile.bio.qualification.map((item, idx) => (
												<Chip
													label={item}
													key={idx}
													style={{ margin: ' 0 10px' }}
												/>
											))}
										</Paper>
									</Container>
								)}

								{getCurrentProfile.profile.bio.research && (
									<Container maxWidth={'md'} className=' m-2'>
										<Typography
											style={{
												color: 'rgb(0, 30, 60)',
											}}
											component='span'
										>
											Areas of Specialization
										</Typography>
										<Paper
											elevation={3}
											style={{
												background: 'rgb(0, 30, 60)',
												border: '1px solid rgb(15, 80, 133)',
												padding: '5px',
											}}
										>
											{getCurrentProfile.profile.bio.research.map((item, idx) => (
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
					</>
				)}

				{isError && isError.status === 403 && (
					<Dialog
						fullScreen={fullScreen}
						open={error}
						style={{ color: '#333' }}
					>
						<DialogTitle>{`Your access is ${isError.statusText}`}</DialogTitle>
						<DialogContent>
							<DialogContentText>{`${isError.data.msg} through the next 24hrs your profile will be activated`}</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button component={'a'} href={'/'}>
								See more profile
							</Button>
						</DialogActions>
					</Dialog>
				)}
				{isError && isError.status === 500 && (
					<Dialog
						fullScreen={fullScreen}
						open={error}
						style={{ color: '#333' }}
					>
						<DialogContent>
							<DialogContentText>{`${isError.statusText} check your connection`}</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button component={'a'} href={'/profile'}>
								Refresh Page
							</Button>
						</DialogActions>
					</Dialog>
				)}
			</Container>
		</>
	);
}
